var time = document.getElementById("time");
var intro = document.getElementById("intro")
var startButton = document.getElementById("start")

// getElementById to hide and show
var questions = document.getElementById("questions");

var Quiz = [{
        question: "Commonly used data types DO not include__.",
        choices: {
            1: "Strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",

        },
        answer: "alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store"
        choices: {
            1: "Numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",

        },
        answer: "all of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed with"
        choices: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets",

        },
        answer: "curly brackets"
    },
    {
        question: "String values must be encloosed within __ when being assigned to variables"
        choices: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis",

        },
        answer: "quotes"
    },
    {
        question: ""
        choices: {
            1: "",
            2: "",
            3: "",
            4: "",

        },
        answer: ""
    }
]
console.log(Quiz[1].question)

function startFunction() {
    console.log("clicked")
    // set attribute of those elements
    intro.setAttribute("class", "hide");
    questions.setAttribute("class", "");

}

startButton.addEventListener("click", startFunction);