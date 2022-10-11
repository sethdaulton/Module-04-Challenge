// var startButton = document.getElementById("js-start-quiz")
// var nextButton = document.getElementById("js-next-button")

// // I want a new question to appear when the 'Next Question' button is pressed. 
// // I want the question answers to only appear once when "Start Quiz" button is pressed" - Done
// // Need to add a timer
// // Need to add point values to each question that add up when a correct answer is rendered
// // Need a score board
// // Need to deduct timer seconds if the question is answered incorrectly

// var currentQuestion = 0;

// var questions = [
//     {
//         questionText: "Question #1: Commonly used data types DO NOT include:",
//         choices: {
//             a: "Strings",
//             b: "Booleans",
//             c: "Alerts",
//             d: "Numbers",
//         },
//         correctAnswer: "c"
//     },
    
//     {
//         questionText: "Question #2: The condition of an if / else statement is enclosed within:",
//         choices: {
//             a: "Square brackets",
//             b: "Curly brackets",
//             c: "Parentheses",
//             d: "Quotation marks",
//         },
//         correctAnswer: "b"
//     },

//     {
//         questionText: "Question #3: What does 'HTML' stand for?",
//         choices: {
//             a: "Haptic Text Markup Language",
//             b: "Hefty Type Mission Language",
//             c: "Hollow Text Markout List",
//             d: "Hyper Text Markup Language",
//         },
//         correctAnswer: "d"
//     },

//     {
//         questionText: "Question #4: What does 'CSS' stand for?",
//         choices: {
//             a: "Cascading Style Sheets",
//             b: "Creative Style Sheets",
//             c: "Consecutive Style Sheets",
//             d: "Common Style Sheets",
//         },
//         correctAnswer: "a"
//     },

//     {
//         questionText: "Question #5: What two possible values can a boolean return?",
//         choices: {
//             a: "Yes and No",
//             b: "True and False",
//             c: "Affirmative and Negative ",
//             d: "Yessir and Nossir",
//         },
//         correctAnswer: "b"
//     },
// ] 

// function resetState() {
//     clearStatusClass(document.body)
//   nextButton.classList.add("hide");
//   while (answerButtomElement.firstChild) {
//     answerButtomElement.removeChild(answerButtomElement.firstChild);
//   }
// }

// var score = 0;

// // for (var i=0; i < questions.length; i++) {
// //     var response = window.prompt(questions[i].prompt);
// //     if(response == questions[i].answer){
// //         score++;
// //         alert("Correct!");
// //         else {
// //         alert("Wrong!")
// //         }
// //     }
// // }
// // alert ("you got " + score + "/" + questions.length);


// // function correctAnswer() {

// // }


// function setNextQuestion() {
//     // correctAnswer.addEventListener("click", questionText); 
//     resetState();

// }

// function resetState() {
//     nextButton.classList.add("hide");
//     while (answerButtonsElement.firstChild) {
//         answerButtonElement.removeChild(answerButtonsElement.firstChild);
//     }
// }

// function selectAnswer() {

// }

// function populateQuestion(questionObject) {
//     var questionTextEl = document.getElementById("js-question-text");
//     var choicesEl = document.getElementById("js-question-choices");
//     questionTextEl.innerText = questionObject.questionText;
    
//     var choicesKeys = Object.keys(questionObject.choices);
    
//     for (let index = 0; index < choicesKeys.length; index++) {
//         var choiceIndex = choicesKeys[index];
//         const choice = questionObject.choices[choiceIndex];
//         var listEl = document.createElement("li");
//         var buttonEl = document.createElement("button");
//         buttonEl.textContent = choice;
//         listEl.appendChild(buttonEl);
//         choicesEl.append(listEl);
        
//     }

// }

// function questionCounter() {

// }

// function answerClick(event) {
//     //subtract 10 seconds for a wrong answer, do nothing for a right answer
//   var correctAnswer = questionsAndAnswers[questionCounter].correct;
//     if (event.target.textContent === correctAnswer) {
//         console.log("correct")
//     } else {
//         secondsLeft = secondsLeft - 10;
//     }

//     //prevent time left from going negative
//     if (secondsLeft < 0) {
//         secondsLeft = 0;
//     }
//     //if there are no more questions, run endgame function 
//     if (questionCounter === questionsAndAnswers.length - 1) {
//         timeEl.textContent = secondsLeft + " seconds remain";
//         endGame();
//     } else {
//         questionCounter++;
//         prompt();
//     }
//     score();
// }
// // choices.addEventListener("click", Correct);


// function startQuiz() {
//     populateQuestion(questions[currentQuestion]);
//     setTime();
// }

// startButton.addEventListener('click', () => {
//     // 👇️ hide button
//     startButton.style.display = 'none';

//     // 👇️ show div
//   const box = document.getElementById('box');
//   box.style.display = 'block';
// });


// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " Seconds left in the quiz";
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }
  
//     }, 2000);
//   }


// startButton.addEventListener("click", startQuiz, setTime);

// // nextButton.addEventListener("click", startQuiz);

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtomElement = document.getElementById("answer-buttons");

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
  document.getElementById("count").style="color:green;";
      startTimer();
}

//Old timer here:

// const startingMinutes = .1;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     if(time < 0){
//         countdownEl.innerHTML = "GAME OVER"
//         // alert("GAME OVER");
//         // confirm("Play Again? If yes, choose 'ok', reload the page, and clear alerts");
//     }else{
//         seconds = seconds < 10 ? "0"+ seconds : seconds;
//         countdownEl.innerHTML = `${minutes} : ${seconds}`;
//         time --;
//     }
// }

//New timer inserted below:

function startTimer(){
    var counter = 30;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Game Over!');
          clearInterval(myInterval);
      }
    }, 1000);
  }

  function start()
  {
      document.getElementById("count").style="color: rgb(31, 85, 233);";
      startTimer();
  };

  //New timer end

function calculateCorrectAnswers() {
    let count = 0;
    this.questions.forEach(el => {
      if (el.isCorrect) {
        count++;
      }
    });
    return count;
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
    answerButtomElement.appendChild(button);
  });
}

function resetState() {
    clearStatusClass(document.body)
  nextButton.classList.add("hide");
  while (answerButtomElement.firstChild) {
    answerButtomElement.removeChild(answerButtomElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtomElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

// nextButton.innerText = "Submit Score";

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
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
      { text: "Strings", correct: false },
      { text: "Booleans", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false },
    ],
  },
  {
    question: "The condition of an if / else statement is enclosed within:",
    answers: [
      { text: "Square brackets", correct: false },
      { text: "Curly brackets", correct: true },
      { text: "Parentheses", correct: false },
      { text: "Quotation marks", correct: false },
    ],
  },
  {
    question: "What does 'HTML' stand for?",
    answers: [
      { text: "Haptic Text Markup Language", correct: false },
      { text: "Hefty Type Mission Language", correct: false },
      { text: "Hollow Text Markout List", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
    ],
  },
  {
    question: "What does 'CSS' stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style Sheets", correct: false },
      { text: "Consecutive Style Sheets", correct: false},
      { text: "Common Style Sheets", correct: false},
    ],
  },
  {
    question: "What two possible values can a boolean return?",
    answers: [
      { text: "Yes and No", correct: false },
      { text: "True and False", correct: true },
      { text: "Affirmative and Negative", correct: false },
      { text: "Yessir and Nossir", correct: false },
    ],
  },
];
