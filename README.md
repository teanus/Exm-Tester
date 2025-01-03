# Тестовый сайт для проверки знаний

Этот проект — удобный инструмент для прохождения тестов, экзаменов или пробных билетов. Вы можете загрузить свою базу вопросов и ответов и проверить свои знания в интерактивной форме.

## Основные возможности

- **Своя база вопросов и ответов**  
  Легко добавляйте свои тесты, используя понятный JSON-формат.  

- **Простота использования**  
  Подходит для подготовки к экзаменам, викторинам или тестам.  

- **Гибкость форматов**  
  Полная поддержка структуры вопросов с вариантами ответов или вводом текста.  

- **Парсер docx в json**  
  Полная поддержка структуры вопросов с вариантами ответов или вводом текста.
  Пока что генерация не работает


  
## Структура файлов

### 📂 example.json
Пример базы вопросов и ответов.  
```json
{
  "questions": [
    {
      "question": "Какой цвет у неба?",
      "answers": ["Синий", "Зеленый", "Красный"],
      "correct": 0
    }
  ]
}
```
### 📂 template.json 
```json 
{
  "questions": [
    {
      "question": "Ваш вопрос здесь",
      "answers": ["Вариант 1", "Вариант 2", "Вариант 3"],
      "correct": "Номер правильного ответа (0, 1, 2 и т.д.)"
    }
  ]
}
```
### Как использовать?
Создайте файл JSON с вашими вопросами, основываясь на template.json.
Загрузите файл в приложение.
Начните тестирование и проверяйте свои знания.

## Пример структуры `.docx`

Для корректного парсинга файл `.docx` должен содержать текст с использованием следующих тегов:

- **Тег `<question>`**: обозначает начало вопроса.
- **Тег `<variant>`**: обозначает варианты ответа.

Первый `<variant>` всегда считается правильным ответом.

### Пример содержимого файла `.docx`:
```<question>С каким ученым связывают первую работу по нейронным сетям, опубликованную в 1943 году?</question>
<variant>Уоррен Маккалох</variant> - Правильный ответ
<variant>Кристофер Стрейчи</variant>
<variant>Фрэнк Розенблат</variant>
<variant>Джозеф Вайзенбаум</variant>
<variant>Алан Тьюринг</variant>

<question>Область ИИ, которая занимается анализом и интерпретацией визуальных данных из реального мира, называется</question>
<variant>компьютерным зрением</variant> Правильный ответ
<variant>когнитивными вычислениями</variant>
<variant>нечеткой логикой</variant>
<variant>обработкой естественного языка</variant>
<variant>машинным обучением</variant>
```

### Что создастся в JSON:

Для файла выше JSON будет выглядеть так:

```json
[
    {
        "question": "С каким ученым связывают первую работу по нейронным сетям, опубликованную в 1943 году?",
        "options": [
            "Уоррен Маккалох",
            "Кристофер Стрейчи",
            "Фрэнк Розенблат",
            "Джозеф Вайзенбаум",
            "Алан Тьюринг"
        ],
        "correct": "Уоррен Маккалох"
    },
    {
        "question": "Область ИИ, которая занимается анализом и интерпретацией визуальных данных из реального мира, называется",
        "options": [
            "компьютерным зрением",
            "когнитивными вычислениями",
            "нечеткой логикой",
            "обработкой естественного языка",
            "машинным обучением"
        ],
        "correct": "компьютерным зрением"
    }
]
```
#### ⚠️Важные моменты:
Вопросы и варианты ответа должны быть отделены пустой строкой.
Теги ```<question>``` и ```<variant>``` чувствительны к регистру.

## Поддержать 💎
<a href="https://www.donationalerts.com/r/teanus"> 
    <img src="https://github.com/user-attachments/assets/65a15905-1991-4965-856d-a609b2db50ca" alt="DonationAlerts" width="50"></a>
<br>
<a href="https://boosty.to/teanus">
    <img src="https://github.com/user-attachments/assets/5e9fd3a1-c4bd-4913-a861-85012c0d0f4a" alt="Boosty" width="100">
</a>


