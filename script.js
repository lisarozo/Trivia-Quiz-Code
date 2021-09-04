var questions = [
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
    },
    {
        questionText: "Name the biggest island in the world",
        answerChoices: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: "Greenland"
    },
    {
        questionText: "Which country produces the most coffee in the world?",
        answerChoices: ["Brazil", "Colombia", "Vietnam", "Indonesia"],
        correctAnswer: "Brazil"
    },
    {
        questionText: "What color is a Giraffe's tongue?",
        answerChoices: ["Blue/Black", "Red", "Purple", "Pink"],
        correctAnswer: "Blue/Black"
    },
    {
        questionText: "How many bones are there in the human body?",
        answerChoices: ["103", "212", "206", "96"],
        correctAnswer: "206"
    },

]

// var exampleArr= [12, 32, 45, 8]


var questionIndex = 0;

function startTheQuiz() {
    showQuestion()
    //timer starts to count down
}

function showQuestion() {
    document.getElementById("question").textContent = questions[questionIndex].questionText
    //show the choices 
    document.getElementById("choiceOne").textContent = questions[questionIndex].answerChoices[0]
}

document.querySelector("#startBtn").addEventListener("click", startTheQuiz)