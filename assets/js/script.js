import { questions } from "./questions.js";

let questionCount = 0;
let randomIndex = 0;
let score = 0;
let current = "";
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
  current.choices.forEach((choice) => {
    let li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(choice));
    answersList.appendChild(li);
  });
  /** Update remaining questions left in quiz */
  remainingQuestionPara.innerHTML =
    "You have " +
    (maxQuestions + 1 - questionCount) +
    " questions left to answer";
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

/** Add incorrect user selections to an array to display upon end of quiz */
let addToIncorrectArray = (userChoice) => {
  let incorrect = current;
  incorrectAnswers.push(incorrect);
};

/** Removes data from local storage */
let clearSubmissionButtonClicked = () => {
  const clearSubmissionButton = document.getElementById("clear-submission");
  clearSubmissionButton.addEventListener("click", () => {
    /** Removes all data from loaded table */
    document.getElementById("leaderboard").innerHTML = "";

    /** Removes all data from local storage */
    localStorage.removeItem("highScores");
  });
};

/** Displays incorrect answers at end of quiz */
let displayIncorrectArray = () => {
  let incorrectButton = document.getElementById("show-incorrect");
  let closeIncorrectButton = document.getElementById("close-incorrect-answers");
  incorrectButton.addEventListener("click", () => {
    let table = document.getElementById("wrong-answers");
    table.innerHTML = "";
    if (incorrectAnswers.length > 0) {
      table.innerHTML = `<tr><td>Question</td><td>Answer</td></tr>`;
      incorrectAnswers.forEach((incorrectAnswer) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td class="table-question">${incorrectAnswer.question}</td><td class="table-answer">${incorrectAnswer.correctAnswer}</td>`;
        tr.classList.add("wrong-answers");
        table.appendChild(tr);
      });
      closeIncorrectButton.style.display = "inline";
    } else {
      table.innerHTML = "No incorrect answers";
      closeIncorrectButton.style.display = "inline";
    }
  });
};

/** Hides incorrect answers when button is clicked */
let hideIncorrectArray = () => {
  let closeIncorrectButton = document.getElementById("close-incorrect-answers");
  closeIncorrectButton.addEventListener("click", function (e) {
    document.getElementById("incorrect-answers-div").innerHTML = "";
  });
};

/** Preparation for endgame function */
let endgamePrep = () => {
  /** Loads previous scores from local storage */
  let leaderboard = document.getElementById("leaderboard");
  let previousScores = JSON.parse(localStorage.getItem("highScores")) || [];
  previousScores.sort((a, b) => parseInt(b.highScore) - parseInt(a.highScore));
  let i = 0;
  if (i < 3) {
    previousScores.forEach((score) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${score.user}</td> <td>${score.highScore}</td>`;
      tr.classList.add("table-data");
      leaderboard.appendChild(tr);
      i++;
    });
  } else {
    return;
  }

  /** Saves scores to local storage */
  const scoreSubmissionButton = document.getElementById(
    "score-submission-button"
  );
  scoreSubmissionButton.addEventListener("click", function (e) {
    let name = document.getElementById("user-name").value;
    let submission = { user: name, highScore: score };

    if (name == "") {
      alert("Please enter a name");
    } else {
      previousScores.unshift(submission);
      localStorage.setItem("highScores", JSON.stringify(previousScores));
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${name}</td><td>${score}</td>`;
      tr.classList.add("table-data");
      leaderboard.appendChild(tr);
      document.getElementById("user-name").value = "";
    }
  });
  clearSubmissionButtonClicked();
  displayIncorrectArray();
  hideIncorrectArray();
};

/** Function to end game and display score to user */
let endGame = () => {
  /** Remove question counter and ul from page */
  answersList.innerHTML = "";
  remainingQuestionPara.innerHTML = "";

  /** Creates initial score form */
  questionText.innerHTML = `Thankyou for completing the quiz!<br> Your score is ${score} / ${maxQuestions} <br><br><a href="quiz.html" class="play-again">Retry</a>
    <p id="save-text">To save your score, please enter your name below.</p>
    <label for="score-submission"></label>
    <input type="text" name="score-submission" placeholder="name" id="user-name"></input><br>
    <button id="score-submission-button" class="endgame-button" type="submit">Save<br>score</button>
    <button id="clear-submission" class="endgame-button" type="submit">Clear<br>scores</button>
    <button id="show-incorrect" class="endgame-button" type="submit">Show<br>Incorrect</button>
    <div id="incorrect-answers-div">
        <table id="wrong-answers">
            <tr class="wrong-answers">
                <td class="table-question">Question</td>
                <td class="table-answer">Answer</td>
            </tr>
        </table>
        <button id="close-incorrect-answers">Close</button>
    </div>
    <div class="leaderboard">
        <table id="leaderboard">
            <tr>
                <td>Name</td>
                <td>Score</td>
            </tr>
        </table>
    </div>
    `;
  let leaderboard = document.getElementById("leaderboard");
  leaderboard.style.height = "2vh";
  document.getElementById("leaderboard").overflow = "scroll";
  endgamePrep();
};
loadNewQuestion();
