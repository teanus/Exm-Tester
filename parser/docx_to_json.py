import os
import json
from docx import Document

INPUT_DIR = os.path.join(os.path.dirname(__file__), 'input')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'output')

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def parse_docx_to_json(file_path):
    document = Document(file_path)
    questions = []
    current_question = None

    for paragraph in document.paragraphs:
        text = paragraph.text.strip()
        if text.startswith("<question>"):
            if current_question:
                questions.append(current_question)
            current_question = {
                "question": text.replace("<question>", "").strip(),
                "options": [],
                "correct": None
            }
        elif text.startswith("<variant>"):
            option = text.replace("<variant>", "").strip()
            if current_question:
                current_question["options"].append(option)
                if current_question["correct"] is None:
                    current_question["correct"] = option
    if current_question:
        questions.append(current_question)

    return questions

def save_json(data, output_path):
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    for filename in os.listdir(INPUT_DIR):
        if filename.endswith(".docx"):
            input_path = os.path.join(INPUT_DIR, filename)
            output_path = os.path.join(OUTPUT_DIR, f"{os.path.splitext(filename)[0]}.json")

            print(f"Processing {filename}...")
            questions = parse_docx_to_json(input_path)
            save_json(questions, output_path)
            print(f"Saved: {output_path}")

if __name__ == "__main__":
    main()
