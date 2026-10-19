import * as fs from 'fs';
import * as path from 'path';

interface WordFormationQuestion {
  stem: string; // contains '___'
  root: string;
  answer: string;
  unit: number;
  grammar_point: string;
  explanation: string;
  hint: string;
}

interface ExamDef {
  exam_number: number;
  title: string;
  scope: string;
  questions: WordFormationQuestion[];
}

const examsData: ExamDef[] = [
  // ===================== ĐỀ 01: UNIT 1 (HOBBIES) =====================
  {
    exam_number: 1,
    title: "Luyện tập Word Formation - Đề 01 (Khởi động Unit 1: Hobbies)",
    scope: "Unit 1",
    questions: [
      {
        stem: "She is very ___ and loves painting portraits in her free time. (create)",
        root: "create",
        answer: "creative",
        unit: 1,
        grammar_point: "To be + Adjective",
        explanation: "• Vị trí: Sau động từ to be \"is\" và phó từ chỉ mức độ \"very\" cần một Tính từ (Adjective).\n• Word Family: create (v) → creative (adj) → creativity (n: sự sáng tạo).\n• Dịch: Cô ấy rất sáng tạo và thích vẽ tranh chân dung trong thời gian rảnh.",
        hint: "💡 Sau 'is very' cần một Tính từ (Adjective) để miêu tả tính cách/khả năng."
      },
      {
        stem: "My brother has a big ___ of old stamps and coins. (collect)",
        root: "collect",
        answer: "collection",
        unit: 1,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Đứng sau mạo từ \"a\" và tính từ \"big\" cần một Danh từ (Noun).\n• Word Family: collect (v) → collection (n: bộ sưu tập) → collector (n: người sưu tầm).\n• Dịch: Anh trai tôi có một bộ sưu tập tem và tiền xu cổ rất lớn.",
        hint: "💡 Sau cụm 'a big' cần một Danh từ (Noun)."
      },
      {
        stem: "Playing chess is an interesting leisure ___ for teenagers. (act)",
        root: "act",
        answer: "activity",
        unit: 1,
        grammar_point: "Noun phrase",
        explanation: "• Vị trí: Cụm danh từ \"leisure activity\" (hoạt động giải trí) đứng sau mạo từ \"an\" và tính từ \"interesting\".\n• Word Family: act (v) → activity (n: hoạt động) → active (adj: năng động).\n• Dịch: Chơi cờ vua là một hoạt động giải trí thú vị dành cho lứa tuổi thanh thiếu niên.",
        hint: "💡 Cụm cố định: 'leisure activity' (hoạt động giải trí/lúc rảnh rỗi)."
      },
      {
        stem: "Reading science books brings me great ___ . (please)",
        root: "please",
        answer: "pleasure",
        unit: 1,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ \"great\" cần một Danh từ (Noun).\n• Word Family: please (v) → pleasure (n: niềm vui, niềm thích thú) → pleasant (adj) → unpleasant (adj phủ định).\n• Dịch: Đọc sách khoa học mang lại cho tôi niềm vui thích to lớn.",
        hint: "💡 Sau tính từ 'great' cần một Danh từ (Noun). Cụm 'bring great pleasure' mang lại niềm vui lớn."
      },
      {
        stem: "Gardening is very ___ after a stressful week at school. (relax)",
        root: "relax",
        answer: "relaxing",
        unit: 1,
        grammar_point: "To be + Adjective (-ing for things)",
        explanation: "• Vị trí: Đứng sau to be \"is very\" miêu tả tính chất của việc làm vườn (gardening) nên dùng tính từ đuôi -ing.\n• Word Family: relax (v) → relaxation (n) → relaxing (adj: mang lại cảm giác thư giãn) → relaxed (adj: cảm thấy thư giãn).\n• Dịch: Làm vườn rất thư giãn sau một tuần học tập căng thẳng ở trường.",
        hint: "💡 Miêu tả tính chất của hoạt động 'gardening' cần tính từ đuôi -ing (relaxing)."
      },
      {
        stem: "My uncle is an avid coin ___ with over 500 rare coins. (collect)",
        root: "collect",
        answer: "collector",
        unit: 1,
        grammar_point: "Noun indicating person",
        explanation: "• Vị trí: Sau mạo từ \"an\" và tính từ \"avid\" (say mê) bổ nghĩa cho chủ ngữ \"My uncle\" cần một Danh từ chỉ người (Noun of person).\n• Word Family: collect (v) → collector (n: người sưu tầm) → collection (n: bộ sưu tập).\n• Dịch: Chú tôi là một người sưu tầm tiền xu say mê với hơn 500 đồng xu quý hiếm.",
        hint: "💡 Chủ ngữ là 'My uncle' (chú tôi) nên cần một Danh từ chỉ người (collector)."
      },
      {
        stem: "Her painting isn't impressive; she needs more ___ . (create)",
        root: "create",
        answer: "creativity",
        unit: 1,
        grammar_point: "Quantifier + Noun",
        explanation: "• Vị trí: Sau từ chỉ lượng \"more\" và ngoại động từ \"needs\" cần một Danh từ không đếm được (Uncountable Noun).\n• Word Family: create (v) → creativity (n: sự sáng tạo, óc sáng tạo) → creative (adj).\n• Dịch: Bức tranh của cô ấy không mấy ấn tượng; cô ấy cần thêm sự sáng tạo.",
        hint: "💡 Sau 'needs more' cần một Danh từ (creativity: sự sáng tạo)."
      },
      {
        stem: "Learning how to build dollhouses requires a lot of ___ . (patient)",
        root: "patient",
        answer: "patience",
        unit: 1,
        grammar_point: "Quantifier + Noun",
        explanation: "• Vị trí: Sau \"a lot of\" và ngoại động từ \"requires\" (đòi hỏi) cần một Danh từ (Noun).\n• Word Family: patient (adj: kiên nhẫn) → patience (n: tính kiên nhẫn, sự kiên trì) → impatient (adj phủ định).\n• Dịch: Học cách làm nhà búp bê đòi hỏi rất nhiều sự kiên nhẫn.",
        hint: "💡 Sau 'a lot of' cần một Danh từ (patience: lòng kiên nhẫn)."
      },
      {
        stem: "I stopped reading the novel because it was quite ___ . (interest)",
        root: "interest",
        answer: "uninteresting",
        unit: 1,
        grammar_point: "Negative Adjective",
        explanation: "• Vị trí: Sau \"was quite\" cần một Tính từ. Ngữ cảnh dừng đọc sách (stopped reading) chỉ lý do tiêu cực → dùng tiền tố phủ định \"un-\".\n• Word Family: interest (v/n) → interesting (adj) → uninteresting (adj: tẻ nhạt, không hay) → interested (adj).\n• Dịch: Tôi đã ngừng đọc cuốn tiểu thuyết vì nó khá tẻ nhạt.",
        hint: "💡 Ngừng đọc sách vì cuốn sách dở/không hay → cần Tính từ mang nghĩa phủ định (uninteresting)."
      },
      {
        stem: "We made an ___ to play badminton together this Saturday. (arrange)",
        root: "arrange",
        answer: "arrangement",
        unit: 1,
        grammar_point: "Collocation: make an arrangement",
        explanation: "• Vị trí: Sau mạo từ \"an\" và động từ \"made\" cần một Danh từ (Noun).\n• Cụm cố định: make an arrangement (sắp xếp, hẹn gặp).\n• Word Family: arrange (v: sắp xếp) → arrangement (n: sự sắp xếp, cuộc hẹn).\n• Dịch: Chúng tôi đã hẹn nhau cùng chơi cầu lông vào thứ Bảy này.",
        hint: "💡 Cụm cố định: 'make an arrangement' (thu xếp/hẹn lịch)."
      }
    ]
  },

  // ===================== ĐỀ 02: UNIT 1 + UNIT 2 (HOBBIES + HEALTHY LIVING) =====================
  {
    exam_number: 2,
    title: "Luyện tập Word Formation - Đề 02 (Lũy kế Unit 1 & Unit 2: Hobbies + Healthy Living)",
    scope: "Unit 1 + Unit 2",
    questions: [
      {
        stem: "Lack of essential vitamins causes severe ___ . (tire)",
        root: "tire",
        answer: "tiredness",
        unit: 2,
        grammar_point: "Verb + Noun object",
        explanation: "• Vị trí: Sau ngoại động từ \"causes\" (gây ra) và tính từ \"severe\" cần một Danh từ (Noun) đóng vai trò tân ngữ.\n• Word Family: tire (v) → tired (adj: mệt mỏi) → tiredness (n: sự mệt mỏi) → tiring (adj: gây mệt mỏi).\n• Dịch: Thiếu các vitamin thiết yếu gây ra sự mệt mỏi trầm trọng.",
        hint: "💡 Sau 'causes severe' cần một Danh từ (tiredness: sự mệt mỏi)."
      },
      {
        stem: "Eating fresh fruits and vegetables is good for your ___ . (healthy)",
        root: "healthy",
        answer: "health",
        unit: 2,
        grammar_point: "Possessive adjective + Noun",
        explanation: "• Vị trí: Sau tính từ sở hữu \"your\" cần một Danh từ (Noun).\n• Word Family: health (n: sức khỏe) → healthy (adj: lành mạnh, khỏe mạnh) → unhealthy (adj phủ định).\n• Dịch: Ăn hoa quả tươi và rau củ rất tốt cho sức khỏe của em.",
        hint: "💡 Sau 'your' cần một Danh từ (health: sức khỏe)."
      },
      {
        stem: "I feel very ___ because of the sudden cold and the flu. (please)",
        root: "please",
        answer: "unpleasant",
        unit: 2,
        grammar_point: "Feel + Adjective (negative meaning)",
        explanation: "• Vị trí: Sau động từ tri giác \"feel\" cần một Tính từ (Adjective). Vì bị cảm lạnh và cúm (the flu) nên mang cảm giác tiêu cực/khó chịu → dùng tiền tố \"un-\".\n• Word Family: please (v) → pleasant (adj: dễ chịu) → unpleasant (adj: khó chịu) → pleasure (n).\n• Dịch: Tôi cảm thấy rất khó chịu vì trời lạnh đột ngột và bệnh cúm.",
        hint: "💡 Bị cúm (flu) thì cảm giác phải là khó chịu → cần Tính từ phủ định (unpleasant)."
      },
      {
        stem: "Doing morning exercise regularly helps you maintain your body ___ . (fit)",
        root: "fit",
        answer: "fitness",
        unit: 2,
        grammar_point: "Noun phrase",
        explanation: "• Vị trí: Sau tính từ sở hữu \"your body\" cần một Danh từ (Noun).\n• Word Family: fit (adj: thon gọn, vừa vặn) → fitness (n: thể lực, vóc dáng cân đối).\n• Dịch: Tập thể dục buổi sáng đều đặn giúp bạn duy trì thể lực và vóc dáng cân đối.",
        hint: "💡 Cụm 'body fitness' (thể lực/vóc dáng cân đối)."
      },
      {
        stem: "Sunlight affects plants ___ by helping them produce chlorophyll. (benefit)",
        root: "benefit",
        answer: "beneficially",
        unit: 2,
        grammar_point: "Verb + Object + Adverb",
        explanation: "• Vị trí: Đứng sau động từ \"affects\" và tân ngữ \"plants\" cần một Trạng từ (Adverb) để bổ nghĩa cho động từ \"affects\".\n• Word Family: benefit (n/v: lợi ích/giúp ích) → beneficial (adj: có lợi) → beneficially (adv: một cách có lợi).\n• Dịch: Ánh sáng mặt trời tác động một cách có lợi đến cây cối bằng cách giúp chúng tạo chất diệp lục.",
        hint: "💡 Bổ nghĩa cho động từ 'affects' cần một Trạng từ (beneficially)."
      },
      {
        stem: "Eating too much fast food is very ___ for your cardiovascular system. (health)",
        root: "health",
        answer: "unhealthy",
        unit: 2,
        grammar_point: "Negative Adjective",
        explanation: "• Vị trí: Sau to be \"is very\" cần một Tính từ. Ăn quá nhiều đồ ăn nhanh có hại cho tim mạch → cần tính từ mang nghĩa tiêu cực \"unhealthy\".\n• Word Family: health (n) → healthy (adj) → unhealthy (adj: không lành mạnh, có hại cho sức khỏe).\n• Dịch: Ăn quá nhiều thức ăn nhanh rất không tốt cho hệ tim mạch của bạn.",
        hint: "💡 Ăn đồ ăn nhanh có hại → tính từ phủ định 'unhealthy'."
      },
      {
        stem: "He is very ___ and can play football all afternoon. (energy)",
        root: "energy",
        answer: "energetic",
        unit: 2,
        grammar_point: "To be + Adjective",
        explanation: "• Vị trí: Sau to be \"is very\" cần một Tính từ (Adjective) để miêu tả người.\n• Word Family: energy (n: năng lượng) → energetic (adj: giàu năng lượng, năng động) → energetically (adv).\n• Dịch: Cậu ấy rất tràn đầy năng lượng và có thể đá bóng suốt cả buổi chiều.",
        hint: "💡 Sau 'is very' cần một Tính từ (energetic: giàu năng lượng)."
      },
      {
        stem: "My sister is a ___ designer who makes unique handicrafts. (create)",
        root: "create",
        answer: "creative",
        unit: 1,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Đứng giữa mạo từ \"a\" và danh từ chỉ người \"designer\" cần một Tính từ (Adjective).\n• Word Family: create (v) → creative (adj: sáng tạo) → creativity (n).\n• Dịch: Chị tôi là một nhà thiết kế sáng tạo, chuyên làm những món đồ thủ công độc đáo.",
        hint: "💡 Bổ nghĩa cho danh từ 'designer' cần một Tính từ (creative)."
      },
      {
        stem: "Staying up late watching screens can be ___ to your vision. (harm)",
        root: "harm",
        answer: "harmful",
        unit: 2,
        grammar_point: "Be + Adjective",
        explanation: "• Vị trí: Sau động từ khuyết thiếu + be (\"can be\") cần một Tính từ (Adjective). Đi với giới từ \"to\".\n• Cấu trúc: be harmful to (có hại cho).\n• Word Family: harm (v/n) → harmful (adj: có hại) → harmless (adj: vô hại).\n• Dịch: Thức khuya nhìn màn hình có thể có hại cho thị lực của bạn.",
        hint: "💡 Cụm cố định: 'be harmful to' (có hại cho cái gì)."
      },
      {
        stem: "There are over thirty passionate dollhouse ___ in this forum. (collect)",
        root: "collect",
        answer: "collectors",
        unit: 1,
        grammar_point: "Plural Noun of person",
        explanation: "• Vị trí: Sau số đếm \"thirty\" (ba mươi) và tính từ \"passionate\" (đam mê) cần một Danh từ số nhiều chỉ người (Plural Noun).\n• Word Family: collect (v) → collector (n: người sưu tầm) → collectors (số nhiều).\n• Dịch: Có hơn ba mươi người sưu tập nhà búp bê đầy nhiệt huyết trên diễn đàn này.",
        hint: "💡 Sau số lượng 'over thirty' cần một Danh từ số nhiều chỉ người (collectors)."
      }
    ]
  },

  // ===================== ĐỀ 03: UNIT 1 & UNIT 2 (NÂNG CAO & BẪY TỪ LOẠI) =====================
  {
    exam_number: 3,
    title: "Luyện tập Word Formation - Đề 03 (Unit 1 & 2 Nâng cao: Bẫy Danh từ / Tính từ / Trạng từ)",
    scope: "Unit 1 + Unit 2",
    questions: [
      {
        stem: "Children learn to wait for the garden plants to grow to full ___ . (mature)",
        root: "mature",
        answer: "maturity",
        unit: 2,
        grammar_point: "Preposition + Adjective + Noun",
        explanation: "• Vị trí: Sau giới từ \"to\" và tính từ \"full\" cần một Danh từ (Noun).\n• Cụm cố định: grow to maturity (phát triển đến lúc trưởng thành/chín muồi).\n• Word Family: mature (adj: trưởng thành, chín) → maturity (n: sự trưởng thành, sự chín).\n• Dịch: Trẻ em học cách kiên nhẫn chờ đợi cây cối trong vườn phát triển đến độ trưởng thành.",
        hint: "💡 Sau 'grow to full' cần một Danh từ (maturity: sự trưởng thành/chín)."
      },
      {
        stem: "His sudden ___ prevented him from joining the school picnic. (sick)",
        root: "sick",
        answer: "sickness",
        unit: 2,
        grammar_point: "Possessive + Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ sở hữu \"His\" và tính từ \"sudden\" cần một Danh từ (Noun) làm chủ ngữ của câu.\n• Word Family: sick (adj: ốm, bệnh) → sickness (n: cơn bệnh, sự ốm đau).\n• Dịch: Cơn ốm đột ngột của cậu ấy đã khiến cậu không thể tham gia chuyến dã ngoại của trường.",
        hint: "💡 Sau 'His sudden' làm chủ ngữ của câu cần một Danh từ (sickness: cơn bệnh)."
      },
      {
        stem: "Eating too much sugary food often leads to rapid ___ gain. (weigh)",
        root: "weigh",
        answer: "weight",
        unit: 2,
        grammar_point: "Compound noun: weight gain",
        explanation: "• Vị trí: Cụm danh từ ghép \"weight gain\" (sự tăng cân) đứng sau tính từ \"rapid\".\n• Word Family: weigh (v: cân, nặng) → weight (n: cân nặng, trọng lượng).\n• Dịch: Ăn quá nhiều đồ ngọt thường dẫn đến sự tăng cân nhanh chóng.",
        hint: "💡 Cụm danh từ ghép quen thuộc: 'weight gain' (sự tăng cân)."
      },
      {
        stem: "Students should be encouraged to take part in outdoor ___ . (active)",
        root: "active",
        answer: "activities",
        unit: 1,
        grammar_point: "Adjective + Plural Noun",
        explanation: "• Vị trí: Sau tính từ \"outdoor\" cần một Danh từ số nhiều (Plural Noun) chỉ các hoạt động chung.\n• Word Family: active (adj) → activity (n: hoạt động) → activities (số nhiều).\n• Dịch: Học sinh nên được khuyến khích tham gia vào các hoạt động ngoài trời.",
        hint: "💡 Cụm cố định: 'outdoor activities' (các hoạt động ngoài trời - số nhiều)."
      },
      {
        stem: "Listening to acoustic music provides deep ___ after exams. (relax)",
        root: "relax",
        answer: "relaxation",
        unit: 1,
        grammar_point: "Verb + Adjective + Noun",
        explanation: "• Vị trí: Sau ngoại động từ \"provides\" và tính từ \"deep\" cần một Danh từ (Noun) làm tân ngữ.\n• Word Family: relax (v) → relaxation (n: sự thư giãn) → relaxing (adj) → relaxed (adj).\n• Dịch: Nghe nhạc mộc đem lại sự thư giãn sâu sắc sau các kỳ thi.",
        hint: "💡 Sau 'provides deep' cần một Danh từ (relaxation: sự thư giãn)."
      },
      {
        stem: "Regular physical activity is highly ___ to your heart. (benefit)",
        root: "benefit",
        answer: "beneficial",
        unit: 2,
        grammar_point: "To be + Adverb + Adjective",
        explanation: "• Vị trí: Sau to be \"is\" và trạng từ mức độ \"highly\" cần một Tính từ (Adjective). Đi với giới từ \"to\".\n• Word Family: benefit (n/v) → beneficial (adj: có lợi) → beneficially (adv).\n• Dịch: Hoạt động thể chất đều đặn rất có lợi cho trái tim của bạn.",
        hint: "💡 Sau 'is highly' cần một Tính từ (beneficial to: có lợi cho)."
      },
      {
        stem: "The driver felt extremely ___ after driving all through the night. (sleep)",
        root: "sleep",
        answer: "sleepy",
        unit: 2,
        grammar_point: "Felt + Adverb + Adjective",
        explanation: "• Vị trí: Sau động từ nối \"felt\" và trạng từ \"extremely\" cần một Tính từ (Adjective) chỉ trạng thái của người.\n• Word Family: sleep (v/n) → sleepy (adj: buồn ngủ, lơ mơ) → sleepless (adj: mất ngủ).\n• Dịch: Người tài xế cảm thấy vô cùng buồn ngủ sau khi lái xe suốt cả đêm.",
        hint: "💡 Sau 'felt extremely' cần một Tính từ chỉ trạng thái người (sleepy: buồn ngủ)."
      },
      {
        stem: "Don't be ___ when helping a younger child learn to ride a bike. (patient)",
        root: "patient",
        answer: "impatient",
        unit: 1,
        grammar_point: "Imperative negative: Don't be + Adjective",
        explanation: "• Vị trí: Sau câu mệnh lệnh phủ định \"Don't be\" cần một Tính từ. Ngữ cảnh khuyên không được mất bình tĩnh/nóng vội → dùng tiền tố phủ định \"im-\".\n• Word Family: patient (adj: kiên nhẫn) → impatient (adj: mất kiên nhẫn, nóng vội) → patience (n).\n• Dịch: Đừng nóng vội/mất kiên nhẫn khi giúp một đứa trẻ tập đi xe đạp.",
        hint: "💡 Khuyên không nên nóng vội → dùng tính từ phủ định của patient (impatient)."
      },
      {
        stem: "Most people engage in gardening simply for ___ . (please)",
        root: "please",
        answer: "pleasure",
        unit: 1,
        grammar_point: "Preposition + Noun (Collocation)",
        explanation: "• Vị trí: Sau giới từ \"for\" cần một Danh từ (Noun).\n• Cụm cố định: do something for pleasure (làm việc gì để giải trí/tiêu khiển).\n• Word Family: please (v) → pleasure (n) → pleasant (adj) → unpleasant (adj).\n• Dịch: Hầu hết mọi người tham gia làm vườn chỉ đơn giản là để tìm niềm vui.",
        hint: "💡 Cụm cố định: 'for pleasure' (để giải trí, vì niềm vui)."
      },
      {
        stem: "Prolonged exposure to loud noise causes mental ___ and stress. (tire)",
        root: "tire",
        answer: "tiredness",
        unit: 2,
        grammar_point: "Noun coordinated by 'and'",
        explanation: "• Vị trí: Đứng sau tính từ \"mental\" và song song với danh từ \"stress\" qua liên từ \"and\" cần một Danh từ (Noun).\n• Word Family: tire (v) → tiredness (n: sự mệt mỏi) → tired (adj).\n• Dịch: Việc tiếp xúc lâu với tiếng ồn lớn gây ra sự mệt mỏi tinh thần và căng thẳng.",
        hint: "💡 Cụm song song với 'stress': 'mental tiredness' (sự mệt mỏi tinh thần)."
      }
    ]
  },

  // ===================== ĐỀ 04: UNIT 1 -> UNIT 3 (THÊM COMMUNITY SERVICE) =====================
  {
    exam_number: 4,
    title: "Luyện tập Word Formation - Đề 04 (Lũy kế Unit 1 → Unit 3: Thêm Community Service)",
    scope: "Unit 1 → Unit 3",
    questions: [
      {
        stem: "She decided to do ___ work at the local nursing home every Saturday. (volunteer)",
        root: "volunteer",
        answer: "voluntary",
        unit: 3,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"work\" cần một Tính từ (Adjective) bổ nghĩa.\n• Cụm từ: voluntary work (công việc tình nguyện, tự nguyện).\n• Word Family: volunteer (n/v: tình nguyện viên/làm tình nguyện) → voluntary (adj: tự nguyện) → voluntarily (adv).\n• Dịch: Cô ấy quyết định làm công việc tình nguyện tại viện dưỡng lão địa phương vào mỗi thứ Bảy.",
        hint: "💡 Bổ nghĩa cho 'work' cần một Tính từ (voluntary: tự nguyện/tình nguyện)."
      },
      {
        stem: "There is a noticeable ___ between his attitude now and last year. (differ)",
        root: "differ",
        answer: "difference",
        unit: 3,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"a\" và tính từ \"noticeable\" cần một Danh từ số ít (Noun).\n• Word Family: differ (v: khác nhau) → difference (n: sự khác biệt) → different (adj: khác biệt).\n• Dịch: Có một sự khác biệt rõ rệt giữa thái độ của cậu ấy bây giờ và năm ngoái.",
        hint: "💡 Sau 'a noticeable' cần một Danh từ (difference: sự khác biệt)."
      },
      {
        stem: "The charity received a generous ___ of warm coats for flood victims. (donate)",
        root: "donate",
        answer: "donation",
        unit: 3,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"a\" và tính từ \"generous\" (hào phóng) cần một Danh từ (Noun).\n• Word Family: donate (v: quyên góp) → donation (n: khoản quyên góp, sự quyên tặng).\n• Dịch: Tổ chức từ thiện đã nhận được một khoản quyên góp áo ấm hào phóng cho các nạn nhân lũ lụt.",
        hint: "💡 Sau 'a generous' cần một Danh từ (donation: sự quyên góp)."
      },
      {
        stem: "Air pollution is a major ___ concern in many modern metropolises. (environment)",
        root: "environment",
        answer: "environmental",
        unit: 3,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"concern\" (mối bận tâm/vấn đề) cần một Tính từ (Adjective).\n• Word Family: environment (n: môi trường) → environmental (adj: thuộc về môi trường) → environmentally (adv).\n• Dịch: Ô nhiễm không khí là một mối lo ngại lớn về môi trường tại nhiều đô thị hiện đại.",
        hint: "💡 Bổ nghĩa cho danh từ 'concern' cần Tính từ (environmental: thuộc về môi trường)."
      },
      {
        stem: "The volunteers were extremely ___ in distributing clean water to villagers. (help)",
        root: "help",
        answer: "helpful",
        unit: 3,
        grammar_point: "To be + Adverb + Adjective",
        explanation: "• Vị trí: Sau to be \"were\" và trạng từ \"extremely\" cần một Tính từ (Adjective) mang nghĩa tích cực.\n• Word Family: help (v/n) → helpful (adj: hữu ích, hay giúp đỡ) → helpless (adj: bất lực, vô vọng).\n• Dịch: Các tình nguyện viên đã vô cùng hữu ích và nhiệt tình trong việc phân phát nước sạch cho dân làng.",
        hint: "💡 Sau 'were extremely' cần Tính từ tích cực (helpful: hay giúp đỡ/hữu ích)."
      },
      {
        stem: "Physical exercise combats both muscle weakness and chronic ___ . (tire)",
        root: "tire",
        answer: "tiredness",
        unit: 2,
        grammar_point: "Noun phrase",
        explanation: "• Vị trí: Sau tính từ \"chronic\" (mãn tính) và song song với \"weakness\" cần một Danh từ (Noun).\n• Word Family: tire (v) → tiredness (n: sự mệt mỏi) → tired (adj).\n• Dịch: Tập thể dục giúp chống lại cả tình trạng yếu cơ và sự mệt mỏi mãn tính.",
        hint: "💡 Sau 'chronic' cần một Danh từ (tiredness: sự mệt mỏi)."
      },
      {
        stem: "Writing poems allows students to express their innate ___ . (create)",
        root: "create",
        answer: "creativity",
        unit: 1,
        grammar_point: "Possessive + Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ sở hữu \"their\" và tính từ \"innate\" (bẩm sinh) cần một Danh từ (Noun).\n• Word Family: create (v) → creativity (n: sức sáng tạo) → creative (adj).\n• Dịch: Làm thơ cho phép học sinh thể hiện sức sáng tạo bẩm sinh của mình.",
        hint: "💡 Sau 'their innate' cần một Danh từ (creativity: sức sáng tạo)."
      },
      {
        stem: "Consuming too much salt can lead to an ___ lifestyle. (health)",
        root: "health",
        answer: "unhealthy",
        unit: 2,
        grammar_point: "Article 'an' + Negative Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"lifestyle\" và sau mạo từ \"an\" cần một Tính từ bắt đầu bằng nguyên âm mang nghĩa tiêu cực.\n• Word Family: health (n) → healthy (adj) → unhealthy (adj bắt đầu bằng 'u').\n• Dịch: Tiêu thụ quá nhiều muối có thể dẫn đến một lối sống không lành mạnh.",
        hint: "💡 Đi sau mạo từ 'an' và mang nghĩa có hại → tính từ phủ định 'unhealthy'."
      },
      {
        stem: "The charity project provides warm soup for the ___ living on the streets. (home)",
        root: "home",
        answer: "homeless",
        unit: 3,
        grammar_point: "The + Adjective (referring to a group)",
        explanation: "• Vị trí: Cấu trúc \"the + adj\" để chỉ một nhóm người trong xã hội: the homeless (những người vô gia cư).\n• Word Family: home (n) → homeless (adj: vô gia cư) → homelessness (n: tình trạng vô gia cư).\n• Dịch: Dự án từ thiện cung cấp súp nóng cho những người vô gia cư sống trên đường phố.",
        hint: "💡 Cấu trúc 'the + adj' chỉ nhóm người: the homeless (người vô gia cư)."
      },
      {
        stem: "He frequently ___ plastic containers and brings them to the recycling depot. (collect)",
        root: "collect",
        answer: "collects",
        unit: 1,
        grammar_point: "Present simple verb (Subject: He)",
        explanation: "• Vị trí: Đứng sau chủ ngữ ngôi thứ 3 số ít \"He\" và trạng từ tần suất \"frequently\" cần Động từ thì hiện tại đơn chia theo số ít (+s/es).\n• Word Family: collect (v) → collects (ngôi 3 số ít) → collection (n).\n• Dịch: Cậu ấy thường xuyên thu gom các hộp nhựa và mang chúng đến điểm tái chế.",
        hint: "💡 Chủ ngữ 'He' ở thì hiện tại đơn → động từ thêm 's' (collects)."
      }
    ]
  },

  // ===================== ĐỀ 05: UNIT 1 -> UNIT 3 (BẪY TIỀN TỐ PHỦ ĐỊNH) =====================
  {
    exam_number: 5,
    title: "Luyện tập Word Formation - Đề 05 (Lũy kế Unit 1 → 3: Bẫy Tiền tố phủ định un-, dis-, im-)",
    scope: "Unit 1 → Unit 3",
    questions: [
      {
        stem: "The garbage bin smelled terribly and produced an ___ odor. (please)",
        root: "please",
        answer: "unpleasant",
        unit: 2,
        grammar_point: "Article 'an' + Negative Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"an\" và trước danh từ \"odor\" (mùi) cần một Tính từ bắt đầu bằng nguyên âm mang nghĩa tiêu cực (mùi khó chịu).\n• Word Family: please (v) → pleasant (adj) → unpleasant (adj: khó chịu).\n• Dịch: Thùng rác bốc mùi khủng khiếp và tỏa ra một mùi hôi khó chịu.",
        hint: "💡 Đứng sau 'an' và trước 'odor' mang nghĩa khó chịu → 'unpleasant'."
      },
      {
        stem: "The city council launched a campaign to tackle the problem of ___ . (home)",
        root: "home",
        answer: "homelessness",
        unit: 3,
        grammar_point: "Preposition + Noun",
        explanation: "• Vị trí: Sau giới từ \"of\" trong cụm \"the problem of\" cần một Danh từ (Noun) chỉ hiện tượng/vấn đề xã hội.\n• Word Family: home (n) → homeless (adj) → homelessness (n: nạn vô gia cư, tình trạng không nhà).\n• Dịch: Hội đồng thành phố đã phát động chiến dịch giải quyết vấn đề vô gia cư.",
        hint: "💡 Sau 'the problem of' cần Danh từ chỉ tình trạng (homelessness: nạn vô gia cư)."
      },
      {
        stem: "Many ___ children receive free medical treatment from this foundation. (able)",
        root: "able",
        answer: "disabled",
        unit: 3,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"children\" cần một Tính từ (Adjective) chỉ tình trạng khuyết tật.\n• Word Family: able (adj: có khả năng) → disable (v) → disabled (adj: khuyết tật, tàn tật) → disability (n).\n• Dịch: Nhiều trẻ em khuyết tật được nhận điều trị y tế miễn phí từ quỹ này.",
        hint: "💡 Bổ nghĩa cho 'children' chỉ trẻ em khuyết tật → 'disabled'."
      },
      {
        stem: "With words of ___ from her mentor, she gained confidence to speak publicly. (encourage)",
        root: "encourage",
        answer: "encouragement",
        unit: 3,
        grammar_point: "Preposition + Noun",
        explanation: "• Vị trí: Sau giới từ \"of\" trong cụm \"words of\" cần một Danh từ (Noun).\n• Cụm từ: words of encouragement (những lời động viên, khích lệ).\n• Word Family: encourage (v: khích lệ) → encouragement (n: sự khích lệ) → encouraging (adj).\n• Dịch: Nhờ những lời động viên từ người hướng dẫn, cô ấy đã tự tin nói trước công chúng.",
        hint: "💡 Cụm 'words of encouragement' (những lời động viên/khích lệ)."
      },
      {
        stem: "Skipping breakfast and drinking soft drinks daily is an ___ habit. (healthy)",
        root: "healthy",
        answer: "unhealthy",
        unit: 2,
        grammar_point: "Article 'an' + Negative Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"an\" và trước danh từ \"habit\" cần một Tính từ mang nghĩa tiêu cực (thói quen không lành mạnh).\n• Word Family: health (n) → healthy (adj) → unhealthy (adj).\n• Dịch: Bỏ bữa sáng và uống nước ngọt hàng ngày là một thói quen không lành mạnh.",
        hint: "💡 Thói quen có hại đi sau mạo từ 'an' → tính từ phủ định 'unhealthy'."
      },
      {
        stem: "The coach was ___ with the players because they ignored his instructions. (patient)",
        root: "patient",
        answer: "impatient",
        unit: 1,
        grammar_point: "Was + Adjective (with preposition 'with')",
        explanation: "• Vị trí: Sau to be \"was\" và đi với giới từ \"with\" cần một Tính từ. Vì cầu thủ phớt lờ chỉ đạo nên huấn luyện viên mất bình tĩnh → dùng tính từ phủ định \"impatient with\".\n• Word Family: patient (adj) → impatient (adj: thiếu kiên nhẫn, sốt ruột, bực mình).\n• Dịch: Huấn luyện viên đã mất kiên nhẫn với các cầu thủ vì họ phớt lờ chỉ đạo của ông.",
        hint: "💡 Huấn luyện viên bực mình/mất kiên nhẫn với học trò → 'impatient'."
      },
      {
        stem: "Community service teaches teenagers to become ___ citizens in society. (use)",
        root: "use",
        answer: "useful",
        unit: 3,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"citizens\" (công dân) cần một Tính từ (Adjective) mang nghĩa tích cực.\n• Word Family: use (v/n) → useful (adj: có ích) → useless (adj: vô dụng).\n• Dịch: Hoạt động cộng đồng dạy thanh thiếu niên trở thành những công dân có ích cho xã hội.",
        hint: "💡 Bổ nghĩa cho 'citizens' chỉ công dân có ích → 'useful'."
      },
      {
        stem: "Donating books to mountain schools is deeply ___ to rural children. (benefit)",
        root: "benefit",
        answer: "beneficial",
        unit: 2,
        grammar_point: "To be + Adverb + Adjective",
        explanation: "• Vị trí: Sau to be \"is\" và phó từ \"deeply\" cần một Tính từ (Adjective). Đi kèm giới từ \"to\".\n• Word Family: benefit (n/v) → beneficial (adj: có ích, có lợi) → beneficially (adv).\n• Dịch: Tặng sách cho các trường vùng cao mang lại lợi ích sâu sắc cho trẻ em nông thôn.",
        hint: "💡 Sau 'is deeply' cần Tính từ (beneficial to: có lợi cho)."
      },
      {
        stem: "They cleaned the entire neighborhood park ___ without expecting any payment. (volunteer)",
        root: "volunteer",
        answer: "voluntarily",
        unit: 3,
        grammar_point: "Verb phrase + Adverb",
        explanation: "• Vị trí: Đứng sau cụm vị ngữ hoàn chỉnh \"cleaned the entire neighborhood park\" cần một Trạng từ (Adverb) bổ nghĩa cho hành động dọn dẹp.\n• Word Family: volunteer (n/v) → voluntary (adj) → voluntarily (adv: một cách tự nguyện).\n• Dịch: Họ đã dọn dẹp toàn bộ công viên khu phố một cách tự nguyện mà không mong nhận bất kỳ thù lao nào.",
        hint: "💡 Bổ nghĩa cho hành động dọn dẹp (cleaned) cần một Trạng từ (voluntarily)."
      },
      {
        stem: "Joining sports and art clubs helps develop children's social ___ . (active)",
        root: "active",
        answer: "activities",
        unit: 1,
        grammar_point: "Possessive + Adjective + Plural Noun",
        explanation: "• Vị trí: Sau sở hữu cách \"children's\" và tính từ \"social\" cần một Danh từ số nhiều (Plural Noun).\n• Word Family: active (adj) → activity (n) → activities (n số nhiều).\n• Dịch: Tham gia các câu lạc bộ thể thao và nghệ thuật giúp phát triển các hoạt động xã hội của trẻ em.",
        hint: "💡 Sau 'children's social' cần Danh từ số nhiều (activities)."
      }
    ]
  },

  // ===================== ĐỀ 06: UNIT 1 -> UNIT 4 (THÊM MUSIC AND ARTS) =====================
  {
    exam_number: 6,
    title: "Luyện tập Word Formation - Đề 06 (Lũy kế Unit 1 → Unit 4: Thêm Music and Arts)",
    scope: "Unit 1 → Unit 4",
    questions: [
      {
        stem: "Trinh Cong Son is revered as one of the greatest ___ in Vietnamese modern music. (music)",
        root: "music",
        answer: "musicians",
        unit: 4,
        grammar_point: "One of the greatest + Plural Noun of person",
        explanation: "• Vị trí: Cấu trúc \"one of the + superlative + plural noun\": một trong những nhạc sĩ vĩ đại nhất → cần Danh từ số nhiều chỉ người.\n• Word Family: music (n: âm nhạc) → musician (n: nhạc sĩ) → musicians (số nhiều) → musical (adj).\n• Dịch: Trịnh Công Sơn được tôn kính là một trong những nhạc sĩ vĩ đại nhất của tân nhạc Việt Nam.",
        hint: "💡 Sau 'one of the greatest' cần Danh từ số nhiều chỉ người (musicians)."
      },
      {
        stem: "Their live water puppet ___ captivated the international audience. (perform)",
        root: "perform",
        answer: "performance",
        unit: 4,
        grammar_point: "Compound Noun phrase",
        explanation: "• Vị trí: Đứng sau cụm định ngữ \"water puppet\" làm chủ ngữ cho động từ \"captivated\" cần một Danh từ (Noun).\n• Word Family: perform (v: biểu diễn) → performance (n: buổi biểu diễn, tiết mục) → performer (n: người biểu diễn).\n• Dịch: Buổi biểu diễn múa rối nước trực tiếp của họ đã thu hút khán giả quốc tế.",
        hint: "💡 'water puppet performance' (buổi biểu diễn múa rối nước)."
      },
      {
        stem: "She has remarkable ___ vision and paints stunning oil landscapes. (art)",
        root: "art",
        answer: "artistic",
        unit: 4,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng giữa tính từ \"remarkable\" và danh từ \"vision\" cần một Tính từ (Adjective) bổ nghĩa cho vision.\n• Word Family: art (n: nghệ thuật) → artistic (adj: thuộc về nghệ thuật, có tính nghệ thuật) → artist (n: nghệ sĩ).\n• Dịch: Cô ấy có tầm nhìn nghệ thuật đáng nể và vẽ những bức tranh phong cảnh sơn dầu tuyệt đẹp.",
        hint: "💡 Bổ nghĩa cho danh từ 'vision' cần Tính từ (artistic: mang tính nghệ thuật)."
      },
      {
        stem: "The Louvre Museum in Paris is world-___ for its historic art collections. (fame)",
        root: "fame",
        answer: "famous",
        unit: 4,
        grammar_point: "Compound adjective: world-famous",
        explanation: "• Vị trí: Cụm tính từ ghép \"world-famous\" (nổi tiếng thế giới).\n• Word Family: fame (n: danh tiếng) → famous (adj: nổi tiếng) → famously (adv).\n• Dịch: Bảo tàng Louvre ở Paris nổi tiếng khắp thế giới nhờ các bộ sưu tập nghệ thuật lịch sử.",
        hint: "💡 Cụm tính từ ghép: 'world-famous' (nổi tiếng khắp thế giới)."
      },
      {
        stem: "Quan Ho singing is a celebrated ___ folk genre recognized by UNESCO. (tradition)",
        root: "tradition",
        answer: "traditional",
        unit: 4,
        grammar_point: "Adjective + Noun phrase",
        explanation: "• Vị trí: Đứng trước cụm danh từ \"folk genre\" (thể loại dân ca) cần một Tính từ (Adjective).\n• Word Family: tradition (n: truyền thống) → traditional (adj: mang tính truyền thống) → traditionally (adv).\n• Dịch: Hát Quan họ là một thể loại dân ca truyền thống nổi tiếng được UNESCO công nhận.",
        hint: "💡 Bổ nghĩa cho 'folk genre' cần Tính từ (traditional: truyền thống)."
      },
      {
        stem: "The community center welcomed a generous ___ from local benefactors. (donate)",
        root: "donate",
        answer: "donation",
        unit: 3,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"a\" và tính từ \"generous\" cần một Danh từ (Noun).\n• Word Family: donate (v) → donation (n: khoản quyên góp, món quà tặng).\n• Dịch: Trung tâm cộng đồng đã đón nhận một khoản quyên góp hào phóng từ các nhà hảo tâm địa phương.",
        hint: "💡 Sau 'a generous' cần một Danh từ (donation: khoản quyên góp)."
      },
      {
        stem: "Many middle school students feel constantly ___ during exam periods. (tire)",
        root: "tire",
        answer: "tired",
        unit: 2,
        grammar_point: "Feel + Adverb + Adjective (-ed for feelings)",
        explanation: "• Vị trí: Sau động từ nối \"feel\" và trạng từ \"constantly\" cần một Tính từ đuôi -ed chỉ cảm xúc/trạng thái của học sinh.\n• Word Family: tire (v) → tired (adj: mệt mỏi) → tiredness (n).\n• Dịch: Nhiều học sinh THCS cảm thấy mệt mỏi liên tục trong suốt các đợt thi cử.",
        hint: "💡 Sau 'feel constantly' chỉ cảm giác của người cần tính từ đuôi -ed (tired)."
      },
      {
        stem: "Origami is a highly ___ craft that improves fine motor skills. (create)",
        root: "create",
        answer: "creative",
        unit: 1,
        grammar_point: "Article + Adverb + Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"craft\" (nghề thủ công) và sau \"highly\" cần một Tính từ (Adjective).\n• Word Family: create (v) → creative (adj: giàu sáng tạo) → creativity (n).\n• Dịch: Gấp giấy Origami là một môn thủ công giàu tính sáng tạo giúp cải thiện kỹ năng vận động tinh.",
        hint: "💡 Bổ nghĩa cho danh từ 'craft' cần Tính từ (creative: mang tính sáng tạo)."
      },
      {
        stem: "Can you tell me the main ___ between photography and painting? (differ)",
        root: "differ",
        answer: "difference",
        unit: 3,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"the\" và tính từ \"main\" cần một Danh từ số ít (Noun).\n• Word Family: differ (v) → difference (n: sự khác biệt) → different (adj).\n• Dịch: Bạn có thể cho tôi biết điểm khác biệt chính giữa nhiếp ảnh và hội họa không?",
        hint: "💡 Sau 'the main' cần một Danh từ (difference: sự khác biệt)."
      },
      {
        stem: "Drinking enough water throughout the day is highly ___ to skin health. (benefit)",
        root: "benefit",
        answer: "beneficial",
        unit: 2,
        grammar_point: "To be + Adverb + Adjective",
        explanation: "• Vị trí: Sau to be \"is\" và trạng từ \"highly\" cần một Tính từ (Adjective đi với \"to\").\n• Word Family: benefit (n/v) → beneficial (adj: có lợi) → beneficially (adv).\n• Dịch: Uống đủ nước trong suốt cả ngày rất có lợi cho sức khỏe làn da.",
        hint: "💡 Sau 'is highly' cần Tính từ (beneficial to: có lợi cho)."
      }
    ]
  },

  // ===================== ĐỀ 07: UNIT 1 -> UNIT 4 (NGƯỜI VS VẬT & NGHỆ THUẬT) =====================
  {
    exam_number: 7,
    title: "Luyện tập Word Formation - Đề 07 (Lũy kế Unit 1 → 4: Danh từ chỉ Người vs Danh từ chỉ Vật)",
    scope: "Unit 1 → Unit 4",
    questions: [
      {
        stem: "Wolfgang Amadeus Mozart was an extraordinarily talented Austrian ___ . (compose)",
        root: "compose",
        answer: "composer",
        unit: 4,
        grammar_point: "Article + Adjective + Noun of person",
        explanation: "• Vị trí: Sau tính từ \"Austrian\" bổ nghĩa cho chủ ngữ Mozart cần một Danh từ chỉ người (Noun of person).\n• Word Family: compose (v: sáng tác) → composer (n: nhà soạn nhạc) → composition (n: tác phẩm, bản nhạc).\n• Dịch: Wolfgang Amadeus Mozart là một nhà soạn nhạc người Áo tài năng xuất chúng.",
        hint: "💡 Mozart là một nhà soạn nhạc → Danh từ chỉ người (composer)."
      },
      {
        stem: "Van Gogh is one of the most celebrated post-impressionist ___ in history. (paint)",
        root: "paint",
        answer: "painters",
        unit: 4,
        grammar_point: "One of the most celebrated + Plural Noun",
        explanation: "• Vị trí: Cấu trúc \"one of the most + plural noun\": một trong những họa sĩ nổi tiếng nhất → Danh từ số nhiều chỉ người.\n• Word Family: paint (v) → painter (n: họa sĩ) → painters (số nhiều) → painting (n: bức tranh).\n• Dịch: Van Gogh là một trong những họa sĩ trường phái hậu ấn tượng nổi tiếng nhất trong lịch sử.",
        hint: "💡 Van Gogh là họa sĩ, đứng sau 'one of the most...' cần danh từ số nhiều (painters)."
      },
      {
        stem: "She plays several ___ instruments including the cello, violin, and flute. (music)",
        root: "music",
        answer: "musical",
        unit: 4,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"instruments\" (nhạc cụ) cần một Tính từ (Adjective).\n• Cụm từ: musical instruments (các nhạc cụ).\n• Word Family: music (n) → musical (adj: thuộc về âm nhạc) → musician (n: nhạc sĩ).\n• Dịch: Cô ấy chơi được một số nhạc cụ bao gồm đàn cello, vĩ cầm và sáo.",
        hint: "💡 Cụm cố định: 'musical instruments' (các loại nhạc cụ)."
      },
      {
        stem: "More than fifty youth ___ signed up for the beach clean-up project. (volunteer)",
        root: "volunteer",
        answer: "volunteers",
        unit: 3,
        grammar_point: "Number + Plural Noun",
        explanation: "• Vị trí: Sau số lượng \"More than fifty\" cần một Danh từ số nhiều chỉ người (Plural Noun).\n• Word Family: volunteer (n/v) → volunteers (danh từ số nhiều: những tình nguyện viên).\n• Dịch: Hơn năm mươi thanh niên tình nguyện đã đăng ký tham gia dự án dọn rác bãi biển.",
        hint: "💡 Sau số lượng 'fifty' cần Danh từ số nhiều chỉ người (volunteers)."
      },
      {
        stem: "The young cellist played the classical sonata ___ and won first prize. (beauty)",
        root: "beauty",
        answer: "beautifully",
        unit: 4,
        grammar_point: "Verb + Object + Adverb",
        explanation: "• Vị trí: Bổ nghĩa cho động từ biểu diễn \"played the classical sonata\" cần một Trạng từ chỉ thể cách (Adverb of manner).\n• Word Family: beauty (n: vẻ đẹp) → beautiful (adj: đẹp) → beautifully (adv: một cách tuyệt vời, hay tuyệt).\n• Dịch: Nghệ sĩ cello trẻ tuổi đã chơi bản sonata cổ điển một cách tuyệt hay và giành giải nhất.",
        hint: "💡 Bổ nghĩa cho động từ 'played' cần một Trạng từ (beautifully)."
      },
      {
        stem: "The city art gallery is holding an impressive sculpture ___ this weekend. (exhibit)",
        root: "exhibit",
        answer: "exhibition",
        unit: 4,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"an\" và tính từ \"impressive\" cần một Danh từ (Noun) chỉ sự kiện/vật thể.\n• Cụm từ: sculpture exhibition (triển lãm điêu khắc).\n• Word Family: exhibit (v/n: trưng bày/vật trưng bày) → exhibition (n: cuộc triển lãm).\n• Dịch: Phòng triển lãm nghệ thuật thành phố đang tổ chức một cuộc triển lãm điêu khắc ấn tượng vào cuối tuần này.",
        hint: "💡 Sau 'an impressive sculpture' cần Danh từ (exhibition: cuộc triển lãm)."
      },
      {
        stem: "Yoga and meditation provide total physical and mental ___ . (relax)",
        root: "relax",
        answer: "relaxation",
        unit: 1,
        grammar_point: "Verb + Adjective + Noun",
        explanation: "• Vị trí: Sau ngoại động từ \"provide\" và các tính từ \"physical and mental\" cần một Danh từ (Noun).\n• Word Family: relax (v) → relaxation (n: sự thư giãn) → relaxing (adj).\n• Dịch: Yoga và thiền định mang lại sự thư giãn hoàn toàn cả về thể chất lẫn tinh thần.",
        hint: "💡 Sau 'physical and mental' cần một Danh từ (relaxation: sự thư giãn)."
      },
      {
        stem: "Restoring an antique clock requires exceptional skill and ___ . (patient)",
        root: "patient",
        answer: "patience",
        unit: 1,
        grammar_point: "Noun coordinated by 'and'",
        explanation: "• Vị trí: Song song với danh từ \"skill\" qua liên từ \"and\" sau động từ \"requires\" cần một Danh từ (Noun).\n• Word Family: patient (adj) → patience (n: tính kiên nhẫn, lòng nhẫn nại).\n• Dịch: Việc phục chế một chiếc đồng hồ cổ đòi hỏi kỹ năng xuất sắc và lòng kiên nhẫn cao độ.",
        hint: "💡 Đi cùng danh từ 'skill' cần một Danh từ (patience: lòng kiên nhẫn)."
      },
      {
        stem: "Regular cycling is an ___ way to build strong legs and stamina. (effect)",
        root: "effect",
        answer: "effective",
        unit: 2,
        grammar_point: "Article 'an' + Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"way\" và sau mạo từ \"an\" cần một Tính từ (Adjective) bắt đầu bằng nguyên âm.\n• Word Family: effect (n: hiệu quả, tác động) → effective (adj: có hiệu quả) → effectively (adv).\n• Dịch: Đạp xe đều đặn là một cách hiệu quả để rèn luyện đôi chân khỏe mạnh và sức bền.",
        hint: "💡 Sau mạo từ 'an' và trước 'way' cần Tính từ (effective: có hiệu quả)."
      },
      {
        stem: "Engaging in daily exercise leads to a visibly ___ physique. (health)",
        root: "health",
        answer: "healthier",
        unit: 2,
        grammar_point: "Comparative Adjective (or healthy)",
        explanation: "• Vị trí: Bổ nghĩa cho danh từ \"physique\" (vóc dáng) sau trạng từ \"visibly\" có thể dùng tính từ \"healthy\" hoặc dạng so sánh hơn \"healthier\".\n• Word Family: health (n) → healthy (adj: khỏe mạnh).\n• Dịch: Tập thể dục hàng ngày mang lại một vóc dáng khỏe mạnh thấy rõ.",
        hint: "💡 Bổ nghĩa cho danh từ 'physique' cần Tính từ (healthy: khỏe khoắn)."
      }
    ]
  },

  // ===================== ĐỀ 08: UNIT 1 -> UNIT 5 (THÊM FOOD AND DRINK) =====================
  {
    exam_number: 8,
    title: "Luyện tập Word Formation - Đề 08 (Lũy kế Unit 1 → Unit 5: Thêm Food and Drink)",
    scope: "Unit 1 → Unit 5",
    questions: [
      {
        stem: "Steamed vegetables retain most of their ___ value and vitamins. (nourish)",
        root: "nourish",
        answer: "nutritious",
        unit: 5,
        grammar_point: "Adjective + Noun (or nutritional)",
        explanation: "• Vị trí: Đứng trước danh từ \"value\" cần một Tính từ (Adjective) chỉ giá trị dinh dưỡng.\n• Word Family: nourish (v: nuôi dưỡng) → nutritious (adj: giàu dinh dưỡng, bổ dưỡng) → nutrition (n).\n• Dịch: Rau củ hấp giữ lại hầu hết giá trị dinh dưỡng và vitamin của chúng.",
        hint: "💡 Bổ nghĩa cho danh từ 'value' cần Tính từ (nutritious: bổ dưỡng, giàu dinh dưỡng)."
      },
      {
        stem: "Central Vietnamese noodle dishes are famous for their fiery, ___ broth. (spice)",
        root: "spice",
        answer: "spicy",
        unit: 5,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"broth\" (nước dùng) và sau tính từ \"fiery\" cần một Tính từ (Adjective).\n• Word Family: spice (n: gia vị) → spicy (adj: cay, thơm nồng gia vị).\n• Dịch: Các món mì miền Trung nổi tiếng với nước dùng cay nồng.",
        hint: "💡 Bổ nghĩa cho 'broth' (nước dùng) chỉ vị cay nồng → Tính từ 'spicy'."
      },
      {
        stem: "The soup was bland and completely ___ because the chef forgot the salt. (taste)",
        root: "taste",
        answer: "tasteless",
        unit: 5,
        grammar_point: "Negative Adjective after to be",
        explanation: "• Vị trí: Sau to be \"was\" và song song với tính từ \"bland\" (nhạt nhẽo) cần một Tính từ mang nghĩa tiêu cực (không có vị gì).\n• Word Family: taste (n/v: vị/nếm) → tasty (adj: ngon) → tasteless (adj: vô vị, nhạt thếch).\n• Dịch: Món súp nhạt nhẽo và hoàn toàn vô vị vì đầu bếp đã quên nêm muối.",
        hint: "💡 Không nêm muối nên súp vô vị/nhạt thếch → tính từ phủ định 'tasteless'."
      },
      {
        stem: "Chung cake is a renowned ___ delicacy during Lunar New Year in Viet Nam. (tradition)",
        root: "tradition",
        answer: "traditional",
        unit: 5,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"delicacy\" (món ngon) cần một Tính từ (Adjective).\n• Word Family: tradition (n) → traditional (adj: mang tính truyền thống).\n• Dịch: Bánh chưng là một món ăn truyền thống nổi tiếng vào dịp Tết Nguyên Đán ở Việt Nam.",
        hint: "💡 Bổ nghĩa cho 'delicacy' cần Tính từ (traditional: truyền thống)."
      },
      {
        stem: "Adding excessive fish sauce makes the dipping broth unpleasantly ___ . (salt)",
        root: "salt",
        answer: "salty",
        unit: 5,
        grammar_point: "Makes + Object + Adjective",
        explanation: "• Vị trí: Cấu trúc \"make something + adjective\": làm cho cái gì trở nên như thế nào. Sau trạng từ \"unpleasantly\" cần Tính từ \"salty\".\n• Word Family: salt (n: muối) → salty (adj: mặn).\n• Dịch: Cho quá nhiều nước mắm làm cho nước chấm bị mặn chát khó chịu.",
        hint: "💡 Cấu trúc 'make it unpleasantly...' cần Tính từ chỉ vị mặn (salty)."
      },
      {
        stem: "The family-run bistro is praised by customers for its prompt ___ . (serve)",
        root: "serve",
        answer: "service",
        unit: 5,
        grammar_point: "Possessive + Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ sở hữu \"its\" và tính từ \"prompt\" (nhanh nhẹn) cần một Danh từ (Noun).\n• Word Family: serve (v: phục vụ) → service (n: sự phục vụ, dịch vụ) → servant (n: người hầu).\n• Dịch: Quán ăn gia đình được khách hàng khen ngợi vì sự phục vụ nhanh nhẹn.",
        hint: "💡 Sau 'its prompt' cần Danh từ (service: sự phục vụ, dịch vụ)."
      },
      {
        stem: "Bun bo Hue is an iconic culinary ___ originating from the ancient capital. (special)",
        root: "special",
        answer: "speciality",
        unit: 5,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"an\" và các tính từ \"iconic culinary\" cần một Danh từ (Noun).\n• Word Family: special (adj: đặc biệt) → speciality / specialty (n: đặc sản) → specially (adv).\n• Dịch: Bún bò Huế là một đặc sản ẩm thực biểu tượng có nguồn gốc từ cố đô.",
        hint: "💡 Danh từ chỉ món ăn đặc sản vùng miền: 'speciality' (hoặc specialty)."
      },
      {
        stem: "The school choir delivered an exceptionally moving ___ at the gala. (perform)",
        root: "perform",
        answer: "performance",
        unit: 4,
        grammar_point: "Article + Adverb + Adjective + Noun",
        explanation: "• Vị trí: Đứng sau cụm \"an exceptionally moving\" cần một Danh từ (Noun) làm tân ngữ cho \"delivered\".\n• Word Family: perform (v) → performance (n: buổi biểu diễn, tiết mục).\n• Dịch: Dàn hợp xướng của trường đã mang đến một tiết mục biểu diễn lay động lòng người tại đêm hội.",
        hint: "💡 Sau 'moving' cần một Danh từ (performance: buổi biểu diễn, tiết mục)."
      },
      {
        stem: "After completing the marathon in the rain, the runners were totally ___ . (exhaust)",
        root: "exhaust",
        answer: "exhausted",
        unit: 2,
        grammar_point: "To be + Adverb + Adjective (-ed for feelings)",
        explanation: "• Vị trí: Sau to be \"were totally\" cần một Tính từ chỉ cảm giác của người (đuôi -ed).\n• Word Family: exhaust (v: làm kiệt sức) → exhausted (adj: kiệt sức) → exhausting (adj: gây mệt nhoài).\n• Dịch: Sau khi hoàn thành đường chạy marathon dưới mưa, các vận động viên hoàn toàn kiệt sức.",
        hint: "💡 Chỉ cảm giác kiệt sức của người chạy cần tính từ đuôi -ed (exhausted)."
      },
      {
        stem: "She showed remarkable ___ by learning to paint water puppets with her left hand. (patient)",
        root: "patient",
        answer: "patience",
        unit: 1,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng sau tính từ \"remarkable\" cần một Danh từ (Noun) làm tân ngữ cho \"showed\".\n• Word Family: patient (adj) → patience (n: lòng kiên nhẫn).\n• Dịch: Cô ấy đã thể hiện lòng kiên nhẫn phi thường khi học vẽ rối nước bằng tay trái.",
        hint: "💡 Sau 'remarkable' cần một Danh từ (patience: lòng kiên nhẫn)."
      }
    ]
  },

  // ===================== ĐỀ 09: UNIT 1 -> UNIT 5 (TỔNG HỢP & NÂNG CAO) =====================
  {
    exam_number: 9,
    title: "Luyện tập Word Formation - Đề 09 (Lũy kế Unit 1 → 5: Tổng hợp Phân loại & Chuyên sâu)",
    scope: "Unit 1 → Unit 5",
    questions: [
      {
        stem: "Reducing the excessive ___ of processed sugar helps protect against diabetes. (sweet)",
        root: "sweet",
        answer: "sweetness",
        unit: 5,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"the\" và tính từ \"excessive\" (quá mức) cần một Danh từ (Noun).\n• Word Family: sweet (adj: ngọt) → sweetness (n: vị ngọt, độ ngọt) → sweeten (v: làm ngọt).\n• Dịch: Giảm bớt vị ngọt quá mức của đường tinh luyện giúp phòng ngừa bệnh tiểu đường.",
        hint: "💡 Sau 'the excessive' cần một Danh từ (sweetness: độ ngọt/vị ngọt)."
      },
      {
        stem: "It is widely considered ___ to store raw meat together with cooked food. (health)",
        root: "health",
        answer: "unhealthy",
        unit: 2,
        grammar_point: "Considered + Negative Adjective",
        explanation: "• Vị trí: Cấu trúc bị động \"is considered + adjective\": được coi là như thế nào. Hành vi mất vệ sinh này mang nghĩa tiêu cực → dùng tính từ phủ định \"unhealthy\".\n• Word Family: health (n) → healthy (adj) → unhealthy (adj).\n• Dịch: Việc để thịt sống chung với thức ăn chín được coi là rất không hợp vệ sinh/không lành mạnh.",
        hint: "💡 Bảo quản thức ăn sai cách được coi là có hại → tính từ phủ định 'unhealthy'."
      },
      {
        stem: "Over one hundred enthusiastic young ___ cleaned up the polluted riverbank. (volunteer)",
        root: "volunteer",
        answer: "volunteers",
        unit: 3,
        grammar_point: "Plural Noun of person",
        explanation: "• Vị trí: Sau cụm từ số lượng \"Over one hundred enthusiastic young\" cần một Danh từ số nhiều chỉ người (Plural Noun).\n• Word Family: volunteer (n) → volunteers (danh từ số nhiều: những tình nguyện viên).\n• Dịch: Hơn một trăm tình nguyện viên trẻ đầy nhiệt huyết đã dọn dẹp sạch bờ sông bị ô nhiễm.",
        hint: "💡 Danh từ số nhiều chỉ người sau 'Over one hundred' → 'volunteers'."
      },
      {
        stem: "His grandfather boasts an invaluable ___ of ancient ceramic bowls. (collect)",
        root: "collect",
        answer: "collection",
        unit: 1,
        grammar_point: "Article + Adjective + Noun",
        explanation: "• Vị trí: Sau mạo từ \"an\" và tính từ \"invaluable\" (vô giá) cần một Danh từ (Noun).\n• Word Family: collect (v) → collection (n: bộ sưu tập) → collector (n: người sưu tầm).\n• Dịch: Ông nội của cậu ấy sở hữu một bộ sưu tập bát gốm cổ vô giá.",
        hint: "💡 Sau 'an invaluable' cần một Danh từ (collection: bộ sưu tập)."
      },
      {
        stem: "The concert was so ___ that many audience members fell asleep halfway through. (bore)",
        root: "bore",
        answer: "boring",
        unit: 4,
        grammar_point: "Was so + Adjective (-ing for events)",
        explanation: "• Vị trí: Cấu trúc \"was so + adjective + that\": quá... đến nỗi mà. Miêu tả tính chất của buổi hòa nhạc (concert) nên dùng tính từ đuôi -ing.\n• Word Family: bore (v) → boring (adj: gây buồn ngủ/nhàm chán) → bored (adj: cảm thấy buồn chán).\n• Dịch: Buổi hòa nhạc tẻ nhạt đến nỗi nhiều khán giả đã ngủ thiếp đi giữa chừng.",
        hint: "💡 Miêu tả tính chất của buổi hòa nhạc (concert) cần tính từ đuôi -ing (boring)."
      },
      {
        stem: "Dietitians emphasize that healthy eating is ___ linked to higher academic performance. (close)",
        root: "close",
        answer: "closely",
        unit: 2,
        grammar_point: "To be + Adverb + Participle (passive)",
        explanation: "• Vị trí: Đứng giữa to be \"is\" và quá khứ phân từ \"linked\" cần một Trạng từ (Adverb).\n• Cụm từ: be closely linked to (được liên kết chặt chẽ với).\n• Word Family: close (adj) → closely (adv: một cách chặt chẽ).\n• Dịch: Các chuyên gia dinh dưỡng nhấn mạnh rằng chế độ ăn lành mạnh có mối liên hệ chặt chẽ với kết quả học tập cao hơn.",
        hint: "💡 Cụm 'is closely linked to' (được gắn kết chặt chẽ với)."
      },
      {
        stem: "The artist's boundless ___ was vividly reflected in every brushstroke. (create)",
        root: "create",
        answer: "creativity",
        unit: 1,
        grammar_point: "Possessive + Adjective + Noun",
        explanation: "• Vị trí: Sau sở hữu cách \"The artist's\" và tính từ \"boundless\" (vô bờ bến) cần một Danh từ (Noun) làm chủ ngữ cho \"was\".\n• Word Family: create (v) → creativity (n: sức sáng tạo) → creative (adj).\n• Dịch: Sức sáng tạo vô bờ bến của người họa sĩ được phản ánh sinh động trong từng nét cọ.",
        hint: "💡 Sau 'boundless' làm chủ ngữ cần một Danh từ (creativity: sức sáng tạo)."
      },
      {
        stem: "Many impoverished children in rural areas suffer from acute ___ . (nutrition)",
        root: "nutrition",
        answer: "malnutrition",
        unit: 5,
        grammar_point: "Adjective + Negative Noun",
        explanation: "• Vị trí: Sau tính từ \"acute\" (trầm trọng) cần một Danh từ chỉ bệnh tật/tình trạng suy dinh dưỡng (tiền tố mal-).\n• Word Family: nutrition (n: dinh dưỡng) → malnutrition (n: nạn suy dinh dưỡng, thiếu dinh dưỡng).\n• Dịch: Nhiều trẻ em nghèo ở vùng nông thôn phải chịu đựng tình trạng suy dinh dưỡng trầm trọng.",
        hint: "💡 Danh từ chỉ tình trạng suy dinh dưỡng: 'malnutrition'."
      },
      {
        stem: "Her soprano voice was ___ clear and resonated across the entire hall. (amaze)",
        root: "amaze",
        answer: "amazingly",
        unit: 4,
        grammar_point: "Adverb modifying adjective 'clear'",
        explanation: "• Vị trí: Đứng trước tính từ \"clear\" để bổ nghĩa mức độ cần một Trạng từ (Adverb).\n• Word Family: amaze (v) → amazing (adj) → amazingly (adv: một cách kinh ngạc, kỳ diệu).\n• Dịch: Giọng nữ cao của cô ấy trong trẻo một cách đáng kinh ngạc và vang vọng khắp khán phòng.",
        hint: "💡 Bổ nghĩa cho tính từ 'clear' cần một Trạng từ (amazingly)."
      },
      {
        stem: "Physical exercise stimulates both blood circulation and brain ___ . (active)",
        root: "active",
        answer: "activity",
        unit: 2,
        grammar_point: "Noun phrase: brain activity",
        explanation: "• Vị trí: Song song với \"blood circulation\" sau liên từ \"both... and\" cần một Danh từ (Noun).\n• Cụm từ: brain activity (hoạt động của não bộ).\n• Word Family: active (adj) → activity (n: hoạt động).\n• Dịch: Tập thể dục kích thích cả tuần hoàn máu lẫn hoạt động của não bộ.",
        hint: "💡 Cụm 'brain activity' (hoạt động của não bộ)."
      }
    ]
  },

  // ===================== ĐỀ 10: TOÀN DIỆN HỌC KỲ 1 (UNIT 1 -> UNIT 6) =====================
  {
    exam_number: 10,
    title: "Luyện tập Word Formation - Đề 10 (Toàn diện Học kỳ 1: Bao quát Unit 1 → Unit 6)",
    scope: "Unit 1 → Unit 6",
    questions: [
      {
        stem: "The Temple of Literature is one of the most prominent ___ landmarks in Ha Noi. (history)",
        root: "history",
        answer: "historic",
        unit: 6,
        grammar_point: "Adjective + Noun (historic vs historical)",
        explanation: "• Vị trí: Đứng trước danh từ \"landmarks\" (thắng cảnh/di tích) cần một Tính từ mang nghĩa \"mang tính lịch sử quan trọng\" → dùng \"historic\".\n• Phân biệt: historic (quan trọng trong lịch sử) vs historical (thuộc về quá khứ lịch sử nói chung).\n• Word Family: history (n) → historic (adj) → historical (adj).\n• Dịch: Văn Miếu - Quốc Tử Giám là một trong những di tích mang tính lịch sử nổi bật nhất tại Hà Nội.",
        hint: "💡 Di tích lịch sử quan trọng dùng tính từ 'historic' (historic landmarks)."
      },
      {
        stem: "Ha Long Bay is among the premier tourist ___ in Southeast Asia. (attract)",
        root: "attract",
        answer: "attractions",
        unit: 6,
        grammar_point: "Tourist + Plural Noun",
        explanation: "• Vị trí: Cụm từ cố định \"tourist attractions\" (các điểm thu hút khách du lịch) ở dạng số nhiều sau \"among the premier...\".\n• Word Family: attract (v: thu hút) → attraction (n: điểm thu hút) → attractions (số nhiều) → attractive (adj).\n• Dịch: Vịnh Hạ Long nằm trong số những điểm du lịch hàng đầu ở Đông Nam Á.",
        hint: "💡 Cụm cố định ở số nhiều: 'tourist attractions' (các điểm thu hút du lịch)."
      },
      {
        stem: "Visiting ancient temples helps students broaden their historical ___ . (know)",
        root: "know",
        answer: "knowledge",
        unit: 6,
        grammar_point: "Possessive + Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ sở hữu \"their\" và tính từ \"historical\" cần một Danh từ không đếm được (Noun) làm tân ngữ cho \"broaden\".\n• Cụm từ: broaden one's knowledge (mở rộng kiến thức).\n• Word Family: know (v) → knowledge (n: kiến thức, sự hiểu biết) → knowledgeable (adj).\n• Dịch: Đi thăm các ngôi đền cổ giúp học sinh mở rộng hiểu biết lịch sử của mình.",
        hint: "💡 Cụm 'broaden knowledge' (mở rộng hiểu biết/kiến thức)."
      },
      {
        stem: "The Imperial Academy was established as the first royal ___ institute in Viet Nam. (educate)",
        root: "educate",
        answer: "educational",
        unit: 6,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"institute\" (học viện/viện) cần một Tính từ (Adjective) bổ nghĩa.\n• Cụm từ: educational institute (cơ sở/viện giáo dục).\n• Word Family: educate (v: giáo dục) → education (n) → educational (adj: thuộc về giáo dục).\n• Dịch: Quốc Tử Giám được thành lập với tư cách là cơ sở giáo dục hoàng gia đầu tiên tại Việt Nam.",
        hint: "💡 Bổ nghĩa cho danh từ 'institute' cần Tính từ (educational: thuộc về giáo dục)."
      },
      {
        stem: "The high school is conveniently ___ near the central train station. (locate)",
        root: "locate",
        answer: "located",
        unit: 6,
        grammar_point: "Passive voice: is + adverb + located",
        explanation: "• Vị trí: Cấu trúc bị động chỉ vị trí \"is located + preposition\": nằm ở / tọa lạc tại.\n• Word Family: locate (v: định vị) → located (adj/P2: tọa lạc) → location (n: địa điểm).\n• Dịch: Trường trung học tọa lạc một cách thuận tiện ở gần nhà ga trung tâm.",
        hint: "💡 Cụm chỉ vị trí: 'is located near...' (tọa lạc ở gần...)."
      },
      {
        stem: "Traditional folk festivals play a vital role in preserving national ___ identity. (culture)",
        root: "culture",
        answer: "cultural",
        unit: 4,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"identity\" (bản sắc) và sau tính từ \"national\" cần một Tính từ (Adjective).\n• Cụm từ: cultural identity (bản sắc văn hóa).\n• Word Family: culture (n: văn hóa) → cultural (adj: thuộc về văn hóa) → culturally (adv).\n• Dịch: Các lễ hội dân gian truyền thống đóng vai trò quan trọng trong việc giữ gìn bản sắc văn hóa dân tộc.",
        hint: "💡 Cụm 'cultural identity' (bản sắc văn hóa)."
      },
      {
        stem: "Consuming a balanced, ___ meal every day supports both physical and cognitive growth. (nourish)",
        root: "nourish",
        answer: "nutritious",
        unit: 5,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"meal\" và sau tính từ \"balanced\" cần một Tính từ (Adjective).\n• Word Family: nourish (v) → nutritious (adj: giàu dinh dưỡng, bổ dưỡng) → nutrition (n).\n• Dịch: Dùng một bữa ăn cân bằng, bổ dưỡng mỗi ngày hỗ trợ cả sự phát triển thể chất lẫn nhận thức.",
        hint: "💡 Bổ nghĩa cho 'meal' cần Tính từ (nutritious: giàu dinh dưỡng)."
      },
      {
        stem: "High schoolers are encouraged to perform ___ duties at the public library. (volunteer)",
        root: "volunteer",
        answer: "voluntary",
        unit: 3,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Đứng trước danh từ \"duties\" (nhiệm vụ/công việc) cần một Tính từ (Adjective).\n• Cụm từ: voluntary duties (các nhiệm vụ tình nguyện/tự nguyện).\n• Word Family: volunteer (n/v) → voluntary (adj: tự nguyện) → voluntarily (adv).\n• Dịch: Các bạn học sinh cấp 3 được khuyến khích thực hiện các nhiệm vụ tình nguyện tại thư viện công cộng.",
        hint: "💡 Bổ nghĩa cho 'duties' cần Tính từ (voluntary: tự nguyện/tình nguyện)."
      },
      {
        stem: "Mastering a foreign language requires relentless effort and extraordinary ___ . (patient)",
        root: "patient",
        answer: "patience",
        unit: 1,
        grammar_point: "Adjective + Noun",
        explanation: "• Vị trí: Sau tính từ \"extraordinary\" (phi thường) cần một Danh từ (Noun) làm tân ngữ song song với \"effort\".\n• Word Family: patient (adj: kiên nhẫn) → patience (n: tính kiên nhẫn, sự bền lòng).\n• Dịch: Việc làm chủ một ngoại ngữ đòi hỏi nỗ lực không ngừng và lòng kiên nhẫn phi thường.",
        hint: "💡 Sau 'extraordinary' cần một Danh từ (patience: lòng kiên nhẫn)."
      },
      {
        stem: "Adopting wholesome habits is undeniably ___ to a student's long-term well-being. (benefit)",
        root: "benefit",
        answer: "beneficial",
        unit: 2,
        grammar_point: "To be + Adverb + Adjective",
        explanation: "• Vị trí: Sau to be \"is\" và trạng từ \"undeniably\" (không thể phủ nhận) cần một Tính từ (Adjective đi với giới từ \"to\").\n• Word Family: benefit (n/v) → beneficial (adj: có lợi) → beneficially (adv).\n• Dịch: Áp dụng những thói quen lành mạnh chắc chắn đem lại nhiều lợi ích cho sức khỏe lâu dài của học sinh.",
        hint: "💡 Sau 'is undeniably' cần Tính từ (beneficial to: có lợi cho)."
      }
    ]
  }
];

