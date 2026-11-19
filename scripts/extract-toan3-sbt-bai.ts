import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { TOAN3_SBT_TAP2_TOC, SbtToan3LessonInfo } from '../lib/curriculum/toan3-sbt-tap2-toc';

const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env: Record<string, string> = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    env[key] = val;
  }
});

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

function cleanControlChars(jsonStr: string): string {
  let inString = false;
  let isEscaped = false;
  let out = '';
  for (let i = 0; i < jsonStr.length; i++) {
    const ch = jsonStr[i];
    if (inString) {
      if (isEscaped) {
        isEscaped = false;
        out += ch;
      } else if (ch === '\\') {
        isEscaped = true;
        out += ch;
      } else if (ch === '"') {
        inString = false;
        out += ch;
      } else if (ch === '\n') {
        out += '\\n';
      } else if (ch === '\r') {
        out += '\\r';
      } else if (ch === '\t') {
        out += '\\t';
      } else if (ch.charCodeAt(0) < 32) {
        // drop illegal control characters
      } else {
        out += ch;
      }
    } else {
      if (ch === '"') {
        inString = true;
      }
      out += ch;
    }
  }
  return out;
}

function sanitizeJson(raw: string): string {
  let text = raw.trim();

  // 1. Strip markdown code fence
  text = text.replace(/^```(?:json)?\s*/i, '');
  text = text.replace(/\s*```\s*$/, '');

  // 2. Extract from first [ or { to last ] or }
  const firstBracket = text.indexOf('[');
  const firstBrace = text.indexOf('{');
  let startIdx = 0;
  if (firstBracket !== -1 && firstBrace !== -1) {
    startIdx = Math.min(firstBracket, firstBrace);
  } else if (firstBracket !== -1) {
    startIdx = firstBracket;
  } else if (firstBrace !== -1) {
    startIdx = firstBrace;
  }

  const lastBracket = text.lastIndexOf(']');
  const lastBrace = text.lastIndexOf('}');
  const endIdx = Math.max(lastBracket, lastBrace);

  if (endIdx > startIdx) {
    text = text.slice(startIdx, endIdx + 1);
  }

  // 3. Escape invalid single backslashes
  text = text.replace(/(?<!\\)\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '\\\\');

  // 4. Clean unescaped control chars inside string literals
  text = cleanControlChars(text);

  return text;
}

const MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-3.6-flash',
  'gemini-flash-lite-latest',
];

async function callWithFallback(imageParts: any[], prompt: string): Promise<string> {
  let lastError: any = null;
  for (const modelName of MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`Calling ${modelName} (attempt ${attempt})...`);
        const model = genAI.getGenerativeModel({
          model: modelName,
          generationConfig: {
            responseMimeType: 'application/json',
          }
        });
        const result = await model.generateContent([...imageParts, prompt]);
        return result.response.text();
      } catch (err: any) {
        console.warn(`Model ${modelName} attempt ${attempt} failed: ${err.message}`);
        lastError = err;
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }
  throw lastError;
}

