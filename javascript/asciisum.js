function sum() {
	var sentence = document.getElementById("sentence").value;	//Get the string	
	var length = sentence.length;	//Get the length of the string
	var currentValue = 0;
	var sum = 0;	//The sum of the character	
	
	var spaceCheck = document.getElementById("spaces");
	var upperCheck = document.getElementById("upper");
	var lowerCheck = document.getElementById("lower");
	
	for(var n=0; n<length; n++) {	//Increment through the length to access all chars
	
		if( lowerCheck.checked && upperCheck.checked ){
			document.getElementById("result").innerHTML = "Please only select either lower or upper case.";
			return;
		}
	
		if( lowerCheck.checked ){	//Convert to lowercase
			sentence = sentence.toLowerCase();
		}
		else if( upperCheck.checked ){
			sentence = sentence.toUpperCase();
		}
	
		currentValue = sentence.charCodeAt(n);	//Calculate the code
		
		if( (currentValue == 32) && spaceCheck.checked ){	//Do not take the sum if space when spaces are not allowed
			continue;
		}
		
		sum = sum + currentValue;
	}
	
	document.getElementById("result").innerHTML = "The sum is: " + sum;

	lowercaseOnly = false;	//Revert to status quo
	uppercaseOnly = false;
	spacesOn = false;
	
}
