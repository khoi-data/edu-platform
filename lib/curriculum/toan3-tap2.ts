/**
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

export const TOAN3_TAP2_BOOK_LESSONS: BookLesson[] = [
  {
    "book_lesson_number": 45,
    "title": "Các số có bốn chữ số. Số 10 000",
    "page": 4,
    "topic_label": "Chủ đề 8: Các số đến 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "Sektr2udY7E",
        "subtitle": "Các số có bốn chữ số. Số 10 000"
      },
      {
        "youtube_id": "HJ23qttJBTk",
        "subtitle": "Các số có bốn chữ số. Số 10 000"
      },
      {
        "youtube_id": "vUzwVL8YDaA",
        "subtitle": "Các số có bốn chữ số. Số 10 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 45?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 45 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 46,
    "title": "So sánh các số trong phạm vi 10 000",
    "page": 9,
    "topic_label": "Chủ đề 8: Các số đến 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "YXKxCsq6rL4",
        "subtitle": "So sánh các số trong phạm vi 10 000"
      },
      {
        "youtube_id": "PzG0MuFeybk",
        "subtitle": "So sánh các số trong phạm vi 10 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 46?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 46 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 47,
    "title": "Làm quen với chữ số La Mã",
    "page": 12,
    "topic_label": "Chủ đề 8: Các số đến 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "T53DqBstwGM",
        "subtitle": "Làm quen với chữ số La Mã"
      },
      {
        "youtube_id": "aMLNG6JaEiw",
        "subtitle": "Làm quen với chữ số La Mã"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 47?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 47 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 48,
    "title": "Làm tròn số đến hàng chục, hàng trăm",
    "page": 15,
    "topic_label": "Chủ đề 8: Các số đến 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "9B5jEk8pDwA",
        "subtitle": "Làm tròn đến hàng chục, hàng trăm"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 48?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 48 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 49,
    "title": "Luyện tập chung",
    "page": 17,
    "topic_label": "Chủ đề 8: Các số đến 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "U15ADvJFWdY",
        "subtitle": "Luyện tập chung Trang 17, 18"
      },
      {
        "youtube_id": "DfZBk-gsw6E",
        "subtitle": "Luyện tập chung Trang 18, 19"
      },
      {
        "youtube_id": "SWn6jCgzZgk",
        "subtitle": "Luyện tập chung Trang 19, 20"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 49?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 49 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 50,
    "title": "Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông",
    "page": 22,
    "topic_label": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "I5ScqxEs94Y",
        "subtitle": "Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông"
      },
      {
        "youtube_id": "oxkis90VcMY",
        "subtitle": "Chu vi hình tam giác, hình tứ giác, hình chữ nhật"
      },
      {
        "youtube_id": "EdjONrVq_6M",
        "subtitle": "Chu vi hình tam giác, hình tứ giác, hình chữ nhật"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 50?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 50 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 51,
    "title": "Diện tích của một hình. Xăng-ti-mét vuông",
    "page": 28,
    "topic_label": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "CYJurgRV48g",
        "subtitle": "Diện tích của một hình. Xăng-ti-mét vuông"
      },
      {
        "youtube_id": "DwbNZXkoJ5s",
        "subtitle": "Diện tích của một hình. Xăng-ti-mét vuông"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 51?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 51 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 52,
    "title": "Diện tích hình chữ nhật, diện tích hình vuông",
    "page": 31,
    "topic_label": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "23O7p72evSY",
        "subtitle": "Diện tích hình chữ nhật. Diện tích hình vuông"
      },
      {
        "youtube_id": "UNL5IARg-Xk",
        "subtitle": "Diện tích hình chữ nhật. Diện tích hình vuông"
      },
      {
        "youtube_id": "g6Kp4d6hxmI",
        "subtitle": "Diện tích hình chữ nhật. Diện tích hình vuông"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 52?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 52 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 53,
    "title": "Luyện tập chung",
    "page": 35,
    "topic_label": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "DpwzQZqyFYA",
        "subtitle": "Luyện tập chung Trang 35"
      },
      {
        "youtube_id": "3_rjB8kvong",
        "subtitle": "Luyện tập chung Trang 36"
      },
      {
        "youtube_id": "jMxRGLJSsy8",
        "subtitle": "Luyện tập chung Trang 37"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 53?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 53 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 54,
    "title": "Phép cộng trong phạm vi 10 000",
    "page": 38,
    "topic_label": "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "NIKXXq2yMeU",
        "subtitle": "Phép cộng trong phạm vi 10 000"
      },
      {
        "youtube_id": "UQX-pk0hjTg",
        "subtitle": "Phép cộng trong phạm vi 10 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 54?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 54 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 55,
    "title": "Phép trừ trong phạm vi 10 000",
    "page": 42,
    "topic_label": "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "CyFitX82bpg",
        "subtitle": "Phép trừ trong phạm vi 10 000"
      },
      {
        "youtube_id": "5-Q1sNVEEqE",
        "subtitle": "Phép trừ trong phạm vi 10 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 55?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 55 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 56,
    "title": "Nhân số có bốn chữ số với số có một chữ số",
    "page": 46,
    "topic_label": "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "B11zj-_aYoM",
        "subtitle": "Nhân số có bốn chữ số với số có một chữ số"
      },
      {
        "youtube_id": "lebVM9tTEcg",
        "subtitle": "Nhân số có bốn chữ số với số có một chữ số"
      },
      {
        "youtube_id": "IudP86K8Tes",
        "subtitle": "Nhân số có bốn chữ số với số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 56?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 56 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 57,
    "title": "Chia số có bốn chữ số cho số có một chữ số",
    "page": 49,
    "topic_label": "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "10FMaSpViX4",
        "subtitle": "Chia số có bốn chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "0IvUvpjbjik",
        "subtitle": "Chia số có bốn chữ số cho số có một chữ số - Toán Lớp 3 - Bài 57 - Tiết 2 (SGk Mới 2026)"
      },
      {
        "youtube_id": "ZOYX_K2Sr5A",
        "subtitle": "Chia số có bốn chữ số cho số có một chữ số - Toán Lớp 3 - Bài 57 - Tiết 3 (SGk Mới 2026)"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 57?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 57 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 58,
    "title": "Luyện tập chung",
    "page": 52,
    "topic_label": "Chủ đề 10: Phép cộng, phép trừ, phép nhân, phép chia trong phạm vi 10 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "wcXqLDrdgIY",
        "subtitle": "Luyện tập chung Trang 52, 53"
      },
      {
        "youtube_id": "m4DTAKcuCNg",
        "subtitle": "Luyện tập chung Trang 52, 53"
      },
      {
        "youtube_id": "yjxNnS5aUl0",
        "subtitle": "Luyện tập chung Trang 52, 53"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 58?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 58 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 59,
    "title": "Các số có năm chữ số. Số 100 000",
    "page": 54,
    "topic_label": "Chủ đề 11: Các số đến 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "C7gDBywenNY",
        "subtitle": "Các số có năm chữ số. Số 100 000"
      },
      {
        "youtube_id": "3AzmBGpr15Y",
        "subtitle": "Các số có năm chữ số. Số 100 000"
      },
      {
        "youtube_id": "_A17Z7L6yGo",
        "subtitle": "Các số có năm chữ số. Số 100 000"
      },
      {
        "youtube_id": "byQoFXZyHWc",
        "subtitle": "Các số có năm chữ số. Số 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 59?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 59 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 60,
    "title": "So sánh các số trong phạm vi 100 000",
    "page": 62,
    "topic_label": "Chủ đề 11: Các số đến 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "sTi9Cy2MDDs",
        "subtitle": "So sánh các số trong phạm vi 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 60?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 60 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 61,
    "title": "Làm tròn số đến hàng nghìn, hàng chục nghìn",
    "page": 64,
    "topic_label": "Chủ đề 11: Các số đến 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "mJol96OzTjo",
        "subtitle": "Làm tròn đến hàng nghìn, hàng chục nghìn"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 61?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 61 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 62,
    "title": "Luyện tập chung",
    "page": 66,
    "topic_label": "Chủ đề 11: Các số đến 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "HHP4jvkMrWI",
        "subtitle": "Luyện tập chung Trang 66, 67"
      },
      {
        "youtube_id": "-Dr4gYscB9w",
        "subtitle": "Luyện tập chung Trang 67, 68"
      },
      {
        "youtube_id": "NbePToVIaSE",
        "subtitle": "Luyện tập chung Trang 68, 69"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 62?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 62 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 63,
    "title": "Phép cộng trong phạm vi 100 000",
    "page": 70,
    "topic_label": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "yxWIi_4HWYY",
        "subtitle": "Phép cộng trong phạm vi 100 000"
      },
      {
        "youtube_id": "GfIXgk_vToA",
        "subtitle": "Phép cộng trong phạm vi 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 63?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 63 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 64,
    "title": "Phép trừ trong phạm vi 100 000",
    "page": 73,
    "topic_label": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "ClKWIeGd1x0",
        "subtitle": "Phép trừ trong phạm vi 100 000"
      },
      {
        "youtube_id": "fOtMZ2FcNCw",
        "subtitle": "Phép trừ trong phạm vi 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 64?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 64 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 65,
    "title": "Luyện tập chung",
    "page": 76,
    "topic_label": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "mi5yITKMtAI",
        "subtitle": "Luyện tập chung Trang 76"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 65?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 65 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 66,
    "title": "Xem đồng hồ. Tháng – năm",
    "page": 78,
    "topic_label": "Chủ đề 13: Đồng hồ. Tháng - năm. Tiền Việt Nam",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "b2kZVFVrqlo",
        "subtitle": "Xem đồng hồ. Tháng - năm"
      },
      {
        "youtube_id": "RR_r842GIjo",
        "subtitle": "Xem đồng hồ. Tháng - năm"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 66?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 66 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 67,
    "title": "Thực hành xem đồng hồ, xem lịch",
    "page": 82,
    "topic_label": "Chủ đề 13: Đồng hồ. Tháng - năm. Tiền Việt Nam",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "YguAoQpu_qE",
        "subtitle": "Thực hành xem đồng hồ, xem lịch"
      },
      {
        "youtube_id": "FBCwbTqEkTs",
        "subtitle": "Thực hành xem đồng hồ, xem lịch"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 67?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 67 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 68,
    "title": "Tiền Việt Nam",
    "page": 85,
    "topic_label": "Chủ đề 13: Đồng hồ. Tháng - năm. Tiền Việt Nam",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "CEBWn6TR9YM",
        "subtitle": "Tiền Việt Nam"
      },
      {
        "youtube_id": "KJIjVhqyb3A",
        "subtitle": "Tiền Việt Nam"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 68?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 68 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 69,
    "title": "Luyện tập chung",
    "page": 88,
    "topic_label": "Chủ đề 13: Đồng hồ. Tháng - năm. Tiền Việt Nam",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "vTEW1bOCbUI",
        "subtitle": "Luyện tập chung Trang 88, 89"
      },
      {
        "youtube_id": "wzZOt9TO7g8",
        "subtitle": "Luyện tập chung Trang 90, 91"
      },
      {
        "youtube_id": "46uugRYYuWw",
        "subtitle": "Luyện tập chung Trang 92, 93"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 69?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 69 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 70,
    "title": "Nhân số có năm chữ số với số có một chữ số",
    "page": 94,
    "topic_label": "Chủ đề 14: Phép nhân, phép chia trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "bqcQH9o-hxc",
        "subtitle": "Nhân số có năm chữ số với số có một chữ số"
      },
      {
        "youtube_id": "6kAkmn0XO7w",
        "subtitle": "Nhân số có năm chữ số với số có một chữ số"
      },
      {
        "youtube_id": "iCk9xFwhLmA",
        "subtitle": "Nhân số có năm chữ số với số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 70?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 70 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 71,
    "title": "Chia số có năm chữ số cho số có một chữ số",
    "page": 98,
    "topic_label": "Chủ đề 14: Phép nhân, phép chia trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "eJk-7v9PQeo",
        "subtitle": "Chia số có năm chữ số cho số có một chữ số"
      },
      {
        "youtube_id": "C2G4XUmX5hQ",
        "subtitle": "Chia số có năm chữ số cho số có một chữ số"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 71?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 71 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 72,
    "title": "Luyện tập chung",
    "page": 101,
    "topic_label": "Chủ đề 14: Phép nhân, phép chia trong phạm vi 100 000",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "Rq5DF1XsMwY",
        "subtitle": "Luyện tập chung Trang 101"
      },
      {
        "youtube_id": "H54GgPTT4uM",
        "subtitle": "Luyện tập chung Trang 102"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 72?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 72 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 73,
    "title": "Thu thập, phân loại, ghi chép số liệu. Bảng số liệu",
    "page": 103,
    "topic_label": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "rbEIHAECZiQ",
        "subtitle": "Thu nhập, phân loại, ghi chép số liệu, bảng số liệu"
      },
      {
        "youtube_id": "fFGRurZGihY",
        "subtitle": "Thu nhập, phân loại, ghi chép số liệu, bảng số liệu"
      },
      {
        "youtube_id": "8yNDwNvpvDo",
        "subtitle": "Thu nhập, phân loại, ghi chép số liệu, bảng số liệu"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 73?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 73 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 74,
    "title": "Khả năng xảy ra của một sự kiện",
    "page": 109,
    "topic_label": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "ltlIzHKfZq4",
        "subtitle": "Khả năng xảy ra của một sự kiện"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 74?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 74 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 75,
    "title": "Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu",
    "page": 111,
    "topic_label": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "hSmz_aLJUSk",
        "subtitle": "Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu"
      },
      {
        "youtube_id": "DVyejYmAB60",
        "subtitle": "Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu - Tiết 2"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 75?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 75 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 76,
    "title": "Ôn tập các số trong phạm vi 10 000, 100 000",
    "page": 114,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "uYJAX-Ze3Z8",
        "subtitle": "Ôn tập các số trong phạm vi 10 000, 100 000"
      },
      {
        "youtube_id": "nBO7OPKxsnY",
        "subtitle": "Ôn tập các số trong phạm vi 10 000, 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 76?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 76 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 77,
    "title": "Ôn tập phép cộng, phép trừ trong phạm vi 100 000",
    "page": 116,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "wvf-_pa1eKQ",
        "subtitle": "Ôn tập phép cộng, phép trừ trong phạm vi 100 000"
      },
      {
        "youtube_id": "QkR7erNNnIk",
        "subtitle": "Ôn tập phép cộng, phép trừ trong phạm vi 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 77?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 77 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 78,
    "title": "Ôn tập phép nhân, phép chia trong phạm vi 100 000",
    "page": 118,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "jUssRw-T0Pc",
        "subtitle": "Ôn tập phép nhân, phép chia trong phạm vi 100 000"
      },
      {
        "youtube_id": "2aTAatk_toA",
        "subtitle": "Ôn tập phép nhân, phép chia trong phạm vi 100 000"
      },
      {
        "youtube_id": "87YpgVo8NoM",
        "subtitle": "Ôn tập phép nhân, phép chia trong phạm vi 100 000"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 78?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 78 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 79,
    "title": "Ôn tập hình học và đo lường",
    "page": 121,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "mQdNo4cs-Bw",
        "subtitle": "Ôn tập hình học và đo lường"
      },
      {
        "youtube_id": "4ohu9lhO11Q",
        "subtitle": "Ôn tập hình học và đo lường"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 79?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 79 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 80,
    "title": "Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện",
    "page": 123,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "-CzdonuYAt4",
        "subtitle": "Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 80?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 80 để làm bài tập thật tốt nhé!"
      }
    ]
  },
  {
    "book_lesson_number": 81,
    "title": "Ôn tập chung",
    "page": 125,
    "topic_label": "Chủ đề 16: Ôn tập cuối năm",
    "volume": 2,
    "videos": [
      {
        "youtube_id": "oQW0Uy7AUKE",
        "subtitle": "Ôn tập chung trang 125"
      },
      {
        "youtube_id": "K71uH-QrPGI",
        "subtitle": "Ôn tập chung trang 126"
      }
    ],
    "practice": [
      {
        "question": "Sau khi xem video bài giảng và đọc SGK, em đã nắm vững kiến thức Bài 81?",
        "options": [
          "Em đã hiểu và có thể làm bài tập",
          "Em cần xem lại lý thuyết",
          "Em chưa xem hết video",
          "Em cần thêm bài tập luyện"
        ],
        "correct_index": 0,
        "explanation": "Hãy ghi nhớ các công thức và quy tắc quan trọng trong Bài 81 để làm bài tập thật tốt nhé!"
      }
    ]
  }
];

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
