---
name: exam-bank-seed
description: >-
  Quy trình chuẩn để soạn thảo, validate, seed đề thi và sách bài tập (SBT) lên Supabase,
  kèm theo các bước kiểm chứng (verify) số lượng câu hỏi và kiểu câu hỏi.
---

# Skill: Exam Bank & SBT Seeding Pipeline

Dùng skill này mỗi khi bạn cần thêm đề thi mới, sách bài tập (SBT) hoặc cập nhật câu hỏi cho `/luyen-tap`.

## 1. Nguyên tắc cốt lõi
- **Runtime đọc từ Database:** Web `/luyen-tap` chỉ đọc từ Supabase. File JSON trong `content/exam-bank/` hoặc `content/workbooks/` là bản nháp/nguồn đối chiếu.
- **Không xoá file JSON:** Luôn giữ lại file JSON trong repo để backup và khôi phục khi cần.
- **Title đề thi:** Trigger tự sinh tên đã bị xoá từ migration `053`. Script seed BẮT BUỘC phải gán `title` rõ ràng (dùng `lib/assessment/buildExamTitle.ts`).

## 2. Các bước thực hiện

### Bước 2.1: Soạn file JSON nội dung
- Vị trí: `content/exam-bank/<mon>/<ten-de>.json` hoặc `content/workbooks/<mon>-<tap>.json`.
- Kiểm tra các loại câu hỏi hợp lệ runtime render được (`components/universal/AssessmentRenderer.tsx`):
  - `multiple_choice`
  - `multiple_choice_multi_select`
  - `fill_blank`
  - `true_false`
  - `matching`
  - `listening_multiple_choice` (cần có `audio_text` trong `metadata_json` cho môn `pre-a1-starter`).

### Bước 2.2: Công thức Toán học (LaTeX)
- Sử dụng cú pháp inline: `$...$` trong câu hỏi hoặc options (ví dụ: `$x^2 + 2x = 0$`).
- Tránh viết `$$...$$` trong inline text vì sẽ bị render thành block riêng.

### Bước 2.3: Thực thi Script Seed
- Sử dụng script seeder tương ứng:
  ```powershell
  npx tsx scripts/seed-exam-bank.ts content/exam-bank/<path-to-json>
  ```
  hoặc với SBT:
  ```powershell
  npx tsx scripts/<script-seeder-mon>.ts
  ```

### Bước 2.4: Kiểm chứng trực tiếp trên Supabase (BẮT BUỘC - Rule 24)
Chạy script kiểm tra để xác nhận câu hỏi đã vào DB thật sự:
```typescript
// Ví dụ kiểm tra số lượng câu hỏi thực tế trong exam_questions
const { count } = await supabase
  .from('exam_questions')
  .select('*', { count: 'exact', head: true })
  .eq('exam_id', examId);
console.log(`Số câu hỏi thực tế: ${count}`);
```
- Không chỉ tin field `total_questions` của collection; phải đếm số dòng trong `exam_questions`.
- Kiểm tra ngẫu nhiên 2-3 câu hỏi xem trường `options` có bị rỗng không (tránh lỗi bug mất options).
