# AIOS (AI Operating System) — edu-platform

> **Kiến trúc Hệ điều hành Agent (AIOS)** định hình toàn bộ cơ chế vận hành, phân quyền, quy tắc và bộ kỹ năng chuyên dụng cho các Agent (Antigravity, Claude, Cline, Cursor, Subagents) hoạt động trong dự án `edu-platform`.

```
=============================================================================
                            AIOS ARCHITECTURE
=============================================================================
   [ USER INTENT & PROMPTS ]
              │
              ▼
   ┌────────────────────────────────────────────────────────────────────────┐
   │ 1. KERNEL & POLICIES (.agents/AGENTS.md)                               │
   │    - Rule 1-2: Context-first (docs/CONTEXT.md) & Document Communication│
   │    - Rule 3 & 7: Exam Bank & SBT DB-First Principle                   │
   │    - Rule 8: Multi-machine Sync Safety (Linux + Windows)               │
   │    - Rule 24: Direct Database MCP / Script Verification (No Guesswork) │
   │    - Rule 25: Strict On-Demand Push Policy (Push chỉ khi user ra lệnh) │
   └───────────────────────────────────┬────────────────────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│ 2. AGENT ROLES   │         │ 3. SKILLS        │         │ 4. MEMORY & DOCS │
│ (.agents/roles/) │         │(.agents/skills/) │         │ (docs/)          │
├──────────────────┤         ├──────────────────┤         ├──────────────────┤
│• Curriculum-     │         │• exam-bank-seed  │         │• docs/CONTEXT.md │
│  Architect       │         │• curriculum-     │         │• docs/EXAM_BANK.md
│• Exam-Engineer   │         │  pipeline        │         │• docs/THEME.md   │
│• UI-Theme-       │         │• theme-and-tokens│         │• docs/luyen-tap/ │
│  Specialist      │         │• db-audit-verify │         │• lib/curriculum/ │
│• QA-DB-Auditor   │         │• git-multi-      │         │                  │
│                  │         │  machine         │         │                  │
└──────────────────┘         └──────────────────┘         └──────────────────┘
                                       │
                                       ▼
                     [ RUNTIME EXECUTION & VERIFICATION ]
              Next.js 15 App Router | Supabase PostgreSQL | Vercel
=============================================================================
```

---

## 1. Cấu trúc thư mục AIOS

```text
.agents/
├── AIOS.md                  # Bản thiết kế tổng thể hệ điều hành Agent
├── AGENTS.md                # 25 Quy tắc cốt lõi (Core Kernel Rules)
├── mcp_config.json          # Cấu hình kết nối MCP Servers (Supabase, Postgres...)
├── roles/                   # Định nghĩa vai trò chuyên trách của Subagents
│   ├── curriculum-architect.md
│   ├── exam-engineer.md
│   ├── ui-theme-specialist.md
│   └── qa-db-auditor.md
└── skills/                  # Bộ kỹ năng chuẩn hóa (Progressive Disclosure)
    ├── exam-bank-seed/SKILL.md
    ├── curriculum-pipeline/SKILL.md
    ├── theme-and-tokens/SKILL.md
    ├── db-audit-verify/SKILL.md
    └── git-multi-machine/SKILL.md
```

---

## 2. Các tầng hoạt động (Operational Layers)

### Tầng 1: Kernel & Security (Bảo mật & Quy tắc)
- **Luật bất biến #25 (Git Push Policy):** Tuyệt đối KHÔNG tự ý `git push`. Chỉ push khi người dùng ra lệnh bằng lời rõ ràng trong chính lượt chat. Quyền push là một lần duy nhất (one-time permit).
- **Luật bất biến #24 (Database Self-Testing):** Không đoán mò dữ liệu. Mọi thay đổi dữ liệu phải được query trực tiếp vào Supabase kiểm tra kết quả thực tế.
- **Luật bất biến #3 (DB-First for Exam Bank):** Đề thi / bài tập chỉ tồn tại khi đã seed lên Supabase (`assessment_collections`, `exams`, `question_bank`, `exam_questions`). File JSON chỉ là bản nháp đối chiếu.
- **Luật bất biến #8 (Multi-machine Safety):** Đầu mỗi phiên làm việc, BẮT BUỘC chạy `git fetch origin && git status -sb` để phát hiện phân kỳ giữa Linux và Windows.

### Tầng 2: Roles & Daemons (Vai trò chuyên trách)
Khi cần giải quyết một bài toán phức tạp, phân chia công việc theo vai trò:
- **Curriculum Architect:** Chịu trách nhiệm về cây bài học, lộ trình môn học, map video VietJack / bài giảng cô giáo, tạo dữ liệu `curriculum_nodes`.
- **Exam Engineer:** Chịu trách nhiệm về ngân hàng đề, câu hỏi trắc nghiệm/tự luận, LaTeX KaTeX `$..$`, bulk insert Supabase.
- **UI & Theme Specialist:** Chịu trách nhiệm về giao diện Tailwind token (`surface`, `ink`, `line`), tối ưu hoá iPad/tablet, Dark Theme cố định, xử lý hydration SSR.
- **QA & Database Auditor:** Chịu trách nhiệm kiểm tra schema, migrations, RLS, tính toàn vẹn dữ liệu và verify sau mỗi lần seed.

### Tầng 3: Skills (Kỹ năng thi hành)
Các kỹ năng trong `.agents/skills/` cung cấp quy trình từng bước (SOP) giúp Agent xử lý công việc chuẩn xác, không bị sót lỗi:
- `exam-bank-seed`: Chuẩn hóa JSON đề thi, chạy script seed, verify câu hỏi trong DB.
- `curriculum-pipeline`: Xây dựng cấu trúc Tập 1, Tập 2 môn học, đồng bộ `curriculum_nodes`.
- `theme-and-tokens`: Quy chuẩn màu sắc semantic tokens, KaTeX Math rendering, không hardcode slate.
- `db-audit-verify`: Script kiểm tra CSDL Supabase, đối chiếu count câu hỏi.
- `git-multi-machine`: Đồng bộ mã nguồn, cấu hình SSH, xử lý xung đột git giữa các máy.

---

## 3. Quy trình làm việc chuẩn (Standard Workflow Loop)

Mỗi Agent khi nhận nhiệm vụ mới PHẢI tuân thủ 4 bước:

1. **DISCOVER (Khám phá):**
   - Đọc `docs/CONTEXT.md` và tài liệu module liên quan (`docs/EXAM_BANK.md`, `docs/THEME.md`...).
   - Chạy `git fetch origin && git status -sb` để kiểm tra độ sạch của nhánh.
2. **EXECUTE (Thực thi):**
   - Áp dụng Skill tương ứng trong `.agents/skills/`.
   - Viết mã sạch, tuân thủ TypeScript strictly typed, Tailwind semantic tokens, KaTeX formula formatting.
3. **VERIFY (Kiểm chứng):**
   - Chạy script kiểm tra DB thực tế (Supabase query) nếu có thay đổi dữ liệu.
   - Chạy `npx tsc --noEmit` hoặc test render nếu có sửa đổi component.
4. **DOCUMENT & REPORT (Báo cáo):**
   - Ghi chú lại thay đổi vào `docs/` nếu có quyết định kiến trúc mới.
   - Báo cáo kết quả ngắn gọn, rõ ràng cho người dùng kèm link file cụ thể.
