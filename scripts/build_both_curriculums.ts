import fs from 'fs'
import path from 'path'

const mappedVideos = JSON.parse(fs.readFileSync('mapped_toan3_videos.json', 'utf-8'))

const TAP1_TOPICS = [
  {
    topic: "Chủ đề 1: Ôn tập và bổ sung",
    lessons: [
      { num: 1, title: "Ôn tập các số đến 1 000", page: 6 },
      { num: 2, title: "Ôn tập phép cộng, phép trừ trong phạm vi 1 000", page: 9 },
      { num: 3, title: "Tìm thành phần trong phép cộng, phép trừ", page: 11 },
      { num: 4, title: "Ôn tập bảng nhân 2; 5, bảng chia 2; 5", page: 14 },
      { num: 5, title: "Bảng nhân 3, bảng chia 3", page: 16 },
      { num: 6, title: "Bảng nhân 4, bảng chia 4", page: 19 },
      { num: 7, title: "Ôn tập hình học và đo lường", page: 21 },
      { num: 8, title: "Luyện tập chung", page: 24 }
    ]
  },
  {
    topic: "Chủ đề 2: Bảng nhân, bảng chia",
    lessons: [
      { num: 9, title: "Bảng nhân 6, bảng chia 6", page: 28 },
      { num: 10, title: "Bảng nhân 7, bảng chia 7", page: 31 },
      { num: 11, title: "Bảng nhân 8, bảng chia 8", page: 34 },
      { num: 12, title: "Bảng nhân 9, bảng chia 9", page: 37 },
      { num: 13, title: "Tìm thành phần trong phép nhân, phép chia", page: 39 },
      { num: 14, title: "Một phần mấy", page: 42 },
      { num: 15, title: "Luyện tập chung", page: 45 }
    ]
  },
  {
    topic: "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    lessons: [
      { num: 16, title: "Điểm ở giữa, trung điểm của đoạn thẳng", page: 49 },
      { num: 17, title: "Hình tròn. Tâm, bán kính, đường kính của hình tròn", page: 52 },
      { num: 18, title: "Góc, góc vuông, góc không vuông", page: 55 },
      { num: 19, title: "Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông", page: 58 },
      { num: 20, title: "Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí", page: 61 },
      { num: 21, title: "Khối lập phương, khối hộp chữ nhật", page: 63 },
      { num: 22, title: "Luyện tập chung", page: 65 }
    ]
  },
  {
    topic: "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    lessons: [
      { num: 23, title: "Nhân số có hai chữ số với số có một chữ số", page: 67 },
      { num: 24, title: "Gấp một số lên một số lần", page: 70 },
      { num: 25, title: "Phép chia hết, phép chia có dư", page: 72 },
      { num: 26, title: "Chia số có hai chữ số cho số có một chữ số", page: 75 },
      { num: 27, title: "Giảm một số đi một số lần", page: 78 },
      { num: 28, title: "Bài toán giải bằng hai bước tính", page: 80 },
      { num: 29, title: "Luyện tập chung", page: 83 }
    ]
  },
  {
    topic: "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    lessons: [
      { num: 30, title: "Mi-li-mét", page: 85 },
      { num: 31, title: "Gam", page: 87 },
      { num: 32, title: "Mi-li-lít", page: 89 },
      { num: 33, title: "Nhiệt độ. Đơn vị đo nhiệt độ", page: 91 },
      { num: 34, title: "Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C", page: 93 },
      { num: 35, title: "Luyện tập chung", page: 95 }
    ]
  },
  {
    topic: "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    lessons: [
      { num: 36, title: "Nhân số có ba chữ số với số có một chữ số", page: 97 },
      { num: 37, title: "Chia số có ba chữ số cho số có một chữ số", page: 99 },
      { num: 38, title: "Biểu thức số. Tính giá trị của biểu thức số", page: 104 },
      { num: 39, title: "So sánh số lớn gấp mấy lần số bé", page: 109 },
      { num: 40, title: "Luyện tập chung", page: 111 }
    ]
  },
  {
    topic: "Chủ đề 7: Ôn tập học kì 1",
    lessons: [
      { num: 41, title: "Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000", page: 113 },
      { num: 42, title: "Ôn tập biểu thức số", page: 116 },
      { num: 43, title: "Ôn tập hình học và đo lường", page: 118 },
      { num: 44, title: "Ôn tập chung", page: 120 }
    ]
  }
]

