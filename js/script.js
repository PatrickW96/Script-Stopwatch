/* var for time values */
var seconds = 0;
var minutes = 0;
var hours = 0;

/* Creating var to hold the values that are going to be displayed to user */
dispalySeconds = 0;
displayMinutes = 0;
displayHours = 0;

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
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }

    if (hours <10) {
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }

    /* Targeting display to display stopWatch function */

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

/* create a function to call when the start button is clicked */
/* Create a function to call when the stop button is clicked  */
/* Create a function to call when the reset button is clicked */

// window.setInterval(stopWatch, 1000);