const timerDisplay = document.getElementById("timer-display");

const startButton = document.getElementById("start-btn");

const pauseButton = document.getElementById("pause-btn");

const resetButton = document.getElementById("reset-btn");

const timeInput = document.getElementById("time-input");

const message = document.getElementById("message");

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
function setTimerDisplay(totalSeconds) {

    // 
    const hours = Math.floor(totalSeconds / 3600); 
    const minutes = Math.floor((totalSeconds % 3600) / 60);
   // const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // update the timer display with the current time
    timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


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

// helper function to set the message text
function setMessage(text) {
    message.textContent = text;
}

// call for the message to be set 
setMessage("Please enter a value greater than 0");

// check if the seconds variable is greater than 0 so as to remove the error message 
// and start the countdown timer
if (seconds > 0) {

    setMessage("");

    setTimerDisplay(seconds);

    clearInterval(timer);

    timer = setInterval(countDown, 1000);

    isPaused = false;
}
