function generateMap(){
	var doc = document.getElementById("size");
	var size = doc.value;
	var content = "";
	
	//This part checks the input size to make sure it's within 0 to 30
	if( size > 30 || size < 1){
		document.getElementById("map").innerHTML = "Please input a number greater than 0 and less than or equal to 30.";
		return;
	}
	
	//Populate the map with characters
	for(var i=0; i<size; i++){
		for(var j=0; j<size; j++){
			if( j == (size-1) ){
				content = content + randomCharacterBinary() + "<br>";
			}
			else{
				content = content + randomCharacterBinary() + " ";
			}
		}
	}
	document.getElementById("map").innerHTML = content;
}

function randomCharacterBinary(){
	var randVal = Math.random();
	if( randVal < .5 ){
		return 1;
	}
	else{
		return 0;
	}
}