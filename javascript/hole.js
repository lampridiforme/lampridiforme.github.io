//Number of clicks on the button
var clicks = 0;
//Width of the hole; effects how many things you can keep in your hole
var width = 0;
//Saves inventory contents string for tools
var tools = "";
//Same for materials
var materials = "";
//Same for treasure
var treasure = "";
  
/* dig(): increments the click counter */
function dig(){
	clicks++;
	if(clicks == 1){
		document.getElementById("digButton").innerHTML = "Dig";
	}
	else if(clicks > 1){
		updateDepth(clicks-1);	//Subtract 1 so that there isn't one extra
								//meter, but theres got to be a better way...
		if(clicks == 2){
			width = 1;
			updateWidth(width);
		}
	}
 }
 
/* updateDepth(int): updates the HTML depth line to equal the new value */
function updateDepth(value){
	document.getElementById("depth").innerHTML = "Depth: " + value + "m";
}

/* updateWidth(int): updates the HTML radius line to equal the new value */
function updateWidth(value){
	document.getElementById("width").innerHTML = "Radius: " + value + "m";
}

function generateLayerName(){
	
}

function generateBiomeName(){
	
}