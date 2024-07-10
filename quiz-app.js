const quizQuestionsList = [
  {
    title: "Which type of Javoptionscript language is _",
    options: [
      { a: "Object-Oriented", correct: "false" },
      { b: "Object-Boptionsed", correct: "true" },
      { c: "optionssembly-language", correct: "false" },
      { d: "High-level", correct: "false" },
      { correctAnswer: "Object-Boptionsed" },
    ],
  },
  {
    title: "In Javoptionscript, what is a block of statement?",
    options: [
      { a: "Conditional block", correct: "false" },
      {
        b: "block that combines a number of statements into a single compound statement",
        correct: "true",
      },
      {
        c: "both conditional block and a single statement",
        correct: "false",
      },
      { d: "block that contains a single statement", correct: "false" },
      ,
      {
        correctAnswer:
          "block that combines a number of statements into a single compound statement",
      },
    ],
  },
  {
    title: "When interpreter encounters an empty statements, what it will do:",
    options: [
      { a: "Shows a warning", correct: "false" },
      { b: "Prompts to complete the statement", correct: "false" },
      { c: "Throws an error", correct: "false" },
      { d: "Ignores the statements", correct: "true" },
      { correctAnswer: "Ignores the statements" },
    ],
  },
  {
    title: "The 'function' and 'var' are known options:",
    options: [
      { a: "Keywords", correct: "false" },
      { b: "Data types", correct: "false" },
      { c: "Declaration statements", correct: "true" },
      { d: "Prototypes", correct: "false" },
      { correctAnswer: "Declaration statements" },
    ],
  },
  {
    title:
      "Which one of the following is the correct way for calling the Javoptionscript code?",
    options: [
      { a: "Preprocessor", correct: "false" },
      { b: "Triggering Event", correct: "false" },
      { c: "RMI", correct: "false" },
      { d: "Function/Method", correct: "true" },
      { correctAnswer: "Function/Method" },
    ],
  },
  {
    title: "Which of the following type of a variable is volatile?",
    options: [
      { a: "Mutable variable", correct: "true" },
      { b: "Dynamic variable", correct: "false" },
      { c: "Volatile variable", correct: "false" },
      { d: "Immutable variable", correct: "false" },
      { correctAnswer: "Mutable variable" },
    ],
  },
  {
    title:
      " When there is an indefinite or an infinite value during an arithmetic computation in a program, then Javoptionscript prints______",
    options: [
      { a: "Prints an exception error", correct: "false" },
      { b: "Prints an overflow error", correct: "false" },
      { c: "Displays 'Infinity'", correct: "true" },
      { d: "Prints the value options such", correct: "false" },
      { correctAnswer: "Displays 'Infinity'" },
    ],
  },
  {
    title:
      " In the Javoptionscript, which one of the following is not considered options an error:",
    options: [
      { a: "Syntax error", correct: "false" },
      { b: "Missing of semicolons", correct: "false" },
      { c: "Division by zero", correct: "true" },
      { d: "Missing of Bracket", correct: "false" },
      { correctAnswer: "Division by zero" },
    ],
  },
  {
    title:
      "Which of the following number object function returns the value of the number?",
    options: [
      { a: "toString()", correct: "false" },
      { b: "valueOf()", correct: "true" },
      { c: "toLocaleString()", correct: "false" },
      { d: "toPrecision()", correct: "false" },
      { correctAnswer: "valueOf()" },
    ],
  },
  {
    title:
      " Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    options: [
      { a: "if(a!==null)", correct: "true" },
      { b: "if (a!)", correct: "false" },
      { c: "if(a!null)", correct: "false" },
      { d: "if(a!=null)", correct: "false" },
      { correctAnswer: "if(a!==null)" },
    ],
  },
];

let quizQuestionHTML;

const quizQuestions = quizQuestionsList.forEach((quizQuestion, index) => {
  const optionA = quizQuestion.options[0].a;
  const optionB = quizQuestion.options[1].b;
  const optionC = quizQuestion.options[2].c;
  const optionD = quizQuestion.options[3].d;

  quizQuestionHTML += `
    <div>
    <p>Question ${index + 1}:</p>
        <p class="title">
            ${quizQuestion.title}
        </p>
        <div class="quiz-options">
            A. <button class="btn">${optionA}</button><br>
            B. <button class="btn">${optionB}</button><br>
            C. <button class="btn">${optionC}</button><br>
            D. <button class="btn">${optionD}</button><br>
        </div>
        
    </div>
`;
});

document.querySelector(".js-quiz-questions").innerHTML = quizQuestionHTML;

let score;

function checkAnswer () {
    
}
