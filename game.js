const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What skateboard?",
        choice1: "yellow and blue",
        choice1: "blue",
        choice3: "red and yellow",
        choice4: "green",
        answer:  3
    },
    {
        question: "What car?",
        choice1: "yellow and blue",
        choice1: "blue",
        choice3: "red and yellow",
        choice4: "green",
        answer:  4
    },
    {
        question: "What boat?",
        choice1: "yellow and blue",
        choice1: "blue",
        choice3: "red and yellow",
        choice4: "green",
        answer:  2
    },
    {
        question: "What airplane?",
        choice1: "yellow and blue",
        choice1: "blue",
        choice3: "red and yellow",
        choice4: "green",
        answer:  1
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log;
}; 

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) { //tags???
        return window.location.assign("/end.html");
    };
    
    questionCounter++;
    questionCounterText.innerText = '${questionsCounter}/${MAX_QUESTIONS}';

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innertext = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innertext = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);    
        getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();