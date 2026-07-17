const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");
let seconds = 10;
const timer = setInterval(countDown, 1000);

function countDown() {
    console.log(seconds);


if (seconds === 0) {
    
   clearInterval(timer);
    console.log("Time is up!");
}

seconds--;
}

function setTimerDisplay(time) {
    timerDisplay.textContent = time;
}

startButton.addEventListener("click", function() {
   setTimerDisplay("Working...");
});

pauseButton.addEventListener("click", function() {
    setTimerDisplay("Timer Paused");
});

resetButton.addEventListener("click", function() {
    setTimerDisplay("Ready");
});



