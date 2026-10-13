/**
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

export const TOAN3_TAP1_BOOK_LESSONS: BookLesson[] = [
  {
    "book_lesson_number": 1,
    "title": "Ôn tập các số đến 1 000",
    "page": 6,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "xTsNECRvH2g",
        "subtitle": "Ôn tập các số đến 1 000"
      },
      {
        "youtube_id": "WXd0BHS8eFc",
        "subtitle": "Luyện tập Trang 6, 7 - Toán Lớp 3 - Bài 1"
      },
      {
        "youtube_id": "Nd_nqrmqShg",
        "subtitle": "Ôn tập các số đến 1 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 1?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 1 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 2,
    "title": "Ôn tập phép cộng, phép trừ trong phạm vi 1 000",
    "page": 9,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "ZmgU1z-l1S8",
        "subtitle": "Ôn tập phép cộng, phép trừ trong phạm vi 1000"
      },
      {
        "youtube_id": "0GFTtEFD4Bw",
        "subtitle": "Ôn tập phép cộng, phép trừ trong phạm vi 1000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 2?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 2 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 3,
    "title": "Tìm thành phần trong phép cộng, phép trừ",
    "page": 11,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "9fWxTEsAxqA",
        "subtitle": "Tìm thành phần trong phép cộng, phép trừ"
      },
      {
        "youtube_id": "m5cnILHDdko",
        "subtitle": "Tìm thành phần trong phép cộng, phép trừ"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 3?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 3 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 4,
    "title": "Ôn tập bảng nhân 2; 5, bảng chia 2; 5",
    "page": 14,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "pU20z34l0A8",
        "subtitle": "Ôn tập bảng nhân 2, nhân 5. Bảng chia 2, chia 5"
      },
      {
        "youtube_id": "Km4E3lhJSqE",
        "subtitle": "Ôn tập bảng nhân 2, nhân 5. Bảng chia 2, chia 5"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 4?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 4 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 5,
    "title": "Bảng nhân 3, bảng chia 3",
    "page": 16,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "xCAjEAcn2vk",
        "subtitle": "Bảng nhân 3, bảng chia 3"
      },
      {
        "youtube_id": "gP0ncgW7lWc",
        "subtitle": "Bảng nhân 3, bảng chia 3"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 5?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 5 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 6,
    "title": "Bảng nhân 4, bảng chia 4",
    "page": 19,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "BS8i1Xj-Hbk",
        "subtitle": "Bảng nhân 4, bảng chia 4"
      },
      {
        "youtube_id": "RvcZYtiMp-8",
        "subtitle": "Bảng nhân 4, bảng chia 4"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 6?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 6 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 7,
    "title": "Ôn tập hình học và đo lường",
    "page": 21,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "Yy7G9HMj3YE",
        "subtitle": "Ôn tập hình học và đo lường"
      },
      {
        "youtube_id": "nlrhY95G274",
        "subtitle": "Ôn tập hình học và đo lường"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 7?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 7 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 8,
    "title": "Luyện tập chung",
    "page": 24,
    "topic_label": "Chủ đề 1: Ôn tập và bổ sung",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "uAPA4WpoCR0",
        "subtitle": "Luyện tập chung Trang 25, 26"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 8?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 8 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 9,
    "title": "Bảng nhân 6, bảng chia 6",
    "page": 28,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "5c736YjiXbQ",
        "subtitle": "Bảng nhân 6. Bảng chia 6"
      },
      {
        "youtube_id": "NwI8T9QVn10",
        "subtitle": "Bảng nhân 6. Bảng chia 6"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 9?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 9 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 10,
    "title": "Bảng nhân 7, bảng chia 7",
    "page": 31,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "cOrIMRgPqdo",
        "subtitle": "Bảng nhân 7, bảng chia 7"
      },
      {
        "youtube_id": "Cr43p0tjtJw",
        "subtitle": "Bảng nhân 7, bảng chia 7"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 10?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 10 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 11,
    "title": "Bảng nhân 8, bảng chia 8",
    "page": 34,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "7Zd81dAaReA",
        "subtitle": "Bảng nhân 8, bảng chia 8"
      },
      {
        "youtube_id": "HQMw93PTtYM",
        "subtitle": "Bảng nhân 8, bảng chia 8"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 11?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 11 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 12,
    "title": "Bảng nhân 9, bảng chia 9",
    "page": 37,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "H1HpwYvD1hI",
        "subtitle": "Bảng nhân 9. Bảng chia 9"
      },
      {
        "youtube_id": "KW9nkIqzRPQ",
        "subtitle": "Bảng nhân 9. Bảng chia 9"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 12?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 12 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 13,
    "title": "Tìm thành phần trong phép nhân, phép chia",
    "page": 39,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "A19ruFYX4R4",
        "subtitle": "Tìm thành phần trong phép nhân, phép chia"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 13?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 13 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 14,
    "title": "Một phần mấy",
    "page": 42,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "TsJKc3XGxSM",
        "subtitle": "Một phần mấy"
      },
      {
        "youtube_id": "LQNvUpu1lLM",
        "subtitle": "Một phần mấy"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 14?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 14 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 15,
    "title": "Luyện tập chung",
    "page": 45,
    "topic_label": "Chủ đề 2: Bảng nhân, bảng chia",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "jx598fQD26A",
        "subtitle": "Luyện tập chung Trang 46"
      },
      {
        "youtube_id": "jLrDdw7xcMo",
        "subtitle": "Luyện tập chung Trang 46"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 15?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 15 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 16,
    "title": "Điểm ở giữa, trung điểm của đoạn thẳng",
    "page": 49,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "-mBCWxLt6jk",
        "subtitle": "Điểm ở giữa. Trung điểm của đường thẳng"
      },
      {
        "youtube_id": "aaFc710LTFg",
        "subtitle": "Điểm ở giữa. Trung điểm của đường thẳng"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 16?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 16 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 17,
    "title": "Hình tròn. Tâm, bán kính, đường kính của hình tròn",
    "page": 52,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "1Oxhx2x6jvU",
        "subtitle": "Hình tròn, tâm, bán kính, đường kính của hình tròn"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 17?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 17 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 18,
    "title": "Góc, góc vuông, góc không vuông",
    "page": 55,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "ntzxAyFRHNI",
        "subtitle": "Góc, góc vuông, góc không vuông"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 18?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 18 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 19,
    "title": "Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông",
    "page": 58,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "-RiOnNQ9Yao",
        "subtitle": "Hình tam giác, hình tứ giác, hình chữ nhật, hình vuông"
      },
      {
        "youtube_id": "oqAGIH-ml7o",
        "subtitle": "Hình tam giác, hình tứ giác, hình chữ nhật, hình vuông"
      },
      {
        "youtube_id": "Bld472z5L-o",
        "subtitle": "Hình tam giác, hình tứ giác, hình chữ nhật, hình vuông"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 19?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 19 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 20,
    "title": "Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí",
    "page": 61,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "HgW0mOAWue0",
        "subtitle": "Thực hành vẽ góc vuông, vẽ đường tròn hình vuông hình chữ nhật"
      },
      {
        "youtube_id": "0rcrnfwchC8",
        "subtitle": "Thực hành vẽ góc vuông, vẽ đường tròn hình vuông hình chữ nhật - Tiết 2"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 20?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 20 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 21,
    "title": "Khối lập phương, khối hộp chữ nhật",
    "page": 63,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "h-h9KEjVp0I",
        "subtitle": "Khối lập phương. Khối hộp hình  chữ nhật"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 21?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 21 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 22,
    "title": "Luyện tập chung",
    "page": 65,
    "topic_label": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "k67XOxJ0HM4",
        "subtitle": "Luyện tập chung Trang 65"
      },
      {
        "youtube_id": "swGjWai2VVs",
        "subtitle": "Luyện tập chung Trang 66"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 22?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 22 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 23,
    "title": "Nhân số có hai chữ số với số có một chữ số",
    "page": 67,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "9xB1YzM-JfY",
        "subtitle": "Nhân số có hai chữ số với số có một chữ số"
      },
      {
        "youtube_id": "15jFrlcCrNY",
        "subtitle": "Nhân số có hai chữ số với số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 23?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 23 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 24,
    "title": "Gấp một số lên một số lần",
    "page": 70,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "C57NR-zwKjo",
        "subtitle": "Gấp một số lên một số lần"
      },
      {
        "youtube_id": "dPQmR0poQDw",
        "subtitle": "Gấp một số lên một số lần"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 24?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 24 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 25,
    "title": "Phép chia hết, phép chia có dư",
    "page": 72,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "Wo1anBelYUY",
        "subtitle": "Phép chia hết, phép chia có dư"
      },
      {
        "youtube_id": "yz9ub0C9LLU",
        "subtitle": "Phép chia hết, phép chia có dư"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 25?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 25 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 26,
    "title": "Chia số có hai chữ số cho số có một chữ số",
    "page": 75,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "ioghyCI1Y2w",
        "subtitle": "Chia số có hai chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "6N69v-JVjSU",
        "subtitle": "Chia số có hai chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "habfwykzJL0",
        "subtitle": "Chia số có hai chữ số cho số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 26?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 26 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 27,
    "title": "Giảm một số đi một số lần",
    "page": 78,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "Y-98Q1cvoos",
        "subtitle": "Giảm một số đi một số lần"
      },
      {
        "youtube_id": "3F1Gl04FIAA",
        "subtitle": "Giảm một số đi một số lần"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 27?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 27 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 28,
    "title": "Bài toán giải bằng hai bước tính",
    "page": 80,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "3lmuFXEDFto",
        "subtitle": "Bài toán giải bằng hai bước tính"
      },
      {
        "youtube_id": "LXHenyTlMtE",
        "subtitle": "Bài toán giải bằng hai bước tính"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 28?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 28 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 29,
    "title": "Luyện tập chung",
    "page": 83,
    "topic_label": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "Xc_VAA3XOkI",
        "subtitle": "Luyện tập chung Trang 83"
      },
      {
        "youtube_id": "VR3ZrYtVt2M",
        "subtitle": "Luyện tập chung Trang 83"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 29?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 29 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 30,
    "title": "Mi-li-mét",
    "page": 85,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "tXvncUQJp5g",
        "subtitle": "Mi - li - mét"
      },
      {
        "youtube_id": "TZGkKKe2gHU",
        "subtitle": "Mi - li - mét"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 30?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 30 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 31,
    "title": "Gam",
    "page": 87,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "_Ua5beVuRF0",
        "subtitle": "Gam"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 31?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 31 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 32,
    "title": "Mi-li-lít",
    "page": 89,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "KY8xR8jYCkY",
        "subtitle": "Mi - li - lít"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 32?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 32 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 33,
    "title": "Nhiệt độ. Đơn vị đo nhiệt độ",
    "page": 91,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "qtv6ys5QiDM",
        "subtitle": "Nhiệt độ, đơn vị đo nhiệt độ"
      },
      {
        "youtube_id": "2zxetUFjzfs",
        "subtitle": "Nhiệt độ, đơn vị đo nhiệt độ"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 33?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 33 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 34,
    "title": "Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C",
    "page": 93,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "EvOGlQB44N8",
        "subtitle": "Thực hành và trải nghiệm với các đơn vị mi-li-mét"
      },
      {
        "youtube_id": "aLIEKfpFraM",
        "subtitle": "Thực hành và trải nghiệm với các đơn vị mi-li-mét"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 34?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 34 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 35,
    "title": "Luyện tập chung",
    "page": 95,
    "topic_label": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "bV3vUG60_7I",
        "subtitle": "Luyện tập chung Trang 95"
      },
      {
        "youtube_id": "eY3XXQ3qLYA",
        "subtitle": "Luyện tập chung Trang 96"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 35?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 35 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 36,
    "title": "Nhân số có ba chữ số với số có một chữ số",
    "page": 97,
    "topic_label": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "tdzneFdN6XM",
        "subtitle": "Nhân số có ba chữ số với số có một chữ số"
      },
      {
        "youtube_id": "PJ72vQRJyKI",
        "subtitle": "Nhân số có ba chữ số với số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 36?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 36 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 37,
    "title": "Chia số có ba chữ số cho số có một chữ số",
    "page": 99,
    "topic_label": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "YZpsxXskCAU",
        "subtitle": "Chia số có ba chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "IaAbV6JPdiY",
        "subtitle": "Chia số có ba chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "sk2CRjWqInM",
        "subtitle": "Chia số có ba chữ số cho số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 37?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 37 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 38,
    "title": "Biểu thức số. Tính giá trị của biểu thức số",
    "page": 104,
    "topic_label": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "WWcd-Yq_WU0",
        "subtitle": "Biểu thức số. Tính giá trị của biểu thức số"
      },
      {
        "youtube_id": "o_eZ7YnFeaU",
        "subtitle": "Biểu thức số. Tính giá trị của biểu thức số"
      },
      {
        "youtube_id": "NMrcKd1A7y8",
        "subtitle": "Biểu thức số. Tính giá trị của biểu thức số"
      },
      {
        "youtube_id": "1BLIoJFKwgA",
        "subtitle": "Biểu thức số. Tính giá trị của biểu thức số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 38?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 38 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 39,
    "title": "So sánh số lớn gấp mấy lần số bé",
    "page": 109,
    "topic_label": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "rTT14-aG3L4",
        "subtitle": "So sánh số lớn gấp mấy lần số bé"
      },
      {
        "youtube_id": "SVhWvZX-Wr0",
        "subtitle": "So sánh số lớn gấp mấy lần số bé"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 39?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 39 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 40,
    "title": "Luyện tập chung",
    "page": 111,
    "topic_label": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "l7-q4pddEyU",
        "subtitle": "Luyện tập chung Trang 111"
      },
      {
        "youtube_id": "jbOJ7aP8y6k",
        "subtitle": "Luyện tập chung Trang 111, 112"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 40?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 40 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 41,
    "title": "Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000",
    "page": 113,
    "topic_label": "Chủ đề 7: Ôn tập học kì 1",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "LALm0_tX-HU",
        "subtitle": "Ôn tập phép nhân phép chia trong phạm vị 100, 1000"
      },
      {
        "youtube_id": "bl1V-kXKJ80",
        "subtitle": "Ôn tập phép nhân phép chia trong phạm vị 100, 1000"
      },
      {
        "youtube_id": "1j8id8gi9LE",
        "subtitle": "Ôn tập phép nhân phép chia trong phạm vị 100, 1000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 41?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 41 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 42,
    "title": "Ôn tập biểu thức số",
    "page": 116,
    "topic_label": "Chủ đề 7: Ôn tập học kì 1",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "YM3qnnVvyAY",
        "subtitle": "Ôn tập biểu thức số"
      },
      {
        "youtube_id": "wewlNvOJRno",
        "subtitle": "Ôn tập biểu thức số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 42?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 42 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 43,
    "title": "Ôn tập hình học và đo lường",
    "page": 118,
    "topic_label": "Chủ đề 7: Ôn tập học kì 1",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "AupYNs1dbas",
        "subtitle": "Ôn tập hình học và đo lường"
      },
      {
        "youtube_id": "1DNVfroqels",
        "subtitle": "Ôn tập hình học và đo lường"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 43?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 43 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 44,
    "title": "Ôn tập chung",
    "page": 120,
    "topic_label": "Chủ đề 7: Ôn tập học kì 1",
    "volume": 1,
    "videos": [
      {
        "youtube_id": "vxhE2N4IC5Y",
        "subtitle": "Ôn tập chung Trang 120"
      },
      {
        "youtube_id": "8MPBqmqcoj8",
        "subtitle": "Ôn tập chung Trang 120"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 44?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 44 để làm bài tập thật tốt nhé!"
      }
    ]
  }
];

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
    const pageHint = `Trang ${book.page}`;
    if (book.videos.length === 0) {
      idx += 1;
      rows.push({
        lesson_index: idx,
        book_lesson_number: book.book_lesson_number,
        video_part: 0,
        topic_label: book.topic_label,
        title: `Bài ${book.book_lesson_number}: ${book.title}`,
        page_hint: pageHint,
        youtube_video_id: null,
        summary: `${book.topic_label}. Đọc sách ${pageHint}, làm bài tập trong SGK.`,
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
        title: `Bài ${book.book_lesson_number}: ${book.title} — ${v.subtitle}`,
        page_hint: pageHint,
        youtube_video_id: v.youtube_id,
        summary: `Xem video bài giảng cô Nguyễn Thị Điềm và đọc sách ${pageHint}.`,
        practice: book.practice,
      });
    });
  }
  return rows;
}
