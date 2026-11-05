import * as fs from 'fs';
import * as path from 'path';

// Đọc 3 đề hiện có từ file gốc
const originalPath = path.resolve('content/exam-bank/tieng-anh/tienganh7-grammar-review-hk1.json');
const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));

// 3 đề hiện có: Đề 1 (Unit 1 & 2), Đề 2 (Unit 3 & 4), Đề 3 (Unit 1 - 4 Nâng cao)
const existingExams = originalData.exams.slice(0, 3);

// =============================================================================
// ĐỀ 04: CHUYÊN ĐỀ NGỮ PHÁP UNIT 5: FOOD AND DRINK (15 CÂU)
// Trọng tâm:
// - Countable vs Uncountable Nouns
// - Some vs Any (Bẫy câu hỏi mời mọc Would you like some...?)
// - How much vs How many
// - Cụm từ chỉ đơn vị đo lường (a bottle of, a kilo of, a pinch of, a loaf of...)
// - Viết lại câu & phân biệt số lượng
// =============================================================================
const exam04 = {
  exam_number: 4,
  title: "Đề 04: Chuyên đề Ngữ pháp Unit 5 (Countable / Uncountable, Some / Any, How much / How many & Lượng từ)",
  duration_minutes: 25,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "Chọn từ thích hợp điền vào chỗ trống:\n\"We need to buy _______ eggs and _______ cooking oil to make pancakes.\"",
        options: [
          "some - some",
          "any - some",
          "some - any",
          "any - any"
        ],
        correct_index: 0,
        hint: "💡 Cả hai vế đều là câu khẳng định, dùng 'some' trước cả danh từ đếm được số nhiều và danh từ không đếm được.",
        explanation: "• 'some' được dùng trong câu khẳng định trước:\n  + Danh từ đếm được số nhiều (some eggs: vài quả trứng)\n  + Danh từ không đếm được (some cooking oil: một ít dầu ăn)\n• 'any' chỉ dùng trong câu phủ định hoặc nghi vấn thông thường.\n• Dịch: Chúng ta cần mua một ít trứng và một ít dầu ăn để làm bánh kếp.",
        tags: ["unit-5", "some-any", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Lan đang mời bạn uống nước:\n\"_______ you like _______ lemonade? – Yes, please. I'm really thirsty.\"",
        options: [
          "Would - some",
          "Do - any",
          "Would - any",
          "Do - some"
        ],
        correct_index: 0,
        hint: "💡 Bẫy kinh điển: Câu hỏi mang tính chất MỜI MỌC lịch sự dùng 'Would you like...?' kết hợp với 'some' (KHÔNG dùng 'any').",
        explanation: "• Cấu trúc lời mời lịch sự: 'Would you like some + N?' (Bạn có muốn dùng một chút... không?).\n• Dù câu có dấu chấm hỏi (?), nhưng vì đây là lời mời/đề nghị chứ không phải câu hỏi dò thông tin nên bắt buộc dùng 'some', tuyệt đối KHÔNG dùng 'any'.\n• Dịch: Bạn có muốn uống một chút nước chanh không? – Vâng, làm ơn. Mình đang rất khát.",
        tags: ["unit-5", "traps", "some-any", "invitation"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"There isn't _______ milk left in the carton, but there are _______ oranges in the basket.\"",
        options: [
          "any - some",
          "some - any",
          "some - some",
          "any - any"
        ],
        correct_index: 0,
        hint: "💡 Vế 1 là câu phủ định (isn't) dùng 'any', vế 2 là câu khẳng định (there are) dùng 'some'.",
        explanation: "• Vế đầu phủ định: 'isn't' → dùng 'any milk' (không còn chút sữa nào).\n• Vế sau khẳng định: 'there are' → dùng 'some oranges' (có vài quả cam).\n• Dịch: Không còn chút sữa nào trong hộp giấy, nhưng có vài quả cam trong giỏ.",
        tags: ["unit-5", "some-any", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"_______ bottles of mineral water do we need for the picnic?\"",
        options: [
          "How many",
          "How much",
          "How often",
          "How long"
        ],
        correct_index: 0,
        hint: "💡 'bottles' (những cái chai) là danh từ đếm được số nhiều, nên dùng 'How many'.",
        explanation: "• 'How many' + danh từ đếm được số nhiều (bottles of water).\n• Lưu ý: 'water' là không đếm được, nhưng 'bottles of water' lại là danh từ đếm được vì có đơn vị đo lường 'bottles' (những cái chai).\n• Dịch: Chúng ta cần bao nhiêu chai nước khoáng cho chuyến dã ngoại?",
        tags: ["unit-5", "how-much-how-many", "partitives"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"_______ flour do we need to bake this birthday cake? – About 500 grams.\"",
        options: [
          "How much",
          "How many",
          "How often",
          "How long"
        ],
        correct_index: 0,
        hint: "💡 'flour' (bột mì) là danh từ không đếm được, dùng 'How much'.",
        explanation: "• 'How much' + danh từ không đếm được (flour, sugar, water, milk...).\n• Dịch: Chúng ta cần bao nhiêu bột mì để nướng chiếc bánh sinh nhật này? – Khoảng 500 gam.",
        tags: ["unit-5", "how-much-how-many", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Từ nào sau đây là danh từ ĐẾM ĐƯỢC (Countable Noun)?",
        options: [
          "pancake",
          "bread",
          "pork",
          "pepper"
        ],
        correct_index: 0,
        hint: "💡 'pancake' (bánh kếp) có thể đếm từng chiếc: one pancake, two pancakes. 'bread' trong tiếng Anh là danh từ không đếm được.",
        explanation: "• 'pancake' là danh từ đếm được (a pancake, two pancakes).\n• Bẫy tiếng Anh: 'bread' (bánh mì) là danh từ KHÔNG đếm được (phải nói 'a loaf of bread' hoặc 'a slice of bread').\n• 'pork' (thịt lợn) và 'pepper' (hạt tiêu) là các danh từ không đếm được.",
        tags: ["unit-5", "traps", "countable-uncountable"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Chọn nhóm chứa TOÀN BỘ là danh từ KHÔNG ĐẾM ĐƯỢC (Uncountable Nouns):",
        options: [
          "beef, butter, rice, lemonade",
          "apple, milk, pork, carrot",
          "egg, soup, orange, cheese",
          "sandwich, onion, flour, water"
        ],
        correct_index: 0,
        hint: "💡 Tìm nhóm không chứa bất kỳ danh từ nào có thể thêm 's/es' hay đếm 1, 2, 3 chiếc.",
        explanation: "• Nhóm A gồm toàn danh từ không đếm được: beef (thịt bò), butter (bơ), rice (gạo/cơm), lemonade (nước chanh).\n• Nhóm B chứa 'apple' và 'carrot' (đếm được).\n• Nhóm C chứa 'egg' và 'orange' (đếm được).\n• Nhóm D chứa 'sandwich' và 'onion' (đếm được).",
        tags: ["unit-5", "countable-uncountable", "classification"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Điền lượng từ đo lường thích hợp:\n\"Please add a _______ of salt into the boiling vegetable soup.\"",
        options: [
          "pinch",
          "kilo",
          "loaf",
          "carton"
        ],
        correct_index: 0,
        hint: "💡 Khi nêm muối vào súp chỉ dùng một 'nhúm' nhỏ: 'a pinch of salt'.",
        explanation: "• 'a pinch of salt': một nhúm muối (lượng rất nhỏ bốc bằng đầu ngón tay).\n• 'a loaf of bread': một ổ bánh mì.\n• 'a carton of milk/juice': một hộp giấy sữa/nước ép.\n• 'a kilo of meat': một cân thịt.\n• Dịch: Hãy cho thêm một nhúm muối vào nồi canh rau đang sôi.",
        tags: ["unit-5", "partitives", "collocations"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"My grandmother usually has a _______ of warm milk and two _______ of bread for breakfast.\"",
        options: [
          "glass - slices",
          "slice - glasses",
          "bottle - pinches",
          "pinch - loaves"
        ],
        correct_index: 0,
        hint: "💡 Uống sữa dùng 'a glass of' (ly sữa), ăn bánh mì lát dùng 'slices of bread'.",
        explanation: "• 'a glass of warm milk': một ly sữa ấm.\n• 'two slices of bread': hai lát bánh mì.\n• Dịch: Bà tôi thường uống một ly sữa ấm và ăn hai lát bánh mì cho bữa sáng.",
        tags: ["unit-5", "partitives", "collocations"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"Can I have a _______ of canned tuna to make salad, Mom?\"",
        options: [
          "tin",
          "bunch",
          "bar",
          "loaf"
        ],
        correct_index: 0,
        hint: "💡 Cá ngừ đóng hộp dùng đơn vị 'tin' hoặc 'can' (a tin of tuna).",
        explanation: "• 'a tin / can of tuna': một hộp cá ngừ đóng hộp.\n• 'a bunch of bananas/grapes': một nải chuối / chùm nho.\n• 'a bar of chocolate/soap': một thanh sô-cô-la / bánh xà phòng.\n• 'a loaf of bread': một ổ bánh mì.",
        tags: ["unit-5", "partitives", "vocabulary"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu sau với nghĩa không đổi:\n\"How much does a bowl of beef noodle soup cost?\"\n→ How much _______?\"",
        options: [
          "is a bowl of beef noodle soup",
          "does cost a bowl of beef noodle soup",
          "cost a bowl of beef noodle soup",
          "are a bowl of beef noodle soup"
        ],
        correct_index: 0,
        hint: "💡 Cấu trúc hỏi giá tiền: How much does + S + cost? ↔ How much is/are + S?",
        explanation: "• 'How much does + S + cost?' tương đương với 'How much is + S (số ít)?'.\n• Chủ ngữ 'a bowl of beef noodle soup' là số ít nên dùng to be 'is'.\n• Dịch: Một bát phở bò giá bao nhiêu tiền?",
        tags: ["unit-5", "rewrite", "how-much-cost"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Viết lại câu sau dùng cấu trúc phủ định tương đương:\n\"There is no butter left in the refrigerator.\"\n→ There _______.",
        options: [
          "isn't any butter left in the refrigerator",
          "aren't any butter left in the refrigerator",
          "isn't some butter left in the refrigerator",
          "is any butter left in the refrigerator"
        ],
        correct_index: 0,
        hint: "💡 Quy tắc chuyển đổi: There is no + Uncountable N ↔ There isn't any + Uncountable N.",
        explanation: "• 'There is no + N' tương đương với 'There isn't any + N' (với danh từ không đếm được như butter).\n• Không dùng 'aren't' vì butter là danh từ không đếm được.\n• Dịch: Không còn chút bơ nào trong tủ lạnh.",
        tags: ["unit-5", "rewrite", "some-any"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Tìm lỗi sai trong câu sau:\n\"How many cooking oil do you need to fry these spring rolls?\"",
        options: [
          "How many",
          "cooking oil",
          "need",
          "these spring rolls"
        ],
        correct_index: 0,
        hint: "💡 'cooking oil' là chất lỏng (danh từ không đếm được) nên không thể hỏi bằng 'How many'.",
        explanation: "• Lỗi sai ở 'How many': 'cooking oil' (dầu ăn) là danh từ không đếm được, từ để hỏi số lượng phải là 'How much' (hoặc 'How many litres/bottles of cooking oil').\n• Dịch: Bạn cần bao nhiêu dầu ăn để rán món nem này?",
        tags: ["unit-5", "error-identification", "how-much-how-many"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Hoàn thành câu miêu tả quy trình nấu ăn:\n\"First, _______ the eggs with sugar in a bowl, then _______ the mixture into the hot pan.\"",
        options: [
          "beat - pour",
          "pour - beat",
          "boil - serve",
          "fry - chop"
        ],
        correct_index: 0,
        hint: "💡 Đánh trứng dùng 'beat the eggs', rót hỗn hợp vào chảo dùng 'pour the mixture'.",
        explanation: "• 'beat the eggs': đánh trứng (khuấy đều lòng đỏ và lòng trắng).\n• 'pour the mixture into the pan': rót hỗn hợp vào chảo.\n• Dịch: Đầu tiên, hãy đánh trứng với đường trong bát, sau đó rót hỗn hợp vào chảo nóng.",
        tags: ["unit-5", "cooking-verbs", "vocabulary"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "\"There are fifty members in our school gourmet cooking club.\"\n→ Our school gourmet cooking club _______.",
        options: [
          "has fifty members",
          "is having fifty members",
          "have fifty members",
          "contain fifty members"
        ],
        correct_index: 0,
        hint: "💡 Cấu trúc: There are [số lượng] + N + in [chủ ngữ] ↔ [Chủ ngữ] + has/have [số lượng] + N.",
        explanation: "• Chuyển đổi giữa 'There is/are' và động từ sở hữu 'have/has'.\n• Chủ ngữ 'Our school gourmet cooking club' là danh từ số ít (ngôi thứ 3 số ít) nên động từ chia là 'has'.\n• Động từ 'have' chỉ sở hữu không chia thì tiếp diễn ('is having' là sai).\n• Dịch: Câu lạc bộ nấu ăn sành điệu của trường chúng tôi có 50 thành viên.",
        tags: ["unit-5", "rewrite", "there-is-are"]
      }
    }
  ]
};

// =============================================================================
// ĐỀ 05: CHUYÊN ĐỀ NGỮ PHÁP UNIT 6: A VISIT TO A SCHOOL (15 CÂU)
// Trọng tâm:
// - Giới từ chỉ thời gian: at, in, on
// - Giới từ chỉ nơi chốn: at, in, on, between, next to, opposite, in front of, behind
// - Cấu trúc There is / There are vs There was / There were
// - Viết lại câu định vị không gian & miêu tả trường học
// =============================================================================
const exam05 = {
  exam_number: 5,
  title: "Đề 05: Chuyên đề Ngữ pháp Unit 6 (Giới từ Thời gian & Nơi chốn in/on/at, There was/were & Trường học)",
  duration_minutes: 25,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"Our school opening ceremony will take place _______ 7:30 a.m. _______ September 5th.\"",
        options: [
          "at - on",
          "in - on",
          "at - in",
          "on - in"
        ],
        correct_index: 0,
        hint: "💡 '7:30 a.m.' là giờ chính xác (dùng 'at'); 'September 5th' có ngày cụ thể (dùng 'on').",
        explanation: "• Giới từ thời gian:\n  - Dùng 'at' trước giờ giấc cụ thể (at 7:30 a.m.).\n  - Dùng 'on' trước ngày cụ thể trong tháng (on September 5th - ngày 5 tháng 9).\n• Dịch: Lễ khai giảng trường chúng tôi sẽ diễn ra vào lúc 7:30 sáng ngày 5 tháng 9.",
        tags: ["unit-6", "prepositions-time", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"We usually have English classes _______ Monday mornings and _______ the afternoon on Thursdays.\"",
        options: [
          "on - in",
          "in - at",
          "at - on",
          "on - at"
        ],
        correct_index: 0,
        hint: "💡 Bẫy kinh điển: Bình thường dùng 'in the morning' nhưng khi có thứ trong tuần đi kèm (Monday morning) bắt buộc dùng 'on'.",
        explanation: "• 'on Monday mornings': Vào các buổi sáng thứ Hai (có thứ trong tuần nên ưu tiên dùng 'on').\n• 'in the afternoon': Vào buổi chiều (buổi trong ngày không kèm thứ dùng 'in').\n• Dịch: Chúng tôi thường có tiết học tiếng Anh vào sáng thứ Hai và chiều thứ Năm.",
        tags: ["unit-6", "traps", "prepositions-time"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"My grandparents built this secondary school _______ 1985 _______ the 20th century.\"",
        options: [
          "in - in",
          "at - on",
          "on - in",
          "in - on"
        ],
        correct_index: 0,
        hint: "💡 Cả năm (1985) và thế kỷ (the 20th century) đều là các khoảng thời gian dài, đi kèm giới từ 'in'.",
        explanation: "• Giới từ 'in' dùng trước năm (in 1985) và trước thế kỷ (in the 20th century).\n• Dịch: Ông bà tôi đã xây dựng ngôi trường trung học cơ sở này vào năm 1985 trong thế kỷ 20.",
        tags: ["unit-6", "prepositions-time", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"The modern computer lab is located _______ the third floor of the school building.\"",
        options: [
          "on",
          "in",
          "at",
          "under"
        ],
        correct_index: 0,
        hint: "💡 Chỉ số tầng của tòa nhà luôn dùng giới từ 'on' (on the first/second/third floor).",
        explanation: "• Quy tắc giới từ nơi chốn: Dùng 'on' để chỉ số tầng của tòa nhà: 'on the third floor' (ở tầng 3).\n• Dịch: Phòng máy tính hiện đại nằm ở tầng ba của tòa nhà trường học.",
        tags: ["unit-6", "prepositions-place", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 1,
      metadata_json: {
        question: "\"Students often borrow books and read silently _______ the library _______ lunchtime.\"",
        options: [
          "in - at",
          "at - in",
          "on - on",
          "under - at"
        ],
        correct_index: 0,
        hint: "💡 Bên trong phòng thư viện dùng 'in'; thời điểm giờ ăn trưa dùng 'at lunchtime'.",
        explanation: "• 'in the library': ở trong thư viện (không gian phòng ốc có tường bao quanh).\n• 'at lunchtime': vào giờ ăn trưa (thời điểm cụ thể trong ngày).\n• Dịch: Học sinh thường mượn sách và đọc yên tĩnh trong thư viện vào giờ ăn trưa.",
        tags: ["unit-6", "prepositions-time-place", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"Our school is located _______ Nguyen Hue Street _______ Hanoi.\"",
        options: [
          "on - in",
          "at - on",
          "in - at",
          "on - at"
        ],
        correct_index: 0,
        hint: "💡 Tên đường phố (không kèm số nhà) dùng 'on'; thành phố dùng 'in'.",
        explanation: "• Dùng 'on' trước tên đường phố không có số nhà: 'on Nguyen Hue Street'. (Nếu có số nhà cụ thể như 15 Nguyen Hue Street thì dùng 'at').\n• Dùng 'in' trước tên thành phố/quốc gia: 'in Hanoi'.\n• Dịch: Trường của chúng tôi nằm trên phố Nguyễn Huệ ở Hà Nội.",
        tags: ["unit-6", "prepositions-place", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"The science laboratory is situated _______ the art room and the music room.\"",
        options: [
          "between",
          "among",
          "opposite",
          "next"
        ],
        correct_index: 0,
        hint: "💡 Cấu trúc định vị giữa 2 địa điểm: between A and B.",
        explanation: "• Cấu trúc: 'between + Địa điểm A + and + Địa điểm B' (ở giữa nơi A và nơi B).\n• 'among' dùng khi ở giữa từ 3 đối tượng trở lên.\n• 'next' phải có 'to' (next to).\n• Dịch: Phòng thí nghiệm khoa học nằm ở giữa phòng mỹ thuật và phòng âm nhạc.",
        tags: ["unit-6", "prepositions-place", "collocations"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"Fifty years ago, there _______ only ten wooden classrooms in this village school.\"",
        options: [
          "were",
          "was",
          "are",
          "is"
        ],
        correct_index: 0,
        hint: "💡 Dấu hiệu 'Fifty years ago' (50 năm trước) chỉ quá khứ đơn, chủ ngữ 'ten wooden classrooms' là số nhiều → 'there were'.",
        explanation: "• 'Fifty years ago' là mốc thời gian trong quá khứ → dùng thì Quá khứ đơn.\n• Chủ ngữ 'ten wooden classrooms' là danh từ đếm được số nhiều → dùng 'There were'.\n• Dịch: Cách đây 50 năm, chỉ có 10 phòng học bằng gỗ ở ngôi trường làng này.",
        tags: ["unit-6", "there-was-were", "past-simple"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Chọn dạng đúng của to be trong câu miêu tả trường học xưa:\n\"In 2000, there _______ a large football ground and two basketball courts behind the school.\"",
        options: [
          "was",
          "were",
          "is",
          "are"
        ],
        correct_index: 0,
        hint: "💡 Bẫy hòa hợp với cấu trúc 'There was/were': To be chia theo danh từ NGAY SAU NÓ ('a large football ground' là danh từ số ít).",
        explanation: "• Quy tắc ngữ pháp kinh điển: Trong cấu trúc 'There + be + N1 and N2', động từ to be hòa hợp với danh từ đầu tiên (N1) đứng ngay sát nó.\n• Ở đây, N1 là 'a large football ground' (số ít), ngữ cảnh năm 2000 (quá khứ) nên to be bắt buộc là 'was'.\n• Dịch: Vào năm 2000, đã có một sân bóng đá lớn và hai sân bóng rổ phía sau trường.",
        tags: ["unit-6", "traps", "there-was-were", "subject-verb-agreement"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Viết lại câu sau với vị trí đối diện:\n\"The school canteen is in front of the football pitch.\"\n→ The football pitch is _______ the school canteen.\"",
        options: [
          "behind",
          "between",
          "opposite",
          "next to"
        ],
        correct_index: 0,
        hint: "💡 Đối lập với 'in front of' (phía trước) là 'behind' (phía sau).",
        explanation: "• 'in front of' (ở phía trước) ↔ 'behind' (ở phía sau).\n• Nếu nhà ăn trường học ở phía trước sân bóng đá, thì sân bóng đá ở phía sau nhà ăn trường học.\n• Dịch: Sân bóng đá nằm ở phía sau căng tin trường học.",
        tags: ["unit-6", "rewrite", "prepositions-place"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Viết lại câu miêu tả cơ sở vật chất:\n\"My school had only one small library ten years ago.\"\n→ Ten years ago, there _______ in my school.\"",
        options: [
          "was only one small library",
          "were only one small library",
          "is only one small library",
          "had only one small library"
        ],
        correct_index: 0,
        hint: "💡 Chuyển từ 'S + had + N' sang 'There was/were + N'. 'one small library' là số ít nên dùng 'There was'.",
        explanation: "• Cấu trúc tương đương: S + had + N (quá khứ) ↔ There was / were + N.\n• 'only one small library' (chỉ một thư viện nhỏ) là danh từ số ít nên dùng 'There was'.\n• Dịch: Mười năm trước, chỉ có một thư viện nhỏ ở trường tôi.",
        tags: ["unit-6", "rewrite", "there-was-were"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"Hoa is waiting for her sister _______ the school gate _______ noon.\"",
        options: [
          "at - at",
          "in - in",
          "on - at",
          "at - on"
        ],
        correct_index: 0,
        hint: "💡 Điểm hẹn cụ thể tại cổng trường dùng 'at the school gate'; buổi trưa dùng 'at noon'.",
        explanation: "• 'at the school gate': ở cổng trường (địa điểm cụ thể).\n• 'at noon': vào buổi trưa (thời điểm cụ thể trong ngày, tương tự 'at night', 'at midnight').\n• Dịch: Hoa đang đợi em gái ở cổng trường vào buổi trưa.",
        tags: ["unit-6", "prepositions-time-place", "collocations"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Tìm lỗi sai trong câu sau:\n\"The historic temple was built at the eleventh century under the Ly Dynasty.\"",
        options: [
          "at",
          "was built",
          "eleventh century",
          "under"
        ],
        correct_index: 0,
        hint: "💡 Thế kỷ ('eleventh century' - thế kỷ 11) là khoảng thời gian dài, phải dùng giới từ 'in', không dùng 'at'.",
        explanation: "• Lỗi sai ở 'at': Trước thế kỷ (century) bắt buộc dùng giới từ 'in' → 'in the eleventh century'.\n• 'at' chỉ dùng cho giờ giấc hoặc mốc thời gian rất ngắn.\n• Dịch: Ngôi đền lịch sử này được xây dựng vào thế kỷ 11 dưới thời nhà Lý.",
        tags: ["unit-6", "error-identification", "prepositions-time"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"There is a huge national flag _______ the middle of the school yard.\"",
        options: [
          "in",
          "on",
          "at",
          "from"
        ],
        correct_index: 0,
        hint: "💡 Cụm từ cố định: in the middle of (ở chính giữa / ở trung tâm).",
        explanation: "• Cụm từ cố định chỉ vị trí: 'in the middle of...' (ở giữa, ở trung tâm của cái gì).\n• Dịch: Có một lá cờ tổ quốc khổng lồ ở chính giữa sân trường.",
        tags: ["unit-6", "prepositions-place", "collocations"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu sau với nghĩa không đổi:\n\"No school in our province is older than Quoc Hoc Hue School.\"\n→ Quoc Hoc Hue School is _______ in our province.\"",
        options: [
          "the oldest school",
          "the most old school",
          "older than any schools",
          "an old school"
        ],
        correct_index: 0,
        hint: "💡 Chuyển đổi từ so sánh không bằng 'No + N + is older than...' sang so sánh nhất 'the oldest'.",
        explanation: "• Cấu trúc tương đương: 'No [N] is + so sánh hơn + than X' ↔ 'X is the + so sánh nhất + of/in...'.\n• 'old' là tính từ ngắn nên dạng so sánh nhất là 'the oldest'.\n• Dịch: Trường Quốc Học Huế là ngôi trường lâu đời nhất ở tỉnh chúng tôi.",
        tags: ["unit-6", "rewrite", "superlatives"]
      }
    }
  ]
};

// =============================================================================
// ĐỀ 06: ĐỀ ÔN TẬP TỔNG HỢP & BẪY VIẾT LẠI CÂU TOÀN DIỆN HỌC KỲ 1 (UNIT 1 - 6) (15 CÂU)
// Trọng tâm:
// - Phân hóa điểm 9 - 10
// - Chuyên đề viết lại câu kinh điển HK1: spend -> it takes, like -> be into / fond of,
//   find + V-ing + Adj, so sánh bằng as...as / different from, too/either, some/any,
//   giới từ thời gian / nơi chốn in/on/at, quá khứ đơn vs hiện tại hoàn thành.
// =============================================================================
const exam06 = {
  exam_number: 6,
  title: "Đề 06: Đề Ôn tập Tổng hợp & Bẫy Viết lại câu Toàn diện Học kỳ 1 (Unit 1 → 6 - Phân hóa Điểm 9 - 10)",
  duration_minutes: 30,
  questions: [
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu sau bằng cấu trúc \"It took\":\n\"She spent three hours baking cakes for the school fair yesterday.\"\n→ It took _______.\"",
        options: [
          "her three hours to bake cakes for the school fair yesterday",
          "her three hours baking cakes for the school fair yesterday",
          "she three hours to bake cakes for the school fair yesterday",
          "her three hours bake cakes for the school fair yesterday"
        ],
        correct_index: 0,
        hint: "💡 Công thức kinh điển: S + spent + time + V-ing ↔ It took + tân ngữ (O) + time + to-V.",
        explanation: "• Cấu trúc biến đổi: S + spend/spent + time + V-ing ↔ It takes/took + O + time + to-V.\n• Ở đây, 'spent' là quá khứ nên dùng 'It took'. Tân ngữ của 'she' là 'her'. Động từ theo sau bắt buộc là to-V ('to bake').\n• Phương án B sai vì dùng V-ing. Phương án C sai vì dùng đại từ 'she' thay vì tân ngữ 'her'.\n• Dịch: Cô ấy đã mất 3 tiếng đồng hồ để nướng bánh cho hội chợ trường ngày hôm qua.",
        tags: ["review-hk1", "rewrite", "spend-it-takes"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu với cụm từ chỉ sở thích \"fond of\":\n\"My younger brother loves making models of ancient temples.\"\n→ My younger brother is _______.\"",
        options: [
          "very fond of making models of ancient temples",
          "very fond to make models of ancient temples",
          "very fond about making models of ancient temples",
          "very fond of make models of ancient temples"
        ],
        correct_index: 0,
        hint: "💡 Công thức: love/like + V-ing ↔ be fond of + V-ing (giới từ 'of' đi với V-ing).",
        explanation: "• Cụm từ cố định: be fond of + V-ing/N (rất thích, say mê làm gì).\n• Giới từ 'of' bắt buộc đi kèm danh động từ 'making'.\n• Phương án B, C, D sai giới từ hoặc sai dạng động từ.\n• Dịch: Em trai tôi rất thích làm mô hình các ngôi đền cổ.",
        tags: ["review-hk1", "rewrite", "hobbies-structures"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu sau dùng cấu trúc \"find\":\n\"We think that volunteering at the local community garden is meaningful.\"\n→ We find _______.\"",
        options: [
          "volunteering at the local community garden meaningful",
          "volunteering at the local community garden is meaningful",
          "that volunteering at the local community garden meaningful",
          "to volunteer at the local community garden meaningful"
        ],
        correct_index: 0,
        hint: "💡 Công thức: S + think that V-ing is Adj ↔ S + find + V-ing + Adj (tuyệt đối KHÔNG có 'is' và 'that').",
        explanation: "• Cấu trúc: S + find/finds + O (V-ing) + Adj (thấy việc gì như thế nào).\n• Phương án B sai lỗi phổ biến nhất của học sinh là thêm 'is'.\n• Phương án C thừa 'that'.\n• Dịch: Chúng tôi thấy việc làm tình nguyện tại khu vườn cộng đồng địa phương rất có ý nghĩa.",
        tags: ["review-hk1", "rewrite", "find-structure"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu dùng cấu trúc so sánh bằng:\n\"The ticket price for the music concert is 200,000 VND, but the art exhibition ticket is only 100,000 VND.\"\n→ The art exhibition ticket is _______.\"",
        options: [
          "not as expensive as the music concert ticket",
          "as expensive as the music concert ticket",
          "not so cheap as the music concert ticket",
          "more expensive than the music concert ticket"
        ],
        correct_index: 0,
        hint: "💡 Vé triển lãm 100k, vé hòa nhạc 200k → Vé triển lãm KHÔNG đắt bằng vé hòa nhạc (not as expensive as).",
        explanation: "• So sánh không bằng: 'S1 + to be + not as/so + Adj + as + S2' (S1 không ... bằng S2).\n• Vì 100.000 < 200.000 nên vé triển lãm không đắt bằng vé hòa nhạc ('not as expensive as').\n• Dịch: Vé xem triển lãm nghệ thuật không đắt bằng vé xem buổi hòa nhạc.",
        tags: ["review-hk1", "rewrite", "comparisons"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu sau dùng cấu trúc \"different from\":\n\"Her taste in modern arts is not the same as mine.\"\n→ Her taste in modern arts is _______.\"",
        options: [
          "different from mine",
          "different as mine",
          "different with mine",
          "differ from mine"
        ],
        correct_index: 0,
        hint: "💡 Cụm từ cố định: not the same as (không giống như) ↔ different from (khác với).",
        explanation: "• Cấu trúc: 'not the same as' ↔ 'different from' (khác với).\n• 'different' luôn đi với giới từ 'from'.\n• 'mine' là đại từ sở hữu thay thế cho 'my taste in modern arts'.\n• Dịch: Gu nghệ thuật hiện đại của cô ấy khác với gu của tôi.",
        tags: ["review-hk1", "rewrite", "comparisons"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"Peter didn't enjoy the spicy chicken soup, and _______.\"",
        options: [
          "neither did I",
          "either did I",
          "I did too",
          "so did I"
        ],
        correct_index: 0,
        hint: "💡 Câu trước phủ định ('didn't enjoy'), đồng tình phủ định dùng: 'neither + trợ động từ + S' hoặc 'S + trợ động từ phủ định + either'.",
        explanation: "• Cấu trúc đồng tình phủ định:\n  + Neither + trợ động từ + S (Neither did I).\n  + S + trợ động từ phủ định + either (I didn't either).\n• Không dùng 'so' hay 'too' vì đó là đồng tình khẳng định.\n• Dịch: Peter đã không thích món súp gà cay, và tôi cũng vậy.",
        tags: ["review-hk1", "too-either-neither-so", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Nối hai câu sau bằng liên từ thích hợp:\n\"He ate too much junk food and didn't exercise. He gained three kilograms.\"",
        options: [
          "He ate too much junk food and didn't exercise, so he gained three kilograms.",
          "He ate too much junk food and didn't exercise, but he gained three kilograms.",
          "Because he gained three kilograms, he ate too much junk food and didn't exercise.",
          "He gained three kilograms, because he didn't exercise and ate too much junk food."
        ],
        correct_index: 0,
        hint: "💡 Vế trước là nguyên nhân (ăn vặt, lười vận động), vế sau là kết quả (tăng cân) → dùng liên từ 'so' (vì vậy).",
        explanation: "• Mối quan hệ nguyên nhân - kết quả: Nguyên nhân + ', so' + Kết quả.\n• Dịch: Cậu ấy đã ăn quá nhiều đồ ăn vặt và không tập thể dục, vì vậy cậu ấy đã tăng 3 cân.",
        tags: ["review-hk1", "conjunctions", "simple-compound-sentence"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Phân biệt thì Hiện tại hoàn thành và Quá khứ đơn:\n\"The Temple of Literature _______ in 1076, and thousands of students _______ it so far.\"",
        options: [
          "was founded - have visited",
          "has been founded - visited",
          "was founded - visited",
          "founded - have visited"
        ],
        correct_index: 0,
        hint: "💡 'in 1076' có năm cụ thể trong quá khứ → chia Quá khứ đơn bị động ('was founded'). 'so far' (cho đến nay) → chia Hiện tại hoàn thành ('have visited').",
        explanation: "• Vế 1: Có mốc thời gian rõ ràng trong quá khứ 'in 1076' → dùng Quá khứ đơn bị động: was founded (được thành lập).\n• Vế 2: Có dấu hiệu nhận biết 'so far' (cho đến nay) → dùng thì Hiện tại hoàn thành: have visited.\n• Dịch: Văn Miếu được thành lập vào năm 1076, và hàng nghìn học sinh đã đến thăm nơi đây cho đến nay.",
        tags: ["review-hk1", "past-simple", "present-perfect", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "\"There isn't _______ sugar in my coffee. Could you please give me a _______ of sugar?\"",
        options: [
          "any - teaspoon",
          "some - bottle",
          "any - pinch",
          "some - loaf"
        ],
        correct_index: 0,
        hint: "💡 Câu phủ định 'isn't' dùng 'any'; đường cho vào cà phê đong bằng thìa cà phê 'teaspoon'.",
        explanation: "• 'isn't any sugar': không có chút đường nào (phủ định).\n• 'a teaspoon of sugar': một thìa cà phê đường.\n• Dịch: Không có chút đường nào trong tách cà phê của tôi. Bạn có thể cho tôi xin một thìa đường được không?",
        tags: ["review-hk1", "some-any", "partitives"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Chọn câu đúng ngữ pháp nhất về giới từ thời gian và nơi chốn:",
        options: [
          "The entrance exam will be held at 8 a.m. on Monday in the main hall.",
          "The entrance exam will be held on 8 a.m. in Monday at the main hall.",
          "The entrance exam will be held in 8 a.m. on Monday at the main hall.",
          "The entrance exam will be held at 8 a.m. at Monday on the main hall."
        ],
        correct_index: 0,
        hint: "💡 Quy tắc phối hợp giới từ chuẩn: at 8 a.m. (giờ), on Monday (thứ), in the main hall (trong hội trường lớn).",
        explanation: "• 'at 8 a.m.': giờ cụ thể đi với 'at'.\n• 'on Monday': ngày trong tuần đi với 'on'.\n• 'in the main hall': trong hội trường lớn đi với 'in'.\n• Dịch: Kì thi đầu vào sẽ được tổ chức vào lúc 8 giờ sáng thứ Hai trong hội trường lớn.",
        tags: ["review-hk1", "prepositions-time-place", "grammar"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Tìm từ dùng SAI trong câu sau:\n\"How many bottles of cooking oils and kilograms of beef do we need for the barbecue?\"",
        options: [
          "cooking oils",
          "How many",
          "bottles of",
          "kilograms of"
        ],
        correct_index: 0,
        hint: "💡 'cooking oil' là danh từ không đếm được, bản thân từ 'oil' KHÔNG bao giờ thêm 's'. Số nhiều nằm ở từ đo lường 'bottles'.",
        explanation: "• Lỗi sai ở 'cooking oils': 'oil' là danh từ không đếm được, không có dạng số nhiều thêm 's'.\n• Đơn vị đo lường đếm được là 'bottles' (dạng đúng: 'bottles of cooking oil').\n• Dịch: Chúng ta cần bao nhiêu chai dầu ăn và bao nhiêu cân thịt bò cho bữa tiệc nướng ngoài trời?",
        tags: ["review-hk1", "traps", "countable-uncountable", "error-identification"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Tìm từ dùng SAI trong câu sau:\n\"My father finds that exercising regularly is very important for his health.\"",
        options: [
          "that",
          "finds",
          "exercising",
          "important"
        ],
        correct_index: 0,
        hint: "💡 Cấu trúc find: S + find + O + Adj. KHÔNG dùng 'that' và 'is' như cấu trúc 'think that...'.",
        explanation: "• Lỗi sai ở 'that' và 'is': Nếu dùng 'finds' thì câu chuẩn là 'My father finds exercising regularly very important for his health' (bỏ 'that' và bỏ 'is').\n• Nếu giữ 'that' và 'is' thì động từ phải là 'thinks'. Ở đây 'that' là từ dùng sai cấu trúc.\n• Dịch: Bố tôi thấy việc tập thể dục đều đặn rất quan trọng đối với sức khỏe của mình.",
        tags: ["review-hk1", "traps", "find-structure", "error-identification"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 2,
      metadata_json: {
        question: "Viết lại câu sau với \"Because\":\n\"He was ill yesterday, so he couldn't attend the English club.\"\n→ Because _______.\"",
        options: [
          "he was ill yesterday, he couldn't attend the English club",
          "he was ill yesterday, so he couldn't attend the English club",
          "he couldn't attend the English club, he was ill yesterday",
          "of he was ill yesterday, he couldn't attend the English club"
        ],
        correct_index: 0,
        hint: "💡 Bẫy kinh điển tiếng Việt hay nói 'Bởi vì... cho nên...', nhưng trong tiếng Anh có 'Because' thì TUYỆT ĐỐI KHÔNG dùng 'so'.",
        explanation: "• Quy tắc liên từ: 'Because + Mệnh đề nguyên nhân, Mệnh đề kết quả' (không có 'so').\n• Phương án B sai vì thừa 'so'.\n• Phương án D sai vì 'Because of' phải đi với cụm danh từ chứ không đi với mệnh đề.\n• Dịch: Bởi vì hôm qua cậu ấy bị ốm nên cậu ấy đã không thể tham gia câu lạc bộ tiếng Anh.",
        tags: ["review-hk1", "traps", "because-so", "rewrite"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "\"I didn't prepare as many questions for the interview as Minh did.\"\n→ Minh prepared _______.\"",
        options: [
          "more questions for the interview than I did",
          "as many questions for the interview as I did",
          "less questions for the interview than I did",
          "the most questions for the interview"
        ],
        correct_index: 0,
        hint: "💡 Tôi không chuẩn bị nhiều câu hỏi bằng Minh → Minh đã chuẩn bị NHIỀU câu hỏi HƠN tôi (more... than).",
        explanation: "• Chuyển đổi từ so sánh không bằng 'not as many... as' sang so sánh hơn 'more... than'.\n• 'questions' là danh từ đếm được số nhiều nên dùng 'more... than' (nếu ít hơn thì dùng 'fewer... than', không dùng 'less').\n• Dịch: Minh đã chuẩn bị nhiều câu hỏi cho buổi phỏng vấn hơn tôi.",
        tags: ["review-hk1", "rewrite", "comparisons"]
      }
    },
    {
      type: "multiple_choice",
      difficulty: 3,
      metadata_json: {
        question: "Viết lại câu miêu tả ngôi trường trong quá khứ:\n\"Our school had twenty classrooms and a small canteen in 1995.\"\n→ In 1995, there _______ in our school.\"",
        options: [
          "were twenty classrooms and a small canteen",
          "was twenty classrooms and a small canteen",
          "are twenty classrooms and a small canteen",
          "have been twenty classrooms and a small canteen"
        ],
        correct_index: 0,
        hint: "💡 Danh từ đầu tiên ngay sau to be là 'twenty classrooms' (số nhiều) trong quá khứ (1995) → dùng 'there were'.",
        explanation: "• Cấu trúc: 'There was/were + N1 and N2'. Động từ to be hòa hợp với N1 đứng ngay sau nó.\n• N1 là 'twenty classrooms' (danh từ đếm được số nhiều), thời gian 'in 1995' (quá khứ) → dùng 'There were'.\n• Dịch: Vào năm 1995, đã có 20 phòng học và một nhà ăn nhỏ ở trường chúng tôi.",
        tags: ["review-hk1", "rewrite", "there-was-were"]
      }
    }
  ]
};

// =============================================================================
// GOM TOÀN BỘ 6 ĐỀ THI
// =============================================================================
const updatedData = {
  collection: {
    title: "Chuyên đề Ngữ pháp Trọng tâm & Viết lại câu Học kỳ 1 (Unit 1 - 6)",
    subject_slug: "tieng-anh-7",
    grade: 7,
    volume: 1,
    units: [1],
    sequence_number: 1,
    exam_type: "review",
    reference_book: "Global Success & Chuyên đề Ngữ pháp THCS",
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
