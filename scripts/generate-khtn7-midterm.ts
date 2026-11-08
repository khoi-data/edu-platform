import * as fs from 'fs';
import * as path from 'path';
import { buildExamTitle } from '../lib/assessment/buildExamTitle';

interface RawQuestion {
  originalNum: number;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
  hint?: string;
  image_url?: string;
  tags: string[];
}

const RAW_QUESTIONS: RawQuestion[] = [
  {
    originalNum: 1,
    question: "Có những hạt nào trong hạt nhân của nguyên tử?",
    options: [
      "Các hạt mang điện tích âm (electron).",
      "Các hạt neutron và hạt proton.",
      "Các hạt neutron không mang điện.",
      "Hạt nhân nguyên tử không chứa hạt."
    ],
    correct_index: 1,
    explanation: "Hạt nhân nguyên tử gồm 2 loại hạt: proton (mang điện tích dương) và neutron (không mang điện). Các electron mang điện tích âm nằm ở lớp vỏ.",
    tags: ["nguyen-tu", "hat-nhan"]
  },
  {
    originalNum: 2,
    question: "Số electron tối đa ở lớp electron thứ nhất là",
    options: ["1.", "2.", "3.", "8."],
    correct_index: 1,
    explanation: "Lớp electron thứ nhất (gần hạt nhân nhất) chứa tối đa 2 electron.",
    tags: ["nguyen-tu", "lop-electron"]
  },
  {
    originalNum: 3,
    question: "Nguyên tố hóa học là tập hợp các nguyên tử cùng loại có...",
    options: [
      "cùng số neutron trong hạt nhân.",
      "cùng số electron trong hạt nhân.",
      "cùng số proton trong hạt nhân.",
      "cùng số proton và neutron trong hạt nhân."
    ],
    correct_index: 2,
    explanation: "Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân.",
    tags: ["nguyen-to-hoa-hoc", "dinh-nghia"]
  },
  {
    originalNum: 4,
    question: "7H có ý nghĩa gì?",
    options: [
      "7 chất Hydrogen",
      "7 nguyên tố Hydrogen",
      "7 phân tử Hydrogen",
      "7 nguyên tử Hydrogen"
    ],
    correct_index: 3,
    explanation: "H là kí hiệu hóa học của nguyên tố hydrogen. Con số đứng trước kí hiệu hóa học chỉ số lượng nguyên tử. Do đó 7H có nghĩa là 7 nguyên tử hydrogen.",
    tags: ["ki-hieu-hoa-hoc", "nguyen-tu"]
  },
  {
    originalNum: 5,
    question: "Tên gọi của các cột trong bảng tuần hoàn các nguyên tố hoá học là gì?",
    options: ["Chu kì", "Nhóm", "Loại", "Họ"],
    correct_index: 1,
    explanation: "Trong bảng tuần hoàn, các nguyên tố được xếp thành các hàng (gọi là chu kì) và các cột (gọi là nhóm).",
    tags: ["bang-tuan-hoan", "nhom-nguyen-to"]
  },
  {
    originalNum: 6,
    question: "Hiện nay, có bao nhiêu chu kì trong bảng tuần hoàn các nguyên tố hoá học?",
    options: ["5", "6", "7", "8"],
    correct_index: 2,
    explanation: "Bảng tuần hoàn các nguyên tố hóa học hiện nay gồm có 7 chu kì, được đánh số từ 1 đến 7.",
    tags: ["bang-tuan-hoan", "chu-ki"]
  },
  {
    originalNum: 7,
    question: "Các nguyên tố trong bảng tuần hoàn các nguyên tố hóa học được sắp xếp theo thứ tự tăng dần của",
    options: ["Khối lượng", "Tỉ trọng", "Số proton", "Số neutron"],
    correct_index: 2,
    explanation: "Các nguyên tố trong bảng tuần hoàn được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (chính là số proton).",
    tags: ["bang-tuan-hoan", "nguyen-tac-sap-xep"]
  },
  {
    originalNum: 8,
    question: "Nguyên tử luôn trung hoà về điện nên",
    options: [
      "số hạt proton = số hạt neutron.",
      "số hạt electron = số hạt neutron.",
      "số hạt electron = số hạt proton.",
      "số hạt proton + số hạt neutron = 0."
    ],
    correct_index: 2,
    explanation: "Do mỗi proton mang 1 điện tích dương (+1), mỗi electron mang 1 điện tích âm (-1), để nguyên tử trung hoà về điện thì số proton phải bằng số electron.",
    tags: ["nguyen-tu", "dien-tich"]
  },
  {
    originalNum: 9,
    question: "Nguyên tử X có 9 electron, lớp ngoài cùng nguyên tử X có số electron là",
    options: ["1", "2", "7", "8."],
    correct_index: 2,
    explanation: "Nguyên tử X có 9 electron: lớp thứ nhất có 2 electron, lớp thứ hai (lớp ngoài cùng) có 9 - 2 = 7 electron.",
    tags: ["nguyen-tu", "cau-hinh-electron"]
  },
  {
    originalNum: 10,
    question: "Cho các nguyên tử với thành phần cấu tạo như sau:\nX(6n, 5p, 5e)   Y(10p, 10e, 10n)   Z(5e, 5p, 5n)   T(11p, 11e, 12n)\nCó bao nhiêu nguyên tố hóa học?",
    options: ["4", "3", "2", "1"],
    correct_index: 1,
    explanation: "Nguyên tố hóa học được xác định bởi số proton (p). X có 5p và Z có 5p -> cùng 1 nguyên tố. Y có 10p -> 1 nguyên tố. T có 11p -> 1 nguyên tố. Tổng cộng có 3 nguyên tố hóa học.",
    tags: ["nguyen-to-hoa-hoc", "nhan-biet"]
  },
  {
    originalNum: 11,
    question: "Cho các nguyên tử được kí hiệu bởi các chữ cái và số proton trong mỗi nguyên tử như sau:\n• Nguyên tử X: 5 proton\n• Nguyên tử Y: 8 proton\n• Nguyên tử Z: 17 proton\n• Nguyên tử R: 6 proton\n• Nguyên tử E: 9 proton\n• Nguyên tử Q: 17 proton\nCác nguyên tử thuộc cùng một nguyên tố hoá học là:",
    options: ["X, Y.", "Z, Q.", "R, E.", "Y, E."],
    correct_index: 1,
    explanation: "Nguyên tử Z và Q đều có 17 proton trong hạt nhân nên chúng thuộc cùng một nguyên tố hóa học (chlorine).",
    tags: ["nguyen-to-hoa-hoc", "dong-vi"]
  },
  {
    originalNum: 12,
    question: "Kí hiệu hoá học của nguyên tố chlorine là:",
    options: ["CL.", "cl.", "cL.", "Cl."],
    correct_index: 3,
    explanation: "Kí hiệu hoá học gồm một hoặc hai chữ cái, trong đó chữ cái đầu viết hoa và chữ cái sau viết thường. Kí hiệu của chlorine là Cl.",
    tags: ["ki-hieu-hoa-hoc", "chlorine"]
  },
  {
    originalNum: 13,
    question: "Trong bảng tuần hoàn, các nguyên tố hoá học được sắp xếp theo:",
    options: [
      "thứ tự chữ cái trong từ điển.",
      "thứ tự tăng dần điện tích hạt nhân.",
      "thứ tự tăng dần số hạt electron lớp ngoài cùng.",
      "thứ tự tăng dần số hạt neutron."
    ],
    correct_index: 1,
    explanation: "Các nguyên tố hoá học trong bảng tuần hoàn được sắp xếp theo chiều tăng dần của điện tích hạt nhân.",
    tags: ["bang-tuan-hoan", "nguyen-tac-sap-xep"]
  },
  {
    originalNum: 14,
    question: "Những nguyên tố hoá học nào sau đây thuộc cùng một nhóm?",
    options: ["O, S, Se", "N, O, F", "Na, Mg, K", "Ne, Na, Mg"],
    correct_index: 0,
    explanation: "O (Z=8), S (Z=16), Se (Z=34) đều có 6 electron ở lớp ngoài cùng và cùng thuộc nhóm VIA trong bảng tuần hoàn.",
    tags: ["bang-tuan-hoan", "nhom-nguyen-to"]
  },
  {
    originalNum: 15,
    question: "Những nguyên tố hoá học nào sau đây thuộc cùng một chu kì?",
    options: ["Li, Si, Ne", "Mg, P, Ar", "K, Fe, Ag", "B, Al, In"],
    correct_index: 1,
    explanation: "Mg (Z=12), P (Z=15), Ar (Z=18) đều có 3 lớp electron trong vỏ nguyên tử nên thuộc cùng chu kì 3.",
    tags: ["bang-tuan-hoan", "chu-ki"]
  },
  {
    originalNum: 16,
    question: "Trong hạt nhân nguyên tử fluorine có 9 proton. Số electron ở lớp ngoài cùng của vỏ nguyên tử fluorine là",
    options: ["2.", "5.", "7.", "8."],
    correct_index: 2,
    explanation: "Fluorine có 9 proton nên có 9 electron. Vỏ nguyên tử gồm 2 lớp: lớp thứ nhất có 2 electron, lớp thứ hai (lớp ngoài cùng) có 9 - 2 = 7 electron.",
    tags: ["nguyen-tu", "fluorine"]
  },
  {
    originalNum: 17,
    question: "Kí hiệu nào sau đây là kí hiệu hóa học của nguyên tố Magnesium?",
    options: ["Mg", "MG", "mg", "mG"],
    correct_index: 0,
    explanation: "Kí hiệu hoá học của Magnesium là Mg (chữ cái đầu viết hoa, chữ cái sau viết thường).",
    tags: ["ki-hieu-hoa-hoc", "magnesium"]
  },
  {
    originalNum: 18,
    question: "Quan sát mô hình mô tả nguyên tử aluminium (nhôm):\nThấy rằng, nguyên tử aluminium gồm hạt nhân có a proton, b neutron và vỏ nguyên tử có c electron. Vậy a, b, c lần lượt là:",
    options: ["13, 14, 13.", "13, 13, 14", "14, 13, 14", "14, 13, 13"],
    correct_index: 0,
    explanation: "Quan sát mô hình: trong hạt nhân có ghi 13p và 14n -> a = 13, b = 14. Đếm số electron ở các lớp vỏ: 2 + 8 + 3 = 13 electron -> c = 13. Vậy (a, b, c) = (13, 14, 13).",
    image_url: "/images/khtn7/khtn7-gk1-q18.svg",
    tags: ["nguyen-tu", "aluminium", "mo-hinh"]
  },
  {
    originalNum: 19,
    question: "Biết vị trí của nguyên tố X như sau: chu kì 2, nhóm VIA. Số lớp electron và số electron lớp ngoài cùng của nguyên tử X lần lượt là",
    options: ["2 và 6", "6 và 2", "2 và 4", "6 và 4"],
    correct_index: 0,
    explanation: "Số thứ tự chu kì bằng số lớp electron -> nguyên tố X có 2 lớp electron. Số thứ tự nhóm A bằng số electron lớp ngoài cùng -> có 6 electron lớp ngoài cùng.",
    tags: ["bang-tuan-hoan", "chu-ki-nhom"]
  },
  {
    originalNum: 20,
    question: "Cho mô hình cấu tạo của các nguyên tử A, B, D như sau:\nCho biết nguyên tử nào cùng thuộc một nguyên tố hóa học?",
    options: ["A, B, D.", "A, B.", "A, D.", "B, D."],
    correct_index: 2,
    explanation: "Nguyên tử A có hạt nhân 6p, 6n. Nguyên tử B có 7p, 7n. Nguyên tử D có 6p, 8n. Vì A và D có cùng số proton (6p) nên chúng cùng thuộc một nguyên tố hóa học (Carbon).",
    image_url: "/images/khtn7/khtn7-gk1-q20.svg",
    tags: ["nguyen-to-hoa-hoc", "mo-hinh"]
  },
  {
    originalNum: 21,
    question: "Trong ô nguyên tố sau, con số 23 cho biết điều gì?",
    options: [
      "Khối lượng nguyên tử của nguyên tố đó",
      "Chu kì của nó",
      "Số nguyên tử của nguyên tố",
      "Số thứ tự của nguyên tố."
    ],
    correct_index: 0,
    explanation: "Trong ô nguyên tố của Sodium: 11 là số hiệu nguyên tử (số thứ tự ô), Na là kí hiệu hóa học, Sodium là tên nguyên tố, và 23 là khối lượng nguyên tử (theo amu).",
    image_url: "/images/khtn7/khtn7-gk1-q21.svg",
    tags: ["bang-tuan-hoan", "o-nguyen-to"]
  },
  {
    originalNum: 22,
    question: "Phần lớn các nguyên tố hoá học trong bảng tuần hoàn là",
    options: ["Kim loại", "Phi kim", "Khí hiếm", "Chất khí"],
    correct_index: 0,
    explanation: "Trong hơn 118 nguyên tố hóa học đã biết, có hơn 90 nguyên tố là kim loại (chiếm hơn 80% bảng tuần hoàn).",
    tags: ["bang-tuan-hoan", "kim-loai"]
  },
  {
    originalNum: 23,
    question: "Số hiệu nguyên tử của một nguyên tố là",
    options: [
      "số proton trong nguyên tử.",
      "số neutron trong nguyên tử.",
      "số electron trong hạt nhân.",
      "số proton và neutron trong hạt nhân."
    ],
    correct_index: 0,
    explanation: "Số hiệu nguyên tử (kí hiệu là Z) bằng số đơn vị điện tích hạt nhân, tức là bằng số proton trong hạt nhân nguyên tử.",
    tags: ["nguyen-tu", "so-hieu-nguyen-tu"]
  },
  {
    originalNum: 24,
    question: "Điền từ thích hợp vào chỗ trống: “Số … là số đặc trưng của một nguyên tố hóa học”.",
    options: ["electron.", "proton.", "neutron.", "neutron và electron."],
    correct_index: 1,
    explanation: "Mỗi nguyên tố hóa học có một số proton xác định trong hạt nhân. Vì vậy số proton là số đặc trưng cho một nguyên tố hóa học.",
    tags: ["nguyen-to-hoa-hoc", "proton"]
  },
  {
    originalNum: 25,
    question: "Nguyên tố nào được sử dụng trong thuốc tẩy gia dụng?",
    options: ["Iodine", "Bromine", "Chlorine", "Fluorine"],
    correct_index: 2,
    explanation: "Chlorine là thành phần chính để sản xuất nước Javel ($NaClO$) và các chất khử trùng, tẩy trắng gia dụng.",
    tags: ["nguyen-to-hoa-hoc", "ung-dung", "chlorine"]
  },
  {
    originalNum: 26,
    question: "Phân tử là.....................",
    options: [
      "hạt đại diện cho chất, được tạo bởi một nguyên tố hoá học và mang đầy đủ tính chất của chất.",
      "hạt đại diện cho hợp chất, được tạo bởi nhiều nguyên tố hoá học và mang đầy đủ tính chất của chất.",
      "hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và mang đầy đủ tính chất của chất.",
      "hạt nhỏ nhất do các nguyên tố hoá học kết hợp với nhau tạo thành và mang đầy đủ tính chất của chất."
    ],
    correct_index: 2,
    explanation: "Theo SGK KHTN 7: Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.",
    tags: ["phan-tu", "dinh-nghia"]
  },
  {
    originalNum: 27,
    question: "Để trở thành phân tử của hợp chất thì tối thiểu cần phải có bao nhiêu loại nguyên tử liên kết với nhau:",
    options: [
      "một loại nguyên tử.",
      "hai loại nguyên tử.",
      "ba loại nguyên tử.",
      "bốn loại nguyên tử."
    ],
    correct_index: 1,
    explanation: "Hợp chất được tạo nên từ 2 hay nhiều nguyên tố hoá học khác nhau. Vì vậy phân tử hợp chất tối thiểu phải chứa 2 loại nguyên tử khác nhau liên kết với nhau.",
    tags: ["hop-chat", "phan-tu"]
  },
  {
    originalNum: 28,
    question: "Để phân biệt đơn chất và hợp chất dựa vào dấu hiệu là",
    options: [
      "Kích thước.",
      "Nguyên tử cùng loại hay khác loại.",
      "Hình dạng.",
      "Số lượng nguyên tử."
    ],
    correct_index: 1,
    explanation: "Đơn chất được tạo thành từ 1 nguyên tố (nguyên tử cùng loại), còn hợp chất được tạo thành từ 2 hay nhiều nguyên tố (nguyên tử khác loại).",
    tags: ["don-chat", "hop-chat", "phan-biet"]
  },
  {
    originalNum: 29,
    question: "Cho các chất sau: Ca, O2, P2O5, HCl, Na, NH3, Al. Đâu là các đơn chất?",
    options: [
      "Ca, O2, Na, Al.",
      "Ca, O, HCl, NH3.",
      "HCl, P2O5, Na, Al.",
      "NH3, HCl, Na, Al."
    ],
    correct_index: 0,
    explanation: "Đơn chất là chất được tạo nên từ 1 nguyên tố hoá học: Ca, O2, Na, Al. Còn P2O5, HCl, NH3 là hợp chất.",
    tags: ["don-chat", "phan-loai"]
  },
  {
    originalNum: 30,
    question: "Phân tử nitrogen được cấu tạo từ 2 nguyên tử nitrogen. Biết khối lượng nguyên tử nitrogen là 14 amu. Khối lượng phân tử nitrogen là",
    options: ["14 amu.", "28 amu.", "28,5 amu.", "29 amu."],
    correct_index: 1,
    explanation: "Khối lượng phân tử N2 = 14 * 2 = 28 amu.",
    tags: ["khoi-luong-phan-tu", "nitrogen"]
  },
  {
    originalNum: 31,
    question: "Phân tử glycerol chứa ba nguyên tử carbon, tám nguyên tử hydrogen và ba nguyên tử oxygen. Khối lượng phân tử của glycerol là:",
    options: ["14 amu", "29 amu", "92 amu", "42 amu"],
    correct_index: 2,
    explanation: "Khối lượng phân tử glycerol = (3 * 12) + (8 * 1) + (3 * 16) = 36 + 8 + 48 = 92 amu.",
    tags: ["khoi-luong-phan-tu", "glycerol"]
  },
  {
    originalNum: 32,
    question: "Phát biểu nào sau đây không đúng?",
    options: [
      "Liên kết giữa các phân tử đơn chất thường là liên kết cộng hoá trị.",
      "Sau khi các nguyên tử liên kết với nhau, số electron ở lớp ngoài cùng sẽ giống nguyên tố khí hiếm.",
      "Liên kết giữa các nguyên tử phi kim thường là liên kết cộng hoá trị.",
      "Liên kết giữa nguyên tố kim loại với nguyên tố phi kim đều là liên kết ion."
    ],
    correct_index: 3,
    explanation: "Phát biểu D không đúng vì dùng từ 'đều là'. Một số hợp chất giữa kim loại và phi kim (ví dụ BeCl2, AlCl3) mang nhiều đặc tính của liên kết cộng hoá trị.",
    tags: ["lien-ket-hoa-hoc", "nhan-dinh"]
  },
  {
    originalNum: 33,
    question: "Hãy chọn phát biểu đúng để hoàn thành câu sau: Để có số electron ở lớp ngoài cùng giống nguyên tử của nguyên tố khí hiếm, các nguyên tử của các nguyên tố có khuynh hướng",
    options: [
      "nhường các electron ở lớp ngoài cùng.",
      "nhận thêm electron vào lớp electron ngoài cùng.",
      "nhường electron hoặc nhận electron để lớp electron ngoài cùng đạt trạng thái bền (có 8 electron).",
      "nhường electron hoặc nhận electron hoặc góp chung electron."
    ],
    correct_index: 2,
    explanation: "Các nguyên tử có xu hướng nhường hoặc nhận electron để tạo thành ion có lớp vỏ ngoài cùng bền vững (8 electron giống khí hiếm).",
    tags: ["lien-ket-hoa-hoc", "khi-hiem"]
  },
  {
    originalNum: 34,
    question: "Trong phân tử potassium chloride, nguyên tử K (potassium) và nguyên tử Cl (chlorine) liên kết với nhau bằng liên kết",
    options: ["cộng hóa trị.", "ion.", "phi kim.", "kim loại."],
    correct_index: 1,
    explanation: "K là kim loại điển hình, Cl là phi kim điển hình. Nguyên tử K nhường 1 electron cho nguyên tử Cl để tạo thành ion K+ và Cl-, hai ion này hút nhau bằng liên kết ion.",
    tags: ["lien-ket-ion", "potassium-chloride"]
  },
  {
    originalNum: 35,
    question: "Liên kết cộng hóa trị được hình thành do",
    options: [
      "lực hút tĩnh điện yếu giữa các nguyên tử.",
      "các cặp electron dùng chung.",
      "các đám mây electron.",
      "các electron hoá trị."
    ],
    correct_index: 1,
    explanation: "Liên kết cộng hoá trị là liên kết được hình thành bởi một hay nhiều cặp electron dùng chung giữa hai nguyên tử.",
    tags: ["lien-ket-cong-hoa-tri", "dinh-nghia"]
  },
  {
    originalNum: 36,
    question: "Đơn chất là gì?",
    options: [
      "được tạo nên từ một nguyên tố hóa học.",
      "được tạo nên từ hai nguyên tố hóa học.",
      "được tạo nên từ ba nguyên tố hóa học.",
      "được tạo nên từ nhiều nguyên tố hóa học."
    ],
    correct_index: 0,
    explanation: "Đơn chất là những chất được tạo nên từ một nguyên tố hóa học duy nhất.",
    tags: ["don-chat", "dinh-nghia"]
  },
  {
    originalNum: 37,
    question: "Hợp chất là gì?",
    options: [
      "được tạo nên từ một nguyên tố hóa học.",
      "được tạo nên từ hai nguyên tố hóa học.",
      "được tạo nên từ ba nguyên tố hóa học.",
      "được tạo nên từ hai hay nhiều nguyên tố hóa học."
    ],
    correct_index: 3,
    explanation: "Hợp chất là những chất được tạo nên từ hai hay nhiều nguyên tố hóa học khác nhau.",
    tags: ["hop-chat", "dinh-nghia"]
  },
  {
    originalNum: 38,
    question: "Phân tử nước chứa hai nguyên tử hydrogen và một oxygen. Nước là",
    options: [
      "một hợp chất.",
      "một đơn chất.",
      "một hỗn hợp.",
      "một nguyên tố hóa học."
    ],
    correct_index: 0,
    explanation: "Nước ($H_2O$) được tạo nên từ hai nguyên tố hóa học là Hydrogen và Oxygen, vì vậy nước là một hợp chất.",
    tags: ["hop-chat", "nuoc"]
  },
  {
    originalNum: 39,
    question: "Trong số các chất dưới đây, chất nào thuộc loại đơn chất?",
    options: ["Nước.", "Muối ăn.", "Thủy ngân.", "Khí carbon dioxide."],
    correct_index: 2,
    explanation: "Thủy ngân (Hg) được tạo thành từ 1 nguyên tố Hg nên là đơn chất. Nước (H2O), muối ăn (NaCl), khí carbon dioxide (CO2) đều là hợp chất.",
    tags: ["don-chat", "thuy-ngan"]
  },
  {
    originalNum: 40,
    question: "Chất được chia thành hai loại lớn là",
    options: [
      "Đơn chất và hỗn hợp.",
      "Hợp chất và hỗn hợp.",
      "Đơn chất, hỗn hợp, hợp chất.",
      "Đơn chất và hợp chất."
    ],
    correct_index: 3,
    explanation: "Dựa vào thành phần nguyên tố cấu tạo nên chất, chất tinh khiết được phân loại thành hai loại lớn là: đơn chất và hợp chất.",
    tags: ["chat", "phan-loai"]
  },
  {
    originalNum: 41,
    question: "Để tạo thành phân tử của một hợp chất thì tối thiểu cần phải có bao nhiêu loại nguyên tử?",
    options: ["2 loại.", "3 loại.", "4 loại.", "5 loại."],
    correct_index: 0,
    explanation: "Hợp chất được cấu tạo từ 2 hay nhiều nguyên tố hoá học, nên tối thiểu phải có 2 loại nguyên tử.",
    tags: ["hop-chat", "phan-tu"]
  },
  {
    originalNum: 42,
    question: "Để phân biệt đơn chất và hợp chất dựa vào dấu hiệu là",
    options: [
      "Kích thước.",
      "Nguyên tử cùng loại hay khác loại.",
      "Hình dạng.",
      "Số lượng nguyên tử."
    ],
    correct_index: 1,
    explanation: "Đơn chất tạo bởi các nguyên tử cùng loại (1 nguyên tố), hợp chất tạo bởi các nguyên tử khác loại (từ 2 nguyên tố trở lên).",
    tags: ["don-chat", "hop-chat", "phan-biet"]
  },
  {
    originalNum: 43,
    question: "Trong các chất sau đây, có bao nhiêu đơn chất?\n1. Axit photphoric (chứa H, P, O).\n2. Kim cương do nguyên tố cacbon tạo nên.\n3. Kim loại bạc tạo nên từ Ag.\n4. Khí ozon có công thức hóa học là O3.",
    options: ["1", "2", "3", "4"],
    correct_index: 2,
    explanation: "Các đơn chất gồm: 2 (Kim cương - C), 3 (Bạc - Ag), 4 (Khí ozon - O3). Axit photphoric chứa 3 nguyên tố H, P, O là hợp chất. Vậy có 3 đơn chất.",
    tags: ["don-chat", "dem-so-luong"]
  },
  {
    originalNum: 44,
    question: "Trong số các chất dưới đây, thuộc loại hợp chất có:",
    options: ["Khí hiđro.", "Nhôm.", "Photpho.", "Đá vôi."],
    correct_index: 3,
    explanation: "Đá vôi có thành phần chính là calcium carbonate ($CaCO_3$, gồm Ca, C, O) nên là hợp chất. Khí hiđro ($H_2$), nhôm (Al), photpho (P) là đơn chất.",
    tags: ["hop-chat", "da-voi"]
  },
  {
    originalNum: 45,
    question: "Hợp chất thường được phân thành hai loại là",
    options: [
      "Kim loại và phi kim.",
      "Kim loại và hữu cơ.",
      "Vô cơ và phi kim.",
      "Vô cơ và hữu cơ."
    ],
    correct_index: 3,
    explanation: "Hợp chất được chia thành hai nhóm lớn là hợp chất vô cơ và hợp chất hữu cơ.",
    tags: ["hop-chat", "phan-loai"]
  },
  {
    originalNum: 46,
    question: "Chọn câu đúng trong các câu sau:",
    options: [
      "Các phân tử có số nguyên tử bằng nhau thì có khối lượng phân tử bằng nhau.",
      "Các phân tử có khối lượng bằng nhau thì có số nguyên tử như nhau.",
      "Các phân tử có khối lượng và số nguyên tử bằng nhau thì thuộc cùng một chất.",
      "Các phân tử của cùng một chất có khối lượng phân tử và số nguyên tử bằng nhau."
    ],
    correct_index: 3,
    explanation: "Các phân tử của cùng một chất luôn có cùng thành phần nguyên tố, cùng số lượng nguyên tử và khối lượng phân tử bằng nhau.",
    tags: ["phan-tu", "tinh-chat"]
  },
  {
    originalNum: 47,
    question: "Khối lượng phân tử là",
    options: [
      "tổng khối lượng các nguyên tố có trong phân tử.",
      "tổng khối lượng các hạt hợp thành của chất.",
      "tổng khối lượng các nguyên tử có trong phân tử.",
      "khối lượng của nhiều nguyên tử."
    ],
    correct_index: 2,
    explanation: "Khối lượng phân tử là tổng khối lượng của các nguyên tử có trong phân tử, tính theo đơn vị amu.",
    tags: ["khoi-luong-phan-tu", "dinh-nghia"]
  },
  {
    originalNum: 48,
    question: "Phân tử (X) được tạo thành bởi 1 nguyên tử carbon và 2 nguyên tử oxygen. Khối lượng phân tử (X) là",
    options: ["28 amu.", "32 amu.", "36 amu.", "44 amu."],
    correct_index: 3,
    explanation: "Phân tử X là carbon dioxide ($CO_2$). Khối lượng phân tử = 12 + 16 * 2 = 44 amu.",
    tags: ["khoi-luong-phan-tu", "carbon-dioxide"]
  },
  {
    originalNum: 49,
    question: "Phân tử glycerol chứa ba nguyên tử carbon, tám nguyên tử hydrogen và ba nguyên tử oxygen. Khối lượng phân tử của glycerol là:",
    options: ["14 amu", "29 amu", "92 amu", "42 amu"],
    correct_index: 2,
    explanation: "Khối lượng phân tử glycerol ($C_3H_8O_3$) = (3 * 12) + (8 * 1) + (3 * 16) = 36 + 8 + 48 = 92 amu.",
    tags: ["khoi-luong-phan-tu", "glycerol"]
  },
  {
    originalNum: 50,
    question: "Liên kết giữa các nguyên tử trong phân tử nước là liên kết",
    options: ["cộng hóa trị.", "ion.", "phi kim.", "kim loại."],
    correct_index: 0,
    explanation: "Trong phân tử nước ($H_2O$), giữa nguyên tử H và nguyên tử O là phi kim liên kết với nhau bằng các cặp electron dùng chung -> liên kết cộng hoá trị.",
    tags: ["lien-ket-cong-hoa-tri", "nuoc"]
  },
  {
    originalNum: 51,
    question: "Liên kết giữa các nguyên tử trong phân tử muối ăn là liên kết",
    options: ["cộng hóa trị.", "ion.", "phi kim.", "kim loại."],
    correct_index: 1,
    explanation: "Muối ăn ($NaCl$) gồm cation $Na^+$ và anion $Cl^-$ hút nhau bởi lực hút tĩnh điện -> liên kết ion.",
    tags: ["lien-ket-ion", "muoi-an"]
  },
  {
    originalNum: 52,
    question: "Trong phân tử oxygen ($O_2$), khi hai nguyên tử oxygen liên kết với nhau, chúng",
    options: [
      "góp chung proton.",
      "chuyển electron từ nguyên tử này sang nguyên tử kia.",
      "chuyển proton từ nguyên tử này sang nguyên tử kia.",
      "góp chung electron."
    ],
    correct_index: 3,
    explanation: "Hai nguyên tử oxygen liên kết với nhau bằng cách góp chung 2 cặp electron để tạo thành phân tử $O_2$.",
    tags: ["lien-ket-cong-hoa-tri", "oxygen"]
  },
  {
    originalNum: 53,
    question: "Liên kết hoá học giữa các nguyên tử oxygen và hydrogen trong phân tử nước được hình thành bằng cách",
    options: [
      "nguyên tử oxygen nhận electron, nguyên tử hydrogen nhường electron.",
      "nguyên tử oxygen nhường electron, nguyên tử hydrogen nhận electron.",
      "nguyên tử oxygen và nguyên tử hydrogen góp chung electron.",
      "nguyên tử oxygen và nguyên tử hydrogen góp chung proton."
    ],
    correct_index: 2,
    explanation: "Mỗi nguyên tử hydrogen góp chung 1 electron với nguyên tử oxygen tạo thành liên kết cộng hoá trị trong phân tử nước.",
    tags: ["lien-ket-cong-hoa-tri", "nuoc-hinh-thanh"]
  },
  {
    originalNum: 54,
    question: "Liên kết cộng hóa trị được hình thành do",
    options: [
      "lực hút tĩnh điện yếu giữa các nguyên tử.",
      "các cặp electron dùng chung.",
      "các đám mây electron.",
      "các electron hoá trị."
    ],
    correct_index: 1,
    explanation: "Liên kết cộng hoá trị được hình thành do các cặp electron dùng chung giữa các nguyên tử.",
    tags: ["lien-ket-cong-hoa-tri", "dinh-nghia"]
  },
  {
    originalNum: 55,
    question: "Khi hình thành phân tử calcium chloride, nguyên tử Ca (calcium)",
    options: [
      "nhường 2 electron cho nguyên tử chlorine.",
      "nhận 1 electron từ nguyên tử chlorine.",
      "nhường 1 electron cho nguyên tử chlorine.",
      "nhận 2 electron từ nguyên tử chlorine."
    ],
    correct_index: 0,
    explanation: "Nguyên tử Ca có 2 electron ở lớp ngoài cùng, khi phản ứng nó nhường 2 electron này (mỗi nguyên tử Cl nhận 1 electron) để đạt cấu hình electron bền vững.",
    tags: ["lien-ket-ion", "calcium-chloride"]
  },
  {
    originalNum: 56,
    question: "Để hình thành liên kết ion trong phân tử sodium sulfide, nguyên tử S (sulfur)",
    options: [
      "nhường 2 electron cho nguyên tử sodium.",
      "nhường 6 electron cho nguyên tử sodium.",
      "nhận 2 electron từ nguyên tử sodium.",
      "nhận 4 electron từ nguyên tử sodium."
    ],
    correct_index: 2,
    explanation: "Nguyên tử S có 6 electron ở lớp ngoài cùng, có xu hướng nhận thêm 2 electron từ 2 nguyên tử sodium để đạt trạng thái bền 8 electron (tạo ion $S^{2-}$).",
    tags: ["lien-ket-ion", "sodium-sulfide"]
  },
  {
    originalNum: 57,
    question: "Cho biết phân tử Calcium chloride được tạo thành 1 nguyên tử Ca và 2 nguyên tử Cl. Liên kết ion trong phân tử hình thành từ 2 ion sau:",
    options: [
      "Ca⁺ và Cl²⁻",
      "Ca⁺ và Cl⁻",
      "Ca²⁺ và Cl⁻",
      "Ca²⁺ và Cl²⁻"
    ],
    correct_index: 2,
    explanation: "Nguyên tử Ca nhường 2 electron tạo cation $Ca^{2+}$, mỗi nguyên tử Cl nhận 1 electron tạo anion $Cl^-$. Phân tử $CaCl_2$ hình thành từ $Ca^{2+}$ và $Cl^-$.",
    tags: ["lien-ket-ion", "calcium-chloride", "ion"]
  },
  {
    originalNum: 58,
    question: "Dãy các hợp chất có nhiệt độ nóng chảy và nhiệt độ sôi thấp là:",
    options: [
      "Nước, khí ammonia, khí carbon dioxide.",
      "Nước, muối ăn, khí ammonia.",
      "Magnesium oxide, nước, khí carbon dioxide.",
      "Muối ăn, khí ammonia, khí carbon dioxide."
    ],
    correct_index: 0,
    explanation: "Hợp chất cộng hoá trị (như nước $H_2O$, khí ammonia $NH_3$, khí carbon dioxide $CO_2$) có nhiệt độ nóng chảy và nhiệt độ sôi thấp hơn nhiều so với hợp chất ion (như muối ăn $NaCl$, $MgO$).",
    tags: ["tinh-chat-vat-li", "nhiet-do-soi"]
  },
  {
    originalNum: 59,
    question: "Khối lượng phân tử H2SO4 là:",
    options: ["64 amu", "100 amu", "98 amu", "32 amu"],
    correct_index: 2,
    explanation: "Khối lượng phân tử $H_2SO_4$ = (2 * 1) + 32 + (4 * 16) = 2 + 32 + 64 = 98 amu.",
    tags: ["khoi-luong-phan-tu", "axit-sunfuric"]
  }
];