export async function extractLesson(baiNum: number) {
  const lesson = TOAN3_SBT_TAP2_TOC.find(l => l.bai === baiNum);
  if (!lesson) {
    console.error(`Lesson ${baiNum} not found in TOC.`);
    process.exit(1);
  }

  console.log(`\n========================================`);
  console.log(`Extracting Bài ${lesson.bai}: ${lesson.title}`);
  console.log(`Pages: Book ${lesson.bookPageStart}-${lesson.bookPageEnd} (PDF ${lesson.pdfPageStart}-${lesson.pdfPageEnd})`);
  console.log(`========================================\n`);

  // 1. Render pages
  const outDir = path.resolve('tmp_sbt_inspect');
  execSync(`python scripts/extract_sbt_pages.py ${lesson.pdfPageStart} ${lesson.pdfPageEnd} "${outDir}"`, { stdio: 'inherit' });

  // 2. Prepare images
  const imageParts: Array<{ inlineData: { mimeType: string; data: string } }> = [];
  for (let p = lesson.pdfPageStart; p <= lesson.pdfPageEnd; p++) {
    const imgFile = path.join(outDir, `page_${p}.png`);
    if (fs.existsSync(imgFile)) {
      const data = fs.readFileSync(imgFile).toString('base64');
      imageParts.push({
        inlineData: {
          mimeType: 'image/png',
          data,
        }
      });
    }
  }

  const prompt = `Bạn là chuyên gia sư phạm Toán tiểu học và biên soạn đề thi số hoá.
Dưới đây là các hình ảnh chụp các trang sách bài tập Toán lớp 3 - Tập 2 (Kết nối tri thức với cuộc sống), gồm các Tiết của bài học:
- Bài: ${lesson.bai}
- Tiêu đề: ${lesson.title}
- Chủ đề: ${lesson.topic}

NHIỆM VỤ:
1. Trích xuất 100% ĐẦY ĐỦ VÀ CHÍNH XÁC TẤT CẢ các bài tập có trong các Tiết của bài học này (bám sát 100% SBT, không bỏ sót bài nào, không thay đổi số liệu bài toán).
2. Chuyển đổi mỗi bài tập (hoặc mỗi ý nhỏ a, b, c nếu bài tập dài) thành một câu hỏi tương tác trắc nghiệm khách quan (\`multiple_choice\` hoặc \`fill_blank\`) để học sinh làm trực tiếp trên web tự động chấm điểm.
3. Với dạng trắc nghiệm chọn đáp án: Cung cấp 4 lựa chọn (options) với đúng 1 đáp án chính xác, phân tích các phương án nhiễu hợp lý của học sinh lớp 3.
4. Với công thức toán học, số lớn, phân số hoặc phép tính: Sử dụng ký hiệu LaTeX inline $...$ chuẩn (ví dụ: $1\\;000$, $25 \\times 4 = 100$).
   LƯU Ý CỰC KỲ QUAN TRỌNG: Mọi dấu backslash trong JSON phải escape thành '\\\\': ví dụ '\\\\ldots', '\\\\times', '\\\\;', '\\\\dfrac'.
5. Lời giải (explanation): Giải thích chi tiết, từng bước, bằng giọng điệu khuyến khích, gần gũi, chuẩn mực sư phạm lớp 3.

CẤU TRÚC JSON ĐẦU RA BẮT BUỘC:
[
  {
    "bai": ${lesson.bai},
    "title": "Bài ${lesson.bai}: ${lesson.title}",
    "book_pages": "${lesson.bookPageStart} - ${lesson.bookPageEnd}",
    "topic": "${lesson.topic}",
    "questions": [
      {
        "id": "toan3-sbt-t2-${lesson.bai}-1",
        "tiet": 1,
        "type": "multiple_choice",
        "question": "**Tiết 1 - Bài 1.** ... (đề bài đầy đủ)",
        "options": [
          "Đáp án A",
          "Đáp án B",
          "Đáp án C",
          "Đáp án D"
        ],
        "correct_index": 0,
        "explanation": "Lời giải chi tiết từng bước...",
        "tags": ["toan3", "sbt", "tap-2", "bai-${lesson.bai}"]
      }
    ]
  }
]`;

  console.log(`Sending ${imageParts.length} page images to Gemini...`);
  const rawText = await callWithFallback(imageParts, prompt);

  let parsed: any;
  try {
    const cleaned = sanitizeJson(rawText);
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error('Failed to parse JSON response. Writing raw to tmp_sbt_inspect/raw_error.json');
    fs.writeFileSync('tmp_sbt_inspect/raw_error.json', rawText, 'utf-8');
    throw err;
  }

  const questionsCount = parsed[0]?.questions?.length || 0;
  console.log(`Extracted ${questionsCount} questions for Bài ${lesson.bai}!`);

  const outFilePath = path.join('content', 'workbooks', 'toan3-sbt-tap2', `bai-${lesson.bai}.json`);
  fs.writeFileSync(outFilePath, JSON.stringify(parsed, null, 2), 'utf-8');
  console.log(`Saved to ${outFilePath}`);
  return parsed;
}

if (require.main === module) {
  const arg = process.argv[2];
  if (!arg || Number.isNaN(Number(arg))) {
    console.log('Usage: npx tsx scripts/extract-toan3-sbt-bai.ts <baiNumber>');
    process.exit(1);
  }
  extractLesson(Number(arg)).catch(console.error);
}
