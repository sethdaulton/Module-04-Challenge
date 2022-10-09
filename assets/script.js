var startButton = document.getElementById("js-start-quiz")
var nextButton = document.getElementById("js-next-button")

// I want a new question to appear when the 'Next Question' button is pressed. 
// I want the question answers to only appear once when "Start Quiz" button is pressed" - Done
// Need to add a timer
// Need to add point values to each question that add up when a correct answer is rendered
// Need a score board
// Need to deduct timer seconds if the question is answered incorrectly

var questions = [
    {
        questionText: "Question #1: Commonly used data types DO NOT include:",
        choices: {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers",
        },
        correctAnswer: "c"
    },
    
    {
        questionText: "Question #2: The condition of an if / else statement is enclosed within:",
        choices: {
            a: "Square brackets",
            b: "Curly brackets",
            c: "Parentheses",
            d: "Quotation marks",
        },
        correctAnswer: "b"
    },

    {
        questionText: "Question #3: What does 'HTML' stand for?",
        choices: {
            a: "Haptic Text Markup Language",
            b: "Hefty Type Mission Language",
            c: "Hollow Text Markout List",
            d: "Hyper Text Markup Language",
        },
        correctAnswer: "d"
    },

    {
        questionText: "Question #4: What does 'CSS' stand for?",
        choices: {
            a: "Cascading Style Sheets",
            b: "Creative Style Sheets",
            c: "Consecutive Style Sheets",
            d: "Common Style Sheets",
        },
        correctAnswer: "a"
    },

    {
        questionText: "Question #5: What two possible values can a boolean return?",
        choices: {
            a: "Yes and No",
            b: "True and False",
            c: "Affirmative and Negative ",
            d: "Yessir and Nossir",
        },
        correctAnswer: "b"
    },
] 

var currentQuestion = 0;

function setNextQuestion() {
    correctAnswer.addEventListener("click", questionText); 
    resetState();

}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {

}

function populateQuestion(questionObject) {
    var questionTextEl = document.getElementById("js-question-text");
    var choicesEl = document.getElementById("js-question-choices");
    questionTextEl.innerText = questionObject.questionText;
    
    var choicesKeys = Object.keys(questionObject.choices);
    
    for (let index = 0; index < choicesKeys.length; index++) {
        var choiceIndex = choicesKeys[index];
        const choice = questionObject.choices[choiceIndex];
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = choice;
        listEl.appendChild(buttonEl);
        choicesEl.append(listEl);
        
    }

}
   

// choices.addEventListener("click", Correct);


function startQuiz() {
    populateQuestion(questions[currentQuestion]);
    setTime();
}

startButton.addEventListener('click', () => {
    // 👇️ hide button
    startButton.style.display = 'none';

    // 👇️ show div
  const box = document.getElementById('box');
  box.style.display = 'block';
});


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Seconds left in the quiz";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 2000);
  }


startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", populateQuestion);