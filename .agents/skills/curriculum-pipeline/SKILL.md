---
name: curriculum-pipeline
description: >-
  Quy trình xây dựng và cập nhật lộ trình bài học (Curriculum Map) cho Toán, Tiếng Anh, KHTN;
  map video bài giảng VietJack/YouTube; cấu trúc curriculum_nodes theo Tập 1 và Tập 2.
---

# Skill: Curriculum Mapping & Video Pipeline

Dùng skill này khi cần cập nhật bài học mới, liên kết video bài giảng YouTube (VietJack / Giáo viên), hoặc thiết lập các volume (Tập 1 / Tập 2) cho các môn học tại `/learn/[subject]/lop-[grade]`.

## 1. Cấu trúc dữ liệu bài học
Mỗi môn học được định nghĩa trong `lib/curriculum/<mon><lop>-tap<tap>.ts`:
```typescript
export interface BookLesson {
  lesson_number: number;
  lesson_title: string;
  topic_label: string;       // Chủ đề / Chương (Unit)
  volume: 1 | 2;             // Tập 1 hoặc Tập 2
  youtube_video_id?: string; // ID video YouTube chính thức
  video_title?: string;
  video_author?: string;     // VD: Cô Nguyễn Thị Điềm, Thầy Long...
  duration_minutes?: number;
}
```

## 2. Quy trình ánh xạ Video bài giảng
1. **Thu thập nguồn video:** Tìm kiếm danh sách phát (playlist) chính thức của giáo viên / VietJack.
2. **Kiểm tra ID Video:** Đảm bảo `youtube_video_id` là mã 11 ký tự hợp lệ (ví dụ: `dQw4w9WgXcQ`), video cho phép nhúng (embeddable).
3. **Phân chia theo Tập (Volume):**
   - Tập 1: các bài học HK1.
   - Tập 2: các bài học HK2.

## 3. Đồng bộ lên CSDL (`curriculum_nodes`)
1. Sử dụng script seed bài học tổng thể (ví dụ: `scripts/seed_toan3_all_nodes.ts` hoặc script xây dựng tương tự).
2. Tạo cấu trúc phân cấp:
   - `course` (ví dụ: `toan-lop-3`)
   - `unit` (ví dụ: `chu-de-1-bang-nhan-bang-chia`)
   - `lesson` (ví dụ: `bai-1-on-tap-phep-cong-tru`)
3. Kiểm tra trường `metadata`: Chứa `youtube_video_id`, `volume`, `lesson_number`, `duration_minutes`.

## 4. Kiểm thử trên Giao diện (`CurriculumMap.tsx`)
- Mở trang `/learn/<subject>/lop-<grade>` (ví dụ `/learn/toan/lop-3`).
- Kiểm tra tính năng chuyển tab **Tập 1** và **Tập 2**.
- Thử tìm kiếm trên thanh search theo tên bài.
- Thử bấm nút chuyển đổi chế độ xem **Timeline view** và **Grid view**.
- Kiểm tra Hero Banner: Tính năng "Tiếp tục bài học gần nhất" (Resume learning).
