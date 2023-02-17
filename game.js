const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let persons = {
    1:{
        name: "bob",
        age: 12,
        gender: "male"
    },
    2:{
        name: "ob",
        age: 12,
        gender: "male"
    },
    3:{
        name: "bb",
        age: 12,
        gender: "male"
    },
    
};

console.log(Array.from(persons));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "how does the chinese flag looks like?",
        choice1: "yellow and blue",
        choice1: ""
        //choice1:
        //choice1:

    }
]