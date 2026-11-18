import * as fs from 'fs';
import * as path from 'path';

// Target directory
const targetDir = path.resolve('content/exam-bank/toan-khoa');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. ENGLISH FOR MATH
// ─────────────────────────────────────────────────────────────────────────────
const mathBank = {
  collection: {
    title: "English for Math",
    subject_slug: "toan-khoa",
    grade: 3,
    volume: 1,
    units: [1],
    sequence_number: 1,
    exam_type: "lesson",
    reference_book: "VinaLearn English for Math & Science 3",
    status: "published"
  },
  exams: [
    {
      exam_number: 1,
      title: "English for Math - Review for Semester Test 1 (Đề mẫu VinaLearn)",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Five multiplied by six equals thirty.",
            options: ["6 × 5 = 30", "5 × 6 = 30", "5 × 7 = 35"],
            correct_index: 1,
            explanation: "Five multiplied by six equals thirty: 5 × 6 = 30.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Thirty divided by three equals ten.",
            options: ["30 ÷ 5 = 6", "30 ÷ 3 = 10", "30 ÷ 10 = 3"],
            correct_index: 1,
            explanation: "Thirty divided by three equals ten: 30 ÷ 3 = 10.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Two multiplied by nine equals eighteen.",
            options: ["2 × 8 = 16", "9 × 2 = 18", "2 × 9 = 18"],
            correct_index: 2,
            explanation: "Two multiplied by nine equals eighteen: 2 × 9 = 18.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Thirty-six divided by nine equals four.",
            options: ["36 ÷ 9 = 4", "28 ÷ 4 = 7", "36 ÷ 4 = 9"],
            correct_index: 0,
            explanation: "Thirty-six divided by nine equals four: 36 ÷ 9 = 4.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Twenty-four divided by six equals four.",
            options: ["24 ÷ 3 = 8", "24 ÷ 4 = 6", "24 ÷ 6 = 4"],
            correct_index: 2,
            explanation: "Twenty-four divided by six equals four: 24 ÷ 6 = 4.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are three bears with five pears each. So there are fifteen pears in _______.",
            options: ["total", "remainder", "difference", "share"],
            choices: ["total", "remainder", "difference", "share"],
            correct_answer: "total",
            explanation: "3 bears × 5 pears each = 15 pears in total (tổng cộng 15 quả lê).",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are six carrots. Two boys can share the carrots equally. _______ boy has three carrots.",
            options: ["Each", "Every", "All", "Total"],
            choices: ["Each", "Every", "All", "Total"],
            correct_answer: "Each",
            explanation: "6 ÷ 2 = 3. Each boy has three carrots (Mỗi bạn có 3 củ cà rốt).",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "matching",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Read and match: Nối biểu thức toán học với cách đọc tiếng Anh tương ứng:",
            question: "Nối biểu thức với cách đọc phù hợp",
            pairs: [
              { left: "(2 + 4) × 5", right: "The sum of two and four times five" },
              { left: "10 ÷ (8 - 7)", right: "Ten divided by the difference between eight and seven" },
              { left: "(9 - 2) ÷ 7", right: "The difference between nine and two divided by seven" },
              { left: "6 × (1 + 5)", right: "Six times the sum of one and five" }
            ],
            explanation: "• (2 + 4) × 5: The sum of two and four times five\n• 10 ÷ (8 - 7): Ten divided by the difference between eight and seven\n• (9 - 2) ÷ 7: The difference between nine and two divided by seven\n• 6 × (1 + 5): Six times the sum of one and five",
            tags: ["math", "expressions", "matching", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Dựa vào phép tính 7 ÷ 2 = 3 r 1, sắp xếp các từ thành câu đúng:",
            question: "Sắp xếp câu diễn đạt phép chia có dư:",
            words: ["Seven", "divided by", "two", "equals", "three", "with a remainder of", "one."],
            correct_sentence: "Seven divided by two equals three with a remainder of one.",
            explanation: "7 ÷ 2 = 3 r 1: Seven divided by two equals three with a remainder of one (7 chia 2 bằng 3 dư 1).",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp lại các từ thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["Each", "student", "has", "three cookies."],
            correct_sentence: "Each student has three cookies.",
            explanation: "Each student has three cookies (Mỗi học sinh có 3 chiếc bánh quy).",
            tags: ["math", "word-problem", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp lại các từ thành câu hoàn chỉnh mô tả phần dư:",
            question: "Sắp xếp câu:",
            words: ["There", "is", "one cookie", "left over."],
            correct_sentence: "There is one cookie left over.",
            explanation: "There is one cookie left over (Còn thừa lại 1 chiếc bánh quy).",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 2,
      title: "English for Math - Multiplication & Division Expressions (Đề số 02)",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Eight multiplied by three equals twenty-four.",
            options: ["8 × 3 = 24", "3 × 7 = 21", "8 × 4 = 32"],
            correct_index: 0,
            explanation: "Eight multiplied by three equals twenty-four: 8 × 3 = 24.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Twelve divided by three equals four.",
            options: ["12 ÷ 4 = 3", "12 ÷ 3 = 4", "15 ÷ 3 = 5"],
            correct_index: 1,
            explanation: "Twelve divided by three equals four: 12 ÷ 3 = 4.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Seven multiplied by five equals thirty-five.",
            options: ["7 × 6 = 42", "5 × 8 = 40", "7 × 5 = 35"],
            correct_index: 2,
            explanation: "Seven multiplied by five equals thirty-five: 7 × 5 = 35.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Forty-five divided by nine equals five.",
            options: ["45 ÷ 9 = 5", "45 ÷ 5 = 9", "36 ÷ 9 = 4"],
            correct_index: 0,
            explanation: "Forty-five divided by nine equals five: 45 ÷ 9 = 5.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are four boxes with six pens each. How many pens are there in total? There are twenty-four pens in _______.",
            options: ["total", "difference", "remainder", "equal"],
            choices: ["total", "difference", "remainder", "equal"],
            correct_answer: "total",
            explanation: "4 × 6 = 24 pens in total.",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "Three girls share nine candies equally. _______ girl has three candies.",
            options: ["Each", "Total", "All", "Both"],
            choices: ["Each", "Total", "All", "Both"],
            correct_answer: "Each",
            explanation: "9 ÷ 3 = 3 candies for each girl.",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "matching",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Read and match: Nối biểu thức toán học với cách đọc tiếng Anh tương ứng:",
            question: "Nối biểu thức với cách đọc phù hợp",
            pairs: [
              { left: "(3 + 5) × 4", right: "The sum of three and five times four" },
              { left: "16 ÷ (6 - 2)", right: "Sixteen divided by the difference between six and two" },
              { left: "(8 - 2) ÷ 3", right: "The difference between eight and two divided by three" },
              { left: "5 × (2 + 4)", right: "Five times the sum of two and four" }
            ],
            explanation: "• (3 + 5) × 4: The sum of three and five times four\n• 16 ÷ (6 - 2): Sixteen divided by the difference between six and two\n• (8 - 2) ÷ 3: The difference between eight and two divided by three\n• 5 × (2 + 4): Five times the sum of two and four",
            tags: ["math", "expressions", "matching", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Dựa vào phép tính 11 ÷ 3 = 3 r 2, sắp xếp các từ thành câu đúng:",
            question: "Sắp xếp câu:",
            words: ["Eleven", "divided by", "three", "equals", "three", "with a remainder of", "two."],
            correct_sentence: "Eleven divided by three equals three with a remainder of two.",
            explanation: "11 ÷ 3 = 3 r 2: Eleven divided by three equals three with a remainder of two.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp lại các từ thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["There", "are", "two pencils", "left over."],
            correct_sentence: "There are two pencils left over.",
            explanation: "There are two pencils left over.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.2,
          metadata_json: {
            question: "What is the value of the expression: Two times the sum of one and three?",
            options: ["6", "8", "10", "4"],
            correct_index: 1,
            explanation: "The sum of one and three is 1 + 3 = 4. Two times four is 2 × 4 = 8.",
            tags: ["math", "expressions", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 3,
      title: "English for Math - Division with Remainders & Word Problems (Đề số 03)",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Twelve divided by seven equals one with a remainder of five.",
            options: ["12 ÷ 7 = 1 r 5", "12 ÷ 5 = 2 r 2", "14 ÷ 7 = 2"],
            correct_index: 0,
            explanation: "12 ÷ 7 = 1 r 5: Twelve divided by seven equals one with a remainder of five.",
            tags: ["math", "remainders", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Nineteen divided by four equals four with a remainder of three.",
            options: ["19 ÷ 4 = 4 r 3", "19 ÷ 3 = 6 r 1", "16 ÷ 4 = 4"],
            correct_index: 0,
            explanation: "19 ÷ 4 = 4 r 3: Nineteen divided by four equals four with a remainder of three.",
            tags: ["math", "remainders", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Nine multiplied by four equals thirty-six.",
            options: ["9 × 3 = 27", "9 × 4 = 36", "4 × 8 = 32"],
            correct_index: 1,
            explanation: "Nine multiplied by four equals thirty-six: 9 × 4 = 36.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are 15 apples shared equally among 4 children. Each child gets 3 apples and there are 3 apples _______.",
            options: ["left over", "in total", "in sum", "multiplied"],
            choices: ["left over", "in total", "in sum", "multiplied"],
            correct_answer: "left over",
            explanation: "15 = 4 × 3 + 3. Three apples left over (còn thừa 3 quả táo).",
            tags: ["math", "remainders", "word-problem", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are five plates with four cakes each. There are twenty cakes in _______.",
            options: ["total", "remainder", "equal", "difference"],
            choices: ["total", "remainder", "equal", "difference"],
            correct_answer: "total",
            explanation: "5 × 4 = 20 cakes in total.",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "matching",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Read and match: Nối phép tính với kết quả hoặc mô tả tiếng Anh tương ứng:",
            question: "Nối phép tính với cách đọc phù hợp",
            pairs: [
              { left: "14 ÷ 3", right: "Four with a remainder of two" },
              { left: "21 ÷ 5", right: "Four with a remainder of one" },
              { left: "27 ÷ 6", right: "Four with a remainder of three" },
              { left: "19 ÷ 2", right: "Nine with a remainder of one" }
            ],
            explanation: "• 14 ÷ 3 = 4 r 2\n• 21 ÷ 5 = 4 r 1\n• 27 ÷ 6 = 4 r 3\n• 19 ÷ 2 = 9 r 1",
            tags: ["math", "remainders", "matching", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Dựa vào phép tính 15 ÷ 4 = 3 r 3, sắp xếp thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["Fifteen", "divided by", "four", "equals", "three", "with a remainder of", "three."],
            correct_sentence: "Fifteen divided by four equals three with a remainder of three.",
            explanation: "15 ÷ 4 = 3 r 3: Fifteen divided by four equals three with a remainder of three.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp các từ thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["There", "are", "three apples", "left over."],
            correct_sentence: "There are three apples left over.",
            explanation: "There are three apples left over.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.3,
          metadata_json: {
            question: "What is the value of the expression: The difference between ten and two divided by four?",
            options: ["1", "2", "3", "4"],
            correct_index: 1,
            explanation: "The difference between ten and two is 10 - 2 = 8. Eight divided by four is 8 ÷ 4 = 2.",
            tags: ["math", "expressions", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 4,
      title: "English for Math - Values of Expressions & Word Practice (Đề số 04)",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Six multiplied by seven equals forty-two.",
            options: ["6 × 6 = 36", "6 × 7 = 42", "7 × 7 = 49"],
            correct_index: 1,
            explanation: "6 × 7 = 42.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Fifty-six divided by eight equals seven.",
            options: ["56 ÷ 8 = 7", "56 ÷ 7 = 8", "48 ÷ 8 = 6"],
            correct_index: 0,
            explanation: "56 ÷ 8 = 7.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.2,
          metadata_json: {
            question: "What is the sum of seven and eight?",
            options: ["14", "15", "16", "56"],
            correct_index: 1,
            explanation: "The sum of seven and eight is 7 + 8 = 15.",
            tags: ["math", "expressions", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.2,
          metadata_json: {
            question: "What is the difference between twenty and six?",
            options: ["12", "14", "16", "26"],
            correct_index: 1,
            explanation: "The difference between twenty and six is 20 - 6 = 14.",
            tags: ["math", "expressions", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are four nests with three baby birds in each nest. There are twelve baby birds in _______.",
            options: ["total", "difference", "remainder", "share"],
            choices: ["total", "difference", "remainder", "share"],
            correct_answer: "total",
            explanation: "4 × 3 = 12 baby birds in total.",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "matching",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Read and match: Nối biểu thức toán học với cách đọc tiếng Anh tương ứng:",
            question: "Nối biểu thức với cách đọc phù hợp",
            pairs: [
              { left: "3 × (4 + 2)", right: "Three times the sum of four and two" },
              { left: "(15 - 5) ÷ 2", right: "The difference between fifteen and five divided by two" },
              { left: "(4 + 6) × 2", right: "The sum of four and six times two" },
              { left: "18 ÷ (9 - 3)", right: "Eighteen divided by the difference between nine and three" }
            ],
            explanation: "• 3 × (4 + 2): Three times the sum of four and two\n• (15 - 5) ÷ 2: The difference between fifteen and five divided by two\n• (4 + 6) × 2: The sum of four and six times two\n• 18 ÷ (9 - 3): Eighteen divided by the difference between nine and three",
            tags: ["math", "expressions", "matching", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Dựa vào phép tính 20 ÷ 6 = 3 r 2, sắp xếp thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["Twenty", "divided by", "six", "equals", "three", "with a remainder of", "two."],
            correct_sentence: "Twenty divided by six equals three with a remainder of two.",
            explanation: "20 ÷ 6 = 3 r 2: Twenty divided by six equals three with a remainder of two.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp các từ thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["Each", "child", "receives", "four books."],
            correct_sentence: "Each child receives four books.",
            explanation: "Each child receives four books.",
            tags: ["math", "word-problem", "sentence_reorder", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 5,
      title: "English for Math - Semester 1 Comprehensive Review (Đề số 05)",
      duration_minutes: 25,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Nine multiplied by eight equals seventy-two.",
            options: ["9 × 8 = 72", "8 × 8 = 64", "9 × 7 = 63"],
            correct_index: 0,
            explanation: "9 × 8 = 72.",
            tags: ["math", "multiplication", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Choose the correct equation: Sixty-three divided by seven equals nine.",
            options: ["63 ÷ 7 = 9", "63 ÷ 9 = 7", "54 ÷ 6 = 9"],
            correct_index: 0,
            explanation: "63 ÷ 7 = 9.",
            tags: ["math", "division", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.3,
          metadata_json: {
            question: "What is the value of the expression: Four times the difference between eight and three?",
            options: ["15", "20", "25", "12"],
            correct_index: 1,
            explanation: "8 - 3 = 5. Four times five is 4 × 5 = 20.",
            tags: ["math", "expressions", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are 22 oranges shared equally among 5 bags. Each bag has 4 oranges. There are two oranges _______.",
            options: ["left over", "in total", "in sum", "multiplied"],
            choices: ["left over", "in total", "in sum", "multiplied"],
            correct_answer: "left over",
            explanation: "22 = 5 × 4 + 2. Two oranges left over.",
            tags: ["math", "remainders", "word-problem", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.2,
          metadata_json: {
            question: "There are eight rows of trees with six trees in each row. There are forty-eight trees in _______.",
            options: ["total", "difference", "remainder", "equal"],
            choices: ["total", "difference", "remainder", "equal"],
            correct_answer: "total",
            explanation: "8 × 6 = 48 trees in total.",
            tags: ["math", "word-problem", "grade3"]
          }
        },
        {
          type: "matching",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Read and match: Nối biểu thức toán học với cách đọc tiếng Anh tương ứng:",
            question: "Nối biểu thức với cách đọc phù hợp",
            pairs: [
              { left: "4 × (5 + 1)", right: "Four times the sum of five and one" },
              { left: "24 ÷ (8 - 2)", right: "Twenty-four divided by the difference between eight and two" },
              { left: "(10 - 2) ÷ 4", right: "The difference between ten and two divided by four" },
              { left: "(3 + 7) × 3", right: "The sum of three and seven times three" }
            ],
            explanation: "• 4 × (5 + 1): Four times the sum of five and one\n• 24 ÷ (8 - 2): Twenty-four divided by the difference between eight and two\n• (10 - 2) ÷ 4: The difference between ten and two divided by four\n• (3 + 7) × 3: The sum of three and seven times three",
            tags: ["math", "expressions", "matching", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.5,
          metadata_json: {
            instruction: "Dựa vào phép tính 23 ÷ 4 = 5 r 3, sắp xếp các từ thành câu đúng:",
            question: "Sắp xếp câu:",
            words: ["Twenty-three", "divided by", "four", "equals", "five", "with a remainder of", "three."],
            correct_sentence: "Twenty-three divided by four equals five with a remainder of three.",
            explanation: "23 ÷ 4 = 5 r 3: Twenty-three divided by four equals five with a remainder of three.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        },
        {
          type: "sentence_reorder",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Sắp xếp lại các từ thành câu hoàn chỉnh:",
            question: "Sắp xếp câu:",
            words: ["There", "are", "three cookies", "left over."],
            correct_sentence: "There are three cookies left over.",
            explanation: "There are three cookies left over.",
            tags: ["math", "remainders", "sentence_reorder", "grade3"]
          }
        }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. ENGLISH FOR SCIENCE
// ─────────────────────────────────────────────────────────────────────────────
const scienceBank = {
  collection: {
    title: "English for Science",
    subject_slug: "toan-khoa",
    grade: 3,
    volume: 1,
    units: [2],
    sequence_number: 2,
    exam_type: "lesson",
    reference_book: "VinaLearn English for Math & Science 3",
    status: "published"
  },
  exams: [
    {
      exam_number: 1,
      title: "English for Science - Review for Semester Test 1 (Đề mẫu VinaLearn)",
      duration_minutes: 20,
      questions: [
        {
          type: "matching",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Look and read. Then match: Nối các bộ phận của cây với chức năng tiếng Anh tương ứng:",
            question: "Nối bộ phận của cây với chức năng phù hợp",
            pairs: [
              { left: "Leaf (Lá)", right: "Makes food for the plant" },
              { left: "Seed (Hạt)", right: "Grows into a new baby plant" },
              { left: "Roots (Rễ)", right: "Take water from the soil" },
              { left: "Stem (Thân)", right: "Takes water to the leaves" },
              { left: "Flower (Hoa)", right: "Makes fruit and seeds" }
            ],
            explanation: "• Leaf: Makes food for the plant\n• Seed: Grows into a new baby plant\n• Roots: Take water from the soil\n• Stem: Takes water to the leaves\n• Flower: Makes fruit and seeds",
            tags: ["science", "plants", "matching", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "The flowers _______.",
            options: ["take water from the soil", "make fruit and seeds", "grow deep under the ground", "absorb sunlight directly"],
            correct_index: 1,
            explanation: "The flowers make fruit and seeds (Hoa tạo ra quả và hạt giống).",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "The leaves _______.",
            options: ["make food for the plant", "make seeds", "take water from the soil", "produce sweet nectar"],
            correct_index: 0,
            explanation: "The leaves make food for the plant using sunlight (Lá cây quang hợp tạo thức ăn cho cây).",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "The roots _______.",
            options: ["make fruit", "take water from the soil", "fly in the air", "catch insects"],
            correct_index: 1,
            explanation: "The roots take water and nutrients from the soil (Rễ hút nước từ đất).",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "The stem _______.",
            options: ["make seeds", "takes water to the leaves", "produce flower pollen", "absorbs rain directly"],
            correct_index: 1,
            explanation: "The stem takes water to the leaves and supports the plant (Thân cây vận chuyển nước đến lá).",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "A bird has _______ to fly in the air.",
            options: ["wings", "fins", "scales", "shell"],
            correct_index: 0,
            explanation: "A bird has wings (Chim có cánh để bay).",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "A kangaroo has strong _______ to jump far.",
            options: ["legs", "fins", "wings", "feathers"],
            correct_index: 0,
            explanation: "A kangaroo has strong legs (Chuột túi có đôi chân khỏe để nhảy).",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "A fish has _______ to swim fast in the water.",
            options: ["fins", "feet", "wool", "feathers"],
            correct_index: 0,
            explanation: "A fish has fins (Cá có vây để bơi).",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "A lizard has special _______ to climb walls and rocks.",
            options: ["feet", "wings", "wool", "fins"],
            correct_index: 0,
            explanation: "A lizard has special feet (Thằn lằn có bàn chân đặc biệt để leo trèo).",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "Birds have soft and light _______ covering their bodies.",
            options: ["feathers", "shell", "fur", "scales"],
            choices: ["feathers", "shell", "fur", "scales"],
            correct_answer: "feathers",
            explanation: "Birds have feathers (Chim có bộ lông vũ).",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "A turtle has a hard _______ to protect its soft body.",
            options: ["shell", "fur", "wings", "fins"],
            choices: ["shell", "fur", "wings", "fins"],
            correct_answer: "shell",
            explanation: "A turtle has a hard shell (Rùa có chiếc mai cứng).",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "Bears have thick _______ to stay warm in the cold winter.",
            options: ["fur", "shell", "scales", "feathers"],
            choices: ["fur", "shell", "scales", "feathers"],
            correct_answer: "fur",
            explanation: "Bears have thick fur (Gấu có bộ lông mao dày).",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "Most fish have shiny, waterproof _______ covering their skin.",
            options: ["scales", "feathers", "wool", "fur"],
            choices: ["scales", "feathers", "wool", "fur"],
            correct_answer: "scales",
            explanation: "Fish have scales (Cá có vảy).",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Plants give us wool. We use it to make warm clothes.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 1,
            explanation: "✗ (Sai). Sheep give us wool, not plants! (Cừu cho chúng ta len, không phải thực vật).",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Chickens give us meat and eggs. We use them to make food.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 0,
            explanation: "✓ (Đúng). Chickens give us meat and eggs (Gà cho thịt và trứng để làm thức ăn).",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Plants give us wood. We use it to make paper.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 0,
            explanation: "✓ (Đúng). Trees provide wood to make paper (Cây cối cho gỗ để làm giấy).",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 2,
      title: "English for Science - How Plants Work & Plant Life Cycle (Đề số 02)",
      duration_minutes: 20,
      questions: [
        {
          type: "matching",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Look and read. Then match: Nối các bộ phận của cây với đặc điểm tiếng Anh tương ứng:",
            question: "Nối bộ phận thực vật",
            pairs: [
              { left: "Fruit (Quả)", right: "Protects and holds the seeds inside" },
              { left: "Roots (Rễ)", right: "Anchor the plant firmly in the soil" },
              { left: "Leaves (Lá)", right: "Need green chlorophyll and sunlight" },
              { left: "Flowers (Hoa)", right: "Are often colorful and attract bees" }
            ],
            explanation: "• Fruit: Protects and holds seeds\n• Roots: Anchor plant in soil\n• Leaves: Need green chlorophyll and sunlight\n• Flowers: Attract bees",
            tags: ["science", "plants", "matching", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Where do seeds grow into new plants? They need soil, air, water and _______.",
            options: ["warmth from sunlight", "ice", "darkness only", "sugar"],
            correct_index: 0,
            explanation: "Seeds need water, air and warmth from sunlight to germinate.",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Which part of the plant is underground and takes in water?",
            options: ["The roots", "The leaves", "The flowers", "The fruits"],
            correct_index: 0,
            explanation: "The roots are underground and take water from the soil.",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Which part carries water from the roots up to the leaves?",
            options: ["The stem", "The seed", "The flower", "The soil"],
            correct_index: 0,
            explanation: "The stem carries water up to the leaves.",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Which part of the plant makes seeds?",
            options: ["The flower", "The root", "The bark", "The thorn"],
            correct_index: 0,
            explanation: "The flower makes fruit and seeds.",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Plants need sunlight to make food.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 0,
            explanation: "✓ (Đúng). Plants use sunlight for photosynthesis.",
            tags: ["science", "plants", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Plants give us fresh vegetables and fruits to eat.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 0,
            explanation: "✓ (Đúng). Plants give us nutritious fruits and vegetables.",
            tags: ["science", "plants", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 3,
      title: "English for Science - Animal Movements & Adaptations (Đề số 03)",
      duration_minutes: 20,
      questions: [
        {
          type: "matching",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Look and read. Then match: Nối loài vật với bộ phận giúp chúng di chuyển:",
            question: "Nối loài vật với bộ phận di chuyển",
            pairs: [
              { left: "Eagle (Đại bàng)", right: "Has powerful wings to fly high" },
              { left: "Dolphin (Cá heo)", right: "Has fins and a tail to swim swiftly" },
              { left: "Cheetah (Báo săn)", right: "Has long, fast legs to run" },
              { left: "Gecko (Tắc kè)", right: "Has sticky feet to climb smooth surfaces" }
            ],
            explanation: "• Eagle: wings\n• Dolphin: fins and tail\n• Cheetah: legs\n• Gecko: feet",
            tags: ["science", "animals", "matching", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "What helps an eagle or duck fly?",
            options: ["Wings", "Fins", "Gills", "Shell"],
            correct_index: 0,
            explanation: "Wings help birds fly.",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "What helps a shark or goldfish swim in water?",
            options: ["Fins", "Wings", "Legs", "Feathers"],
            correct_index: 0,
            explanation: "Fins help fish swim.",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Frogs have strong back _______ to hop and leap.",
            options: ["legs", "wings", "fins", "horns"],
            correct_index: 0,
            explanation: "Frogs have strong back legs.",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "Penguins have _______ that they use like flippers to swim under water.",
            options: ["wings", "fur", "scales", "teeth"],
            choices: ["wings", "fur", "scales", "teeth"],
            correct_answer: "wings",
            explanation: "Penguins have wings used as flippers for swimming.",
            tags: ["science", "animals", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Fish use wings to fly above trees.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 1,
            explanation: "✗ (Sai). Fish use fins to swim in the water.",
            tags: ["science", "animals", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 4,
      title: "English for Science - Animal Coverings & Protection (Đề số 04)",
      duration_minutes: 20,
      questions: [
        {
          type: "matching",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Look and read. Then match: Nối nhóm động vật với lớp che phủ cơ thể:",
            question: "Nối động vật với lớp bao phủ cơ thể",
            pairs: [
              { left: "Birds (Chim)", right: "Are covered with feathers" },
              { left: "Mammals like cats and rabbits", right: "Are covered with soft fur or hair" },
              { left: "Reptiles like snakes and crocodiles", right: "Are covered with dry scales" },
              { left: "Crabs and snails", right: "Have a hard protective shell" }
            ],
            explanation: "• Birds: feathers\n• Mammals: fur/hair\n• Reptiles: scales\n• Crabs/snails: shell",
            tags: ["science", "animal-coverings", "matching", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "What animal covering helps polar bears stay warm in freezing snow?",
            options: ["Thick fur", "Thin feathers", "Hard shell", "Wet scales"],
            correct_index: 0,
            explanation: "Thick fur insulates polar bears from freezing temperatures.",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "What animal covering helps a snail hide safely from predators?",
            options: ["A hard shell", "Feathers", "Fins", "Wool"],
            correct_index: 0,
            explanation: "Snails hide inside their hard shell.",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1.1,
          metadata_json: {
            question: "Snakes and lizards are covered with tough _______ that stop them from losing water.",
            options: ["scales", "fur", "feathers", "wool"],
            choices: ["scales", "fur", "feathers", "wool"],
            correct_answer: "scales",
            explanation: "Snakes and lizards have scales.",
            tags: ["science", "animal-coverings", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: A bird has scales all over its wings.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 1,
            explanation: "✗ (Sai). Birds have feathers on their wings.",
            tags: ["science", "animal-coverings", "grade3"]
          }
        }
      ]
    },
    {
      exam_number: 5,
      title: "English for Science - Benefits from Nature & Living Things (Đề số 05)",
      duration_minutes: 20,
      questions: [
        {
          type: "matching",
          difficulty: 1.2,
          metadata_json: {
            instruction: "Look and read. Then match: Nối nguồn gốc tự nhiên với sản phẩm con người sử dụng:",
            question: "Nối sản phẩm với nguồn gốc",
            pairs: [
              { left: "Sheep (Cừu)", right: "Give us wool to make sweaters and scarves" },
              { left: "Trees (Cây cối)", right: "Give us wood to make furniture and paper" },
              { left: "Cows (Bò)", right: "Give us fresh milk and dairy food" },
              { left: "Cotton plants (Cây bông)", right: "Give us cotton to make soft T-shirts" }
            ],
            explanation: "• Sheep: wool\n• Trees: wood for furniture and paper\n• Cows: milk\n• Cotton plants: cotton for clothes",
            tags: ["science", "benefits-from-nature", "matching", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Which of these animals gives us honey?",
            options: ["Bees", "Chickens", "Bears", "Lizards"],
            correct_index: 0,
            explanation: "Bees make honey from flower nectar.",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.0,
          metadata_json: {
            question: "Which of these foods comes from plants?",
            options: ["Apples and carrots", "Eggs", "Milk", "Beef"],
            correct_index: 0,
            explanation: "Apples and carrots come from plants.",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: Cows give us milk. We use milk to make cheese and butter.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 0,
            explanation: "✓ (Đúng). Cows provide milk used to produce cheese and butter.",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1.1,
          metadata_json: {
            question: "Look and read: We make paper from fish scales.",
            options: ["✓ (Đúng)", "✗ (Sai)"],
            correct_index: 1,
            explanation: "✗ (Sai). We make paper from wood pulp from trees and plants!",
            tags: ["science", "benefits-from-nature", "grade3"]
          }
        }
      ]
    }
  ]
};

// Write files
const mathPath = path.join(targetDir, 'toan-khoa-math.json');
const sciencePath = path.join(targetDir, 'toan-khoa-science.json');

fs.writeFileSync(mathPath, JSON.stringify(mathBank, null, 2), 'utf8');
console.log(`✅ Created: ${mathPath} (${mathBank.exams.length} exams)`);

fs.writeFileSync(sciencePath, JSON.stringify(scienceBank, null, 2), 'utf8');
console.log(`✅ Created: ${sciencePath} (${scienceBank.exams.length} exams)`);