function buildExamBankFile() {
  const collection = {
    title: "Chuyên đề Word Formation (Dạng của từ) - Tiếng Anh 7",
    subject_slug: "tieng-anh-7",
    grade: 7,
    volume: 1,
    units: [2],
    sequence_number: 2,
    exam_type: "review",
    reference_book: "Chuyên đề Word Formation THCS - Global Success",
    status: "published"
  };

  const exams = examsData.map(e => ({
    exam_number: e.exam_number,
    title: e.title,
    duration_minutes: 20,
    questions: e.questions.map(q => ({
      type: "fill_blank",
      difficulty: q.unit <= 2 ? 1 : 2,
      metadata_json: {
        question: q.stem,
        instruction: "Cho dạng đúng của từ trong ngoặc (Word Formation):",
        correct_answer: q.answer,
        hint: q.hint,
        explanation: q.explanation,
        tags: [`unit-${q.unit}`, "word-formation", q.grammar_point.toLowerCase().replace(/[^a-z0-9]+/g, '-')]
      }
    }))
  }));

  return { collection, exams };
}

const outDir = path.resolve('content/exam-bank/tieng-anh');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'tienganh7-word-formation-review.json');
const examBank = buildExamBankFile();

fs.writeFileSync(outFile, JSON.stringify(examBank, null, 2), 'utf8');
console.log(`✓ Đã tạo thành công file: ${outFile}`);
console.log(`  - Tổng số đề: ${examBank.exams.length}`);
console.log(`  - Tổng số câu hỏi: ${examBank.exams.reduce((sum, e) => sum + e.questions.length, 0)}`);
