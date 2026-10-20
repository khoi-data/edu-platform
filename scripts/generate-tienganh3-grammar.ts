import * as fs from 'fs';
import * as path from 'path';

const examBankData = {
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
    // =========================================================================
    // ĐỀ 01: ĐẠI TỪ, TO BE, HỎI XÁC NHẬN (THIS/THAT/IS THIS...?) & MẠO TỪ (A/AN)
    // =========================================================================
    {
      exam_number: 1,
      title: "Đề 01: Chuyên đề Đại từ, To Be, Hỏi xác nhận (This/That) & Mạo từ (A/An)",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Điền mạo từ thích hợp vào chỗ trống:\n\"Do you have _______ eraser? – Yes, I do.\"",
            options: ["an", "a", "the", "two"],
            correct_index: 0,
            hint: "💡 Từ 'eraser' bắt đầu bằng nguyên âm 'e' nên phải dùng mạo từ 'an'.",
            explanation: "• Quy tắc mạo từ: Dùng 'an' trước các danh từ đếm được số ít bắt đầu bằng một nguyên âm (u, e, o, a, i). 'eraser' bắt đầu bằng chữ 'e' nên dùng 'an eraser'.\n• Dịch: Bạn có một cục tẩy không? – Có, mình có.",
            tags: ["unit-8", "articles", "a-an", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"I have _______ red ruler in my pencil case.\"",
            options: ["a", "an", "the", "two"],
            correct_index: 0,
            hint: "💡 Từ 'red' bắt đầu bằng phụ âm 'r' nên dùng mạo từ 'a'.",
            explanation: "• Quy tắc mạo từ: Dùng 'a' trước từ bắt đầu bằng phụ âm. 'red' bắt đầu bằng âm /r/ nên dùng 'a red ruler' (một chiếc thước kẻ màu đỏ).\n• Dịch: Mình có một chiếc thước kẻ màu đỏ trong hộp bút.",
            tags: ["unit-8", "articles", "a-an", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Touch your eye! – What's this? – It's _______ eye.\"",
            options: ["an", "a", "the", "two"],
            correct_index: 0,
            hint: "💡 'eye' (mắt) bắt đầu bằng nguyên âm 'e' nên đi với mạo từ 'an'.",
            explanation: "• Quy tắc mạo từ: 'eye' bắt đầu bằng nguyên âm 'e' /aɪ/ nên dùng 'an eye' (một con mắt).\n• Dịch: Chạm vào mắt bạn nào! – Đây là cái gì? – Đó là một con mắt.",
            tags: ["unit-4", "articles", "body-parts", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Is this _______ art room? – Yes, it is.\"",
            options: ["an", "a", "the", "two"],
            correct_index: 0,
            hint: "💡 'art room' (phòng mỹ thuật) bắt đầu bằng nguyên âm 'a' nên đi với 'an'.",
            explanation: "• Quy tắc mạo từ: 'art' bắt đầu bằng nguyên âm 'a' /ɑːt/ nên đi kèm mạo từ 'an' → 'an art room' (một phòng mỹ thuật).\n• Dịch: Đây có phải là một phòng mỹ thuật không? – Đúng vậy.",
            tags: ["unit-6", "articles", "school", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Nam muốn giới thiệu bạn Mary đang đứng ngay cạnh mình:\n\"_______ is my friend, Mary.\"",
            options: ["This", "That", "It", "They"],
            correct_index: 0,
            hint: "💡 Dùng 'This is' để giới thiệu người hoặc đồ vật ở cự ly GẦN.",
            explanation: "• Đại từ chỉ định:\n  - 'This is' dùng để chỉ người/vật ở gần người nói.\n  - 'That is' (That's) dùng để chỉ người/vật ở xa.\n• Vì Mary đang đứng cạnh Nam nên dùng 'This is my friend, Mary.'",
            tags: ["unit-3", "demonstratives", "this-that", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Chỉ vào thầy giáo đang đứng ở đằng xa phía cổng trường:\n\"_______ is our teacher, Mr Long.\"",
            options: ["That", "This", "It", "They"],
            correct_index: 0,
            hint: "💡 Dùng 'That is' (That's) để chỉ người hoặc đồ vật ở cự ly XA.",
            explanation: "• 'That is' (That's) được dùng để chỉ/giới thiệu người hoặc vật ở xa người nói.\n• Dịch: Đằng kia là thầy giáo của chúng mình, thầy Long.",
            tags: ["unit-3", "demonstratives", "this-that", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy câu hỏi Yes/No với người:\n\"Is that Bill? – Yes, _______.\"",
            options: ["it is", "that is", "she is", "he does"],
            correct_index: 0,
            hint: "💡 Bẫy kinh điển: Trong Tiếng Anh 3, câu hỏi 'Is this/that...?' luôn trả lời bằng 'it is' hoặc 'it isn't'.",
            explanation: "• Bẫy ngữ pháp: Khi hỏi 'Is this...?' hoặc 'Is that...?', câu trả lời khẳng định chuẩn luôn là 'Yes, it is.' Tuyệt đối KHÔNG trả lời 'Yes, that is.' hay 'Yes, he is.' ở cấp độ này.\n• Phủ định: 'No, it isn't.'",
            tags: ["unit-3", "traps", "yes-no", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy câu hỏi Yes/No phủ định:\n\"Is this Lucy? – No, _______.\"",
            options: ["it isn't", "this isn't", "it is", "she doesn't"],
            correct_index: 0,
            hint: "💡 Phủ định của 'Is this...?' là 'No, it isn't.'",
            explanation: "• Công thức trả lời phủ định: 'No, it isn't.' (viết tắt của it is not).\n• Phương án B 'this isn't' là bẫy sai ngữ pháp phổ biến của học sinh.",
            tags: ["unit-3", "traps", "yes-no", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Is this our school? – Yes, _______.\"",
            options: ["it is", "this is", "they are", "it isn't"],
            correct_index: 0,
            hint: "💡 Trả lời khẳng định cho câu hỏi 'Is this our school?' là 'Yes, it is.'",
            explanation: "• Câu hỏi 'Is this our school?' (Đây có phải trường của chúng mình không?) → Trả lời: 'Yes, it is.' (Đúng rồi).\n• 'it' thay thế cho danh từ chỉ vật số ít 'our school'.",
            tags: ["unit-6", "school", "yes-no", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"This is my teacher. _______ is Ms Hoa.\"",
            options: ["She", "He", "It", "They"],
            correct_index: 0,
            hint: "💡 'Ms Hoa' (cô Hoa) là phái nữ nên dùng đại từ 'She'.",
            explanation: "• Đại từ nhân xưng:\n  - 'She' dùng cho nữ giới (Ms Hoa, Mary, Mai).\n  - 'He' dùng cho nam giới (Mr Long, Bill, Nam).\n• Dịch: Đây là cô giáo của mình. Cô là cô Hoa.",
            tags: ["unit-3", "pronouns", "he-she", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"That is Minh. _______ is my best friend.\"",
            options: ["He", "She", "It", "They"],
            correct_index: 0,
            hint: "💡 'Minh' là bạn nam nên dùng đại từ 'He'.",
            explanation: "• 'Minh' là người nam giới (số ít) nên đại từ nhân xưng thay thế tương ứng là 'He' (Cậu ấy/Anh ấy).\n• Dịch: Đằng kia là Minh. Cậu ấy là bạn thân nhất của mình.",
            tags: ["unit-3", "pronouns", "he-she", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Look at Nam and Mai. _______ are in the classroom.\"",
            options: ["They", "He", "She", "It"],
            correct_index: 0,
            hint: "💡 'Nam and Mai' là 2 người (số nhiều) nên dùng đại từ 'They'.",
            explanation: "• Khi chủ ngữ gồm 2 người trở lên ('Nam and Mai' - ngôi thứ 3 số nhiều), đại từ thay thế là 'They' (Họ / Chúng bạn ấy).\n• Dịch: Hãy nhìn Nam và Mai kìa. Các bạn ấy đang ở trong lớp học.",
            tags: ["unit-3", "pronouns", "plural", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Hello, I _______ Lucy. Nice to meet you.\"",
            options: ["am", "is", "are", "be"],
            correct_index: 0,
            hint: "💡 Chủ ngữ 'I' luôn đi với động từ to be 'am' (I am = I'm).",
            explanation: "• Động từ to be ở hiện tại đơn:\n  - 'I' + am\n  - 'He / She / It / Danh từ số ít' + is\n  - 'You / We / They / Danh từ số nhiều' + are.\n• Dịch: Xin chào, mình là Lucy. Rất vui được gặp bạn.",
            tags: ["unit-1", "to-be", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"What's your name? – My name _______ Linh.\"",
            options: ["is", "am", "are", "be"],
            correct_index: 0,
            hint: "💡 'My name' (tên của mình) là danh từ số ít nên đi với to be 'is'.",
            explanation: "• 'My name' là danh từ số ít nên đi với động từ to be 'is' → 'My name is Linh' (viết tắt: My name's Linh).\n• Học sinh hay nhầm dùng 'am' vì thấy có từ 'My' giống 'I'.",
            tags: ["unit-2", "to-be", "names", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Tìm từ dùng SAI trong câu sau:\n\"I have a eraser and a pencil in my bag.\"",
            options: ["a eraser", "have", "and", "a pencil"],
            correct_index: 0,
            hint: "💡 'eraser' bắt đầu bằng nguyên âm 'e' nên không thể đi với 'a'.",
            explanation: "• Lỗi sai: 'a eraser' là sai ngữ pháp. Phải sửa thành 'an eraser' vì từ 'eraser' bắt đầu bằng nguyên âm /ɪ/ (chữ cái 'e').\n• 'a pencil' là đúng vì 'pencil' bắt đầu bằng phụ âm 'p'.",
            tags: ["unit-8", "traps", "articles", "error-identification"]
          }
        }
      ]
    },

    // =========================================================================
    // ĐỀ 02: TRỢ ĐỘNG TỪ (DO YOU HAVE...?), CÂU XIN PHÉP (MAY I...?) & MỆNH LỆNH
    // =========================================================================
    {
      exam_number: 2,
      title: "Đề 02: Chuyên đề Trợ động từ (Do you have...?), Câu xin phép (May I...?) & Mệnh lệnh",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Chọn trợ động từ thích hợp:\n\"_______ you have a school bag? – Yes, I do.\"",
            options: ["Do", "Are", "Is", "Does"],
            correct_index: 0,
            hint: "💡 Câu hỏi sở hữu với chủ ngữ 'you' dùng trợ động từ 'Do'.",
            explanation: "• Công thức câu hỏi sở hữu (Yes/No question) trong Unit 8:\n  Do you have + a/an + Danh từ số ít?\n• Chủ ngữ 'you' đi với trợ động từ 'Do'.\n• Dịch: Bạn có cặp sách không? – Có, mình có.",
            tags: ["unit-8", "auxiliary", "do-you-have", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy câu trả lời khẳng định:\n\"Do you have a notebook? – Yes, I _______.\"",
            options: ["do", "am", "have", "can"],
            correct_index: 0,
            hint: "💡 Hỏi bằng 'Do you...' thì trả lời bằng 'Yes, I do' (KHÔNG dùng 'Yes, I am').",
            explanation: "• Bẫy kinh điển: Học sinh rất hay nhầm lẫn giữa to be ('I am') và trợ động từ ('I do').\n• Câu hỏi bắt đầu bằng 'Do' thì câu trả lời ngắn bắt buộc phải kết thúc bằng 'do': 'Yes, I do.'",
            tags: ["unit-8", "traps", "do-you-have", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy câu trả lời phủ định:\n\"Do you have a ruler? – No, I _______.\"",
            options: ["don't", "am not", "haven't", "can't"],
            correct_index: 0,
            hint: "💡 Phủ định của câu hỏi 'Do you have...?' là 'No, I don't.'",
            explanation: "• Công thức trả lời phủ định: 'No, I don't.' (viết tắt của do not).\n• Phương án B 'am not' sai vì đây không phải câu hỏi to be. Phương án C 'haven't' không dùng trong chương trình lớp 3.",
            tags: ["unit-8", "traps", "do-you-have", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Học sinh muốn xin phép vào lớp học:\n\"_______ I come in, Mr Long? – Yes, you can.\"",
            options: ["May", "Do", "Am", "Are"],
            correct_index: 0,
            hint: "💡 Dùng 'May I + V...?' để xin phép một cách lịch sự.",
            explanation: "• Cấu trúc xin phép lịch sự trong Unit 7:\n  May I + V nguyên thể (come in / go out / speak / open the book)...?\n• Dịch: Thưa thầy Long, em có thể vào lớp được không ạ? – Được, em vào đi.",
            tags: ["unit-7", "permissions", "may-i", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy trả lời câu xin phép đồng ý:\n\"May I go out, teacher? – Yes, you _______.\"",
            options: ["can", "may", "do", "are"],
            correct_index: 0,
            hint: "💡 Bẫy: Hỏi 'May I...?' nhưng câu trả lời đồng ý chuẩn lớp 3 là 'Yes, you can.'",
            explanation: "• Bẫy sách giáo khoa Global Success: Khi học sinh hỏi 'May I...?', thầy cô trả lời cho phép bằng cấu trúc 'Yes, you can.' (hoặc từ chối: 'No, you can't.').\n• Tuyệt đối KHÔNG trả lời 'Yes, you may' hay 'Yes, you do'.",
            tags: ["unit-7", "traps", "may-i", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy trả lời câu xin phép từ chối:\n\"May I speak Vietnamese, Ms Hoa? – No, you _______.\"",
            options: ["can't", "may not", "don't", "aren't"],
            correct_index: 0,
            hint: "💡 Từ chối lời xin phép 'May I...?' bằng 'No, you can't.'",
            explanation: "• Câu trả lời từ chối không cho phép: 'No, you can't.' (viết tắt của can not).\n• Dịch: Thưa cô Hoa, em có thể nói tiếng Việt không ạ? – Không, em không được nói (trong giờ tiếng Anh).",
            tags: ["unit-7", "traps", "may-i", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Open your book, _______.\"",
            options: ["please", "thank you", "fine", "bye"],
            correct_index: 0,
            hint: "💡 Thêm từ 'please' ở cuối câu mệnh lệnh để biểu thị sự lịch sự.",
            explanation: "• Câu mệnh lệnh lịch sự trong lớp học: Động từ nguyên thể + tân ngữ + ', please.'\n• Dịch: Xin mời các em mở sách ra.",
            tags: ["unit-7", "imperatives", "classroom", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Cô giáo muốn cả lớp đứng dậy chào:\n\"_______ up, please!\"",
            options: ["Stand", "Sit", "Open", "Close"],
            correct_index: 0,
            hint: "💡 Cụm từ đứng lên: 'Stand up'.",
            explanation: "• Cụm động từ chỉ tư thế:\n  - 'Stand up': đứng dậy\n  - 'Sit down': ngồi xuống\n• Dịch: Xin mời cả lớp đứng dậy!",
            tags: ["unit-7", "imperatives", "classroom", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Thầy giáo cho phép học sinh ngồi xuống sau khi chào:\n\"_______ down, please!\"",
            options: ["Sit", "Stand", "Touch", "Come"],
            correct_index: 0,
            hint: "💡 Cụm từ ngồi xuống: 'Sit down'.",
            explanation: "• 'Sit down, please!' là khẩu lệnh mời ngồi xuống.\n• Dịch: Xin mời các em ngồi xuống!",
            tags: ["unit-7", "imperatives", "classroom", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"_______ your nose! (Chạm tay vào mũi của bạn)\"",
            options: ["Touch", "Open", "Close", "Sing"],
            correct_index: 0,
            hint: "💡 Động từ chạm/sờ vào: 'Touch'.",
            explanation: "• Câu mệnh lệnh ở Unit 4: 'Touch your + bộ phận cơ thể!' (Touch your nose! / Touch your face! / Touch your ears!).\n• Dịch: Hãy chạm vào mũi của bạn!",
            tags: ["unit-4", "imperatives", "body", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Đầu giờ học, cô giáo nói: \"_______ your books, please! We start page 10.\"",
            options: ["Open", "Close", "Touch", "Sit"],
            correct_index: 0,
            hint: "💡 Bắt đầu học bài thì phải 'mở' sách ra: 'Open'.",
            explanation: "• 'Open your books': Mở sách ra (đối lập với 'Close your books': Gấp sách lại).\n• Dịch: Xin mời các em mở sách ra! Chúng ta bắt đầu trang 10.",
            tags: ["unit-7", "imperatives", "classroom", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Hết giờ học, cô dặn cả lớp: \"Time is up. _______ your books, please!\"",
            options: ["Close", "Open", "Touch", "Stand"],
            correct_index: 0,
            hint: "💡 Hết giờ thì 'gấp' sách lại: 'Close'.",
            explanation: "• 'Close your books, please!': Xin mời các em gấp sách lại!\n• Dịch: Hết giờ rồi. Xin mời các em gấp sách lại!",
            tags: ["unit-7", "imperatives", "classroom", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Chọn dạng đúng của động từ sau 'Let's':\n\"Let's _______ to the school playground!\"",
            options: ["go", "goes", "to go", "going"],
            correct_index: 0,
            hint: "💡 Sau 'Let's' luôn là động từ nguyên mẫu không 'to' (V-inf).",
            explanation: "• Cấu trúc rủ rê, đề nghị: Let's + V nguyên thể (V-inf).\n• 'go' là dạng nguyên thể, không chia thêm 's' hay 'ing'.\n• Dịch: Chúng mình cùng ra sân chơi trường đi!",
            tags: ["unit-6", "suggestions", "lets", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"Let's go to the music room! – _______.\"",
            options: ["OK, let's go.", "Yes, it is.", "Fine, thank you.", "No, it isn't."],
            correct_index: 0,
            hint: "💡 Đáp lại lời rủ rê 'Let's...' đồng ý bằng câu 'OK, let's go.'",
            explanation: "• Lời đáp lại lời đề nghị 'Let's go to...' khi đồng ý là: 'OK, let's go.' (Được thôi, chúng mình đi nào).\n• Phương án B, D dùng cho câu hỏi Yes/No 'Is this...?'",
            tags: ["unit-6", "suggestions", "responses", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Sắp xếp đúng trật tự câu mệnh lệnh sau:\n\"your / Open / please / pencil case / , / .\"",
            options: [
              "Open your pencil case, please.",
              "Please open pencil case your.",
              "Your pencil case open, please.",
              "Open please your pencil case."
            ],
            correct_index: 0,
            hint: "💡 Trật tự chuẩn: Động từ (Open) + Cụm danh từ (your pencil case) + , please.",
            explanation: "• Trật tự chuẩn của câu mệnh lệnh lịch sự: V + O + , please.\n• 'Open your pencil case, please.' (Hãy mở hộp bút của em ra nhé).",
            tags: ["unit-7", "sentence-building", "imperatives", "grammar"]
          }
        }
      ]
    },

    // =========================================================================
    // ĐỀ 03: TỪ ĐỂ HỎI (WHAT, WHAT COLOUR, HOW, HOW OLD) & SỐ ÍT / SỐ NHIỀU
    // =========================================================================
    {
      exam_number: 3,
      title: "Đề 03: Chuyên đề Từ để hỏi (What, What colour, How, How old) & Số ít / Số nhiều",
      duration_minutes: 20,
      questions: [
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"_______ are you, Mary? – I'm fine, thank you.\"",
            options: ["How", "What", "Who", "Where"],
            correct_index: 0,
            hint: "💡 Hỏi thăm sức khỏe dùng từ để hỏi 'How' (How are you?).",
            explanation: "• Cấu trúc hỏi thăm sức khỏe: 'How are you?' (Bạn có khỏe không?)\n• Trả lời: 'I'm fine, thank you.' hoặc 'Fine, thanks.'\n• Dịch: Bạn khỏe không Mary? – Mình khỏe, cảm ơn bạn.",
            tags: ["unit-1", "wh-questions", "how", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"_______ is your name? – My name's Nam.\"",
            options: ["What", "How", "Who", "Where"],
            correct_index: 0,
            hint: "💡 Hỏi tên dùng từ để hỏi 'What' (What is your name? = What's your name?).",
            explanation: "• Cấu trúc hỏi tên: 'What is your name?' (viết tắt là 'What's your name?').\n• Trả lời: 'My name's + tên' hoặc 'I'm + tên.'\n• Dịch: Tên bạn là gì? – Tên mình là Nam.",
            tags: ["unit-2", "wh-questions", "what", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"_______ old are you? – I'm eight years old.\"",
            options: ["How", "What", "Who", "How many"],
            correct_index: 0,
            hint: "💡 Hỏi tuổi dùng cụm 'How old' (How old are you?).",
            explanation: "• Cấu trúc hỏi tuổi: 'How old are you?' (Bạn bao nhiêu tuổi?)\n• Trả lời: 'I'm + số tuổi + years old.'\n• 'What' không đi với 'old'. 'How many' dùng để hỏi số lượng đồ vật.",
            tags: ["unit-2", "wh-questions", "how-old", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"How old are you? – I'm nine _______.\"",
            options: ["years old", "year old", "years", "old years"],
            correct_index: 0,
            hint: "💡 'nine' là 9 (số nhiều) nên phải là 'years old' (có chữ 's').",
            explanation: "• Cụm từ nói tuổi đầy đủ: số tuổi + 'years old' (với số từ 2 trở lên thì 'year' phải ở dạng số nhiều 'years').\n• Phương án B sai vì thiếu 's' ở 'year'.",
            tags: ["unit-2", "age", "years-old", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"What's your hobby? – It's _______.\"",
            options: ["dancing", "dance", "dances", "to dance"],
            correct_index: 0,
            hint: "💡 Trả lời sở thích dùng danh động từ V-ing (dancing/singing/swimming).",
            explanation: "• Cấu trúc hỏi - đáp sở thích trong Unit 5:\n  What's your hobby? – It's + V-ing (It's dancing / It's singing / It's swimming).\n  Hoặc: I like + V-ing.\n• Dịch: Sở thích của bạn là gì? – Đó là khiêu vũ.",
            tags: ["unit-5", "hobbies", "v-ing", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Chọn động từ thích hợp đi với môn cờ vua:\n\"What do you do at break time? – I _______ chess.\"",
            options: ["play", "do", "make", "have"],
            correct_index: 0,
            hint: "💡 Chơi các môn thể thao/trò chơi dùng động từ 'play' (play chess/play football).",
            explanation: "• Quy tắc dùng động từ trong Unit 10:\n  - 'play' đi với trò chơi/môn thể thao: play chess (chơi cờ), play badminton (chơi cầu lông), play football (chơi bóng đá).\n• Dịch: Bạn làm gì vào giờ ra chơi? – Mình chơi cờ vua.",
            tags: ["unit-10", "collocations", "play", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Bẫy động từ với câu đố chữ (word puzzles):\n\"What do you do at break time? – I _______ word puzzles.\"",
            options: ["do", "play", "make", "have"],
            correct_index: 0,
            hint: "💡 Cụm cố định đặc trưng của Unit 10: 'do word puzzles' (giải câu đố chữ).",
            explanation: "• Bẫy kinh điển: Học sinh rất hay nhầm chọn 'play' cho câu đố chữ. Tuy nhiên, chuẩn sách giáo khoa Global Success Unit 10 quy định dùng cụm 'do word puzzles' (giải câu đố ô chữ).\n• Dịch: Mình giải câu đố chữ vào giờ ra chơi.",
            tags: ["unit-10", "traps", "collocations", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Hỏi màu sắc đồ vật số ít:\n\"What colour _______ your school bag? – It's yellow.\"",
            options: ["is", "are", "am", "be"],
            correct_index: 0,
            hint: "💡 'your school bag' là 1 chiếc cặp (số ít) nên dùng 'is'.",
            explanation: "• Cấu trúc hỏi màu sắc số ít:\n  What colour is + Danh từ số ít?\n  → Trả lời: It's + màu sắc.\n• 'your school bag' không có 's' là danh từ số ít nên đi với to be 'is'.",
            tags: ["unit-9", "colours", "singular", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Hỏi màu sắc đồ vật số nhiều:\n\"What colour _______ your pencils? – They are green.\"",
            options: ["are", "is", "am", "be"],
            correct_index: 0,
            hint: "💡 'your pencils' có đuôi 's' (những chiếc bút chì - số nhiều) nên dùng 'are'.",
            explanation: "• Cấu trúc hỏi màu sắc số nhiều trong Unit 9:\n  What colour are + Danh từ số nhiều?\n  → Trả lời: They're + màu sắc.\n• 'pencils' là số nhiều nên đi với động từ to be 'are'.",
            tags: ["unit-9", "colours", "plural", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"What colour is the ruler? – _______ is blue.\"",
            options: ["It", "They", "This", "He"],
            correct_index: 0,
            hint: "💡 Đồ vật số ít (the ruler) trả lời bằng đại từ 'It' (It is = It's).",
            explanation: "• 'the ruler' (chiếc thước kẻ) là đồ vật số ít, đại từ thay thế tương ứng là 'It' (Nó) → 'It is blue.' (Nó màu xanh dương).",
            tags: ["unit-9", "pronouns", "singular", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "\"What colour are the notebooks? – _______ are orange.\"",
            options: ["They", "It", "These", "She"],
            correct_index: 0,
            hint: "💡 Đồ vật số nhiều (the notebooks) trả lời bằng đại từ 'They' (They are = They're).",
            explanation: "• 'the notebooks' (những quyển vở - số nhiều) nên đại từ thay thế tương ứng là 'They' (Chúng nó) → 'They are orange.' (Chúng có màu cam).\n• Học sinh hay nhầm dùng 'It' theo thói quen.",
            tags: ["unit-9", "traps", "plural-pronoun", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"I have _______ eraser and two rulers in my pencil case.\"",
            options: ["one", "two", "three", "four"],
            correct_index: 0,
            hint: "💡 'eraser' ở dạng số ít (không có 's') nên chỉ có thể là số đếm 'one' (1 cái).",
            explanation: "• 'eraser' là danh từ số ít nên chỉ có thể đi với số đếm 'one' (1 cái tẩy). Các số từ 'two', 'three', 'four' bắt buộc danh từ phải thêm 's' (erasers).",
            tags: ["unit-8", "singular-plural", "numbers", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"I have five _______ in my school bag.\"",
            options: ["pens", "pen", "a pen", "one pen"],
            correct_index: 0,
            hint: "💡 Sau số từ 'five' (năm) danh từ phải ở dạng số nhiều thêm 's' (pens).",
            explanation: "• Quy tắc số nhiều: Danh từ đếm được đứng sau các số từ 2 trở lên (two, three, four, five...) phải ở dạng số nhiều (thêm 's' hoặc 'es') → 'five pens' (năm chiếc bút mực).",
            tags: ["unit-8", "plural-nouns", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "\"What's this? – It's _______ nose.\"",
            options: ["a", "an", "two", "these"],
            correct_index: 0,
            hint: "💡 'nose' (mũi) bắt đầu bằng phụ âm 'n' nên đi với mạo từ 'a'.",
            explanation: "• 'nose' bắt đầu bằng phụ âm /n/ nên đi với mạo từ 'a' → 'a nose' (một chiếc mũi).\n• Dịch: Đây là cái gì? – Đó là một chiếc mũi.",
            tags: ["unit-4", "articles", "body", "grammar"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Tìm từ dùng SAI trong câu sau:\n\"What colour is your books? – They are red.\"",
            options: ["is", "your", "books", "are"],
            correct_index: 0,
            hint: "💡 'your books' là danh từ số nhiều nên không thể dùng to be 'is'.",
            explanation: "• Lỗi sai: 'is' là sai ngữ pháp. Chủ ngữ 'your books' có đuôi 's' là số nhiều, nên động từ to be phải là 'are' → 'What colour are your books?'\n• 'They are red' ở vế sau cũng là căn cứ cho thấy đây là câu hỏi đồ vật số nhiều.",
            tags: ["unit-9", "traps", "singular-plural", "error-identification"]
          }
        }
      ]
    }
  ]
};

const outDir = path.resolve('content/exam-bank/tieng-anh');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'tienganh3-grammar-review-hk1.json');
fs.writeFileSync(outFile, JSON.stringify(examBankData, null, 2), 'utf8');
console.log(`✓ Đã tạo thành công file: ${outFile}`);
console.log(`  - Collection: ${examBankData.collection.title}`);
console.log(`  - Số đề: ${examBankData.exams.length}`);
console.log(`  - Tổng số câu hỏi: ${examBankData.exams.reduce((sum, e) => sum + e.questions.length, 0)}`);
