

// Change text when the interval is reached
var myVar = setInterval(myTimer, 10000); // Delay 10 seconds

function myTimer() {
    document.getElementById("demo").innerHTML = "Your Neopets are hungry!"; //Changes demo's text to "hello world..."
}

// Count the seconds
setInterval(counter, 1000)

var counterVal = 0;

function counter() {
	counterVal++;
	document.getElementById("counter").innerHTML = counterVal;
}
// Display a message every once in a while, every (I can't do math) second
var weaselStart = setInterval(weasel, 200);

function weasel() {
	var randomNum = Math.floor(100*Math.random());
	var popped = 0;
	
	if (randomNum <= 5 && popped == 0) {
		document.getElementById("weasel").innerHTML = "POP!";
		popped = 1;
	}
	else{
		document.getElementById("weasel").innerHTML = "<br>";
	}
}

// Start a counter and store info
//Call it in the beginning to avoid the initial delay

counter2();

var counter2Timer = setInterval(counter2, 1000);

function counter2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.counter2Num) {
            localStorage.counter2Num = ++localStorage.counter2Num;
        }
		else {
			localStorage.counter2Num = 1;
		}
        document.getElementById("counter2").innerHTML = "localStorage counter is at " + localStorage.counter2Num + " second(s).";
	} else {
		document.getElementById("counter2").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
	