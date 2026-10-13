---
name: git-multi-machine
description: >-
  Quy chuẩn an toàn khi làm việc đa máy (Linux + Windows), cấu hình SSH không cần tương tác popup,
  xử lý đồng bộ nhánh và tuân thủ Rule 25 Push Policy.
---

# Skill: Multi-Machine Git Safety & SSH Workflow

Dùng skill này đầu mỗi phiên làm việc, trước khi chuyển giao giữa các máy, hoặc khi chuẩn bị commit và push code.

## 1. Kiểm tra đầu phiên làm việc (BẮT BUỘC - Rule 8)
Trước khi sửa bất kỳ file nào, Agent **BẮT BUỘC** phải chạy:
```powershell
git fetch origin && git status -sb
```
- Nếu `ahead > 0` và `behind > 0`: Đây là **phân kỳ nhánh (diverged)** do 2 máy cùng commit độc lập $\rightarrow$ **DỪNG LẠI NGAY** và hỏi người dùng chiến lược giải quyết (rebase hay merge).
- Nếu `behind > 0` và `ahead == 0`: Chạy `git pull --ff-only` để cập nhật code mới nhất từ máy kia.

## 2. Quy tắc Đẩy code (Rule 25 - Strict On-Demand)
- **Mặc định:** Agent **KHÔNG ĐƯỢC PHÉP** tự ý chạy `git push`.
- **Ngoại lệ duy nhất:** Khi người dùng yêu cầu rõ ràng bằng lời trong chính lượt chat (VD: *"hãy commit và push lên github"*).
- Sự cho phép này chỉ có giá trị **1 LẦN DUY NHẤT** cho đúng yêu cầu đó.

## 3. Cấu hình SSH để đẩy code trong nền không bị treo
- Remote URL của repo phải dùng chuẩn SSH:
  `git@github.com:khoi-data/edu-platform.git`
- Kiểm tra kết nối SSH nhanh:
  ```powershell
  ssh -T git@github.com
  # Kết quả mong đợi: Hi khoi-data! You've successfully authenticated...
  ```
- **Lợi ích:** Tránh việc Git Credential Manager (GCM) trên Windows bật popup hỏi đăng nhập và làm treo tiến trình chạy ngầm của Agent.

## 4. Chuẩn hóa Commit Message (Conventional Commits)
- `feat(curriculum): ...` — Thêm tính năng bài học, video mới.
- `feat(assessment): ...` — Thêm đề thi, ngân hàng câu hỏi.
- `fix(render): ...` — Sửa lỗi giao diện, render KaTeX, responsive.
- `refactor(db): ...` — Tái cấu trúc CSDL hoặc scripts.
- `chore(deps): ...` — Cập nhật dependencies hoặc configs.
