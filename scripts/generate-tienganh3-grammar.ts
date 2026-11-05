import * as fs from 'fs';
import * as path from 'path';

// Đọc 3 đề hiện có từ file JSON gốc
const originalPath = path.resolve('content/exam-bank/tieng-anh/tienganh3-grammar-review-hk1.json');
const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));

// Giữ nguyên 3 đề đầu tiên đã được verify
const existingExams = originalData.exams.slice(0, 3);

// =============================================================================
// ĐỀ 04: CHUYÊN ĐỀ CHUYÊN SÂU ĐỘNG TỪ TO BE (AM / IS / ARE) - 15 CÂU
// Trọng tâm:
// - am (với I), is (với He, She, It, Danh từ số ít), are (với You, They, We, Danh từ số nhiều)
// - Dạng viết tắt: I'm, He's, She's, It's, You're, They're, What's
// - Câu phủ định: isn't, aren't, am not
// - Câu hỏi Yes/No đảo ngữ và trả lời ngắn (Short answers)
// - To be trong câu hỏi tuổi, sức khỏe, màu sắc số ít/số nhiều
// =============================================================================
const exam04 = {
  exam_number: 4,
  title: "Đề 04: Chuyên đề Chuyên sâu Động từ To Be (Am / Is / Are - Khẳng định, Phủ định & Nghi vấn)",
  duration_minutes: 20,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Điền dạng đúng của động từ to be:\n\"Hello, I _______ Mai. I _______ eight years old.\"",
        options: ["am - am", "is - is", "are - are", "am - is"],
        correct_index: 0,
        hint: "💡 Đại từ 'I' (tôi/mình) luôn luôn đi cùng động từ to be 'am'.",
        explanation: "• Quy tắc động từ To Be: Đi với chủ ngữ ngôi thứ nhất số ít 'I' bắt buộc dùng 'am' (I am hoặc viết tắt là I'm).\n• Dịch: Xin chào, mình là Mai. Mình 8 tuổi.",
        tags: ["to-be", "am", "unit-1", "unit-2", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Chọn dạng viết tắt (Contraction) đúng:\n\"Look! _______ our new teacher, Ms Hoa.\"",
        options: ["She's", "She're", "He's", "It's"],
        correct_index: 0,
        hint: "💡 Cô giáo Ms Hoa là phái nữ nên dùng đại từ 'She', 'She is' viết tắt là 'She's'.",
        explanation: "• 'She is' viết tắt là 'She's'. Ms Hoa là cô giáo nên dùng đại từ nhân xưng 'She'.\n• 'He's' dùng cho nam giới (thầy giáo Mr Long, bạn nam Bill, Nam).\n• Dịch: Nhìn kìa! Cô ấy là cô giáo mới của chúng mình, cô Hoa.",
        tags: ["to-be", "contractions", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Hỏi thăm sức khỏe bạn bè:\n\"How _______ you? – I _______ fine, thank you.\"",
        options: ["are - am", "is - am", "are - is", "am - are"],
        correct_index: 0,
        hint: "💡 Chủ ngữ 'you' đi với to be 'are'; chủ ngữ 'I' đi với to be 'am'.",
        explanation: "• Mẫu câu hỏi sức khỏe trong Unit 1:\n  'How are you?' (Bạn có khỏe không?)\n  → 'I am fine, thank you.' (Mình khỏe, cảm ơn bạn).\n• 'you' đi với 'are', 'I' đi với 'am'.",
        tags: ["to-be", "greetings", "unit-1", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Hỏi và đáp về tuổi tác:\n\"How old _______ you? – I _______ nine years old.\"",
        options: ["are - am", "is - am", "are - is", "am - are"],
        correct_index: 0,
        hint: "💡 Hỏi tuổi bạn: 'How old are you?'; trả lời: 'I am nine years old.'",
        explanation: "• Mẫu câu hỏi tuổi trong Unit 2:\n  'How old are you?' (Bạn bao nhiêu tuổi?)\n  → 'I am / I'm + [số tuổi] + years old.'\n• Dịch: Bạn bao nhiêu tuổi? – Mình 9 tuổi.",
        tags: ["to-be", "age", "unit-2", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Giới thiệu bạn nam ở đằng xa:\n\"- Who is that boy? – _______ is my friend, Nam. _______ eight years old.\"",
        options: ["He - He's", "She - She's", "He - He", "It - It's"],
        correct_index: 0,
        hint: "💡 Bạn Nam là nam giới nên dùng đại từ 'He', 'He is' viết tắt là 'He's'.",
        explanation: "• 'He' dùng cho nam giới (Nam, Bill, Mr Long).\n• 'He's' là dạng viết tắt của 'He is'.\n• Dịch: - Cậu bé đằng kia là ai? – Cậu ấy là bạn mình, Nam. Cậu ấy 8 tuổi.",
        tags: ["to-be", "he-she", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Giới thiệu nhiều người bạn (Số nhiều):\n\"Look at Nam and Mai! _______ my classmates. _______ very friendly.\"",
        options: ["They are - They're", "He is - He's", "She is - She's", "They is - They're"],
        correct_index: 0,
        hint: "💡 'Nam and Mai' là 2 người (số nhiều) nên dùng đại từ 'They' và to be 'are' ('They're').",
        explanation: "• Chủ ngữ từ 2 người trở lên (số nhiều) dùng đại từ 'They' đi kèm động từ to be 'are': 'They are' (viết tắt là 'They're').\n• Tuyệt đối không dùng 'They is'.\n• Dịch: Nhìn Nam và Mai kìa! Họ là bạn cùng lớp của mình. Họ rất thân thiện.",
        tags: ["to-be", "they-are", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Hỏi và đáp về màu sắc đồ vật số ít:\n\"What colour _______ your school bag? – It _______ blue.\"",
        options: ["is - is", "are - are", "is - are", "are - is"],
        correct_index: 0,
        hint: "💡 'your school bag' là 1 chiếc cặp sách (danh từ số ít) nên đi với to be 'is'.",
        explanation: "• Câu hỏi màu sắc đồ vật số ít trong Unit 9:\n  'What colour is + danh từ số ít?'\n  → 'It is / It's + màu sắc.'\n• Dịch: Cặp sách của bạn màu gì? – Nó màu xanh dương.",
        tags: ["to-be", "colours", "unit-9", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Hỏi và đáp về màu sắc đồ vật số nhiều:\n\"What colour _______ your pens? – They _______ red.\"",
        options: ["are - are", "is - is", "are - is", "is - are"],
        correct_index: 0,
        hint: "💡 'your pens' có đuôi 's' là những chiếc bút (số nhiều) nên đi với to be 'are' và trả lời 'They are'.",
        explanation: "• Câu hỏi màu sắc đồ vật số nhiều trong Unit 9:\n  'What colour are + danh từ số nhiều?'\n  → 'They are / They're + màu sắc.'\n• Dịch: Những chiếc bút của bạn màu gì? – Chúng màu đỏ.",
        tags: ["to-be", "colours", "singular-plural", "unit-9", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Câu phủ định của động từ to be số ít:\n\"Is this your pencil case? – No, it _______.\"",
        options: ["isn't", "is", "aren't", "not"],
        correct_index: 0,
        hint: "💡 Phủ định của 'it is' là 'it isn't' (viết tắt của it is not).",
        explanation: "• Câu trả lời phủ định cho câu hỏi 'Is this/that...?':\n  'No, it isn't.' (viết tắt của 'No, it is not.').\n• Dịch: Đây có phải là hộp bút của bạn không? – Không, không phải.",
        tags: ["to-be", "negation", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Câu phủ định của động từ to be số nhiều:\n\"Are they your rulers? – No, they _______.\"",
        options: ["aren't", "isn't", "are", "not are"],
        correct_index: 0,
        hint: "💡 Phủ định của 'they are' là 'they aren't' (viết tắt của they are not).",
        explanation: "• Câu trả lời phủ định cho câu hỏi 'Are they...?':\n  'No, they aren't.' (viết tắt của 'No, they are not.').\n• 'isn't' chỉ dùng cho số ít (he, she, it).\n• Dịch: Chúng có phải là những chiếc thước kẻ của bạn không? – Không, không phải.",
        tags: ["to-be", "negation", "plural", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Phân biệt To Be và trợ động từ Do:\n\"_______ you have an eraser? – Yes, I _______.\"",
        options: ["Do - do", "Are - am", "Do - am", "Are - do"],
        correct_index: 0,
        hint: "💡 Bẫy kinh điển: Câu hỏi có động từ thường 'have' phải mượn trợ động từ 'Do', trả lời bằng 'Yes, I do' (KHÔNG dùng to be 'Are/am').",
        explanation: "• Hỏi sở hữu đồ vật dùng cấu trúc: 'Do you have + a/an + N?'\n  → Khẳng định: 'Yes, I do.'\n  → Phủ định: 'No, I don't.'\n• Tuyệt đối không dùng to be 'Are you have...?' hay trả lời 'Yes, I am.'",
        tags: ["traps", "do-vs-be", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Câu hỏi Yes/No đảo ngữ với To Be:\n\"_______ you eight years old, Linh? – Yes, I _______.\"",
        options: ["Are - am", "Is - am", "Do - do", "Are - do"],
        correct_index: 0,
        hint: "💡 Hỏi tuổi bằng to be: 'Are you...?' → Trả lời: 'Yes, I am.'",
        explanation: "• Khi hỏi về tuổi tác với chủ ngữ 'you', đảo động từ to be 'Are' lên đầu câu: 'Are you eight years old?'\n• Trả lời: 'Yes, I am.' (Vâng, mình 8 tuổi).\n• Dùng to be chứ không dùng trợ động từ 'Do'.",
        tags: ["to-be", "yes-no", "unit-2", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "To be với các bộ phận cơ thể số ít vs số nhiều:\n\"Touch your face! This _______ my nose, and these _______ my eyes.\"",
        options: ["is - are", "are - is", "is - is", "are - are"],
        correct_index: 0,
        hint: "💡 'my nose' là 1 cái mũi (số ít → is); 'my eyes' là 2 con mắt (số nhiều → are).",
        explanation: "• 'my nose' là danh từ số ít → đi với 'is' ('This is my nose').\n• 'my eyes' có đuôi 's' là danh từ số nhiều → đi với 'are' ('these are my eyes').\n• Dịch: Chạm vào mặt bạn nào! Đây là mũi của mình, và đây là hai con mắt của mình.",
        tags: ["to-be", "body-parts", "unit-4", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Bẫy câu trả lời ngắn (Short answer):\n\"Is that your art room? – Yes, _______.\"",
        options: ["it is", "it's", "that is", "is it"],
        correct_index: 0,
        hint: "💡 Bẫy ngữ pháp: Trong câu trả lời khẳng định ngắn 'Yes, it is', TUYỆT ĐỐI KHÔNG được viết tắt thành 'Yes, it's'.",
        explanation: "• Quy tắc chuẩn ngữ pháp tiếng Anh: Trong câu trả lời ngắn khẳng định (Yes, it is / Yes, they are / Yes, I am), động từ to be KHÔNG BAO GIỜ được viết tắt.\n• Không được viết 'Yes, it's' và không trả lời 'Yes, that is'.\n• Dịch: Kia có phải phòng mỹ thuật của bạn không? – Đúng vậy.",
        tags: ["traps", "short-answers", "unit-6", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Động từ to be trong câu hỏi và trả lời tên:\n\"My name _______ Ben. What _______ your name?\"",
        options: ["is - is", "am - is", "are - is", "is - are"],
        correct_index: 0,
        hint: "💡 'My name' và 'your name' đều là danh từ số ít nên đi với to be 'is'.",
        explanation: "• 'My name' là danh từ số ít → đi với 'is' ('My name is Ben').\n• Câu hỏi tên: 'What is your name?' (thường viết tắt là 'What's your name?').\n• Dịch: Tên mình là Ben. Tên bạn là gì?",
        tags: ["to-be", "names", "unit-2", "grammar"]
      }
    }
  ]
};

// =============================================================================
// ĐỀ 05: CHUYÊN ĐỀ CHUYÊN SÂU THIS / THAT / THESE / THOSE - 15 CÂU
// Trọng tâm:
// - Cự ly Gần (This / These) vs Cự ly Xa (That / Those)
// - Số ít (This is a / That is a) vs Số nhiều (These are / Those are)
// - Câu hỏi xác nhận: Is this/that...? -> Yes, it is. / No, it isn't.
// - Câu hỏi xác nhận: Are these/those...? -> Yes, they are. / No, they aren't.
// - Chuyển đổi câu Số ít <-> Số nhiều
// =============================================================================
const exam05 = {
  exam_number: 5,
  title: "Đề 05: Chuyên đề Chuyên sâu This / That / These / Those (Gần - Xa, Số ít - Số nhiều & Câu hỏi xác nhận)",
  duration_minutes: 20,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Cầm một chiếc bút chì trên tay và giới thiệu:\n\"_______ is my new pencil in my hand.\"",
        options: ["This", "That", "These", "Those"],
        correct_index: 0,
        hint: "💡 Đang cầm trên tay là cự ly GẦN và là 1 chiếc bút chì (SỐ ÍT) → dùng 'This'.",
        explanation: "• Đại từ chỉ định:\n  - 'This': chỉ 1 người/vật ở cự ly GẦN (ở đây, trên tay).\n  - 'That': chỉ 1 người/vật ở cự ly XA (ở đằng kia).\n• 'pencil' là số ít ở cự ly gần nên dùng 'This is my new pencil.'",
        tags: ["this-that", "near-far", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Chỉ vào sân chơi của trường ở đằng xa:\n\"Look over there! _______ is our school playground.\"",
        options: ["That", "This", "These", "Those"],
        correct_index: 0,
        hint: "💡 'over there' (ở đằng kia) là cự ly XA và 'playground' là 1 địa điểm (SỐ ÍT) → dùng 'That'.",
        explanation: "• 'That is' dùng để chỉ/giới thiệu người hoặc vật ở xa người nói ('over there').\n• Dịch: Nhìn đằng kia kìa! Đó là sân chơi của trường chúng mình.",
        tags: ["this-that", "near-far", "unit-6", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Chỉ những cuốn vở đang để ngay trên bàn học trước mặt:\n\"Look at my desk! _______ are my notebooks.\"",
        options: ["These", "This", "That", "Those"],
        correct_index: 0,
        hint: "💡 Sách vở ngay trên bàn trước mặt là cự ly GẦN, 'notebooks' là SỐ NHIỀU → dùng 'These'.",
        explanation: "• 'These are' dùng để chỉ NHIỀU người/vật ở cự ly GẦN người nói.\n• 'notebooks' có đuôi 's' là danh từ số nhiều nên không dùng 'This'.\n• Dịch: Nhìn vào bàn của mình này! Đây là những cuốn vở của mình.",
        tags: ["these-those", "plural", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Chỉ những chiếc cặp sách để ở hàng ghế đằng xa:\n\"Look over there! _______ are our school bags on the bench.\"",
        options: ["Those", "These", "This", "That"],
        correct_index: 0,
        hint: "💡 'over there' (ở đằng kia) là cự ly XA, 'school bags' là SỐ NHIỀU → dùng 'Those'.",
        explanation: "• 'Those are' dùng để chỉ NHIỀU người/vật ở cự ly XA người nói.\n• Dịch: Nhìn đằng kia kìa! Đó là những chiếc cặp sách của chúng mình trên ghế dài.",
        tags: ["these-those", "plural", "near-far", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Chọn to be thích hợp đi kèm This và These:\n\"This _______ a ruler, but these _______ four rulers.\"",
        options: ["is - are", "are - is", "is - is", "are - are"],
        correct_index: 0,
        hint: "💡 'This' (số ít) đi với 'is'; 'These' (số nhiều) đi với 'are'.",
        explanation: "• 'This' chỉ 1 đồ vật (số ít) → 'This is a ruler.'\n• 'These' chỉ từ 2 đồ vật trở lên (số nhiều) → 'These are four rulers.'\n• Dịch: Đây là một chiếc thước kẻ, nhưng đây là bốn chiếc thước kẻ.",
        tags: ["this-these", "singular-plural", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Chọn to be thích hợp đi kèm That và Those:\n\"That _______ our teacher, and those _______ our new classmates.\"",
        options: ["is - are", "are - is", "is - is", "are - are"],
        correct_index: 0,
        hint: "💡 'That' (số ít) đi với 'is'; 'Those' (số nhiều) đi với 'are'.",
        explanation: "• 'That' chỉ 1 người (số ít) → 'That is our teacher.'\n• 'Those' chỉ nhiều người (số nhiều) → 'Those are our new classmates.'\n• Dịch: Đằng kia là cô giáo của chúng mình, và đằng kia là các bạn cùng lớp mới của chúng mình.",
        tags: ["that-those", "singular-plural", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Câu hỏi xác nhận đồ vật ở gần (Số ít):\n\"_______ this your eraser? – Yes, it is.\"",
        options: ["Is", "Are", "Do", "Does"],
        correct_index: 0,
        hint: "💡 'this' là số ít nên câu hỏi đảo động từ to be 'Is' lên đầu câu.",
        explanation: "• Mẫu câu hỏi xác nhận đồ vật số ít ở gần trong Unit 8:\n  'Is this your + [danh từ số ít]?'\n  → 'Yes, it is.' / 'No, it isn't.'\n• Dịch: Đây có phải là cục tẩy của bạn không? – Đúng vậy.",
        tags: ["this-that", "questions", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Câu hỏi xác nhận đồ vật ở gần (Số nhiều):\n\"_______ these your pens? – Yes, they are.\"",
        options: ["Are", "Is", "Do", "Does"],
        correct_index: 0,
        hint: "💡 'these' là số nhiều nên câu hỏi đảo động từ to be 'Are' lên đầu câu.",
        explanation: "• Mẫu câu hỏi xác nhận đồ vật số nhiều ở gần:\n  'Are these your + [danh từ số nhiều]?'\n  → 'Yes, they are.' / 'No, they aren't.'\n• Dịch: Đây có phải là những chiếc bút của bạn không? – Đúng vậy.",
        tags: ["these-those", "questions", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Bẫy câu trả lời phủ định cho 'Is that...?':\n\"Is that our computer room? – No, _______.\"",
        options: ["it isn't", "that isn't", "they aren't", "it is"],
        correct_index: 0,
        hint: "💡 Trả lời phủ định cho câu hỏi số ít 'Is that...?' là 'No, it isn't.' (KHÔNG trả lời 'No, that isn't.').",
        explanation: "• Đại từ 'it' được dùng để thay thế cho vật số ít được hỏi trong 'Is that...?'.\n• Phủ định: 'No, it isn't.' (viết tắt của it is not).\n• Dịch: Đằng kia có phải phòng máy tính của chúng mình không? – Không, không phải.",
        tags: ["traps", "short-answers", "unit-6", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Bẫy câu trả lời phủ định cho 'Are those...?':\n\"Are those your pencils over there? – No, _______.\"",
        options: ["they aren't", "those aren't", "it isn't", "they are"],
        correct_index: 0,
        hint: "💡 Trả lời cho câu hỏi số nhiều 'Are those...?' là 'No, they aren't.' Đại từ 'they' thay thế cho đồ vật số nhiều.",
        explanation: "• Đại từ 'they' thay thế cho danh từ số nhiều trong câu hỏi 'Are these / Are those...?'.\n• Phủ định: 'No, they aren't.' (viết tắt của they are not).\n• Bẫy sai phổ biến: học sinh hay nhầm thành 'No, those aren't.'\n• Dịch: Đằng kia có phải là những chiếc bút chì của bạn không? – Không, không phải.",
        tags: ["traps", "short-answers", "these-those", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Chuyển câu sau từ Số ít sang Số nhiều:\n\"This is my pen.\"\n→ _______.",
        options: [
          "These are my pens.",
          "This are my pens.",
          "These is my pen.",
          "Those are my pen."
        ],
        correct_index: 0,
        hint: "💡 'This is' chuyển sang số nhiều là 'These are'; 'my pen' thêm 's' thành 'my pens'.",
        explanation: "• Quy tắc chuyển đổi số ít sang số nhiều:\n  + 'This is' → 'These are'\n  + 'my pen' (số ít) → 'my pens' (số nhiều có đuôi 's')\n• Dịch: Đây là chiếc bút của mình. → Đây là những chiếc bút của mình.",
        tags: ["singular-plural", "rewrite", "this-these", "unit-8"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Chuyển câu sau từ Số ít sang Số nhiều với That:\n\"That is a notebook.\"\n→ _______.",
        options: [
          "Those are notebooks.",
          "That are notebooks.",
          "Those is notebooks.",
          "These are a notebook."
        ],
        correct_index: 0,
        hint: "💡 'That is a' chuyển sang số nhiều là 'Those are'; bỏ mạo từ 'a' và thêm 's' vào danh từ ('notebooks').",
        explanation: "• Quy tắc chuyển đổi số ít sang số nhiều:\n  + 'That is a' → 'Those are'\n  + 'notebook' (số ít) → 'notebooks' (số nhiều bỏ 'a')\n• Dịch: Kia là một cuốn vở. → Kia là những cuốn vở.",
        tags: ["singular-plural", "rewrite", "that-those", "unit-8"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Hỏi xác nhận bạn bè ở đằng xa:\n\"Is that your friend, Mary? – Yes, _______.\"",
        options: ["it is", "that is", "she is", "it's"],
        correct_index: 0,
        hint: "💡 Bẫy sách giáo khoa Global Success Unit 3: Hỏi 'Is that + Tên người?', câu trả lời khẳng định chuẩn là 'Yes, it is.'",
        explanation: "• Khi hỏi xác nhận danh tính người ở khoảng cách xa 'Is that [Name]?', câu trả lời khẳng định chuẩn theo SGK Tiếng Anh 3 là 'Yes, it is.' (Không dùng 'Yes, that is' hay viết tắt 'Yes, it's').\n• Dịch: Đằng kia có phải bạn Mary của cậu không? – Đúng rồi.",
        tags: ["traps", "short-answers", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Hỏi xác nhận nhiều người bạn:\n\"Are these your friends, Nam and Bill? – Yes, _______.\"",
        options: ["they are", "these are", "they're", "we are"],
        correct_index: 0,
        hint: "💡 Hỏi 'Are these...?' với nhiều người thì trả lời bằng đại từ 'they': 'Yes, they are.'",
        explanation: "• Nhóm người được hỏi (Nam and Bill) được thay bằng đại từ 'they' trong câu trả lời: 'Yes, they are.'\n• Không viết tắt 'they're' ở cuối câu khẳng định ngắn.\n• Dịch: Đây có phải là các bạn của cậu, Nam và Bill không? – Đúng vậy.",
        tags: ["these-those", "plural", "short-answers", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Điền cặp từ đối lập Gần (here) và Xa (over there):\n\"_______ here is my classroom, and _______ over there is the music room.\"",
        options: ["This - that", "That - this", "These - those", "This - these"],
        correct_index: 0,
        hint: "💡 'here' (ở đây - GẦN) dùng 'This'. 'over there' (ở đằng kia - XA) dùng 'that'.",
        explanation: "• 'This' chỉ vị trí ở đây ('here' - cự ly gần).\n• 'That' chỉ vị trí ở đằng kia ('over there' - cự ly xa).\n• Cả hai phòng học đều là số ít nên dùng cặp 'This - that'.\n• Dịch: Đây là lớp học của mình, và đằng kia là phòng âm nhạc.",
        tags: ["this-that", "near-far", "unit-6", "grammar"]
      }
    }
  ]
};

// =============================================================================
// ĐỀ 06: CHUYÊN ĐỀ TÌM TỪ SAI TRONG CÂU VÀ SỬA CÂU CHO ĐÚNG (15 CÂU)
// Trọng tâm:
// - Tìm 1 từ sai ngữ pháp trong câu và chọn cách sửa đúng chuẩn
// - Phân loại bẫy: To be (am/is/are), This/That/These/Those, a/an, số ít/số nhiều,
//   câu trả lời ngắn (it is vs that is), trợ động từ (do vs be).
// =============================================================================
const exam06 = {
  exam_number: 6,
  title: "Đề 06: Chuyên đề Tìm từ sai trong câu và Sửa câu cho đúng (Error Identification & Correction HK1)",
  duration_minutes: 20,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"I is fine, thank you.\"",
        options: [
          "is → am (Sửa thành: \"I am fine, thank you.\")",
          "I → He (Sửa thành: \"He is fine, thank you.\")",
          "fine → good (Sửa thành: \"I is good, thank you.\")",
          "thank → thanks (Sửa thành: \"I is fine, thanks you.\")"
        ],
        correct_index: 0,
        hint: "💡 Chủ ngữ 'I' không đi với to be 'is' mà phải đi với to be 'am'.",
        explanation: "• Lỗi sai: Từ 'is' bị dùng sai. Chủ ngữ 'I' bắt buộc đi với động từ to be 'am' (I am fine, thank you).\n• Dịch: Mình khỏe, cảm ơn bạn.",
        tags: ["error-correction", "to-be", "unit-1", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"These is my new notebooks.\"",
        options: [
          "is → are (Sửa thành: \"These are my new notebooks.\")",
          "These → This (Sửa thành: \"This is my new notebooks.\")",
          "new → old (Sửa thành: \"These is my old notebooks.\")",
          "my → your (Sửa thành: \"These is your new notebooks.\")"
        ],
        correct_index: 0,
        hint: "💡 'These' và 'notebooks' là số nhiều nên động từ to be phải là 'are', không dùng 'is'.",
        explanation: "• Lỗi sai: 'is' là sai ngữ pháp. 'These' (chỉ định số nhiều) và 'notebooks' (danh từ số nhiều) bắt buộc đi với động từ to be 'are' → 'These are my new notebooks.'\n• Dịch: Đây là những cuốn vở mới của mình.",
        tags: ["error-correction", "these-those", "to-be", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"This are my friends, Nam and Mai.\"",
        options: [
          "This → These (Sửa thành: \"These are my friends, Nam and Mai.\")",
          "are → is (Sửa thành: \"This is my friends, Nam and Mai.\")",
          "friends → friend (Sửa thành: \"This are my friend, Nam and Mai.\")",
          "my → our (Sửa thành: \"This are our friends, Nam and Mai.\")"
        ],
        correct_index: 0,
        hint: "💡 Có hai người bạn (Nam and Mai) là số nhiều, không thể dùng đại từ số ít 'This'.",
        explanation: "• Lỗi sai: 'This' là đại từ chỉ định số ít. Ở đây giới thiệu 2 người bạn (Nam and Mai) đi cùng to be 'are' nên phải sửa 'This' thành 'These' → 'These are my friends, Nam and Mai.'\n• Dịch: Đây là những người bạn của mình, Nam và Mai.",
        tags: ["error-correction", "this-these", "plural", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Do you have a eraser in your pencil case?\"",
        options: [
          "a → an (Sửa thành: \"Do you have an eraser in your pencil case?\")",
          "Do → Are (Sửa thành: \"Are you have a eraser in your pencil case?\")",
          "in → on (Sửa thành: \"Do you have a eraser on your pencil case?\")",
          "pencil → pens (Sửa thành: \"Do you have a eraser in your pens case?\")"
        ],
        correct_index: 0,
        hint: "💡 'eraser' bắt đầu bằng nguyên âm 'e' nên phải dùng mạo từ 'an'.",
        explanation: "• Lỗi sai: 'a' là sai. Từ 'eraser' (cục tẩy) bắt đầu bằng nguyên âm 'e' /ɪˈreɪzər/ nên phải dùng mạo từ 'an' → 'an eraser'.\n• Dịch: Bạn có một cục tẩy trong hộp bút không?",
        tags: ["error-correction", "articles", "a-an", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"What colour is your rulers? – They are green.\"",
        options: [
          "is → are (Sửa thành: \"What colour are your rulers? – They are green.\")",
          "rulers → ruler (Sửa thành: \"What colour is your ruler? – They are green.\")",
          "They → It (Sửa thành: \"What colour is your rulers? – It are green.\")",
          "green → red (Sửa thành: \"What colour is your rulers? – They are red.\")"
        ],
        correct_index: 0,
        hint: "💡 'your rulers' là danh từ số nhiều (những chiếc thước kẻ) nên câu hỏi phải dùng to be 'are'.",
        explanation: "• Lỗi sai: 'is' là sai ngữ pháp. Chủ ngữ 'your rulers' có đuôi 's' là số nhiều, và vế trả lời 'They are green' cũng là số nhiều, do đó to be ở câu hỏi phải sửa thành 'are' → 'What colour are your rulers?'\n• Dịch: Những chiếc thước kẻ của bạn màu gì? – Chúng màu xanh lá.",
        tags: ["error-correction", "colours", "to-be", "singular-plural", "unit-9"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Is that Linda over there? – Yes, that is.\"",
        options: [
          "that → it (Sửa thành: \"Is that Linda over there? – Yes, it is.\")",
          "is → does (Sửa thành: \"Does that Linda over there? – Yes, that does.\")",
          "over → in (Sửa thành: \"Is that Linda in there? – Yes, that is.\")",
          "that → this (Sửa thành: \"Is this Linda over there? – Yes, this is.\")"
        ],
        correct_index: 0,
        hint: "💡 Câu trả lời khẳng định của 'Is that...?' là 'Yes, it is.' Tuyệt đối không trả lời 'Yes, that is.'",
        explanation: "• Lỗi sai: 'that' ở câu trả lời là sai. Theo quy tắc chuẩn SGK Tiếng Anh 3, câu hỏi 'Is this/that...?' luôn trả lời bằng 'it' → 'Yes, it is.' (Không lặp lại 'that is').\n• Dịch: Đằng kia có phải bạn Linda không? – Đúng vậy.",
        tags: ["error-correction", "traps", "short-answers", "unit-3", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Are these your school bags? – Yes, these are.\"",
        options: [
          "these → they (Sửa thành: \"Are these your school bags? – Yes, they are.\")",
          "Are → Is (Sửa thành: \"Is these your school bags? – Yes, these is.\")",
          "bags → bag (Sửa thành: \"Are these your school bag? – Yes, these are.\")",
          "your → my (Sửa thành: \"Are these my school bags? – Yes, these are.\")"
        ],
        correct_index: 0,
        hint: "💡 Câu trả lời ngắn của 'Are these...?' là 'Yes, they are.' Đại từ 'they' thay thế cho đồ vật số nhiều.",
        explanation: "• Lỗi sai: Từ 'these' ở câu trả lời là sai. Trong câu trả lời ngắn cho câu hỏi số nhiều 'Are these/those...?', danh từ được thay bằng đại từ nhân xưng 'they' → 'Yes, they are.' (Không lặp lại 'these are').\n• Dịch: Đây có phải cặp sách của các bạn không? – Đúng vậy.",
        tags: ["error-correction", "traps", "short-answers", "these-those", "unit-8"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"She are eight years old.\"",
        options: [
          "are → is (Sửa thành: \"She is eight years old.\")",
          "She → You (Sửa thành: \"You are eight years old.\")",
          "eight → nine (Sửa thành: \"She are nine years old.\")",
          "years → year (Sửa thành: \"She are eight year old.\")"
        ],
        correct_index: 0,
        hint: "💡 Chủ ngữ ngôi thứ ba số ít 'She' (cô ấy/bạn nữ) đi với to be 'is', không đi với 'are'.",
        explanation: "• Lỗi sai: 'are' là sai ngữ pháp. Đại từ 'She' là ngôi thứ ba số ít nên động từ to be phải là 'is' (She is / She's eight years old).\n• Dịch: Bạn ấy 8 tuổi.",
        tags: ["error-correction", "to-be", "he-she", "unit-2", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Those are my pencil on the table.\"",
        options: [
          "pencil → pencils (Sửa thành: \"Those are my pencils on the table.\")",
          "Those → That (Sửa thành: \"That are my pencil on the table.\")",
          "are → is (Sửa thành: \"Those is my pencil on the table.\")",
          "on → in (Sửa thành: \"Those are my pencil in the table.\")"
        ],
        correct_index: 0,
        hint: "💡 'Those are' là số nhiều nên danh từ 'pencil' phải thêm 's' thành 'pencils'.",
        explanation: "• Lỗi sai: 'pencil' đang ở dạng số ít. Sau đại từ chỉ định số nhiều 'Those are' thì danh từ theo sau bắt buộc phải ở dạng số nhiều có đuôi 's' → 'Those are my pencils on the table.'\n• Dịch: Đằng kia là những chiếc bút chì của mình trên bàn.",
        tags: ["error-correction", "singular-plural", "those", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Are you have a blue pen? – Yes, I do.\"",
        options: [
          "Are → Do (Sửa thành: \"Do you have a blue pen? – Yes, I do.\")",
          "have → has (Sửa thành: \"Are you has a blue pen? – Yes, I do.\")",
          "blue → red (Sửa thành: \"Are you have a red pen? – Yes, I do.\")",
          "do → am (Sửa thành: \"Are you have a blue pen? – Yes, I am.\")"
        ],
        correct_index: 0,
        hint: "💡 Câu hỏi có động từ thường 'have' thì phải dùng trợ động từ 'Do', không dùng to be 'Are'.",
        explanation: "• Lỗi sai: 'Are' là sai cấu trúc. Để hỏi 'Bạn có... không?' với động từ thường 'have', câu hỏi phải dùng trợ động từ 'Do' → 'Do you have a blue pen?' (và trả lời 'Yes, I do').\n• Dịch: Bạn có một chiếc bút màu xanh dương không? – Có, mình có.",
        tags: ["error-correction", "traps", "do-vs-be", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"Do you have a notebook? – Yes, I am.\"",
        options: [
          "am → do (Sửa thành: \"Do you have a notebook? – Yes, I do.\")",
          "Do → Are (Sửa thành: \"Are you have a notebook? – Yes, I am.\")",
          "a → an (Sửa thành: \"Do you have an notebook? – Yes, I am.\")",
          "notebook → notebooks (Sửa thành: \"Do you have a notebooks? – Yes, I am.\")"
        ],
        correct_index: 0,
        hint: "💡 Câu hỏi bắt đầu bằng 'Do you have...?' thì câu trả lời khẳng định phải là 'Yes, I do' (không trả lời 'Yes, I am').",
        explanation: "• Lỗi sai: 'am' ở câu trả lời là sai. Câu hỏi hỏi bằng trợ động từ 'Do you have...?' thì câu trả lời ngắn phải dùng lại trợ động từ 'do' → 'Yes, I do.'\n• Dịch: Bạn có một cuốn vở không? – Có, mình có.",
        tags: ["error-correction", "traps", "short-answers", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"It is an red pencil case.\"",
        options: [
          "an → a (Sửa thành: \"It is a red pencil case.\")",
          "is → are (Sửa thành: \"It are an red pencil case.\")",
          "red → blue (Sửa thành: \"It is an blue pencil case.\")",
          "pencil → pen (Sửa thành: \"It is an red pen case.\")"
        ],
        correct_index: 0,
        hint: "💡 Từ 'red' bắt đầu bằng phụ âm 'r' nên chỉ dùng mạo từ 'a', không dùng 'an'.",
        explanation: "• Lỗi sai: 'an' là sai. Mạo từ đứng ngay trước từ 'red' bắt đầu bằng phụ âm /r/ nên bắt buộc phải dùng mạo từ 'a' → 'a red pencil case' (một chiếc hộp bút màu đỏ).\n• Dịch: Đó là một chiếc hộp bút màu đỏ.",
        tags: ["error-correction", "articles", "a-an", "unit-8", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"How old is you? – I am nine years old.\"",
        options: [
          "is → are (Sửa thành: \"How old are you? – I am nine years old.\")",
          "you → he (Sửa thành: \"How old is he? – I am nine years old.\")",
          "nine → eight (Sửa thành: \"How old is you? – I am eight years old.\")",
          "years → year (Sửa thành: \"How old is you? – I am nine year old.\")"
        ],
        correct_index: 0,
        hint: "💡 Chủ ngữ 'you' đi với động từ to be 'are' (How old are you?).",
        explanation: "• Lỗi sai: 'is' là sai ngữ pháp. Trong câu hỏi tuổi với chủ ngữ 'you', động từ to be phải là 'are' → 'How old are you?'\n• Dịch: Bạn bao nhiêu tuổi? – Mình 9 tuổi.",
        tags: ["error-correction", "to-be", "age", "unit-2", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"That are our classrooms over there.\"",
        options: [
          "That → Those (Sửa thành: \"Those are our classrooms over there.\")",
          "are → is (Sửa thành: \"That is our classrooms over there.\")",
          "classrooms → classroom (Sửa thành: \"That are our classroom over there.\")",
          "our → my (Sửa thành: \"That are my classrooms over there.\")"
        ],
        correct_index: 0,
        hint: "💡 'are' và 'classrooms' là số nhiều ở đằng xa ('over there') nên đại từ chỉ định phải là 'Those'.",
        explanation: "• Lỗi sai: 'That' là số ít. Vì to be 'are' và danh từ 'classrooms' (những phòng học) ở dạng số nhiều tại vị trí đằng xa ('over there') nên đại từ chỉ định số nhiều tương ứng là 'Those' → 'Those are our classrooms over there.'\n• Dịch: Đằng kia là những phòng học của chúng mình.",
        tags: ["error-correction", "that-those", "plural", "unit-6", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Tìm 1 từ SAI trong câu sau và chọn phương án sửa đúng nhất:\n\"May I come in, Mr Long? – Yes, you may.\"",
        options: [
          "may → can (Sửa thành: \"May I come in, Mr Long? – Yes, you can.\")",
          "come → go (Sửa thành: \"May I go in, Mr Long? – Yes, you may.\")",
          "in → out (Sửa thành: \"May I come out, Mr Long? – Yes, you may.\")",
          "Mr → Ms (Sửa thành: \"May I come in, Ms Long? – Yes, you may.\")"
        ],
        correct_index: 0,
        hint: "💡 Bẫy sách giáo khoa Global Success Unit 7: Khi xin phép 'May I...?', thầy cô cho phép bằng câu 'Yes, you can.' (không trả lời 'Yes, you may.').",
        explanation: "• Lỗi sai: 'may' ở câu trả lời là sai. Theo quy chuẩn cấu trúc câu xin phép lớp học trong SGK Tiếng Anh 3 (Unit 7), phản hồi cho phép luôn là 'Yes, you can.' (hoặc từ chối: 'No, you can't.'). Tuyệt đối không trả lời 'Yes, you may.'\n• Dịch: Em xin phép vào lớp ạ, thưa thầy Long? – Được, em vào đi.",
        tags: ["error-correction", "traps", "classroom-instructions", "unit-7", "grammar"]
      }
    }
  ]
};

// =============================================================================
// GOM TẤT CẢ 6 ĐỀ THI
// =============================================================================
const updatedData = {
  collection: {
    title: "Chuyên đề Ngữ pháp Trọng tâm & Bẫy Đề Thi HK1 - Tiếng Anh 3",
    subject_slug: "tieng_anh",
    grade: 3,
    volume: 1,
    units: [202],
    sequence_number: 3,
    exam_type: "review",
    reference_book: "Global Success - Tiếng Anh 3 Tập 1 (Chuyên đề Ngữ pháp)",
    status: "published"
  },
  exams: [
    ...existingExams,
    exam04,
    exam05,
    exam06
  ]
};

// Ghi file JSON nguồn
fs.writeFileSync(originalPath, JSON.stringify(updatedData, null, 2), 'utf8');

console.log('✓ Đã cập nhật thành công file: ' + originalPath);
console.log('  - Tiêu đề Collection: ' + updatedData.collection.title);
console.log('  - Tổng số đề: ' + updatedData.exams.length);
console.log('  - Chi tiết các đề:');
updatedData.exams.forEach((e: any) => {
  console.log(`    [Đề ${e.exam_number}] ${e.title} (${e.questions.length} câu)`);
});
console.log(`  - Tổng số câu hỏi: ${updatedData.exams.reduce((sum: number, e: any) => sum + e.questions.length, 0)} câu.`);
