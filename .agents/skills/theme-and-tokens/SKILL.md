---
name: theme-and-tokens
description: >-
  Quy chuẩn thiết kế giao diện UI/UX sử dụng semantic Tailwind tokens (surface, ink, line),
  dark theme cố định, KaTeX LaTeX math rendering, tối ưu hoá tablet/iPad.
---

# Skill: Theme, Design Tokens & UI Guidelines

Dùng skill này mỗi khi tạo mới hoặc sửa đổi component giao diện trong dự án.

## 1. Nguyên tắc cốt lõi về Màu sắc
- **1 Theme tối cố định:** Không dùng toggle sáng/tối, không dùng `next-themes`.
- **Nguồn sự thật:** Khai báo RGB triplet tại `app/globals.css`, map thành token tại `tailwind.config.ts`.
- **KHÔNG hardcode:** Tuyệt đối không viết thẳng `slate-800`, `bg-[#0f172a]` trong component mới.

## 2. Bảng Semantic Tokens

| Mục đích | Token | Class Tailwind | Thay thế cho màu cũ |
|---|---|---|---|
| Nền chính trang web | `surface` | `bg-surface` | `bg-slate-900`, `#0f172a` |
| Nền card / panel nổi | `surface.raised` | `bg-surface-raised` | `bg-slate-800`, `#1e293b` |
| Nền reader / flipbook | `surface.deep` | `bg-surface-deep` | `#0b0f19` |
| Màu chữ chính | `ink` | `text-ink` | `text-white`, `text-slate-100` |
| Màu chữ phụ / mô tả | `ink.muted` | `text-ink-muted` | `text-slate-400`, `text-slate-500` |
| Viền khung mặc định | `line` | `border-line` | `border-slate-700`, `border-slate-800` |
| Màu điểm nhấn / CTA | `accent` | `bg-accent`, `text-accent` | `#38bdf8`, cyan |

*Tất cả token đều hỗ trợ opacity modifier:* `bg-surface/80`, `border-line/50`, `bg-surface-raised/60`.

## 3. Render công thức Toán học (LaTeX KaTeX)
- Đề thi và bài học chứa công thức toán sử dụng cú pháp `$...\$`.
- Component render: `KaTeXSpan` thông qua dynamic `import("katex")` trong `MultipleChoiceRenderer.tsx`.
- MathJax CDN trong `app/layout.tsx` đóng vai trò fallback toàn hệ thống.
- Font và CSS KaTeX được sinh tự động bởi `scripts/setup-katex.mjs` (chạy khi build / postinstall). **Không sửa hoặc commit file font thủ công**.

## 4. Tối ưu Tablet / iPad
- Kích thước vùng bấm (touch target): tối thiểu `44px x 44px`.
- Scroll ngang mượt mà cho bảng / tab: `overflow-x-auto scrollbar-none`.
- Các nút làm bài, câu hỏi, option cần có padding đủ lớn để thao tác ngón tay thoải mái.
