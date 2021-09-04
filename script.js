var questions = [
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
    },
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
    },
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
    },
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
    },
    {
        questionText: "How many bones are in a shark?",
        answerChoices: ["none", "1", "2", "3"],
        correctAnswer: "none"
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