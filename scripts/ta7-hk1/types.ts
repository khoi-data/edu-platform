export interface ExamQuestion {
  type: string;
  difficulty?: number;
  metadata_json: Record<string, any>;
}

export interface ExamSpec {
  exam_number: number;
  title: string;
  duration_minutes?: number;
  questions: ExamQuestion[];
}

export function mc(
  question: string,
  options: string[],
  correct_index: number,
  explanation: string,
  hint = '',
  instruction = 'Chọn đáp án đúng nhất (A, B, C hoặc D):',
  tags: string[] = ['hk1', 'tieng-anh-7']
): ExamQuestion {
  return {
    type: 'multiple_choice',
    difficulty: 2,
    metadata_json: {
      question,
      options,
      correct_index,
      instruction,
      hint,
      explanation,
      tags
    }
  };
}

export function fill(
  question: string,
  correct_answer: string,
  explanation: string,
  hint = '',
  instruction = 'Điền từ / cụm từ thích hợp vào chỗ trống:',
  choices?: string[],
  tags: string[] = ['hk1', 'tieng-anh-7']
): ExamQuestion {
  return {
    type: 'fill_blank',
    difficulty: 2,
    metadata_json: {
      question,
      correct_answer,
      choices,
      instruction,
      hint,
      explanation,
      tags
    }
  };
}

export function reorder(
  question: string,
  words: string[],
  correct_sentence: string,
  explanation: string,
  hint = '',
  instruction = 'Sắp xếp các từ/cụm từ xáo trộn để tạo thành câu hoàn chỉnh:',
  tags: string[] = ['hk1', 'tieng-anh-7']
): ExamQuestion {
  return {
    type: 'sentence_reorder',
    difficulty: 2,
    metadata_json: {
      question,
      words,
      correct_sentence,
      instruction,
      hint,
      explanation,
      tags
    }
  };
}
