/* var for time values */
var seconds = 0;
var minutes = 0;
var hours = 0;

/* Creating var to hold the values that are going to be displayed to user */
dispalyedSec = 0;
displayedMin = 0;
displayedHours = 0;

/* Creating a var to hold value of watch on/off status */
var watchOnOff = 0;

/* Defining a var to hold the val of setInterval function */
var timer;

/* Creating the stopwatch function */
function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    } if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

/* Defining displayValues */
    if (seconds < 10) {
        displayedSec = "0" + seconds;
    } else {
        displayedSec = seconds;
    }

    if (minutes < 10) {
        displayedMin = "0" + minutes;
    } else {
        displayedMin = minutes;
    }

    if (hours <10) {
        displayedHours = "0" + hours;
    } else {
        displayedHours = hours;
    }

    /* Targeting display to display stopWatch function */

    document.getElementById("display").innerHTML = displayedHours + ":" + displayedMin + ":" + displayedSec;
}

/* Conditional that determines which function are actived by which buttons */
// if (startBtn) {
//     watchOnOff = 1;
// } else if (stopBtn) {
//     watchOnOff = 2;
// } else if (resetBtn) {
//     watchOff = 3;
// } else {
//     watchOnOff = watchOnOff;
// }

/* Creating a function for when the start button is clicked */
function startBtn() {
        timer = setInterval(stopWatch, 1000);
}

/* Creating a function for the stop button */
function stopBtn() {
        clearInterval(timer);  
}

/* Creating a reset button */
/* Setting the original time values to 0 to reset the entire stopWatch function, clearInterval so the stopWatch doesn't reset then keep counting time,
    and document display = "00:00:00" */

function resetBtn() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(timer);
    document.getElementById("display").innerHTML = "00:00:00";
}
