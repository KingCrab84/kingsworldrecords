const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [...
    {
        question: "What color does the chinese flag have?",
        choice1: "yellow and blue",
        choice1: "blue"
        choice3: "red and yellow"
        choice4: "green"
        answer:  3
    },
    {
        question: "What color does the chinese flag have?",
        choice1: "yellow and blue",
        choice1: "blue"
        choice3: "red and yellow"
        choice4: "green"
        answer:  3
    },
    {
        question: "What color does the chinese flag have?",
        choice1: "yellow and blue",
        choice1: "blue"
        choice3: "red and yellow"
        choice4: "green"
        answer:  3
    },
    {
        question: "What color does the chinese flag have?",
        choice1: "yellow and blue",
        choice1: "blue"
        choice3: "red and yellow"
        choice4: "green"
        answer:  3
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startgame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions/length);
    currentQuestion = availableQuestions[questionIndex];
    question.innertext = currentQuestion.question;
};

startgame();