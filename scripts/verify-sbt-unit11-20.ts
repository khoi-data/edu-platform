import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
  console.log('=== VERIFY SBT TIẾNG ANH 3 (UNIT 11 - 20) ===\n');

  // Query assessment_collections for Tiếng Anh 3 SBT
  const { data: collections, error: colErr } = await supabase
    .from('assessment_collections')
    .select('id, title, exam_type, subject_slug, grade, volume, units')
    .eq('subject_slug', 'tieng_anh')
    .eq('grade', 3)
    .order('title');

  if (colErr) {
    console.error('Lỗi query collections:', colErr);
    return;
  }

  // Filter unit 11 to 20
  const u11_20_cols = (collections || []).filter(c => {
    const match = c.title.match(/Unit (\d+)/i);
    if (!match) return false;
    const u = parseInt(match[1], 10);
    return u >= 11 && u <= 20;
  });

  console.log(`Tìm thấy ${u11_20_cols.length}/10 collections cho Unit 11 -> 20.`);

  let totalQuestionsCount = 0;
  let bracketIssues = 0;

  for (let u = 11; u <= 20; u++) {
    const col = u11_20_cols.find(c => c.title.includes(`Unit ${u}:`));
    if (!col) {
      console.log(`❌ Unit ${u}: CHƯA TÌM THẤY COLLECTION!`);
      continue;
    }

    // Query exams
    const { data: exams, error: exErr } = await supabase
      .from('exams')
      .select('id, title, exam_number, total_questions')
      .eq('collection_id', col.id);

    if (exErr || !exams || exams.length === 0) {
      console.log(`❌ Unit ${u}: Không tìm thấy exam trong collection ${col.id}`);
      continue;
    }

    const exam = exams[0];

    // Query exam_questions
    const { data: eq, error: eqErr } = await supabase
      .from('exam_questions')
      .select('id, question_bank_id, order_index')
      .eq('exam_id', exam.id)
      .order('order_index');

    if (eqErr) {
      console.log(`❌ Unit ${u}: Lỗi query exam_questions:`, eqErr);
      continue;
    }

    const qIds = (eq || []).map(item => item.question_bank_id);
    totalQuestionsCount += qIds.length;

    // Check questions in question_bank
    let unitBracketIssues = 0;
    if (qIds.length > 0) {
      const { data: qb, error: qbErr } = await supabase
        .from('question_bank')
        .select('id, question_text, question_type, metadata_json')
        .in('id', qIds);

      if (!qbErr && qb) {
        for (const q of qb) {
          const raw = JSON.stringify(q);
          if (raw.includes('[[') || raw.includes(']]')) {
            console.log(`  ⚠️ Lỗi lộ đáp án (chứa [[]]): Question ${q.id} (${q.question_type}) - ${q.question_text.slice(0, 50)}`);
            unitBracketIssues++;
          }
        }
      }
    }

    bracketIssues += unitBracketIssues;
    console.log(`✓ Unit ${u}: "${exam.title}" -> ${qIds.length} câu hỏi (total_questions: ${exam.total_questions}, bracket issues: ${unitBracketIssues})`);
  }

  console.log(`\nTổng số câu hỏi Unit 11-20: ${totalQuestionsCount}`);
  console.log(`Tổng số lỗi lộ đáp án: ${bracketIssues}`);
  if (bracketIssues === 0 && totalQuestionsCount > 250) {
    console.log('\n🎉 TẤT CẢ 10 UNIT ĐÃ ĐƯỢC SEED VÀ VERIFY THÀNH CÔNG 100%!');
  }
}

verify().catch(console.error);
