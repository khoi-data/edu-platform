import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { buildExamTitle } from '../lib/assessment/buildExamTitle';
import { TOAN3_SBT_TAP2_TOC } from '../lib/curriculum/toan3-sbt-tap2-toc';

const envFile = fs.existsSync('.env.local') ? '.env.local' : '.env';
const envConfig = fs.readFileSync(envFile, 'utf-8')
  .split('\n')
  .filter(l => l.includes('='))
  .reduce((acc: any, line) => {
    const [key, ...val] = line.split('=');
    acc[key.trim()] = val.join('=').trim().replace(/^['"]|['"]$/g, '');
    return acc;
  }, {});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || envConfig.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || envConfig.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SUBJECT_SLUG = 'toan';
const GRADE = 3;
const VOLUME = 2;

export async function migrateBai(baiNum: number) {
  console.log(`\n========================================`);
  console.log(`Migrating Toán 3 SBT Tập 2 Bài ${baiNum} to Supabase`);
  console.log(`========================================\n`);

  const filePath = path.join('content', 'workbooks', 'toan3-sbt-tap2', `bai-${baiNum}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return false;
  }

  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const lessonData = Array.isArray(fileData) ? fileData[0] : fileData;
  const questions = lessonData.questions || [];

  if (questions.length === 0) {
    console.error(`No questions found in ${filePath}`);
    return false;
  }

  const lessonInfo = TOAN3_SBT_TAP2_TOC.find(l => l.bai === baiNum);
  const positionTitle = lessonInfo
    ? `Bài ${lessonInfo.bai}: ${lessonInfo.title}`
    : lessonData.title || `Bài ${baiNum}`;

  const examTitle = buildExamTitle({
    subjectLabel: 'Toán 3',
    group: 'sbt',
    position: positionTitle,
  });

  console.log(`Exam Title: "${examTitle}"`);
  console.log(`Total questions to insert: ${questions.length}`);

  // 1. Find or create collection
  const { data: existingCols } = await supabase
    .from('assessment_collections')
    .select('id, title')
    .eq('subject_slug', SUBJECT_SLUG)
    .eq('grade', GRADE)
    .eq('volume', VOLUME)
    .contains('units', [baiNum]);

  let collectionId: string;
  if (existingCols && existingCols.length > 0) {
    collectionId = existingCols[0].id;
    console.log(`Found existing collection: [${collectionId}] "${existingCols[0].title}"`);
    // Update title
    await supabase
      .from('assessment_collections')
      .update({
        title: examTitle,
        status: 'published',
        curriculum: 'ket_noi_tri_thuc',
        exam_type: null,
      })
      .eq('id', collectionId);
  } else {
    const { data: newCol, error: colErr } = await supabase
      .from('assessment_collections')
      .insert({
        title: examTitle,
        subject_slug: SUBJECT_SLUG,
        grade: GRADE,
        volume: VOLUME,
        curriculum: 'ket_noi_tri_thuc',
        exam_type: null,
        status: 'published',
        units: [baiNum],
      })
      .select('id')
      .single();

    if (colErr || !newCol) {
      console.error('Failed to create collection:', colErr);
      return false;
    }
    collectionId = newCol.id;
    console.log(`Created assessment_collection: [${collectionId}]`);
  }

  // 2. Find or create exam
  const { data: existingExams } = await supabase
    .from('exams')
    .select('id, title')
    .eq('collection_id', collectionId);

  let examId: string;
  if (existingExams && existingExams.length > 0) {
    examId = existingExams[0].id;
    console.log(`Found existing exam: [${examId}] "${existingExams[0].title}"`);

    // Clean up existing exam_questions
    const { data: existingEqs } = await supabase
      .from('exam_questions')
      .select('question_bank_id')
      .eq('exam_id', examId);

    if (existingEqs && existingEqs.length > 0) {
      const qbIds = existingEqs.map(e => e.question_bank_id);
      await supabase.from('exam_questions').delete().eq('exam_id', examId);
      // Clean up orphaned questions
      await supabase.from('question_bank').delete().in('id', qbIds);
      console.log(`Cleaned up ${qbIds.length} previous question_bank items.`);
    }

    await supabase
      .from('exams')
      .update({
        title: examTitle,
        total_questions: questions.length,
      })
      .eq('id', examId);
  } else {
    const { data: newExam, error: exErr } = await supabase
      .from('exams')
      .insert({
        collection_id: collectionId,
        exam_number: 1,
        title: examTitle,
        total_questions: questions.length,
      })
      .select('id')
      .single();

    if (exErr || !newExam) {
      console.error('Failed to create exam:', exErr);
      return false;
    }
    examId = newExam.id;
    console.log(`Created exam: [${examId}]`);
  }

  // 3. Insert question_bank rows
  const qbRows = questions.map((q: any) => {
    return {
      type: q.type || 'multiple_choice',
      difficulty: 1.0,
      source: 'handcrafted',
      grade: GRADE,
      subject_slug: SUBJECT_SLUG,
      metadata_json: {
        question: q.question,
        options: q.options,
        correct_index: q.correct_index,
        correct_answer: q.correct_answer,
        choices: q.choices,
        explanation: q.explanation,
        hint: q.hint,
        exercise_id: q.id,
        tiet: q.tiet,
        tags: q.tags || ['toan3', 'sbt', 'tap-2', `bai-${baiNum}`],
      },
    };
  });

  // Batch insert into question_bank in chunks of 50
  const insertedQbIds: string[] = [];
  const CHUNK_SIZE = 50;
  for (let i = 0; i < qbRows.length; i += CHUNK_SIZE) {
    const chunk = qbRows.slice(i, i + CHUNK_SIZE);
    const { data: inserted, error: qbErr } = await supabase
      .from('question_bank')
      .insert(chunk)
      .select('id');

    if (qbErr || !inserted) {
      console.error('Failed to insert question_bank rows:', qbErr);
      return false;
    }
    insertedQbIds.push(...inserted.map(r => r.id));
  }
  console.log(`Inserted ${insertedQbIds.length} question_bank items.`);

  // 4. Link into exam_questions
  const eqRows = insertedQbIds.map((qbId, idx) => ({
    exam_id: examId,
    question_bank_id: qbId,
    order_index: idx,
    points: 1,
  }));

  for (let i = 0; i < eqRows.length; i += CHUNK_SIZE) {
    const chunk = eqRows.slice(i, i + CHUNK_SIZE);
    const { error: eqErr } = await supabase.from('exam_questions').insert(chunk);
    if (eqErr) {
      console.error('Failed to insert exam_questions:', eqErr);
      return false;
    }
  }
  console.log(`Linked ${eqRows.length} exam_questions.`);

  // 5. Cross-check verification (Rule 24)
  const { count: actualEqCount } = await supabase
    .from('exam_questions')
    .select('id', { count: 'exact', head: true })
    .eq('exam_id', examId);

  console.log(`✅ VERIFIED: exam_questions actual count in DB = ${actualEqCount}`);
  console.log(`Test URL: /test-assessment?examId=${examId}\n`);
  return true;
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.log('Usage: npx tsx scripts/migrate-toan3-sbt-to-db.ts <baiNumber|--all>');
    process.exit(1);
  }

  if (arg === '--all') {
    console.log('Migrating all available Bài in content/workbooks/toan3-sbt-tap2/');
    const files = fs.readdirSync(path.join('content', 'workbooks', 'toan3-sbt-tap2'))
      .filter(f => f.startsWith('bai-') && f.endsWith('.json'))
      .sort((a, b) => {
        const numA = parseInt(a.replace('bai-', '').replace('.json', ''), 10);
        const numB = parseInt(b.replace('bai-', '').replace('.json', ''), 10);
        return numA - numB;
      });

    for (const f of files) {
      const num = parseInt(f.replace('bai-', '').replace('.json', ''), 10);
      await migrateBai(num);
    }
  } else {
    const num = Number(arg);
    if (Number.isNaN(num)) {
      console.error('Invalid bai number:', arg);
      process.exit(1);
    }
    await migrateBai(num);
  }
}

if (require.main === module) {
  main().catch(console.error);
}