// Linear Congruential Generator for reproducible pseudo-random shuffling
function createRng(seed: number) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function shuffleArray<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildMidtermExamBank() {
  const collection = {
    title: "KHTN 7 - Ôn Tập Kiểm Tra Giữa Kì 1 (2026 - 2027)",
    subject_slug: "khtn",
    grade: 7,
    volume: 1,
    units: [100],
    sequence_number: 10,
    exam_type: "midterm",
    reference_book: "Đề cương Ôn tập kiểm tra Giữa kì 1 - KHTN 7",
    status: "published" as const
  };

  const exams: any[] = [];

  // 1. Đề 01: Đề chuẩn gốc (nguyên bản 100% thứ tự câu hỏi và thứ tự đáp án)
  const exactQuestions = RAW_QUESTIONS.map((q) => ({
    type: "multiple_choice",
    difficulty: 1,
    metadata_json: {
      question: q.question,
      options: q.options,
      correct_index: q.correct_index,
      explanation: q.explanation,
      hint: q.hint,
      image_url: q.image_url,
      tags: [...q.tags, `cau-${q.originalNum}`]
    }
  }));

  exams.push({
    exam_number: 1,
    title: buildExamTitle({ subjectLabel: "KHTN 7", group: "midterm", position: "Giữa kì 1", examSeq: 1 }) + " (Đề gốc chuẩn)",
    duration_minutes: 60,
    questions: exactQuestions
  });

  // 2. Tạo 5 bộ đề xáo trộn (Đề 02 -> Đề 06)
  for (let examSeq = 2; examSeq <= 6; examSeq++) {
    const rng = createRng(20261108 + examSeq * 777);
    const shuffledQ = shuffleArray(RAW_QUESTIONS, rng);

    const questionsForExam = shuffledQ.map((q) => {
      const correctOptionValue = q.options[q.correct_index];
      const shuffledOptions = shuffleArray(q.options, rng);
      const newCorrectIndex = shuffledOptions.indexOf(correctOptionValue);

      return {
        type: "multiple_choice",
        difficulty: 1,
        metadata_json: {
          question: q.question,
          options: shuffledOptions,
          correct_index: newCorrectIndex,
          explanation: q.explanation,
          hint: q.hint,
          image_url: q.image_url,
          tags: [...q.tags, `cau-${q.originalNum}`]
        }
      };
    });

    exams.push({
      exam_number: examSeq,
      title: buildExamTitle({ subjectLabel: "KHTN 7", group: "midterm", position: "Giữa kì 1", examSeq }) + ` (Xáo trộn ${examSeq - 1})`,
      duration_minutes: 60,
      questions: questionsForExam
    });
  }

  return { collection, exams };
}

async function main() {
  const data = buildMidtermExamBank();
  const outPath = path.resolve('content/exam-bank/khtn7/khtn7-on-tap-giua-ki-1.json');
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Đã xuất file JSON thành công: ${outPath}`);
  console.log(`   - Tổng số đề: ${data.exams.length}`);
  console.log(`   - Số câu hỏi mỗi đề: ${data.exams[0].questions.length}`);
}

main().catch(console.error);
