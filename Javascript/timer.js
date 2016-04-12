

// Change text when the interval is reached
var myVar = setInterval(myTimer, 10000); // Delay 10 seconds

function myTimer() {
    document.getElementById("demo").innerHTML = "Hello World and all those who inhabit it!"; //Changes demo's text to "hello world..."
}

// Count the seconds
setInterval(counter, 1000)

var counterVal = 0;

function counter() {
	counterVal++;
	document.getElementById("counter").innerHTML = counterVal;
}
// Display a message every once in a while, every half second
var weaselStart = setInterval(weasel, 500);

function weasel() {
	var randomNum = Math.floor(100*Math.random());
	var popped = 0;
	
	if (randomNum <= 30 && popped == 0) {
		document.getElementById("weasel").innerHTML = "POP!";
		popped = 1;
	}
	else{
		document.getElementById("weasel").innerHTML = "<br>";
	}
}
