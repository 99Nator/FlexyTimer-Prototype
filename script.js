const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");

//
let seconds = 10;

// variable to hold the timer interval
let timer;

function countDown() {
    console.log(seconds);
    setTimerDisplay(seconds);

if (seconds === 0) {
    
   clearInterval(timer);
    console.log("Time is up!");
}

seconds--;
}

// function to update the timer display
function setTimerDisplay(time) {

    // update the timer display with the current time
    timerDisplay.textContent = time;


}



// event listener for the start button
startButton.addEventListener("click", function() {
    // code that begins the countdown 
   timer = setInterval(countDown, 1000);
});

pauseButton.addEventListener("click", function() {
    setTimerDisplay("Timer Paused");
});

resetButton.addEventListener("click", function() {
    setTimerDisplay("Ready");
});




