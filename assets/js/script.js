import { questions } from "./questions.js";

let questionCount = 0;
let randomIndex = 0;
let score = 0;
let current = '';
let maxQuestions = 10;
let incorrectAnswers = [];

const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
let remainingQuestionPara = document.getElementById("remaining-question-para");

/** Gets a random index in the questions array */
const getNewIndex = () => {
    randomIndex = Math.floor(Math.random() * questions.length);
    questionCount++;
    return randomIndex;
};

/** Loads questions into html */
let loadNewQuestion = () => {
    getNewIndex();
    current = questions[randomIndex];
    questionText.textContent = current.question;
    answersList.innerHTML = "";
    /** For each choice in the JS object, create and add a list item */
    current.choices.forEach(choice => {
        let li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        answersList.appendChild(li);
    });
    /** Update remaining questions left in quiz */
    remainingQuestionPara.innerHTML = "You have " + ((maxQuestions + 1) - questionCount) + " questions left to answer";
    questions.splice(randomIndex, 1);
};

/** Function to check answer and increment score, additionally end the game after the loop is finished */
let checkAnswer = (userChoice) => {
    if (userChoice === current.correctAnswer) {
        score++;
    } else {
        addToIncorrectArray();
    }
    if (questionCount < maxQuestions) {
        loadNewQuestion();
    } else {
        endGame();
    }
};


loadNewQuestion();