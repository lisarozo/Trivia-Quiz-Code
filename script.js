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
var score=50 
// var exampleArr= [12, 32, 45, 8]

var questionsEl = document.getElementById('questions');
var questionIndex = 0
// increment after question questionIndex ++

function startTheQuiz() {
    questionsEl.setAttribute('style', 'display: block;');
    showQuestion()
    //timer starts to count down
}

function showQuestion() {
    document.getElementById("question").textContent = questions[questionIndex].questionText
    
    //show the choices 
    document.getElementById("choiceOne").textContent = questions[questionIndex].answerChoices[0]
    document.getElementById("choiceTwo").textContent = questions[questionIndex].answerChoices[1]
    document.getElementById("choiceThree").textContent = questions[questionIndex].answerChoices[2]
    document.getElementById("choiceFour").textContent = questions[questionIndex].answerChoices[3]
}
var timerEl = document.getElementById('countdown');



// Timer that counts down from 10
function countdown() {
  var timeLeft = 30;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else { 
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      alert("The End")
      var initials = prompt("Please Enter Your Initials")
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", score)
      window.location.reload();
      clearInterval(timeInterval)
    }

    if(questionIndex >= questions.length) {
     var initials = prompt("Please Enter your Initials")
    localStorage.setItem("initials", initials);
      localStorage.setItem("score", score)
      // localStorage.setItem("Highest Score", Highest Score)
     window.location.reload();
      
      clearInterval(timeInterval)
    }
  }, 1000);
}



startBtn.onclick = countdown;


function checkAnswer() {
  console.log(this.textContent)
  var chosenAnswer = this.textContent;

  if(chosenAnswer == questions[questionIndex].correctAnswer) {
    console.log("correct")
    score++
    console.log(score)
  }else {
    console.log("incorrect")
  }

  questionIndex++;
  if(questionIndex < questions.length) {
    showQuestion()
  }
}

document.querySelector("#startBtn").addEventListener("click", startTheQuiz)

document.querySelector("#choiceOne").addEventListener("click", checkAnswer)
document.querySelector("#choiceTwo").addEventListener("click", checkAnswer)
document.querySelector("#choiceThree").addEventListener("click", checkAnswer)
document.querySelector("#choiceFour").addEventListener("click", checkAnswer)