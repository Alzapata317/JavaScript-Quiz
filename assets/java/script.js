var startButton = document.getElementById("start-btn")
var startMenu = document.getElementById("start-menu")
var correctButton = document.querySelector(".correct-btn")
var Q1 = document.getElementById("Q1")
var Q2 = document.getElementById("Q2")
var Q3 = document.getElementById("Q3")
var Q4 = document.getElementById("Q4")
var Q5 = document.getElementById("Q5")
var Q6 = document.getElementById("Q6")
var wrongButton = document.querySelector(".wrong-btn")
var score = 0
var index = 1


function startgame() {
    console.log("start")
    startMenu.classList.add("hide")
    Q1.classList.remove("hide")
}
function correctanswer() {
    document.body.classList.remove("red")
    document.body.classList.add("green")
    score = score + 10;
    console.log(score)
    nextQuestion()
}
function wronganswer() {
    document.body.classList.remove("green")
    document.body.classList.add("red")
    nextQuestion()
}
function nextQuestion() {
    index = index + 1;
    if(index === 2)
    {
        Q1.classList.add("hide")
        Q2.classList.remove("hide")
    }
    
    else if(index === 3)
    {
        Q2.classList.add("hide")
        Q3.classList.remove("hide")
    }
    
    else if(index === 4)
    {
        Q3.classList.add("hide")
        Q4.classList.remove("hide")
    }
    
    console.log(index)
   
}
startButton.addEventListener("click", startgame)
correctButton.addEventListener("click", correctanswer)
wrongButton.addEventListener("click", wronganswer)