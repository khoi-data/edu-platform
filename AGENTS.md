# edu-platform — AIOS Core Guidelines

> Xem chi tiết kiến trúc AIOS tại [.agents/AIOS.md](file:///d:/Backups/Projects/edu-platform/.agents/AIOS.md)
> Toàn bộ quy tắc cốt lõi đã được chuẩn hóa tại [.agents/AGENTS.md](file:///d:/Backups/Projects/edu-platform/.agents/AGENTS.md)

Tất cả Agent hoạt động trong repository này tuân thủ nghiêm ngặt 3 nguyên tắc nền tảng:
1. **DB-First:** Mọi nội dung bài học, đề thi (`/luyen-tap`, `/learn`) đọc từ Supabase database, không đọc file JSON tĩnh khi runtime.
2. **Strict Verification:** Không đoán mò trạng thái. Mọi thay đổi dữ liệu phải được query thực tế từ Supabase để xác minh.
3. **Strict Git Push Policy:** Chỉ chạy `git push` khi có lệnh trực tiếp từ người dùng trong lượt chat tương ứng.
