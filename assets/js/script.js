const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  document.getElementById("count").style = "color:green;";
  startTimer();
}

function startTimer() {
  var counter = 30;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Game Over!");
      confirm("Play Again? Click 'ok' to reload the page");
      location.reload();
    }
  }, 1000);
}

function start() {
  document.getElementById("count").style = "color: rgb(31, 85, 233);";
  startTimer();
}

var scoreCount = 0;

function nextQuestion() {
    const answer = getValue();
    if (answer && answer === questions[initialQuiz].answers[key].text) {
        score = score + questions[initialQuiz].answers[key].points;
      }
  }


function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    scoreCount++;
  } else {
    element.classList.add("wrong");
    console.log('dummy')
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "Strings", correct: false, points: 0 },
      { text: "Booleans", correct: false, points: 0 },
      { text: "Alerts", correct: true, points: 5 },
      { text: "Numbers", correct: false, points: 0 },
    ],
  },
  {
    question: "The condition of an if / else statement is enclosed within:",
    answers: [
      { text: "Square brackets", correct: false, points: 0 },
      { text: "Curly brackets", correct: true, points: 5 },
      { text: "Parentheses", correct: false, points: 0 },
      { text: "Quotation marks", correct: false, points: 0 },
    ],
  },
  {
    question: "What does 'HTML' stand for?",
    answers: [
      { text: "Haptic Text Markup Language", correct: false, points: 0 },
      { text: "Hefty Type Mission Language", correct: false, points: 0 },
      { text: "Hollow Text Markout List", correct: false, points: 0 },
      { text: "Hyper Text Markup Language", correct: true, points: 5 },
    ],
  },
  {
    question: "What does 'CSS' stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true, points: 5 },
      { text: "Creative Style Sheets", correct: false, points: 0 },
      { text: "Consecutive Style Sheets", correct: false, points: 0 },
      { text: "Common Style Sheets", correct: false, points: 0 },
    ],
  },
  {
    question: "What two possible values can a boolean return?",
    answers: [
      { text: "Yes and No", correct: false, points: 0 },
      { text: "True and False", correct: true, points: 5 },
      { text: "Affirmative and Negative", correct: false, points: 0 },
      { text: "Yessir and Nossir", correct: false, points: 0 },
    ],
  },
];
