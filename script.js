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