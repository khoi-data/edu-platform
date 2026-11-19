import fitz  # PyMuPDF
import sys
import os

def render_pages(pdf_path, start_page, end_page, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    
    # 1-indexed start and end page
    for p in range(start_page, end_page + 1):
        if p > len(doc) or p < 1:
            continue
        page = doc[p - 1]
        pix = page.get_pixmap(dpi=150)
        out_file = os.path.join(out_dir, f"page_{p}.png")
        pix.save(out_file)
        print(f"Rendered page {p} -> {out_file}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python extract_sbt_pages.py <start_pdf_page> <end_pdf_page> <out_dir>")
        sys.exit(1)
        
    start_p = int(sys.argv[1])
    end_p = int(sys.argv[2])
    out_dir = sys.argv[3]
    
    pdf_path = r"D:\Backups\Projects\edu-platform\content\pdfs\sbt\sbt_toan3_tap2.pdf"
    render_pages(pdf_path, start_p, end_p, out_dir)
