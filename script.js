let questions = [];

fetch('example.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        shuffleArray(questions);
        loadQuestion();
    });

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const checkAnswerBtn = document.getElementById("check-answer");
const nextQuestionBtn = document.getElementById("next-question");
const correctAnswerEl = document.getElementById("correct-answer");
const correctEl = document.getElementById("correct");
const scoreEl = document.getElementById("score");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => selectOption(li);
        optionsEl.appendChild(li);
    });

    checkAnswerBtn.disabled = true;
    nextQuestionBtn.disabled = true;
    correctAnswerEl.style.display = "none";
    selectedAnswer = null;
}

function selectOption(selectedLi) {
    const options = optionsEl.querySelectorAll("li");
    options.forEach(option => option.style.backgroundColor = "#f9f9f9");
    selectedLi.style.backgroundColor = "#d3d3d3";
    checkAnswerBtn.disabled = false;
    selectedAnswer = selectedLi.textContent;
}

checkAnswerBtn.onclick = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct) {
        score++;
        scoreEl.textContent = `Баллы: ${score}`;
    }

    correctEl.textContent = currentQuestion.correct;
    correctAnswerEl.style.display = "block";
    nextQuestionBtn.disabled = false;
};

nextQuestionBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Тест завершен!";
        optionsEl.innerHTML = "";
        checkAnswerBtn.style.display = "none";
        nextQuestionBtn.style.display = "none";
    }
};


