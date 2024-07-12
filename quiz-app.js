const quizQuestionsList = [
  {
    title: "Which type of JavaScript language is _",
    options: [
      { a: "Object-Oriented", correct: false },
      { b: "Object-Based", correct: true },
      { c: "Assembly-language", correct: false },
      { d: "High-level", correct: false },
    ],
    correctAnswer: "Object-Based",
  },
  {
    title: "In JavaScript, what is a block of statement?",
    options: [
      { a: "Conditional block", correct: false },
      {
        b: "Block that combines a number of statements into a single compound statement",
        correct: true,
      },
      { c: "Both conditional block and a single statement", correct: false },
      { d: "Block that contains a single statement", correct: false },
    ],
    correctAnswer:
      "Block that combines a number of statements into a single compound statement",
  },
  {
    title: "When interpreter encounters an empty statement, what will it do?",
    options: [
      { a: "Shows a warning", correct: false },
      { b: "Prompts to complete the statement", correct: false },
      { c: "Throws an error", correct: false },
      { d: "Ignores the statement", correct: true },
    ],
    correctAnswer: "Ignores the statement",
  },
  {
    title: "The 'function' and 'var' are known as:",
    options: [
      { a: "Keywords", correct: false },
      { b: "Data types", correct: false },
      { c: "Declaration statements", correct: true },
      { d: "Prototypes", correct: false },
    ],
    correctAnswer: "Declaration statements",
  },
  {
    title:
      "Which one of the following is the correct way for calling the JavaScript code?",
    options: [
      { a: "Preprocessor", correct: false },
      { b: "Triggering Event", correct: false },
      { c: "RMI", correct: false },
      { d: "Function/Method", correct: true },
    ],
    correctAnswer: "Function/Method",
  },
  {
    title: "Which of the following types of a variable is volatile?",
    options: [
      { a: "Mutable variable", correct: true },
      { b: "Dynamic variable", correct: false },
      { c: "Volatile variable", correct: false },
      { d: "Immutable variable", correct: false },
    ],
    correctAnswer: "Mutable variable",
  },
  {
    title:
      "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints ______",
    options: [
      { a: "Prints an exception error", correct: false },
      { b: "Prints an overflow error", correct: false },
      { c: "Displays Infinity", correct: true },
      { d: "Prints the value as such", correct: false },
    ],
    correctAnswer: "Displays Infinity",
  },
  {
    title:
      "In JavaScript, which one of the following is not considered an error:",
    options: [
      { a: "Syntax error", correct: false },
      { b: "Missing semicolons", correct: false },
      { c: "Division by zero", correct: true },
      { d: "Missing bracket", correct: false },
    ],
    correctAnswer: "Division by zero",
  },
  {
    title:
      "Which of the following Number object functions returns the value of the number?",
    options: [
      { a: "toString()", correct: false },
      { b: "valueOf()", correct: true },
      { c: "toLocaleString()", correct: false },
      { d: "toPrecision()", correct: false },
    ],
    correctAnswer: "valueOf()",
  },
  {
    title:
      "Choose the correct snippet from the following to check if the variable 'a' is not equal to 'null':",
    options: [
      { a: "if(a!==null)", correct: true },
      { b: "if (a!)", correct: false },
      { c: "if(a!null)", correct: false },
      { d: "if(a!=null)", correct: false },
    ],
    correctAnswer: "if(a!==null)",
  },
];

let score = 0;
let currentQuestionIndex = 0;
let selectedOption = 0;

function questionHtml(questionIdex) {
  let quizQuestionHTML = "";

  const optionA =
    quizQuestionsList[questionIdex].options.find((opt) => opt.a) || {};
  console.log(optionA);
  const optionB =
    quizQuestionsList[questionIdex].options.find((opt) => opt.b) || {};
  const optionC =
    quizQuestionsList[questionIdex].options.find((opt) => opt.c) || {};
  const optionD =
    quizQuestionsList[questionIdex].options.find((opt) => opt.d) || {};

  quizQuestionHTML += `
    <div>
      <p>Question ${questionIdex + 1} of ${quizQuestionsList.length}:</p> 
      <p class="title">${quizQuestionsList[questionIdex].title}</p>
      <div class="quiz-options">
        A. <input type="radio" name="option" value=${optionA.correct}>${
    optionA.a
  } </span><br>
        B. <input type="radio" name="option" value="${optionA.correct}">${
    optionB.b
  }</span><br>
        C. <input type="radio" name="option" value="${optionA.correct}">${
    optionC.c
  }</span><br>
        D. <input type="radio" name="option" value="${optionA.correct}">${
    optionD.d
  }</span><br>
        <div class="button-container">
          <button class="previous-btn" onclick='previousBtn("${questionIdex}")'>Previous</button>
          <button class="next-btn" onclick='checkAnswer("${questionIdex}")'>Next</button>
        </div>
      </div>
    </div>`;

  document.querySelector(".js-quiz-questions").innerHTML = quizQuestionHTML;
}

function ShowQuestion() {
  score = 0;
  currentQuestionIndex = 0;
  questionHtml(currentQuestionIndex);
}

function showResult() {
  if (selectedOption >= quizQuestionsList.length) {
    document.querySelector(
      ".js-quiz-questions"
    ).innerHTML = `You have scored ${score} out of ${quizQuestionsList.length}`;
  }
}

function previousBtn(questionIdex) {
  if (questionIdex !== 0) {
    questionIdex--;
    questionHtml(questionIdex);
  } else {
    document.querySelector('.previous-btn').disabled = true
  }
}

function checkAnswer(questionIdex) {
  let selectedRadioBtn = document.getElementsByName("option");
  let selectedOptionValue;

  for (i = 0; i < selectedRadioBtn.length; i++) {
    if (selectedRadioBtn[i].checked) {
      selectedOptionValue = selectedRadioBtn[i].value;
    }
  }

  if (selectedOptionValue === "true") {
    score++;
  }

  selectedOption++;
  currentQuestionIndex++;

  showResult();
  questionHtml(currentQuestionIndex);
}

ShowQuestion();
