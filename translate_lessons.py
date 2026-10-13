import json
import time
import sys
import os
from deep_translator import GoogleTranslator

# Fix stdout encoding for Windows
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

json_path = r'D:\Backups\Projects\edu-platform\content\toeic-thay-long-lessons.json'

print("Loading JSON...")
with open(json_path, 'r', encoding='utf-8') as f:
    lessons = json.load(f)

translator = GoogleTranslator(source='en', target='vi')

total_lessons = len(lessons)
translated_count = 0

for i, lesson in enumerate(lessons):
    changed = False
    
    if not isinstance(lesson.get('script'), list):
        continue
        
    for j, line_obj in enumerate(lesson['script']):
        # Translate if 'vi' is missing or empty
        if 'vi' not in line_obj or not line_obj['vi'].strip():
            en_text = line_obj.get('en', '').strip()
            if en_text:
                try:
                    # Translate
                    vi_text = translator.translate(en_text)
                    line_obj['vi'] = vi_text
                    changed = True
                    time.sleep(1) # delay to avoid IP block
                except Exception as e:
                    print(f"Error translating: {en_text[:50]}... Error: {e}")
                    # If it fails, just copy the English text so it doesn't get stuck forever
                    line_obj['vi'] = f"[Dịch lỗi] {en_text}" 
                    changed = True
                    time.sleep(2)
    
    if changed:
        translated_count += 1
        # Save progress after every lesson that had changes
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(lessons, f, ensure_ascii=False, indent=2)
        print(f"Translated lesson {i+1}/{total_lessons}: {lesson.get('slug')}")

print(f"Finished! Translated {translated_count} new lessons.")
