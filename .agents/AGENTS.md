# Project-Scoped Rules cho edu-platform (AIOS Core Kernel)

> **Tài liệu tham khảo hệ điều hành Agent:** Xem [.agents/AIOS.md](file:///d:/Backups/Projects/edu-platform/.agents/AIOS.md)
> Quy tắc dưới đây là **BẮT BUỘC** đối với tất cả Agent (Antigravity, Subagents, Claude, Cline, Cursor, Roo) làm việc trong workspace này.

---

## 1. ĐỌC NGỮ CẢNH TRƯỚC TIÊN (Context-First)
- Trước khi tạo code mới, tái cấu trúc hoặc phân tích hệ thống, bạn **BẮT BUỘC** phải đọc và hiểu file [`docs/CONTEXT.md`](file:///d:/Backups/Projects/edu-platform/docs/CONTEXT.md).
- File này chứa thiết kế kiến trúc cốt lõi, sự phân chia 6 module, và các luật cứng của dự án.
- Nếu bạn tạo Sub-agent, hãy cung cấp cho sub-agent lệnh đọc file `docs/CONTEXT.md` ngay trong prompt khởi tạo.

## 2. GIAO TIẾP QUA TÀI LIỆU (Document Communication)
- Nếu đưa ra quyết định kiến trúc quan trọng, bạn **BẮT BUỘC** ghi chép lại vào thư mục `docs/`.
- Đảm bảo tính nhất quán (Consistency) bằng cách bám sát kiến trúc Question-centric và 3 tầng: Content, Attempts, Progress đã định nghĩa.

## 3. EXAM BANK (TẠO ĐỀ THI) — ĐỀ CHỈ "CÓ" KHI ĐÃ SEED LÊN DATABASE
- Trước khi tạo/seed đề hoặc chạy SQL lên `assessment_collections`/`question_bank`, BẮT BUỘC đọc [`docs/EXAM_BANK.md`](file:///d:/Backups/Projects/edu-platform/docs/EXAM_BANK.md) — đặc biệt mục 4 (quy trình chuẩn), mục 4b (nguồn ảnh/PDF), và mục 6 "Bẫy đã biết".
- **`/luyen-tap` luôn đọc từ database, KHÔNG đọc file JSON.** Soạn đề vẫn bắt đầu bằng file JSON (trong `content/exam-bank/` hoặc `content/workbooks/`) — nhưng đó chỉ là bản nháp/đối chiếu, KHÔNG phải đích cuối. Một đề coi là "xong" chỉ khi đã chạy generator/migrate script và verify có thật trong Supabase (đếm `exam_questions`, không chỉ tin `total_questions`).
- **Giữ lại file JSON sau khi seed** — không xoá. Dùng làm bản backup/đối chiếu khi phát hiện lỗi nội dung về sau.
- Tạo đề qua generator `scripts/seed-exam-bank.ts` (ngân hàng câu hỏi chung) hoặc script migrate riêng từng môn (sách bài tập 1-1, xem mục 7.4 EXAM_BANK.md) — KHÔNG ghi DB thủ công.
- **Trigger tự sinh tên đã bị XÓA từ migration `053`.** Mọi script seed PHẢI tự gán `title` rõ ràng, ưu tiên dùng `lib/assessment/buildExamTitle.ts` để nhất quán.
- Ảnh/PDF sách gốc dùng để soạn câu hỏi hoặc hiển thị cho học sinh lấy từ **Google Drive** — không tải về commit vào repo.
- Loại câu hỏi runtime render được: xem `components/universal/AssessmentRenderer.tsx`. Thêm loại mới = thêm renderer + case + cập nhật validator trong generator.
- Nội dung đề phải GỐC (không sao chép sách có bản quyền); với Tiếng Anh 3 chỉ dùng từ trong `docs/TIENGANH3_TAP1_SCOPE.md`. Ngoại lệ: sách bài tập bám sát 1-1 (SBT) được chép nguyên văn đề bài.

## 4. CẢNH BÁO MÔI TRƯỜNG GHI FILE LỚN
- Công cụ ghi đôi khi cắt cụt file > ~11KB (chèn NUL ở cuối). Sau khi sửa file lớn, **LUÔN verify** bằng `tsc --noEmit` hoặc parser; nếu cụt, vá đuôi qua shell hoặc khôi phục từ git.

## 5. PRE A1 STARTER & BULK SEEDING
- Khi tạo câu hỏi liên quan đến phát âm (TTS) cho môn `pre-a1-starter`, sử dụng thuộc tính `audio_text` trong `metadata_json` với kiểu câu hỏi `listening_multiple_choice`.
- Nạp đề thi qua seeder `seed-exam-bank.ts` phải sử dụng cấu trúc Bulk Insert tích hợp sẵn (tự động gom nhóm các câu hỏi thành 1 request và liên kết hàng loạt) để tối ưu hóa hiệu suất và tránh lỗi mạng cloud. Xem `docs/luyen-tap/pre-a1-starter.md`.

## 6. TOÁN & KHOA HỌC — RENDER CÔNG THỨC TOÁN HỌC (LaTeX KaTeX)
- Đề thi môn Toán (và bất kỳ môn nào có công thức) dùng cú pháp `$...$` trong `metadata_json` để đánh dấu LaTeX inline.
- Runtime render qua `KaTeXSpan` (dynamic `import("katex")` trong `useEffect`) trong `MultipleChoiceRenderer.tsx`. MathJax 3 load từ CDN làm fallback tổng thể trong `app/layout.tsx`.
- `transpilePackages: ["katex"]` trong `next.config.ts` là **BẮT BUỘC**.
- CSS + fonts KaTeX được sinh tự động qua `scripts/setup-katex.mjs` (chạy khi `postinstall` và `build`). Hai path này trong `.gitignore` — **KHÔNG commit**, không cần copy tay.
- Xem đầy đủ quy ước LaTeX, ký hiệu hay dùng, và bảng lỗi đã biết tại `docs/EXAM_BANK.md` mục 3b.

## 7. KHTN 7 SBT & ĐỀ LUYỆN TẬP — SEED VÀ SỬ DỤNG DATABASE
- Toàn bộ đề luyện tập, câu hỏi và metadata đều **seed lên database Supabase** (`assessment_collections`, `exams`, `question_bank`, `exam_questions`). Runtime (`/luyen-tap`) chỉ đọc DB.
- **MUST:** Khi thêm hoặc cập nhật bài tập mới, bắt buộc chạy script seed/migrate tương ứng rồi **verify lại trong Supabase** (không chỉ chạy xong là coi như done).
- File JSON nguồn (`content/exam-bank/`, `content/workbooks/`) **vẫn giữ lại** trong repo sau khi seed làm bản nháp và backup/restore. KHÔNG dựng local-JSON-fallback đọc trực tiếp từ `public/`/`content/`.

## 8. NHIỀU MÁY CÙNG LÀM VIỆC TRÊN REPO (Linux + Windows)
- User chạy agent trên ít nhất 2 máy (Linux và Windows) cùng trỏ vào repo GitHub. Công cụ đồng bộ giữa 2 máy chỉ sync **file code**, KHÔNG sync lịch sử Git — mỗi máy có `.git` độc lập.
- **BẮT BUỘC đầu mỗi phiên:** Chạy `git fetch origin && git status -sb` trước khi sửa bất kỳ file nào. Nếu thấy cả `ahead` và `behind` đều khác 0 $\rightarrow$ đây là phân kỳ thật, **DỪNG LẠI** và hỏi user chiến lược merge (không tự ý chọn `-X ours`/`-X theirs`).
- Với việc sửa nhiều file/nhiều bước (refactor, đổi theme...), ưu tiên tạo nhánh riêng thay vì commit thẳng vào `main`.

---

## 24. SUPABASE DATABASE (MCP & SCRIPT SELF-TESTING)
- Agent có quyền kiểm tra trực tiếp Database Supabase thông qua công cụ MCP (`run_postgres_query`) hoặc chạy script query Node/TypeScript với Supabase client service role.
- **MỖI KHI** chạy script seed data, update data hoặc cần debug lỗi logic liên quan dữ liệu, Agent **BẮT BUỘC** phải tự động chạy query thẳng vào Supabase kiểm tra kết quả (cross-check).
- **KHÔNG ĐƯỢC PHÉP ĐOÁN KẾT QUẢ.** Phải query để lấy dữ liệu thực tế làm bằng chứng kiểm chứng.

## 25. GITHUB PUSH POLICY (STRICT ON-DEMAND)
- **Mặc định:** **KHÔNG ĐƯỢC PHÉP** tự động thực hiện các lệnh `git push` lên remote repository dưới bất kỳ hình thức nào.
- **Ngoại lệ:** Chỉ được phép thực hiện `git push` **NẾU VÀ CHỈ NẾU** người dùng yêu cầu rõ ràng bằng lệnh trong chính lượt chat đó (VD: *"hãy commit và push lên github"*).
- Sự cho phép này chỉ có hiệu lực **1 LẦN DUY NHẤT (one-time permit)** cho đúng yêu cầu đó. Sang lượt chat tiếp theo, quyền push lại trở về trạng thái **BỊ CẤM** cho đến khi được nhắc lại bằng lệnh mới.
