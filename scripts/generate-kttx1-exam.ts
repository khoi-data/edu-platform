import * as fs from 'fs';
import * as path from 'path';

const examBankData = {
  collection: {
    title: "Chuyên đề Ôn Thi KTTX Lần 1 (Bám Sát Dặn Dò Lớp 7)",
    subject_slug: "tieng-anh-7",
    grade: 7,
    volume: 1,
    units: [3],
    sequence_number: 3,
    exam_type: "review",
    reference_book: "Đề Kiểm Tra Thường Xuyên Lần 1 - Tiếng Anh 7 Global Success",
    status: "published"
  },
  exams: [
    // =========================================================================
    // ĐỀ 01: TRỌNG TÂM KTTX LẦN 1 - ĐỀ CƠ BẢN (13 CÂU)
    // =========================================================================
    {
      exam_number: 1,
      title: "Đề Ôn Thi KTTX Lần 1 - Đề Số 01 (Toàn diện 9 từ Word Form & Viết lại câu)",
      duration_minutes: 20,
      questions: [
        // --- 9 CÂU WORD FORMATION (FILL_BLANK) ---
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Eating too much fast food often leads to rapid ___ gain. (weigh)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "weight",
            hint: "💡 Cụm danh từ ghép quen thuộc trong Unit 2: 'weight gain' (sự tăng cân).",
            explanation: "• Vị trí: Đứng sau tính từ 'rapid' (nhanh chóng) cần một Danh từ (Noun) để tạo thành cụm danh từ 'weight gain' (sự tăng cân).\n• Word Family: weigh (v: cân, nặng) → weight (n: cân nặng, trọng lượng) → overweight (adj: thừa cân).\n• Dịch: Ăn quá nhiều đồ ăn nhanh thường dẫn đến việc tăng cân nhanh chóng.",
            tags: ["kttx1", "unit-2", "word-formation", "weigh"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "His bedroom was very ___ with clothes and books scattered all over the floor. (tidy)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "untidy",
            hint: "💡 Đồ đạc bừa bãi khắp sàn → Cần Tính từ phủ định mang nghĩa bừa bộn (tiền tố un-).",
            explanation: "• Vị trí: Đứng sau to be 'was very' cần một Tính từ (Adjective). Ngữ cảnh quần áo và sách vở vứt lung tung khắp sàn nhà mang nghĩa tiêu cực (bừa bộn, lộn xộn) → dùng tiền tố 'un-'.\n• Word Family: tidy (adj/v: ngăn nắp/dọn dẹp) → untidy (adj: bừa bộn, luộm thuộm) → tidiness (n: sự ngăn nắp).\n• Dịch: Phòng ngủ của cậu ấy rất bừa bộn với quần áo và sách vở vứt rải rác khắp sàn nhà.",
            tags: ["kttx1", "unit-1", "word-formation", "tidy"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Doctors advise teenagers to exercise ___ for at least 30 minutes every day. (regular)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "regularly",
            hint: "💡 Bổ nghĩa cho động từ 'exercise' cần một Trạng từ (Adverb).",
            explanation: "• Vị trí: Bổ nghĩa cho động từ 'exercise' (tập thể dục) cần một Trạng từ chỉ thể cách/tần suất (Adverb).\n• Word Family: regular (adj: đều đặn, thường xuyên) → regularly (adv: một cách đều đặn) → irregular (adj: thất thường).\n• Dịch: Các bác sĩ khuyên thanh thiếu niên nên tập thể dục đều đặn ít nhất 30 phút mỗi ngày.",
            tags: ["kttx1", "unit-2", "word-formation", "regular"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Playing badminton helps students stay mentally alert and ___ active. (physical)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "physically",
            hint: "💡 Song song với trạng từ 'mentally' qua liên từ 'and', bổ nghĩa cho tính từ 'active' cần một Trạng từ (Adverb).",
            explanation: "• Vị trí: Đứng trước tính từ 'active' và song song với trạng từ 'mentally' qua liên từ 'and' cần một Trạng từ (Adverb).\n• Cấu trúc: mentally alert and physically active (tinh thần minh mẫn và thể chất năng động).\n• Word Family: physical (adj: thuộc thể chất) → physically (adv: về mặt thể chất) → physique (n: vóc dáng).\n• Dịch: Chơi cầu lông giúp học sinh giữ được tinh thần minh mẫn và năng động về mặt thể chất.",
            tags: ["kttx1", "unit-2", "word-formation", "physical"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Cutting down on sugar leads to a noticeable ___ in body fat. (reduce)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "reduction",
            hint: "💡 Sau mạo từ 'a' và tính từ 'noticeable' cần một Danh từ (Noun).",
            explanation: "• Vị trí: Sau mạo từ 'a' và tính từ 'noticeable' (đáng chú ý/rõ rệt) cần một Danh từ số ít (Noun).\n• Cấu trúc: a reduction in something (sự cắt giảm/suy giảm cái gì).\n• Word Family: reduce (v: giảm bớt, cắt giảm) → reduction (n: sự cắt giảm, giảm sút).\n• Dịch: Cắt giảm lượng đường dẫn đến sự giảm mỡ cơ thể rõ rệt.",
            tags: ["kttx1", "unit-2", "word-formation", "reduce"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Water puppetry is a unique ___ performance originating in northern Viet Nam. (culture)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "cultural",
            hint: "💡 Đứng trước danh từ 'performance' cần một Tính từ (Adjective) bổ nghĩa.",
            explanation: "• Vị trí: Đứng trước danh từ 'performance' (tiết mục biểu diễn) và sau tính từ 'unique' cần một Tính từ (Adjective).\n• Word Family: culture (n: văn hóa) → cultural (adj: mang tính văn hóa, thuộc về văn hóa) → culturally (adv).\n• Dịch: Múa rối nước là một tiết mục biểu diễn văn hóa độc đáo có nguồn gốc từ miền Bắc Việt Nam.",
            tags: ["kttx1", "unit-4", "word-formation", "culture"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Watching science documentaries is fun and very ___ for young learners. (educate)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "educational",
            hint: "💡 Song song với tính từ 'fun' sau 'is... and very' cần một Tính từ (Adjective).",
            explanation: "• Vị trí: Đứng sau to be 'is' và liên từ 'and very', song song với tính từ 'fun' cần một Tính từ (Adjective) mang nghĩa có tính giáo dục, bổ ích.\n• Word Family: educate (v: giáo dục) → education (n: sự giáo dục) → educational (adj: mang tính giáo dục, bổ ích).\n• Dịch: Xem phim tài liệu khoa học vừa vui lại rất bổ ích đối với người học trẻ tuổi.",
            tags: ["kttx1", "unit-6", "word-formation", "educate"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Staying up late playing video games is extremely ___ to your eyes. (harm)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "harmful",
            hint: "💡 Cụm cố định: 'be harmful to' (có hại cho cái gì).",
            explanation: "• Vị trí: Sau to be 'is' và phó từ 'extremely' cần một Tính từ (Adjective đi với giới từ 'to').\n• Word Family: harm (v/n: gây hại/sự tổn hại) → harmful (adj: có hại) → harmless (adj: vô hại).\n• Dịch: Thức khuya chơi trò chơi điện tử cực kỳ có hại cho đôi mắt của bạn.",
            tags: ["kttx1", "unit-2", "word-formation", "harm"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 1,
          metadata_json: {
            question: "Joining volunteer clubs helps teenagers develop essential ___ skills. (socialize)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "social",
            hint: "💡 Cụm cố định: 'social skills' (kỹ năng xã hội / kỹ năng giao tiếp).",
            explanation: "• Vị trí: Đứng trước danh từ 'skills' (các kỹ năng) và sau tính từ 'essential' cần một Tính từ (Adjective).\n• Cụm từ: social skills (các kỹ năng xã hội, kỹ năng giao tiếp ứng xử).\n• Word Family: socialize (v: giao lưu, hòa nhập) → social (adj: thuộc về xã hội, mang tính cộng đồng) → society (n: xã hội).\n• Dịch: Tham gia các câu lạc bộ tình nguyện giúp các bạn thanh thiếu niên phát triển các kỹ năng xã hội thiết yếu.",
            tags: ["kttx1", "unit-3", "word-formation", "socialize"]
          }
        },

        // --- 4 CÂU SENTENCE TRANSFORMATION (MULTIPLE_CHOICE) ---
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Viết lại câu sau với cấu trúc \"It takes\":\n\"They spend 45 minutes gardening every afternoon.\"\n→ It takes _______.",
            options: [
              "them 45 minutes to garden every afternoon",
              "them 45 minutes gardening every afternoon",
              "for them 45 minutes to garden every afternoon",
              "they 45 minutes to garden every afternoon"
            ],
            correct_index: 0,
            hint: "💡 Công thức: S + spend + time + V-ing ↔ It takes + O + time + to V.",
            explanation: "• Cấu trúc tương đương chuẩn:\n  S + spend(s) + thời gian + V-ing ↔ It takes + tân ngữ (O) + thời gian + to V.\n• 'They' chuyển thành tân ngữ 'them', động từ 'gardening' chuyển thành 'to garden'.\n• Phương án B sai vì dùng 'gardening' (sau It takes phải là 'to V').\n• Phương án C sai vì thừa 'for'. Phương án D sai vì dùng chủ ngữ 'they' thay vì tân ngữ 'them'.",
            tags: ["kttx1", "transform", "spend-it-takes"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Viết lại câu sau với cấu trúc \"spends\":\n\"It takes my mother one hour to cook dinner on weekends.\"\n→ My mother _______.",
            options: [
              "spends one hour cooking dinner on weekends",
              "spends one hour to cook dinner on weekends",
              "spends one hour cook dinner on weekends",
              "spend one hour cooking dinner on weekends"
            ],
            correct_index: 0,
            hint: "💡 Công thức: S (My mother - số ít) + spends + thời gian + V-ing.",
            explanation: "• Công thức: S + spend(s) + thời gian + V-ing.\n• 'My mother' là ngôi thứ 3 số ít nên động từ chia 'spends'.\n• Theo sau 'spends' bắt buộc là danh động từ V-ing ('cooking dinner').\n• Phương án B sai vì dùng 'to cook'. Phương án D sai vì chưa chia số ít (thiếu 's').",
            tags: ["kttx1", "transform", "spend-it-takes"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Viết lại câu sau bằng cách dùng \"into\":\n\"Nam loves collecting vintage stamps in his spare time.\"\n→ Nam is _______.",
            options: [
              "into collecting vintage stamps in his spare time",
              "into collect vintage stamps in his spare time",
              "into to collect vintage stamps in his spare time",
              "into collecting vintage stamps at his spare time"
            ],
            correct_index: 0,
            hint: "💡 Cấu trúc Unit 1: S + be into + V-ing / Noun (cực kỳ thích, say mê việc gì).",
            explanation: "• Cấu trúc tương đương diễn đạt sở thích trong Unit 1 Global Success:\n  S + like(s) / love(s) + V-ing ↔ S + be (am/is/are) into + V-ing / Noun.\n• 'into' là giới từ nên động từ đi sau luôn ở dạng V-ing ('collecting').\n• Nam là chủ ngữ số ít đi với 'is into collecting...'.",
            tags: ["kttx1", "transform", "like-love-into"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 1,
          metadata_json: {
            question: "Viết lại câu phủ định sau bằng cách dùng \"into\":\n\"My sister doesn't like playing computer games.\"\n→ My sister isn't _______.",
            options: [
              "into playing computer games",
              "into play computer games",
              "into to play computer games",
              "like playing computer games"
            ],
            correct_index: 0,
            hint: "💡 Phủ định: S + doesn't/don't like + V-ing ↔ S + isn't/aren't into + V-ing.",
            explanation: "• Chuyển đổi thể phủ định:\n  S + doesn't like + V-ing ↔ S + isn't into + V-ing (không hứng thú/không thích làm gì).\n• 'My sister' đi với 'isn't into playing computer games'.\n• Phương án B sai vì 'play' chưa thêm -ing.",
            tags: ["kttx1", "transform", "like-love-into"]
          }
        }
      ]
    },

    // =========================================================================
    // ĐỀ 02: BẪY NÂNG CAO & PHÂN HÓA ĐIỂM 9 - 10 (13 CÂU)
    // =========================================================================
    {
      exam_number: 2,
      title: "Đề Ôn Thi KTTX Lần 1 - Đề Số 02 (Bẫy Nâng Cao & Phân Hóa Điểm 9 - 10)",
      duration_minutes: 20,
      questions: [
        // --- 9 CÂU WORD FORMATION (BIẾN THỂ NÂNG CAO) ---
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "He exercises daily and eats well because he doesn't want to become ___ . (weigh)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "overweight",
            hint: "💡 Sau 'become' cần Tính từ mang nghĩa thừa cân/béo phì (tiền tố over-).",
            explanation: "• Vị trí: Đứng sau liên động từ 'become' cần một Tính từ (Adjective). Ngữ cảnh tập thể dục và ăn uống lành mạnh để không bị béo phì/thừa cân → dùng tính từ 'overweight'.\n• Word Family: weigh (v) → weight (n: cân nặng) → overweight (adj: thừa cân, quá cân).\n• Dịch: Cậu ấy tập thể dục hàng ngày và ăn uống điều độ vì không muốn bị thừa cân.",
            tags: ["kttx1", "unit-2", "word-formation", "weigh"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Our grandmother always values cleanliness and ___ in every corner of the house. (tidy)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "tidiness",
            hint: "💡 Song song với danh từ 'cleanliness' qua liên từ 'and' cần một Danh từ (Noun: sự ngăn nắp).",
            explanation: "• Vị trí: Đứng sau liên từ 'and' và song song với danh từ 'cleanliness' (sự sạch sẽ) làm tân ngữ cho động từ 'values' (coi trọng) cần một Danh từ (Noun).\n• Word Family: tidy (adj: ngăn nắp) → tidiness (n: sự ngăn nắp, tính gọn gàng).\n• Dịch: Bà của chúng tôi luôn coi trọng sự sạch sẽ và tính ngăn nắp ở mọi góc trong nhà.",
            tags: ["kttx1", "unit-1", "word-formation", "tidy"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Having an ___ sleep schedule can make you feel fatigued throughout the day. (regular)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "irregular",
            hint: "💡 Giờ giấc ngủ thất thường làm cơ thể mệt mỏi → Tính từ phủ định bắt đầu bằng 'ir-'.",
            explanation: "• Vị trí: Đứng sau mạo từ 'an' và trước danh từ 'sleep schedule' (lịch ngủ) cần một Tính từ bắt đầu bằng nguyên âm 'i' mang nghĩa tiêu cực (thất thường, không đều).\n• Word Family: regular (adj: đều đặn) → irregular (adj: bất thường, thất thường) → regularly (adv).\n• Dịch: Có một lịch trình ngủ thất thường có thể khiến bạn cảm thấy mệt mỏi trong suốt cả ngày.",
            tags: ["kttx1", "unit-2", "word-formation", "regular"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Doing regular sports significantly improves your ___ health and stamina. (physics)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "physical",
            hint: "💡 Đứng trước danh từ 'health' cần Tính từ thuộc về thể chất (physical health).",
            explanation: "• Vị trí: Đứng trước danh từ 'health' (sức khỏe) cần một Tính từ (Adjective) để tạo thành cụm 'physical health' (sức khỏe thể chất, đối lập với mental health).\n• Word Family: physics (n: môn Vật lý) → physical (adj: thuộc về thể chất/vật chất) → physically (adv).\n• Dịch: Chơi thể thao đều đặn cải thiện đáng kể sức khỏe thể chất và sức bền của bạn.",
            tags: ["kttx1", "unit-2", "word-formation", "physical"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Doctors observed a marked ___ in patients' blood pressure after the new diet. (reduce)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "reduction",
            hint: "💡 Sau mạo từ 'a' và tính từ 'marked' (đáng chú ý) cần một Danh từ (Noun).",
            explanation: "• Vị trí: Đứng sau mạo từ 'a' và tính từ 'marked' (rõ rệt, đáng kể) cần một Danh từ (Noun).\n• Word Family: reduce (v: giảm) → reduction (n: sự giảm bớt).\n• Dịch: Các bác sĩ đã ghi nhận sự suy giảm rõ rệt trong huyết áp của các bệnh nhân sau chế độ ăn mới.",
            tags: ["kttx1", "unit-2", "word-formation", "reduce"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Viet Nam and Japan are two rich and ___ diverse Asian nations. (culture)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "culturally",
            hint: "💡 Đứng trước tính từ 'diverse' (đa dạng) để bổ nghĩa cần một Trạng từ (Adverb).",
            explanation: "• Vị trí: Đứng trước tính từ 'diverse' (đa dạng) để bổ nghĩa mức độ/phương diện cần một Trạng từ (Adverb).\n• Cụm từ: culturally diverse (đa dạng về mặt văn hóa).\n• Word Family: culture (n) → cultural (adj) → culturally (adv: về mặt văn hóa).\n• Dịch: Việt Nam và Nhật Bản là hai quốc gia châu Á giàu có và đa dạng về mặt văn hóa.",
            tags: ["kttx1", "unit-4", "word-formation", "culture"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "The charity provides free basic ___ for children in remote mountainous hamlets. (educate)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "education",
            hint: "💡 Sau tính từ 'basic' (cơ bản) làm tân ngữ cho động từ 'provides' cần một Danh từ (Noun).",
            explanation: "• Vị trí: Đứng sau tính từ 'basic' (cơ bản) làm tân ngữ cho 'provides' cần một Danh từ không đếm được (Noun).\n• Cụm từ: basic education (nền giáo dục cơ bản/phổ thông).\n• Word Family: educate (v) → education (n: nền giáo dục, sự giáo dục) → educational (adj).\n• Dịch: Tổ chức từ thiện cung cấp nền giáo dục cơ bản miễn phí cho trẻ em ở các bản làng miền núi xa xôi.",
            tags: ["kttx1", "unit-6", "word-formation", "educate"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Don't be afraid of this garden insect; it is completely ___ to humans. (harm)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "harmless",
            hint: "💡 Ngữ cảnh 'Đừng sợ hãi' → Cần Tính từ mang nghĩa vô hại (hậu tố -less).",
            explanation: "• Vị trí: Đứng sau to be 'is completely' cần một Tính từ. Ngữ cảnh khuyên không nên sợ hãi vì loài côn trùng này không gây hại gì cho con người → dùng hậu tố '-less' mang nghĩa vô hại.\n• Word Family: harm (v/n) → harmful (adj: có hại) → harmless (adj: vô hại, không độc hại).\n• Dịch: Đừng sợ loài côn trùng trong vườn này; nó hoàn toàn vô hại đối với con người.",
            tags: ["kttx1", "unit-2", "word-formation", "harm"]
          }
        },
        {
          type: "fill_blank",
          difficulty: 2,
          metadata_json: {
            question: "Voluntary work plays a crucial role in building a compassionate ___ . (socialize)",
            instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
            correct_answer: "society",
            hint: "💡 Đứng sau tính từ 'compassionate' (giàu lòng nhân ái) cần một Danh từ chỉ xã hội (society).",
            explanation: "• Vị trí: Đứng sau mạo từ 'a' và tính từ 'compassionate' (giàu lòng trắc ẩn, nhân ái) cần một Danh từ số ít (Noun).\n• Word Family: socialize (v: hòa nhập xã hội) → social (adj: thuộc xã hội) → society (n: xã hội, cộng đồng xã hội).\n• Dịch: Hoạt động tình nguyện đóng vai trò thiết yếu trong việc xây dựng một xã hội giàu lòng nhân ái.",
            tags: ["kttx1", "unit-3", "word-formation", "socialize"]
          }
        },

        // --- 4 CÂU SENTENCE TRANSFORMATION (NÂNG CAO & QUÁ KHỨ ĐƠN) ---
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Viết lại câu ở thì Quá khứ đơn:\n\"We spent two hours cleaning the neighborhood canal yesterday.\"\n→ It took _______.",
            options: [
              "us two hours to clean the neighborhood canal yesterday",
              "us two hours cleaning the neighborhood canal yesterday",
              "we two hours to clean the neighborhood canal yesterday",
              "for us two hours to clean the neighborhood canal yesterday"
            ],
            correct_index: 0,
            hint: "💡 Quá khứ: S + spent + time + V-ing ↔ It took + O + time + to V.",
            explanation: "• Cấu trúc quá khứ đơn:\n  S + spent + thời gian + V-ing ↔ It took + tân ngữ (O) + thời gian + to V.\n• 'We' chuyển thành tân ngữ 'us', động từ 'cleaning' chuyển thành 'to clean'.\n• Phương án B sai vì dùng 'cleaning' (sau It took phải là 'to V').\n• Phương án C sai vì dùng chủ ngữ 'we' thay vì tân ngữ 'us'.",
            tags: ["kttx1", "transform", "spend-it-takes"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Viết lại câu ở thì Quá khứ đơn:\n\"It took him three months to build that intricate dollhouse.\"\n→ He _______.",
            options: [
              "spent three months building that intricate dollhouse",
              "spent three months to build that intricate dollhouse",
              "spends three months building that intricate dollhouse",
              "spend three months to build that intricate dollhouse"
            ],
            correct_index: 0,
            hint: "💡 Câu gốc dùng 'It took' (quá khứ) → câu viết lại phải dùng 'spent' + V-ing.",
            explanation: "• Câu gốc ở thì quá khứ đơn ('It took') nên khi chuyển sang cấu trúc 'spend' phải chia ở quá khứ là 'spent'.\n• Theo sau 'spent' là danh động từ V-ing ('building').\n• Phương án B sai vì dùng 'to build'. Phương án C và D sai vì chia nhầm ở thì hiện tại đơn ('spends', 'spend').",
            tags: ["kttx1", "transform", "spend-it-takes"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Viết lại câu sau với \"into\":\n\"I love taking photos of historic buildings when travelling.\"\n→ I am _______.",
            options: [
              "into taking photos of historic buildings when travelling",
              "into take photos of historic buildings when travelling",
              "into to take photos of historic buildings when travelling",
              "in taking photos of historic buildings when travelling"
            ],
            correct_index: 0,
            hint: "💡 Cấu trúc: I am into + V-ing (tôi say mê/rất thích làm gì).",
            explanation: "• Cấu trúc: S + love(s) + V-ing ↔ S + be into + V-ing.\n• 'into' là giới từ nên bắt buộc đi với V-ing ('taking photos').\n• Phương án B, C sai dạng động từ ('take', 'to take'). Phương án D dùng sai giới từ 'in' thay vì 'into'.",
            tags: ["kttx1", "transform", "like-love-into"]
          }
        },
        {
          type: "multiple_choice",
          difficulty: 2,
          metadata_json: {
            question: "Viết lại câu sau với \"into\":\n\"My best friend likes making paper models very much.\"\n→ My best friend is really _______.",
            options: [
              "into making paper models",
              "into make paper models",
              "into to make paper models",
              "in making paper models"
            ],
            correct_index: 0,
            hint: "💡 Cụm nhấn mạnh: 'be really into + V-ing' (thực sự rất thích việc gì).",
            explanation: "• Cấu trúc nhấn mạnh mức độ thích thú: like... very much ↔ be really into + V-ing.\n• 'My best friend' (số ít) đi với 'is really into making paper models'.\n• Phương án A chuẩn ngữ pháp và ngữ nghĩa.",
            tags: ["kttx1", "transform", "like-love-into"]
          }
        }
      ]
    }
  ]
};

const outFile = path.resolve('content/exam-bank/tieng-anh/tienganh7-kttx1-review.json');
fs.writeFileSync(outFile, JSON.stringify(examBankData, null, 2), 'utf8');
console.log(`✓ Đã tạo thành công file: ${outFile}`);
console.log(`  - Collection: ${examBankData.collection.title}`);
console.log(`  - Số đề: ${examBankData.exams.length}`);
console.log(`  - Tổng số câu hỏi: ${examBankData.exams.reduce((sum, e) => sum + e.questions.length, 0)}`);