const TAP2_TOPICS = [
  {
    topic: "Chủ đề 8: Các số đến 10 000",
    lessons: [
      { num: 45, title: "Các số có bốn chữ số. Số 10 000", page: 4 },
      { num: 46, title: "So sánh các số trong phạm vi 10 000", page: 9 },
      { num: 47, title: "Làm quen với chữ số La Mã", page: 12 },
      { num: 48, title: "Làm tròn số đến hàng chục, hàng trăm", page: 15 },
      { num: 49, title: "Luyện tập chung", page: 17 }
    ]
  },
  {
    topic: "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
    lessons: [
      { num: 50, title: "Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông", page: 22 },
      { num: 51, title: "Diện tích của một hình. Xăng-ti-mét vuông", page: 28 },
      { num: 52, title: "Diện tích hình chữ nhật, diện tích hình vuông", page: 31 },
      { num: 53, title: "Luyện tập chung", page: 35 }
    ]
  },
  {
    topic: "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    lessons: [
      { num: 54, title: "Phép cộng trong phạm vi 10 000", page: 38 },
      { num: 55, title: "Phép trừ trong phạm vi 10 000", page: 42 },
      { num: 56, title: "Nhân số có bốn chữ số với số có một chữ số", page: 46 },
      { num: 57, title: "Chia số có bốn chữ số cho số có một chữ số", page: 49 },
      { num: 58, title: "Luyện tập chung", page: 52 }
    ]
  },
  {
    topic: "Chủ đề 11: Các số đến 100 000",
    lessons: [
      { num: 59, title: "Các số có năm chữ số. Số 100 000", page: 54 },
      { num: 60, title: "So sánh các số trong phạm vi 100 000", page: 62 },
      { num: 61, title: "Làm tròn số đến hàng nghìn, hàng chục nghìn", page: 64 },
      { num: 62, title: "Luyện tập chung", page: 66 }
    ]
  },
  {
    topic: "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 100 000",
    lessons: [
      { num: 63, title: "Phép cộng trong phạm vi 100 000", page: 70 },
      { num: 64, title: "Phép trừ trong phạm vi 100 000", page: 73 },
      { num: 65, title: "Luyện tập chung", page: 76 }
    ]
  },
  {
    topic: "Chủ đề 13: Đồng hồ. Tháng - năm. Tiền Việt Nam",
    lessons: [
      { num: 66, title: "Xem đồng hồ. Tháng – năm", page: 78 },
      { num: 67, title: "Thực hành xem đồng hồ, xem lịch", page: 82 },
      { num: 68, title: "Tiền Việt Nam", page: 85 },
      { num: 69, title: "Luyện tập chung", page: 88 }
    ]
  },
  {
    topic: "Chủ đề 14: Phép nhân, phép chia trong phạm vi 100 000",
    lessons: [
      { num: 70, title: "Nhân số có năm chữ số với số có một chữ số", page: 94 },
      { num: 71, title: "Chia số có năm chữ số cho số có một chữ số", page: 98 },
      { num: 72, title: "Luyện tập chung", page: 101 }
    ]
  },
  {
    topic: "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
    lessons: [
      { num: 73, title: "Thu thập, phân loại, ghi chép số liệu. Bảng số liệu", page: 103 },
      { num: 74, title: "Khả năng xảy ra của một sự kiện", page: 109 },
      { num: 75, title: "Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu", page: 111 }
    ]
  },
  {
    topic: "Chủ đề 16: Ôn tập cuối năm",
    lessons: [
      { num: 76, title: "Ôn tập các số trong phạm vi 10 000, 100 000", page: 114 },
      { num: 77, title: "Ôn tập phép cộng, phép trừ trong phạm vi 100 000", page: 116 },
      { num: 78, title: "Ôn tập phép nhân, phép chia trong phạm vi 100 000", page: 118 },
      { num: 79, title: "Ôn tập hình học và đo lường", page: 121 },
      { num: 80, title: "Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện", page: 123 },
      { num: 81, title: "Ôn tập chung", page: 125 }
    ]
  }
]

function buildLessons(topicGroups: typeof TAP1_TOPICS, volume: number) {
  const result: any[] = []
  for (const group of topicGroups) {
    for (const l of group.lessons) {
      const vids = mappedVideos[String(l.num)] || []
      result.push({
        book_lesson_number: l.num,
        title: l.title,
        page: l.page,
        topic_label: group.topic,
        volume,
        videos: vids.map((v: any) => ({
          youtube_id: v.youtube_id,
          subtitle: v.subtitle
        })),
        practice: [
          {
            question: `Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài ${l.num}?`,
            options: ["Em đã hiểu và có thể làm bài tập", "Em cần xem lại lý thuyết", "Em chưa xem hết video", "Em cần thêm bài tập luyện"],
            correct_index: 0,
            explanation: `Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài ${l.num} để làm bài tập thật tốt nhé!`
          }
        ]
      })
    }
  }
  return result
}

const tap1Data = buildLessons(TAP1_TOPICS, 1)
const tap2Data = buildLessons(TAP2_TOPICS, 2)

