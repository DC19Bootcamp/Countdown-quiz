// A start button that when clicked a timer starts and the first question appears.

var startbutton = document.getElementById("start");
var timeEl = document.getElementById("time")

var secondsLeft = 10;

function clickingButton (){
    timeEl.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
         
        }
    
      }, 1000);
}



// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score

startbutton.addEventListener('click', clickingButton)