const timerDisplay = document.getElementById("timer-display");

const startButton = document.getElementById("start-btn");

const pauseButton = document.getElementById("pause-btn");

const resetButton = document.getElementById("reset-btn");

const timeInput = document.getElementById("time-input");

let seconds;

// variable to hold the timer interval
let timer;

// variable to track whether the timer is paused
let isPaused = false;

// function to handle the countdown
function countDown() {

    // decrement the seconds variable
    console.log(seconds);

    // update the timer display with the current time
    setTimerDisplay(seconds);

    // check if the countdown has reached zero
if (seconds === 0) {
    // stop the timer and display a message
   clearInterval(timer);
    console.log("Time is up!");
}

// decrement the seconds variable
seconds--;
}

// function to update the timer display
function setTimerDisplay(time) {

    // update the timer display with the current time
    timerDisplay.textContent = time;


}



// event listener for the start button
startButton.addEventListener("click", function() {

    if(!isPaused) {

        // clear any existing timer interval
    seconds = Number(timeInput.value);

    }

    
    // update the timer display with the current time
    setTimerDisplay(seconds);

    // start the countdown timer
    clearInterval(timer);

    // start the countdown timer
    timer = setInterval(countDown, 1000);

    isPaused = false;

});

pauseButton.addEventListener("click", function() {
    clearInterval(timer);

    isPaused = true;
});

resetButton.addEventListener("click", function() {
    clearInterval(timer);
     
    // reset the seconds variable to the initial value
    seconds = Number(timeInput.value);

setTimerDisplay(seconds);

isPaused = false;
});




