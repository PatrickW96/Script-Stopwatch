/* Defining Time Values for Stop Watch */
var seconds = 0;
var minutes = 0;
var hours = 0;

var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;

/* Setting up the function that sets the values relative to time and increments those set values accordingly */
function stopWatch() {
    seconds++; 

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    } 
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++; 
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }



    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;

}

//window.setInterval(stopWatch, 1000)