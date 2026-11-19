import json
import os

OUTPUT_DIR = "content/exam-bank/tieng-anh"
os.makedirs(OUTPUT_DIR, exist_ok=True)

all_units = [
    # ─── UNIT 11: My family ──────────────────────────────────────────────────────────
    {
        "unit": 11,
        "title": "Unit 11: My family",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\ns___", "correct_answer": "ure", "choices": ["ure", "o"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\n___ld", "correct_answer": "o", "choices": ["o", "ure"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n1. moerth -> ___", "correct_answer": "mother", "choices": ["mother", "father", "sister", "brother"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n2. istres -> ___", "correct_answer": "sister", "choices": ["sister", "brother", "mother", "father"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n3. rotherb -> ___", "correct_answer": "brother", "choices": ["brother", "sister", "father", "mother"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n4. thfaer -> ___", "correct_answer": "father", "choices": ["father", "mother", "brother", "sister"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n1. My brother is ___ years old. (bánh nến số 20)", "correct_answer": "twenty", "choices": ["twenty", "twelve", "fourteen", "sixteen"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n2. My sister is ___ years old. (bánh nến số 12)", "correct_answer": "twelve", "choices": ["twelve", "twenty", "thirteen", "fourteen"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n3. My friend is ___ years old. (bánh nến số 14)", "correct_answer": "fourteen", "choices": ["fourteen", "fifteen", "sixteen", "twelve"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. It's", "right": "d. my sister."},
                {"left": "2. Who's", "right": "a. that?"},
                {"left": "3. How old", "right": "e. is your brother?"},
                {"left": "4. He's", "right": "b. twelve years old."},
                {"left": "5. She's fourteen", "right": "c. years old."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n1. ___ old is your sister?", "correct_answer": "How", "choices": ["How", "What", "Who", "Where"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n2. She ___ thirteen.", "correct_answer": "is", "choices": ["is", "are", "am", "be"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n3. How old are ___?", "correct_answer": "you", "choices": ["you", "your", "she", "he"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n4. He's fifteen ___.", "correct_answer": "years old", "choices": ["years old", "years", "old", "year"]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nthis / Who's", "words": ["Who's", "this", "?"], "correct_sentence": "Who's this?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nmy / It's / father", "words": ["It's", "my", "father", "."], "correct_sentence": "It's my father."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nHow old / is / brother / your", "words": ["How", "old", "is", "your", "brother", "?"], "correct_sentence": "How old is your brother?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nfourteen / My sister / is / years old", "words": ["My", "sister", "is", "fourteen", "years", "old", "."], "correct_sentence": "My sister is fourteen years old."}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. Who's that?", "right": "c. It's my mother."},
                {"left": "2. How old are you?", "right": "d. I'm thirteen."},
                {"left": "3. How old is your sister?", "right": "a. She's sixteen."},
                {"left": "4. How old is your brother?", "right": "b. He's eleven."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"My name is Nam. This is my (1) ___.\"", "correct_answer": "sister", "choices": ["sister", "brother", "mother", "father"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"She is sixteen (2) ___ old.\"", "correct_answer": "years", "choices": ["years", "year", "days", "months"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"This is my (3) ___.\"", "correct_answer": "brother", "choices": ["brother", "sister", "friend", "father"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"He is (4) ___ years old. And look! This is me. I am eight years old.\"", "correct_answer": "eleven", "choices": ["eleven", "twelve", "thirteen", "ten"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nMai: Who's (1) ___?\nBen: It's my sister.", "correct_answer": "this", "choices": ["this", "that", "these", "those"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nMai: Who's this?\nBen: It's my (2) ___.", "correct_answer": "sister", "choices": ["sister", "brother", "mother", "father"]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "E. Writing - 1. Look and write (Bé gái 6 tuổi):\nMai: How old is she?\nBen: ___", "words": ["She's", "six", "years", "old", "."], "correct_sentence": "She's six years old."}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nMai: Who's (4) ___?\nLinh: It's my brother.", "correct_answer": "that", "choices": ["that", "this", "it", "he"]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "E. Writing - 1. Look and write (Anh trai 20 tuổi):\nMai: How old is he?\nLinh: ___", "words": ["He's", "twenty", "years", "old", "."], "correct_sentence": "He's twenty years old."}}
        ]
    },

    # ─── UNIT 12: Jobs ───────────────────────────────────────────────────────────────
    {
        "unit": 12,
        "title": "Unit 12: Jobs",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\ndoct___", "correct_answer": "or", "choices": ["or", "er"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nmoth___", "correct_answer": "er", "choices": ["er", "or"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Find the job:\n1. Người khám và chữa bệnh: ___", "correct_answer": "doctor", "choices": ["doctor", "driver", "farmer", "cook"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Find the job:\n2. Người dạy học sinh ở trường: ___", "correct_answer": "teacher", "choices": ["teacher", "worker", "singer", "nurse"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Find the job:\n3. Người chăm sóc bệnh nhân: ___", "correct_answer": "nurse", "choices": ["nurse", "cook", "driver", "doctor"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Find the job:\n4. Người lái xe: ___", "correct_answer": "driver", "choices": ["driver", "worker", "farmer", "teacher"]}},
            {"type": "matching", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Read and match.", "pairs": [
                {"left": "1. nurse", "right": "c. Y tá"},
                {"left": "2. farmer", "right": "d. Nông dân"},
                {"left": "3. cook", "right": "b. Đầu bếp"},
                {"left": "4. singer", "right": "a. Ca sĩ"}
            ]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. What's", "right": "c. her job?"},
                {"left": "2. Is your father", "right": "a. a farmer?"},
                {"left": "3. She's a", "right": "b. singer."},
                {"left": "4. He's a", "right": "d. worker."}
            ]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and match the dialogue.", "pairs": [
                {"left": "1. Who's that?", "right": "c. It's my father."},
                {"left": "2. What's his job?", "right": "b. He's a nurse."},
                {"left": "3. What's her job?", "right": "a. She's a doctor."},
                {"left": "4. Is your mother a teacher?", "right": "d. Yes, she is."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nam / I / a pupil", "words": ["I", "am", "a", "pupil", "."], "correct_sentence": "I am a pupil."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\na singer / Is / your / sister", "words": ["Is", "your", "sister", "a", "singer", "?"], "correct_sentence": "Is your sister a singer?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nis / My / a driver / brother", "words": ["My", "brother", "is", "a", "driver", "."], "correct_sentence": "My brother is a driver."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\njob / What's / his", "words": ["What's", "his", "job", "?"], "correct_sentence": "What's his job?"}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"This is my family. My mother is a (1) ___.\"", "correct_answer": "doctor", "choices": ["doctor", "teacher", "pupil", "cook"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"My father (2) ___ a teacher.\"", "correct_answer": "is", "choices": ["is", "are", "am", "have"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"I am a (3) ___.\"", "correct_answer": "pupil", "choices": ["pupil", "teacher", "doctor", "farmer"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"This is my family. My (4) ___ is a cook.\"", "correct_answer": "mother", "choices": ["mother", "pupil", "father", "sister"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"My father is (5) ___. I am a pupil, too.\"", "correct_answer": "a farmer", "choices": ["a farmer", "a doctor", "a cook", "a pupil"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read Ben's family text and choose True/False:\n1. His father is a farmer.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read Ben's family text and choose True/False:\n2. His mother is a doctor.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read Ben's family text and choose True/False:\n3. His brother is a cook.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read Ben's family text and choose True/False:\n4. Ben is a pupil.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"My name is Linh. This is my (1) f___.\"", "correct_answer": "family", "choices": ["family", "father", "farmer", "friend"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"My (2) m___ is a worker.\"", "correct_answer": "mother", "choices": ["mother", "monkey", "music", "milk"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"My father is a (3) n___.\"", "correct_answer": "nurse", "choices": ["nurse", "notebook", "name", "number"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"This is my (4) b___. He is a student.\"", "correct_answer": "brother", "choices": ["brother", "book", "bag", "bird"]}}
        ]
    },

    # ─── UNIT 13: My house ───────────────────────────────────────────────────────────
    {
        "unit": 13,
        "title": "Unit 13: My house",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nh___se", "correct_answer": "ou", "choices": ["ou", "ow"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nbr___n", "correct_answer": "ow", "choices": ["ow", "ou"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Across (Cái bàn): ___", "correct_answer": "table", "choices": ["table", "chair", "house", "kitchen"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Across (Nhà bếp): ___", "correct_answer": "kitchen", "choices": ["kitchen", "bedroom", "bathroom", "living room"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Across (Cái ghế): ___", "correct_answer": "chair", "choices": ["chair", "table", "bed", "desk"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Across (Ngôi nhà): ___", "correct_answer": "house", "choices": ["house", "room", "garden", "door"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Across (Phòng tắm): ___", "correct_answer": "bathroom", "choices": ["bathroom", "bedroom", "kitchen", "garden"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n6. Down (Phòng ngủ): ___", "correct_answer": "bedroom", "choices": ["bedroom", "bathroom", "living room", "kitchen"]}},
            {"type": "matching", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Read and match.", "pairs": [
                {"left": "1. living room", "right": "b. Phòng khách"},
                {"left": "2. bedroom", "right": "d. Phòng ngủ"},
                {"left": "3. kitchen", "right": "a. Nhà bếp"},
                {"left": "4. bathroom", "right": "f. Phòng tắm"}
            ]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. Where's the", "right": "d. living room?"},
                {"left": "2. It's", "right": "c. in the bedroom."},
                {"left": "3. Where are", "right": "a. the lamps?"},
                {"left": "4. They're on", "right": "b. the table."}
            ]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Look, match and read.", "pairs": [
                {"left": "1. Where is the cat?", "right": "b. It's in the kitchen."},
                {"left": "2. Where are the dogs?", "right": "d. They're in the garden."},
                {"left": "3. Where is the table?", "right": "a. It's in the dining room."},
                {"left": "4. Where are the chairs?", "right": "c. They're in the living room."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nThe bedroom / here / is", "words": ["The", "bedroom", "is", "here", "."], "correct_sentence": "The bedroom is here."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nare / Where / the chairs", "words": ["Where", "are", "the", "chairs", "?"], "correct_sentence": "Where are the chairs?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nThe lamps / on the table / are", "words": ["The", "lamps", "are", "on", "the", "table", "."], "correct_sentence": "The lamps are on the table."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nis / the living room / Where", "words": ["Where", "is", "the", "living", "room", "?"], "correct_sentence": "Where is the living room?"}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. Where is the bed?", "right": "c. It's in the bedroom."},
                {"left": "2. Where are the chairs?", "right": "f. They're in the dining room."},
                {"left": "3. Where is the TV?", "right": "e. It's in the living room."},
                {"left": "4. Where is the stove?", "right": "a. It's in the kitchen."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"This is my house. The (1) ___ is big.\"", "correct_answer": "bedroom", "choices": ["bedroom", "bathroom", "kitchen", "garden"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"There is a bed (2) ___ the room.\"", "correct_answer": "in", "choices": ["in", "on", "under", "at"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"The desk is (3) ___.\"", "correct_answer": "there", "choices": ["there", "here", "on", "in"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"The (4) ___ are on the desk.\"", "correct_answer": "lamps", "choices": ["lamps", "beds", "chairs", "rooms"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"The lamps are (5) ___ the desk.\"", "correct_answer": "on", "choices": ["on", "in", "under", "at"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Write the answer:\nWhere is the living room? -> It is ___ (ở đây).", "correct_answer": "here", "choices": ["here", "there", "in", "on"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Write the answer:\nWhere is the garden? -> It is ___ (ở đằng kia).", "correct_answer": "there", "choices": ["there", "here", "on", "under"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Write the answer:\nWhere is the bed? -> It is in the ___.", "correct_answer": "bedroom", "choices": ["bedroom", "living room", "kitchen", "bathroom"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Write the answer:\nWhere are the towels? -> They are in the ___.", "correct_answer": "bathroom", "choices": ["bathroom", "bedroom", "garden", "hall"]}}
        ]
    },

    # ─── UNIT 14: My bedroom ─────────────────────────────────────────────────────────
    {
        "unit": 14,
        "title": "Unit 14: My bedroom",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nd___", "correct_answer": "oor", "choices": ["oor", "oom"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nr___", "correct_answer": "oom", "choices": ["oom", "oor"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Across (Cửa sổ): ___", "correct_answer": "window", "choices": ["window", "door", "bedroom", "desk"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Across (Phòng ngủ): ___", "correct_answer": "bedroom", "choices": ["bedroom", "desk", "window", "door"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Down (Bàn học): ___", "correct_answer": "desk", "choices": ["desk", "door", "lamp", "chair"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Down (Cửa ra vào): ___", "correct_answer": "door", "choices": ["door", "desk", "window", "lamp"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Down (Đèn ngủ): ___", "correct_answer": "lamp", "choices": ["lamp", "bed", "chair", "desk"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n1. The door is ___ (nhỏ).", "correct_answer": "small", "choices": ["small", "big", "old", "new"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n2. The window is ___ (to/lớn).", "correct_answer": "big", "choices": ["big", "small", "old", "new"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n3. There are two ___ (những chiếc giường).", "correct_answer": "beds", "choices": ["beds", "chairs", "desks", "doors"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n4. There are three ___ (những chiếc ghế).", "correct_answer": "chairs", "choices": ["chairs", "beds", "lamps", "desks"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n5. There is one ___ (bàn học).", "correct_answer": "desk", "choices": ["desk", "chair", "bed", "lamp"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. Is the room big?", "right": "c. Yes, it is."},
                {"left": "2. Are the doors old?", "right": "d. No, they aren't."},
                {"left": "3. There is a bed", "right": "b. in the bedroom."},
                {"left": "4. There are two windows", "right": "a. in the living room."}
            ]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and match.", "pairs": [
                {"left": "1. The bed is", "right": "c. new."},
                {"left": "2. The windows are", "right": "d. big."},
                {"left": "3. The desk is", "right": "b. old."},
                {"left": "4. The chairs are", "right": "a. small."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nThe bed / new / is", "words": ["The", "bed", "is", "new", "."], "correct_sentence": "The bed is new."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nThere is / in the room / a table", "words": ["There", "is", "a", "table", "in", "the", "room", "."], "correct_sentence": "There is a table in the room."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nold / is / The chair", "words": ["The", "chair", "is", "old", "."], "correct_sentence": "The chair is old."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\ntwo windows / are / There / in the living room", "words": ["There", "are", "two", "windows", "in", "the", "living", "room", "."], "correct_sentence": "There are two windows in the living room."}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"Look at my (1) ___. It is big.\"", "correct_answer": "bedroom", "choices": ["bedroom", "bathroom", "kitchen", "house"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"It is (2) ___.\"", "correct_answer": "big", "choices": ["big", "small", "old", "tiny"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"(3) ___ a bed and a desk.\"", "correct_answer": "There's", "choices": ["There's", "There are", "They're", "It's"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"There are two (4) ___.\"", "correct_answer": "chairs", "choices": ["chairs", "beds", "desks", "doors"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"(5) ___ new.\"", "correct_answer": "They're", "choices": ["They're", "There's", "It's", "He's"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n1. The bedroom is small.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n2. There is a bed in the room.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n3. The desk is old.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n4. There are three chairs.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n5. The chairs are new.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"This is my (1) b___.\"", "correct_answer": "bedroom", "choices": ["bedroom", "bathroom", "book", "bag"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"There is a (2) b___.\"", "correct_answer": "bed", "choices": ["bed", "book", "bird", "boy"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"The room is (3) b___.\"", "correct_answer": "big", "choices": ["big", "bad", "blue", "brown"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n\"There are two (4) w___.\"", "correct_answer": "windows", "choices": ["windows", "water", "workers", "words"]}}
        ]
    },

    # ─── UNIT 15: At the dining table ────────────────────────────────────────────────
    {
        "unit": 15,
        "title": "Unit 15: At the dining table",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say (Bánh mì):\nbr___d", "correct_answer": "ea", "choices": ["ea", "ee"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say (Thịt):\nm___t", "correct_answer": "ea", "choices": ["ea", "ee"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Food or Drink?\n1. beans (hạt đậu) is ___", "correct_answer": "Food", "choices": ["Food", "Drink"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Food or Drink?\n2. juice (nước hoa quả) is ___", "correct_answer": "Drink", "choices": ["Drink", "Food"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Food or Drink?\n3. chicken (thịt gà) is ___", "correct_answer": "Food", "choices": ["Food", "Drink"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Food or Drink?\n4. milk (sữa) is ___", "correct_answer": "Drink", "choices": ["Drink", "Food"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Food or Drink?\n5. water (nước lọc) is ___", "correct_answer": "Drink", "choices": ["Drink", "Food"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n1. I'd like some ___ (bánh mì).", "correct_answer": "bread", "choices": ["bread", "rice", "fish", "meat"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n2. I'd like some ___ (cơm).", "correct_answer": "rice", "choices": ["rice", "bread", "beans", "chicken"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n3. I'd like some ___ (cá).", "correct_answer": "fish", "choices": ["fish", "meat", "chicken", "eggs"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n4. I'd like some ___ (sữa).", "correct_answer": "milk", "choices": ["milk", "water", "juice", "tea"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n5. I'd like some ___ (nước ép).", "correct_answer": "juice", "choices": ["juice", "milk", "water", "beans"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, write and read:\n6. I'd like some ___ (nước lọc).", "correct_answer": "water", "choices": ["water", "juice", "milk", "bread"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and match.", "pairs": [
                {"left": "1. What would you like to eat?", "right": "d. I'd like some fish, please."},
                {"left": "2. Would you like some bread?", "right": "c. Yes, please."},
                {"left": "3. What would you like to drink?", "right": "a. I'd like some milk, please."},
                {"left": "4. Would you like some juice?", "right": "b. No, thanks."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nwould you like / What / to eat", "words": ["What", "would", "you", "like", "to", "eat", "?"], "correct_sentence": "What would you like to eat?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nsome beans, please / I'd like", "words": ["I'd", "like", "some", "beans", ",", "please", "."], "correct_sentence": "I'd like some beans, please."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nto drink / What / would you like", "words": ["What", "would", "you", "like", "to", "drink", "?"], "correct_sentence": "What would you like to drink?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nI'd like / some milk, please", "words": ["I'd", "like", "some", "milk", ",", "please", "."], "correct_sentence": "I'd like some milk, please."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nsome water / Would you like", "words": ["Would", "you", "like", "some", "water", "?"], "correct_sentence": "Would you like some water?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nthanks / No", "words": ["No", ",", "thanks", "."], "correct_sentence": "No, thanks."}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"What would you like to (1) ___? - I'd like some meat.\"", "correct_answer": "eat", "choices": ["eat", "drink", "have", "cook"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"What would you like to drink? - I'd like some (2) ___.\"", "correct_answer": "juice", "choices": ["juice", "rice", "beans", "fish"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Read and complete:\n\"Would you like some rice? - (3) ___, please.\"", "correct_answer": "Yes", "choices": ["Yes", "No", "Thanks", "OK"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"Lucy and her family are at the (1) ___.\"", "correct_answer": "dining table", "choices": ["dining table", "living room", "bedroom", "kitchen"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"Her father would like some rice, beans and (2) ___.\"", "correct_answer": "water", "choices": ["water", "milk", "juice", "tea"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"Her mother would like some bread, meat and (3) ___.\"", "correct_answer": "milk", "choices": ["milk", "water", "juice", "beans"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"Lucy would like some rice, fish and (4) ___.\"", "correct_answer": "juice", "choices": ["juice", "water", "milk", "tea"]}}
        ]
    },

    # ─── UNIT 16: My pets ────────────────────────────────────────────────────────────
    {
        "unit": 16,
        "title": "Unit 16: My pets",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\ngoldf___", "correct_answer": "ish", "choices": ["ish", "og"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nd___", "correct_answer": "og", "choices": ["og", "ish"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n1. Con vẹt: ___", "correct_answer": "parrot", "choices": ["parrot", "bird", "rabbit", "goldfish"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n2. Con chim: ___", "correct_answer": "bird", "choices": ["bird", "parrot", "goldfish", "cat"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n3. Con thỏ: ___", "correct_answer": "rabbit", "choices": ["rabbit", "dog", "cat", "bird"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Look, write and read:\n4. Con cá vàng: ___", "correct_answer": "goldfish", "choices": ["goldfish", "parrot", "rabbit", "dog"]}},
            {"type": "matching", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Read and match.", "pairs": [
                {"left": "1. parrot", "right": "d. Con vẹt"},
                {"left": "2. bird", "right": "c. Con chim"},
                {"left": "3. rabbit", "right": "b. Con thỏ"},
                {"left": "4. goldfish", "right": "a. Con cá vàng"}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n1. Do you have ___ cats?", "correct_answer": "any", "choices": ["any", "a", "an", "one"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n2. I have ___ parrots.", "correct_answer": "some", "choices": ["some", "an", "any", "much"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n3. How ___ dogs do you have?", "correct_answer": "many", "choices": ["many", "much", "old", "long"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n4. I have ___ goldfish.", "correct_answer": "many", "choices": ["many", "two", "much", "one"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and match.", "pairs": [
                {"left": "1. Do you have any dogs?", "right": "b. Yes, I do."},
                {"left": "2. Do you have any rabbits?", "right": "a. No, I don't."},
                {"left": "3. How many parrots do you have?", "right": "d. I have three."},
                {"left": "4. How many birds do you have?", "right": "c. I have many."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nDo you / any cats / have", "words": ["Do", "you", "have", "any", "cats", "?"], "correct_sentence": "Do you have any cats?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nsome parrots / have / I", "words": ["I", "have", "some", "parrots", "."], "correct_sentence": "I have some parrots."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\ndo you have / How many birds", "words": ["How", "many", "birds", "do", "you", "have", "?"], "correct_sentence": "How many birds do you have?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nmany goldfish / I / have", "words": ["I", "have", "many", "goldfish", "."], "correct_sentence": "I have many goldfish."}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. Do you have any pets?", "right": "c. Yes, I do. I have a dog."},
                {"left": "2. How many dogs do you have?", "right": "b. I have one dog."},
                {"left": "3. Do you have any cats?", "right": "d. No, I don't."},
                {"left": "4. What pets do you have?", "right": "a. I have three birds."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"Look at my pets. (1) ___ are many animals.\"", "correct_answer": "There", "choices": ["There", "They", "These", "This"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"I (2) ___ two dogs and three goldfish.\"", "correct_answer": "have", "choices": ["have", "has", "do", "see"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"I have two dogs and three (3) ___.\"", "correct_answer": "goldfish", "choices": ["goldfish", "parrots", "birds", "rabbits"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and complete:\n\"I have four (4) ___, too.\"", "correct_answer": "cats", "choices": ["cats", "dogs", "goldfish", "birds"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nDo you have any (1) ___? - Yes, I do.", "correct_answer": "parrots", "choices": ["parrots", "rabbits", "cats", "dogs"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nDo you have any rabbits? - No, (2) ___.", "correct_answer": "I don't", "choices": ["I don't", "I do", "she doesn't", "he doesn't"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nHow many goldfish do you have? - I have (3) ___ (4 con).", "correct_answer": "four", "choices": ["four", "five", "six", "three"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nHow many cats do you have? - I have (4) ___ (7 con).", "correct_answer": "seven", "choices": ["seven", "eight", "nine", "six"]}}
        ]
    },

    # ─── UNIT 17: Our toys ───────────────────────────────────────────────────────────
    {
        "unit": 17,
        "title": "Unit 17: Our toys",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nt___", "correct_answer": "oy", "choices": ["oy", "ite"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nk___", "correct_answer": "ite", "choices": ["ite", "oy"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Xe tải: ___", "correct_answer": "truck", "choices": ["truck", "bus", "car", "train"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Xe buýt: ___", "correct_answer": "bus", "choices": ["bus", "car", "plane", "ship"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Ô tô con: ___", "correct_answer": "car", "choices": ["car", "bus", "truck", "train"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Máy bay: ___", "correct_answer": "plane", "choices": ["plane", "ship", "kite", "car"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Tàu thủy: ___", "correct_answer": "ship", "choices": ["ship", "train", "plane", "bus"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n1. He has ___ (một chú gấu bông).", "correct_answer": "a teddy bear", "choices": ["a teddy bear", "a doll", "a kite", "a robot"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n2. She has ___ (một cái diều).", "correct_answer": "a kite", "choices": ["a kite", "a plane", "a doll", "a ship"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n3. He has ___ (hai đoàn tàu hỏa).", "correct_answer": "two trains", "choices": ["two trains", "three trains", "two planes", "two ships"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n4. She has ___ (ba chiếc máy bay).", "correct_answer": "three planes", "choices": ["three planes", "two planes", "three kites", "three cars"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. What toys do you have?", "right": "b. I have a car and a train."},
                {"left": "2. Does she have a doll?", "right": "d. Yes, she does."},
                {"left": "3. Does he have a robot?", "right": "e. No, he doesn't."},
                {"left": "4. How many planes does he have?", "right": "c. He has three planes."},
                {"left": "5. How many kites do they have?", "right": "a. They have two kites."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n1. She has ___ doll.", "correct_answer": "a", "choices": ["a", "an", "two", "some"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n2. He has two ___.", "correct_answer": "ships", "choices": ["ships", "ship", "planes", "plane"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n3. How many cars ___ she have?", "correct_answer": "does", "choices": ["does", "do", "is", "has"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n4. Does he have any kites? - Yes, he ___.", "correct_answer": "does", "choices": ["does", "do", "is", "has"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and choose:\n5. There are three trains in ___ bedroom.", "correct_answer": "the", "choices": ["the", "a", "an", "these"]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\ntwo ships / has / He", "words": ["He", "has", "two", "ships", "."], "correct_sentence": "He has two ships."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\none teddy bear / She / has", "words": ["She", "has", "one", "teddy", "bear", "."], "correct_sentence": "She has one teddy bear."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nin the bedroom / three trains / There are", "words": ["There", "are", "three", "trains", "in", "the", "bedroom", "."], "correct_sentence": "There are three trains in the bedroom."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\ndoes she have / How many trucks", "words": ["How", "many", "trucks", "does", "she", "have", "?"], "correct_sentence": "How many trucks does she have?"}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. Does he have any toys?", "right": "c. Yes, he has a plane."},
                {"left": "2. How many cars does she have?", "right": "d. She has four cars."},
                {"left": "3. What toys do they have?", "right": "b. They have two dolls and a kite."},
                {"left": "4. Does she have a teddy bear?", "right": "a. No, she doesn't."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n1. Linh has two trains.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n2. Nam has three planes.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n3. Mai has one doll.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n4. Ben has four ships.", "correct_answer": "False", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and choose True/False:\n5. Lucy has two kites.", "correct_answer": "True", "choices": ["True", "False"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nHe has two ships and ___ (1 đoàn tàu hỏa).", "correct_answer": "one train", "choices": ["one train", "two trains", "one plane", "one car"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nShe has one doll and ___ (3 cái diều).", "correct_answer": "three kites", "choices": ["three kites", "two kites", "four kites", "one kite"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\nHe has one plane and ___ (4 ô tô con).", "correct_answer": "four cars", "choices": ["four cars", "three cars", "two cars", "five cars"]}}
        ]
    },

    # ─── UNIT 18: Playing and doing ──────────────────────────────────────────────────
    {
        "unit": 18,
        "title": "Unit 18: Playing and doing",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nlist___", "correct_answer": "en", "choices": ["en", "ing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nsing___", "correct_answer": "ing", "choices": ["ing", "en"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Đọc sách: ___", "correct_answer": "reading", "choices": ["reading", "writing", "singing", "dancing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Viết: ___", "correct_answer": "writing", "choices": ["writing", "reading", "dancing", "listening"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Nhảy múa: ___", "correct_answer": "dancing", "choices": ["dancing", "singing", "playing", "drawing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Hát: ___", "correct_answer": "singing", "choices": ["singing", "dancing", "reading", "writing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Nghe nhạc: ___", "correct_answer": "listening", "choices": ["listening", "watching", "reading", "playing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n1. He's ___ chess.", "correct_answer": "playing", "choices": ["playing", "drawing", "watching", "listening"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n2. She's ___ a picture.", "correct_answer": "drawing", "choices": ["drawing", "writing", "singing", "playing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n3. They are ___ TV.", "correct_answer": "watching", "choices": ["watching", "listening", "reading", "playing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n4. I'm listening to ___.", "correct_answer": "music", "choices": ["music", "TV", "book", "song"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n1. What are you doing? - I'm ___ a book.", "correct_answer": "reading", "choices": ["reading", "read", "reads", "to read"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n2. She's ___ to music.", "correct_answer": "listening", "choices": ["listening", "listen", "listens", "to listen"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n3. What is he doing? - He's ___ chess.", "correct_answer": "playing", "choices": ["playing", "play", "plays", "to play"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and choose:\n4. They are ___ in the room.", "correct_answer": "dancing", "choices": ["dancing", "dance", "dances", "to dance"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 2. Read and match.", "pairs": [
                {"left": "1. What are you doing?", "right": "b. I'm writing."},
                {"left": "2. What is she doing?", "right": "d. She's singing."},
                {"left": "3. What is he doing?", "right": "a. He's drawing a picture."},
                {"left": "4. What are they doing?", "right": "c. They are playing chess."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\na book / reading / I'm", "words": ["I'm", "reading", "a", "book", "."], "correct_sentence": "I'm reading a book."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nto music / listening / I'm", "words": ["I'm", "listening", "to", "music", "."], "correct_sentence": "I'm listening to music."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nwith my friend / playing chess / I'm", "words": ["I'm", "playing", "chess", "with", "my", "friend", "."], "correct_sentence": "I'm playing chess with my friend."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nin the kitchen / What are you doing", "words": ["What", "are", "you", "doing", "in", "the", "kitchen", "?"], "correct_sentence": "What are you doing in the kitchen?"}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Look, read and choose:\n1. Nam is ___ a picture.", "correct_answer": "drawing", "choices": ["drawing", "writing", "singing", "listening"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Look, read and choose:\n2. Lucy is ___ to music.", "correct_answer": "listening", "choices": ["listening", "watching", "reading", "dancing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Look, read and choose:\n3. Mary is ___ a book.", "correct_answer": "reading", "choices": ["reading", "drawing", "playing", "writing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 1. Look, read and choose:\n4. Bill is ___ a song.", "correct_answer": "writing", "choices": ["writing", "reading", "drawing", "watching"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n1. What is he doing? - He's ___.", "correct_answer": "playing chess", "choices": ["playing chess", "drawing a picture", "listening to music", "reading a book"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n2. Where are you? - I'm in the ___.\nWhat are you doing? - I'm listening to music.", "correct_answer": "bedroom", "choices": ["bedroom", "kitchen", "living room", "garden"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n3. Where is she? - She's in the living room.\nWhat is she doing? - I'm ___.", "correct_answer": "drawing", "choices": ["drawing", "singing", "dancing", "reading"]}}
        ]
    },

    # ─── UNIT 19: Outdoor activities ─────────────────────────────────────────────────
    {
        "unit": 19,
        "title": "Unit 19: Outdoor activities",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\n___y (bay/thả diều)", "correct_answer": "fl", "choices": ["fl", "pl"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\n___ay (chơi)", "correct_answer": "pl", "choices": ["pl", "fl"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Trượt patin: ___", "correct_answer": "skating", "choices": ["skating", "cycling", "painting", "running"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Đi xe đạp: ___", "correct_answer": "cycling", "choices": ["cycling", "skating", "running", "skipping"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Vẽ tranh: ___", "correct_answer": "painting", "choices": ["painting", "cycling", "running", "flying"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Chạy bộ: ___", "correct_answer": "running", "choices": ["running", "skating", "skipping", "cycling"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Nhảy dây: ___", "correct_answer": "skipping", "choices": ["skipping", "running", "skating", "painting"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n1. Mai is ___ (đi xe đạp).", "correct_answer": "cycling", "choices": ["cycling", "skating", "painting", "running"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n2. Nam is ___ (trượt patin).", "correct_answer": "skating", "choices": ["skating", "cycling", "running", "skipping"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n3. Lucy is ___ (vẽ tranh).", "correct_answer": "painting", "choices": ["painting", "cycling", "skating", "running"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n4. Ben is ___ (chạy bộ).", "correct_answer": "running", "choices": ["running", "cycling", "skating", "skipping"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. What's he doing?", "right": "b. He's cycling in the park."},
                {"left": "2. What's she doing?", "right": "c. She's skating."},
                {"left": "3. Where are they?", "right": "d. They are in the garden."},
                {"left": "4. What are they doing?", "right": "a. They are flying kites."}
            ]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nin the park / Minh is cycling", "words": ["Minh", "is", "cycling", "in", "the", "park", "."], "correct_sentence": "Minh is cycling in the park."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nplaying volleyball / Lucy is", "words": ["Lucy", "is", "playing", "volleyball", "."], "correct_sentence": "Lucy is playing volleyball."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\ndoing / What's Mary", "words": ["What's", "Mary", "doing", "?"], "correct_sentence": "What's Mary doing?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\na picture / She's painting", "words": ["She's", "painting", "a", "picture", "."], "correct_sentence": "She's painting a picture."}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. Where is Nam?", "right": "b. He is in the park."},
                {"left": "2. What is he doing?", "right": "a. He is flying a kite."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n1. Where is Nam?", "correct_answer": "He is in the park.", "choices": ["He is in the park.", "He is at home.", "He is in the school.", "He is at the zoo."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n2. What is Mai doing?", "correct_answer": "She is cycling.", "choices": ["She is cycling.", "She is skating.", "She is running.", "She is skipping."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n3. What is Nam doing?", "correct_answer": "He is flying a kite.", "choices": ["He is flying a kite.", "He is playing football.", "He is running.", "He is skating."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n4. What is Lucy doing?", "correct_answer": "She is playing volleyball.", "choices": ["She is playing volleyball.", "She is cycling.", "She is flying a kite.", "She is painting."]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n1. Where's Nam? - He's in the park. He's ___ (thả diều).", "correct_answer": "flying a kite", "choices": ["flying a kite", "cycling", "skating", "running"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n2. Where's Ben? - He's in the park. He's ___ (trượt patin).", "correct_answer": "skating", "choices": ["skating", "cycling", "running", "painting"]}}
        ]
    },

    # ─── UNIT 20: At the zoo ─────────────────────────────────────────────────────────
    {
        "unit": 20,
        "title": "Unit 20: At the zoo",
        "questions": [
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\np___ot", "correct_answer": "arr", "choices": ["arr", "anc"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 1. Complete and say:\nd___ing", "correct_answer": "anc", "choices": ["anc", "arr"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n1. Con vẹt: ___", "correct_answer": "parrot", "choices": ["parrot", "peacock", "tiger", "horse"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n2. Vườn bách thú: ___", "correct_answer": "zoo", "choices": ["zoo", "park", "garden", "school"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n3. Con ngựa: ___", "correct_answer": "horse", "choices": ["horse", "monkey", "tiger", "elephant"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n4. Con khỉ: ___", "correct_answer": "monkey", "choices": ["monkey", "tiger", "horse", "parrot"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n5. Con công: ___", "correct_answer": "peacock", "choices": ["peacock", "parrot", "horse", "monkey"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 2. Do the puzzle:\n6. Con hổ: ___", "correct_answer": "tiger", "choices": ["tiger", "monkey", "horse", "peacock"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n1. It is a ___ (con công).", "correct_answer": "peacock", "choices": ["peacock", "parrot", "tiger", "monkey"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n2. It is a ___ (con hổ).", "correct_answer": "tiger", "choices": ["tiger", "horse", "elephant", "peacock"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n3. The parrot is ___ (đang đếm).", "correct_answer": "counting", "choices": ["counting", "dancing", "swinging", "climbing"]}},
            {"type": "fill_blank", "metadata_json": {"question": "A. Phonics and Vocabulary - 3. Look, complete and read:\n4. The monkey is ___ (đang đu dây).", "correct_answer": "swinging", "choices": ["swinging", "climbing", "dancing", "counting"]}},
            {"type": "matching", "metadata_json": {"question": "B. Sentence Patterns - 1. Read and match.", "pairs": [
                {"left": "1. What can you see at the zoo?", "right": "e. I can see an elephant."},
                {"left": "2. What is the monkey doing?", "right": "a. It's swinging."},
                {"left": "3. What is the tiger doing?", "right": "c. It's climbing a tree."},
                {"left": "4. What is the peacock doing?", "right": "d. It's dancing."},
                {"left": "5. What is the parrot doing?", "right": "b. It's counting."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Look, complete and read:\nWhere are they? - They are at the ___.", "correct_answer": "zoo", "choices": ["zoo", "park", "garden", "school"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Look, complete and read:\nWhat can you see? - I can see a ___.", "correct_answer": "monkey", "choices": ["monkey", "tiger", "peacock", "parrot"]}},
            {"type": "fill_blank", "metadata_json": {"question": "B. Sentence Patterns - 2. Look, complete and read:\nWhat's the monkey doing? - It's ___ a tree.", "correct_answer": "climbing", "choices": ["climbing", "swinging", "dancing", "counting"]}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nan elephant / We can see", "words": ["We", "can", "see", "an", "elephant", "."], "correct_sentence": "We can see an elephant."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nis counting / The parrot", "words": ["The", "parrot", "is", "counting", "."], "correct_sentence": "The parrot is counting."}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nWhat can you see / at the zoo", "words": ["What", "can", "you", "see", "at", "the", "zoo", "?"], "correct_sentence": "What can you see at the zoo?"}},
            {"type": "sentence_reorder", "metadata_json": {"question": "B. Sentence Patterns - 3. Make sentences:\nthe horse doing / What is", "words": ["What", "is", "the", "horse", "doing", "?"], "correct_sentence": "What is the horse doing?"}},
            {"type": "matching", "metadata_json": {"question": "D. Reading - 1. Read and match.", "pairs": [
                {"left": "1. What animals can you see?", "right": "c. I can see a tiger and an elephant."},
                {"left": "2. What is the tiger doing?", "right": "d. It is climbing."},
                {"left": "3. What is the elephant doing?", "right": "a. It is drinking water."},
                {"left": "4. What is the monkey doing?", "right": "b. It is swinging."}
            ]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n1. Where are you and your mother?", "correct_answer": "My mother and I are at the zoo.", "choices": ["My mother and I are at the zoo.", "We are in the park.", "We are at school.", "We are at home."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n2. What can you see?", "correct_answer": "We can see many animals.", "choices": ["We can see many animals.", "We can see birds.", "We can see trees.", "We can see cats."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n3. What is the monkey doing?", "correct_answer": "It is climbing a tree.", "choices": ["It is climbing a tree.", "It is counting.", "It is dancing.", "It is swimming."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n4. What is the parrot doing?", "correct_answer": "It is counting.", "choices": ["It is counting.", "It is climbing.", "It is swinging.", "It is dancing."]}},
            {"type": "fill_blank", "metadata_json": {"question": "D. Reading - 2. Read and answer:\n5. What birds can you see?", "correct_answer": "I can see many peacocks.", "choices": ["I can see many peacocks.", "I can see tigers.", "I can see monkeys.", "I can see horses."]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n1. We are at the ___.", "correct_answer": "zoo", "choices": ["zoo", "park", "garden", "school"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n2. We can see a monkey. It is ___.", "correct_answer": "swinging", "choices": ["swinging", "dancing", "counting", "sleeping"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n3. The tiger is ___ a tree.", "correct_answer": "climbing", "choices": ["climbing", "swinging", "counting", "running"]}},
            {"type": "fill_blank", "metadata_json": {"question": "E. Writing - 1. Look and write:\n4. The peacock is ___.", "correct_answer": "dancing", "choices": ["dancing", "counting", "climbing", "swinging"]}}
        ]
    }
]

for u in all_units:
    unit_num = u["unit"]
    filename = f"tienganh3-sbt-unit{unit_num}.json"
    filepath = os.path.join(OUTPUT_DIR, filename)

    data = {
        "collection": {
            "title": f"Tiếng Anh 3 - Luyện theo sách bài tập - {u['title']}",
            "subject_slug": "tieng_anh",
            "grade": 3,
            "volume": 1,
            "units": [unit_num],
            "exam_type": None,
            "reference_book": "Global Success - Sách bài tập Tiếng Anh 3",
            "status": "published"
        },
        "exams": [
            {
                "exam_number": unit_num,
                "title": f"Tiếng Anh 3 - Luyện theo sách bài tập - {u['title']}",
                "questions": u["questions"]
            }
        ]
    }

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Generated {filename} with {len(u['questions'])} questions.")

print(f"\nAll 10 units (11-20) generated successfully in {OUTPUT_DIR}!")
