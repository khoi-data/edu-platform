---
name: db-audit-verify
description: >-
  Quy trình tự động audit và verify cơ sở dữ liệu Supabase bằng MCP tool hoặc script TypeScript service role;
  kiểm tra tính toàn vẹn câu hỏi, metadata và RLS.
---

# Skill: Database Audit & Cross-Checking (Rule 24)

Dùng skill này trước và sau mỗi đợt seed dữ liệu hoặc khi cần debug lỗi liên quan đến Supabase.

## 1. Nguyên tắc "Không đoán mò" (Rule 24)
- Tuyệt đối không giả định dữ liệu đã tồn tại hay đúng định dạng dựa trên trí nhớ hoặc file JSON.
- Phải query trực tiếp vào Supabase qua công cụ MCP (`run_postgres_query`) hoặc script TypeScript (dùng service role key) để lấy dữ liệu thực tế làm bằng chứng.

## 2. Các bảng dữ liệu trọng yếu
- `universal_subjects`: Danh mục môn học thống nhất (`toan`, `tieng_viet`, `tieng-anh-7`, `khtn`...).
- `curriculum_nodes`: Cây bài học phân cấp (`course` -> `unit` -> `lesson`).
- `assessment_collections`: Bộ sưu tập đề thi / bài tập.
- `exams`: Đề thi cụ thể thuộc collection.
- `exam_questions`: Liên kết N-N giữa đề thi và câu hỏi trong ngân hàng câu hỏi.
- `question_bank`: Ngân hàng câu hỏi gốc với `metadata_json`, `options`, `correct_answer`.

## 3. Script mẫu kiểm tra tính toàn vẹn

### Kiểm tra số lượng và tính hợp lệ của câu hỏi:
```typescript
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function verifyExam(examId: string) {
  // 1. Đếm câu hỏi liên kết thực tế
  const { count, error } = await supabase
    .from("exam_questions")
    .select("*", { count: "exact", head: true })
    .eq("exam_id", examId);

  console.log(`Số lượng câu hỏi trong exam_questions: ${count}`);

  // 2. Kiểm tra câu hỏi có options bị rỗng không
  const { data: questions } = await supabase
    .from("exam_questions")
    .select("question_id, question_bank(title, options, type)")
    .eq("exam_id", examId)
    .limit(10);

  for (const q of questions || []) {
    const qb = q.question_bank as any;
    if (qb?.type === "multiple_choice" && (!qb.options || qb.options.length === 0)) {
      console.error(`CẢNH BÁO: Câu hỏi ${q.question_id} là trắc nghiệm nhưng options bị rỗng!`);
    }
  }
}
```

## 4. Checklist hoàn thành sau khi Seed
- [ ] Số dòng trong `exam_questions` khớp với số câu bài tập dự kiến.
- [ ] Không có câu trắc nghiệm nào bị thiếu mảng `options`.
- [ ] Các công thức LaTeX hiển thị đúng định dạng `$...$`.
- [ ] Các `subject_slug` chuẩn hóa theo định dạng kebab-case (`toan`, `tieng-anh-7`).