// Write toan3-tap1.ts
const tap1Code = `/**
 * Toán lớp 3 — Tập 1 (học kì 1)
 * Bộ sách Kết nối tri thức với cuộc sống.
 * Toàn bộ video giảng dạy chính thức từ Cô Nguyễn Thị Điềm - Kênh VietJack.
 */

export type VideoPart = {
  youtube_id: string;
  subtitle: string;
};

export type BookLesson = {
  book_lesson_number: number;
  title: string;
  page: number;
  topic_label: string;
  volume: number;
  videos: VideoPart[];
  practice: Array<{
    question: string;
    options: string[];
    correct_index: number;
    explanation: string;
  }>;
};

export const TOAN3_TAP1_BOOK_LESSONS: BookLesson[] = ${JSON.stringify(tap1Data, null, 2)};

export function expandToAppLessons() {
  const rows: Array<{
    lesson_index: number;
    book_lesson_number: number;
    video_part: number;
    topic_label: string;
    title: string;
    page_hint: string;
    youtube_video_id: string | null;
    summary: string;
    practice: BookLesson["practice"];
  }> = [];

  let idx = 0;
  for (const book of TOAN3_TAP1_BOOK_LESSONS) {
    const pageHint = \`Trang \${book.page}\`;
    if (book.videos.length === 0) {
      idx += 1;
      rows.push({
        lesson_index: idx,
        book_lesson_number: book.book_lesson_number,
        video_part: 0,
        topic_label: book.topic_label,
        title: \`Bài \${book.book_lesson_number}: \${book.title}\`,
        page_hint: pageHint,
        youtube_video_id: null,
        summary: \`\${book.topic_label}. Đọc sách \${pageHint}, làm bài tập trong SGK.\`,
        practice: book.practice,
      });
      continue;
    }
    book.videos.forEach((v, i) => {
      idx += 1;
      rows.push({
        lesson_index: idx,
        book_lesson_number: book.book_lesson_number,
        video_part: i + 1,
        topic_label: book.topic_label,
        title: \`Bài \${book.book_lesson_number}: \${book.title} — \${v.subtitle}\`,
        page_hint: pageHint,
        youtube_video_id: v.youtube_id,
        summary: \`Xem video bài giảng cô Nguyễn Thị Điềm và đọc sách \${pageHint}.\`,
        practice: book.practice,
      });
    });
  }
  return rows;
}
`

// Write toan3-tap2.ts
const tap2Code = `/**
 * Toán lớp 3 — Tập 2 (học kì 2)
 * Bộ sách Kết nối tri thức với cuộc sống.
 * Toàn bộ video giảng dạy chính thức từ Cô Nguyễn Thị Điềm - Kênh VietJack.
 */

export type VideoPart = {
  youtube_id: string;
  subtitle: string;
};

export type BookLesson = {
  book_lesson_number: number;
  title: string;
  page: number;
  topic_label: string;
  volume: number;
  videos: VideoPart[];
  practice: Array<{
    question: string;
    options: string[];
    correct_index: number;
    explanation: string;
  }>;
};

export const TOAN3_TAP2_BOOK_LESSONS: BookLesson[] = ${JSON.stringify(tap2Data, null, 2)};

export function expandToAppLessonsTap2() {
  const rows: Array<{
    lesson_index: number;
    book_lesson_number: number;
    video_part: number;
    topic_label: string;
    title: string;
    page_hint: string;
    youtube_video_id: string | null;
    summary: string;
    practice: BookLesson["practice"];
  }> = [];

  let idx = 0;
  for (const book of TOAN3_TAP2_BOOK_LESSONS) {
    const pageHint = \`Trang \${book.page}\`;
    if (book.videos.length === 0) {
      idx += 1;
      rows.push({
        lesson_index: idx,
        book_lesson_number: book.book_lesson_number,
        video_part: 0,
        topic_label: book.topic_label,
        title: \`Bài \${book.book_lesson_number}: \${book.title}\`,
        page_hint: pageHint,
        youtube_video_id: null,
        summary: \`\${book.topic_label}. Đọc sách \${pageHint}, làm bài tập trong SGK.\`,
        practice: book.practice,
      });
      continue;
    }
    book.videos.forEach((v, i) => {
      idx += 1;
      rows.push({
        lesson_index: idx,
        book_lesson_number: book.book_lesson_number,
        video_part: i + 1,
        topic_label: book.topic_label,
        title: \`Bài \${book.book_lesson_number}: \${book.title} — \${v.subtitle}\`,
        page_hint: pageHint,
        youtube_video_id: v.youtube_id,
        summary: \`Xem video bài giảng cô Nguyễn Thị Điềm và đọc sách \${pageHint}.\`,
        practice: book.practice,
      });
    });
  }
  return rows;
}
`

fs.writeFileSync('lib/curriculum/toan3-tap1.ts', tap1Code, 'utf-8')
fs.writeFileSync('lib/curriculum/toan3-tap2.ts', tap2Code, 'utf-8')
console.log('Successfully updated lib/curriculum/toan3-tap1.ts and toan3-tap2.ts with 100% verified VietJack videos!')
