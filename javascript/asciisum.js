oCheckBox1 = oForm.elements["spaces"];
oCheckBox3 = oForm.elements["lower"]
oCheckBox2 = oForm.elements["upper"];

var spacesOn = false;
var lowercaseOnly = false;
var uppercaseOnly = false;

function checkTest(oCheckbox, bool){
	var checkVal = oCheckbox.value;
	if(oCheckbox.checked){
		bool = true;
	}
}

function sum() {
	var sentence = document.getElementById("sentence").value;	//Get the string	
	var length = sentence.length;	//Get the length of the string
	var currentValue = 0;
	var sum = 0;	//The sum of the character	
	
	checkTest(oCheckBox1, spacesOn);
	checkTest(oCheckBox2, lowercaseOnly);
	checkTest(oCheckBox3, uppercaseOnly);
	
	for(var n=0; n<length; n++) {	//Increment through the length to access all chars
	
		if( lowercaseOnly ){	//Convert to lowercase
			sentence = sentence.toLowerCase();
		}
		else if( uppercaseOnly ){
			sentence = sentence.toUpperCase();
		}
	
		currentValue = sentence.charCodeAt(n);	//Calculate the code
		
		if( (currentValue == 32) && spacesOn ){	//Do not take the sum if space when spaces are not allowed
			continue;
		}
		
		sum = sum + currentValue;
	}
	
	document.getElementById("result").innerHTML = "The sum is: " + sum;

	lowercaseOnly = false;	//Revert to status quo
	uppercaseOnly = false;
	spacesOn = false;
	
}
