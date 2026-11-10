import * as fs from 'fs';
import * as path from 'path';
import { exam1, exam2 } from './unit1-p1';
import { exam3, exam4 } from './unit1-p2';
import { exam5, exam6 } from './unit1-p3';
import { exam7, exam8 } from './unit1-p4';
import { exam9, exam10 } from './unit2-p1';
import { exam11, exam12 } from './unit2-p2';
import { exam13 } from './unit2-p3';

const collection = {
  title: 'Vở Bài tập Bổ trợ & Nâng cao Tiếng Anh 7 - Global Success (Unit 1 & Unit 2)',
  subject_slug: 'tieng-anh-7',
  grade: 7,
  volume: 1,
  units: [1, 2],
  sequence_number: 4,
  exam_type: 'review',
  reference_book: 'Bài tập Tiếng Anh 7 (Global Success) - Lưu Hoằng Trí',
  status: 'published'
};

const exams = [
  exam1,
  exam2,
  exam3,
  exam4,
  exam5,
  exam6,
  exam7,
  exam8,
  exam9,
  exam10,
  exam11,
  exam12,
  exam13
];

const totalQuestions = exams.reduce((acc, e) => acc + e.questions.length, 0);

console.log(`📦 Tổng hợp: ${exams.length} đề thi, ${totalQuestions} câu hỏi.`);
exams.forEach(e => {
  console.log(`  - Đề ${e.exam_number}: ${e.title} (${e.questions.length} câu)`);
});

const outDir = path.resolve('content/exam-bank/tieng-anh');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'tienganh7-sach-on-tap-hk1.json');
fs.writeFileSync(outFile, JSON.stringify({ collection, exams }, null, 2), 'utf8');

console.log(`✅ Đã xuất file JSON thành công: ${outFile}`);
