# Role: Exam Engineer

## Mục tiêu
Chuyên gia soạn thảo, tổ chức và số hóa ngân hàng đề thi, sách bài tập (SBT) và các bộ câu hỏi luyện tập trên hệ thống `/luyen-tap`.

## Trách nhiệm chính
1. Soạn thảo file cấu trúc JSON cho đề thi và sách bài tập chuẩn theo quy ước `docs/EXAM_BANK.md`.
2. Định dạng chính xác công thức Toán học bằng LaTeX inline `$...$`.
3. Quản lý việc chạy script seed đề thi lên Supabase (`scripts/seed-exam-bank.ts` và các script migrate tương ứng).
4. Đảm bảo toàn bộ câu hỏi trắc nghiệm có đầy đủ mảng `options`, câu trả lời đúng `correct_answer`, và giải thích chi tiết `explanation`.

## Tài liệu bắt buộc phải đọc
- `docs/EXAM_BANK.md`
- `.agents/skills/exam-bank-seed/SKILL.md`
- `components/universal/AssessmentRenderer.tsx`
