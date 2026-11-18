# Luyện tập — Toán - Khoa (English for Math & Science) Lớp 3

> Đọc `docs/exam_bank.md` trước (quy tắc chung: schema DB, quy trình seed, luật cứng) — file này ghi nhận kiến trúc và dữ liệu của môn mới **Toán - Khoa**.

## 1. Thông tin nhận diện trong DB

- `universal_subjects`:
  - `slug`: `toan-khoa`
  - `name_vi`: `Toán - Khoa`
  - `name_en`: `English for Math & Science`
  - `description`: `Toán và Khoa học bằng Tiếng Anh lớp 3 (VinaLearn English for Math & Science)`
  - `icon`: `🔬`
- `grade`: `3`
- `volume`: `1` (Học kỳ 1)
- Giáo trình / Nguồn gốc đề: **VinaLearn - English for Math & Science Grade 3 (Review for Semester Test 1)**.

## 2. Cấu trúc 2 Bộ Đề (Collections)

Hệ thống phân tách thành 2 collection độc lập thuộc môn `toan-khoa`:

### A. English for Math (Unit 1)
- `collection_id`: `69d3813b-ff2b-4cda-b7cb-4f45078d0632`
- `title`: `English for Math`
- `units`: `[1]`
- `sequence_number`: `1`
- `exam_type`: `lesson`
- File JSON nguồn: `content/exam-bank/toan-khoa/toan-khoa-math.json`
- **5 Đề luyện tập:**
  1. `English for Math - Review for Semester Test 1 (Đề mẫu VinaLearn)` (11 câu)
  2. `English for Math - Multiplication & Division Expressions (Đề số 02)` (10 câu)
  3. `English for Math - Division with Remainders & Word Problems (Đề số 03)` (9 câu)
  4. `English for Math - Values of Expressions & Word Practice (Đề số 04)` (8 câu)
  5. `English for Math - Semester 1 Comprehensive Review (Đề số 05)` (8 câu)

### B. English for Science (Unit 2)
- `collection_id`: `99c000d2-afe5-4eba-bebb-a3ef1c69d43d`
- `title`: `English for Science`
- `units`: `[2]`
- `sequence_number`: `2`
- `exam_type`: `lesson`
- File JSON nguồn: `content/exam-bank/toan-khoa/toan-khoa-science.json`
- **5 Đề luyện tập:**
  1. `English for Science - Review for Semester Test 1 (Đề mẫu VinaLearn)` (16 câu)
  2. `English for Science - How Plants Work & Plant Life Cycle (Đề số 02)` (7 câu)
  3. `English for Science - Animal Movements & Adaptations (Đề số 03)` (6 câu)
  4. `English for Science - Animal Coverings & Protection (Đề số 04)` (5 câu)
  5. `English for Science - Benefits from Nature & Living Things (Đề số 05)` (5 câu)

## 3. Các dạng câu hỏi (Question Types)

1. **Multiple Choice (`multiple_choice`):** Đọc phép tính tiếng Anh, câu hỏi chức năng sinh học, câu hỏi Đúng/Sai (`✓ (Đúng)` / `✗ (Sai)`).
2. **Fill in the Blank (`fill_blank`):** Điền từ ngữ vựng toán học (`total`, `each`, `left over`, `remainder`) hoặc đặc điểm động vật (`feathers`, `shell`, `fur`, `scales`).
3. **Matching Pairs (`matching`):** Nối phép tính với cách đọc hoặc nối bộ phận cây / động vật với chức năng.
4. **Sentence Reordering (`sentence_reorder`):** Sắp xếp từ ngữ mô tả phép chia có dư (`Seven divided by two equals three with a remainder of one.`) và số lượng còn thừa.

## 4. Kiểm chứng Supabase (Rule 24 Cross-check)

Đã xác thực thực tế từ database:
- `assessment_collections`: 2 bản ghi `toan-khoa`.
- `exams`: 10 đề thi đã tạo thành công.
- `exam_questions`: 85 liên kết câu hỏi thực tế trong database (khớp 100% với `total_questions`).
