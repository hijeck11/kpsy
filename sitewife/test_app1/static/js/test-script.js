const questions = [
    {
        question: "Как часто вы чувствуете усталость?",
        answers: [
            { text: "Постоянно", score: 3 },
            { text: "Часто", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Никогда", score: 0 }
        ]
    },
    {
        question: "Как вы реагируете на стрессовые ситуации?",
        answers: [
            { text: "Очень беспокоюсь", score: 3 },
            { text: "Немного нервничаю", score: 2 },
            { text: "Сохраняю спокойствие", score: 1 },
            { text: "Совсем не волнуюсь", score: 0 }
        ]
    },
    {
        question: "Как у вас со сном?",
        answers: [
            { text: "Постоянно недосыпаю", score: 3 },
            { text: "Часто плохо сплю", score: 2 },
            { text: "Редко испытываю проблемы", score: 1 },
            { text: "Сплю отлично", score: 0 }
        ]
    },
    {
        question: "Часто ли у вас болит голова или ощущается напряжение в теле?",
        answers: [
            { text: "Очень часто", score: 3 },
            { text: "Иногда", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Нет, такого не бывает", score: 0 }
        ]
    },
    {
        question: "Как вы проводите свободное время?",
        answers: [
            { text: "Работаю или думаю о работе", score: 3 },
            { text: "Часто заняты делами", score: 2 },
            { text: "Иногда расслабляюсь", score: 1 },
            { text: "Всегда нахожу время для отдыха", score: 0 }
        ]
    },
    {
        question: "Вы замечаете у себя раздражительность без причины?",
        answers: [
            { text: "Очень часто", score: 3 },
            { text: "Иногда", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Нет, всегда спокоен(на)", score: 0 }
        ]
    },
    {
        question: "Как часто вам сложно сосредоточиться?",
        answers: [
            { text: "Почти всегда", score: 3 },
            { text: "Часто", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Вообще не испытываю проблем", score: 0 }
        ]
    },
    {
        question: "Часто ли у вас подавленное настроение?",
        answers: [
            { text: "Очень часто", score: 3 },
            { text: "Иногда", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Нет, чувствую себя хорошо", score: 0 }
        ]
    },
    {
        question: "Испытываете ли вы тревожность без причины?",
        answers: [
            { text: "Почти всегда", score: 3 },
            { text: "Часто", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Нет, всегда спокоен(на)", score: 0 }
        ]
    },
    {
        question: "Как часто у вас проблемы с аппетитом (переедание или отсутствие аппетита)?",
        answers: [
            { text: "Очень часто", score: 3 },
            { text: "Иногда", score: 2 },
            { text: "Редко", score: 1 },
            { text: "Нет, с питанием все в порядке", score: 0 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const testFormEl = document.getElementById("test-form");

function startTest() {
    const testFormEl = document.getElementById('test-form');  // Получаем элемент формы
    const testButton = document.querySelector('.test-btn');  // Получаем кнопку

    testFormEl.style.display = 'block';  // Показываем скрытую форму
    testButton.style.display = 'none';  // Скрываем кнопку

    showQuestion();  // Показываем первый вопрос
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";

    // Обновление прогресса
    progressEl.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.classList.add("answer-btn");
        btn.onclick = () => selectAnswer(answer.score);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();  // Переход к следующему вопросу
    } else {
        showResult();  // Показать результат после всех вопросов
    }
}

function showResult() {
    questionEl.classList.add("hidden");
    answersEl.classList.add("hidden");
    progressEl.classList.add("hidden");

    let resultText = "";
    if (totalScore >= 26) {
        resultText = "⚠️ Ваш уровень стресса критически высокий! Вам срочно нужен отдых и, возможно, консультация специалиста.";
    } else if (totalScore >= 16) {
        resultText = "😟 У вас высокий уровень стресса. Попробуйте больше отдыхать и следите за своим состоянием.";
    } else if (totalScore >= 6) {
        resultText = "🙂 Ваш уровень стресса средний. Иногда полезно расслабиться и заняться чем-то приятным.";
    } else {
        resultText = "😊 У вас низкий уровень стресса! Отлично справляетесь с нагрузкой.";
    }

    resultEl.textContent = resultText;
    resultEl.classList.remove("hidden");
}


