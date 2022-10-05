 var qTitles = document.getElementById('qTitles')
 var choice1 = document.getElementById('choice1')
 var choice2 = document.getElementById('choice2')
 var choice3 = document.getElementById('choice3')
 var choice4 = document.getElementById('choice4')
 var questionChoice = 0;
 var time = document.getElementById("time");
 var intro = document.getElementById("intro");
 var startButton = document.getElementById("start");
 var timeLeft = 60

 // getElementById to hide and show
 var questions = document.getElementById("questions");

 var quiz = [{
         question: "Commonly used data types DO not include__:",
         choices: {
             one: "Strings",
             two: "booleans",
             three: "alerts",
             four: "numbers",

         },
         answer: "alerts"
     },
     {
         question: "Arrays in JavaScript can be used to store:",
         choices: {
             one: "Numbers and strings",
             two: "other arrays",
             three: "booleans",
             four: "all of the above",

         },
         answer: "all of the above"
     },
     {
         question: "The condition in an if / else statement is enclosed with:",
         choices: {
             one: "quotes",
             two: "curly brackets",
             three: "parenthesis",
             four: "square brackets",

         },
         answer: "curly brackets"
     },
     {
         question: "String values must be encloosed within __ when being assigned to variables:",
         choices: {
             one: "commas",
             two: "curly brackets",
             three: "quotes",
             four: "parenthesis",

         },
         answer: "quotes"
     },
     {
         question: "A very useful tool used during development and debugging for printing content to the debuger is:",
         choices: {
             one: "JavaScript",
             two: "terminal/bash",
             three: "for loops",
             four: "console.log",

         },
         answer: "console.log"
     }
 ]
 console.log(quiz[1].question)

 function startFunction() {
     console.log("clicked")
     // set attribute of those elements
     intro.setAttribute("class", "hide");
     questions.setAttribute("class", "");
     displayQuestion()

 }

 function displayQuestion() {


     qTitles.textContent = quiz[questionChoice].question
     choice1.textContent = quiz[questionChoice].choices.one
     choice2.textContent = quiz[questionChoice].choices.two
     choice3.textContent = quiz[questionChoice].choices.three
     choice4.textContent = quiz[questionChoice].choices.four



 }

 function clickButton(event) {
     console.log(event)
     if (event.target.textContent === quiz[questionChoice].answer) {
         console.log("correct")
         questionChoice++
         displayQuestion()
     } else {
         console.log("wrong")
         timeLeft = timeLeft - 5;
         questionChoice++
         displayQuestion()
     }
 }

 startButton.addEventListener("click", startFunction);
 choice1.addEventListener("click", clickButton)
 choice2.addEventListener("click", clickButton)
 choice3.addEventListener("click", clickButton)
 choice4.addEventListener("click", clickButton)