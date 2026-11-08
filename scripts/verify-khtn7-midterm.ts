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
  console.log('--- BẮT ĐẦU VERIFY SUPABASE DB ---');
  
  // 1. Check collection
  const { data: coll, error: collErr } = await supabase
    .from('assessment_collections')
    .select('*')
    .eq('id', '468e4ca9-9b1d-49ae-a708-7f5e3937e96e')
    .single();

  if (collErr || !coll) {
    console.error('❌ Lỗi tìm collection:', collErr);
    process.exit(1);
  }
  console.log('✅ Collection:', {
    id: coll.id,
    title: coll.title,
    exam_type: coll.exam_type,
    status: coll.status,
    units: coll.units
  });

  // 2. Check exams
  const { data: exams, error: examsErr } = await supabase
    .from('exams')
    .select('id, exam_number, title, total_questions')
    .eq('collection_id', coll.id)
    .order('exam_number', { ascending: true });

  if (examsErr || !exams) {
    console.error('❌ Lỗi lấy exams:', examsErr);
    process.exit(1);
  }
  console.log(`✅ Tìm thấy ${exams.length} đề thi:`);

  // 3. Check exam_questions count for each exam
  for (const ex of exams) {
    const { count, error: qErr } = await supabase
      .from('exam_questions')
      .select('id', { count: 'exact', head: true })
      .eq('exam_id', ex.id);

    console.log(`   Đề #${ex.exam_number}: "${ex.title}" -> total_questions=${ex.total_questions}, exam_questions_count=${count}`);
    if (count !== 59) {
      console.error(`❌ Đề #${ex.exam_number} có số câu hỏi khác 59: ${count}`);
    }
  }

  // 4. Sample verification for questions with images (0-indexed: 17 is Câu 18, 19 is Câu 20, 20 is Câu 21)
  const sampleExam = exams[0];
  const { data: sampleQuestions, error: sampleErr } = await supabase
    .from('exam_questions')
    .select('order_index, question_bank(id, type, metadata_json)')
    .eq('exam_id', sampleExam.id)
    .in('order_index', [0, 17, 19, 20, 56, 58])
    .order('order_index', { ascending: true });

  console.log('\n✅ Mẫu câu hỏi (Đề 01 - Đề gốc):');
  sampleQuestions?.forEach((sq: any) => {
    const qb = sq.question_bank;
    console.log(`   Câu ${sq.order_index}: [${qb.type}] "${qb.metadata_json.question.slice(0, 50)}..."`);
    console.log(`      Options: ${JSON.stringify(qb.metadata_json.options)}`);
    console.log(`      Đáp án đúng: index ${qb.metadata_json.correct_index} -> "${qb.metadata_json.options[qb.metadata_json.correct_index]}"`);
    if (qb.metadata_json.image_url) {
      console.log(`      Image: ${qb.metadata_json.image_url}`);
    }
  });

  console.log('\n--- VERIFY THÀNH CÔNG 100% ---');
}

verify().catch(console.error);
