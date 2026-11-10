import * as fs from 'fs';
import * as path from 'path';
import { exam1 } from './exam1';
import { exam2 } from './exam2';
import { exam3 } from './exam3';
import { exam4 } from './exam4';
import { exam5 } from './exam5';

const collection = {
  title: 'Bộ Đề Thi Học Kỳ 1 Tiếng Anh 7 - Global Success (Ma Trận Chuẩn Toàn Diện)',
  subject_slug: 'tieng-anh-7',
  grade: 7,
  volume: 1,
  units: [10],
  sequence_number: 5,
  exam_type: 'final',
  reference_book: 'Đề Kiểm Tra Học Kỳ 1 Tiếng Anh 7 Global Success (Ma Trận Chuẩn Bộ GD&ĐT)',
  status: 'published'
};

const exams = [
  exam1,
  exam2,
  exam3,
  exam4,
  exam5
];

const totalQuestions = exams.reduce((acc, e) => acc + e.questions.length, 0);

console.log(`📦 Tổng hợp Bộ Đề Thi Học Kỳ 1: ${exams.length} đề thi, ${totalQuestions} câu hỏi.`);
exams.forEach(e => {
  console.log(`  - Đề ${e.exam_number}: ${e.title} (${e.questions.length} câu)`);
});

const outDir = path.resolve('content/exam-bank/tieng-anh');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'tienganh7-de-thi-hk1.json');
fs.writeFileSync(outFile, JSON.stringify({ collection, exams }, null, 2), 'utf8');

console.log(`✅ Đã xuất file JSON thành công: ${outFile}`);
