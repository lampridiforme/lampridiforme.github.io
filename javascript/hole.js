var clicks = 0;	//Number of clicks on the button
var depth = 0;	//Actual depth, not just clicks
var width = 0;	//Width of the hole; effects how many things you can keep in your hole
var tools = "";	//Saves inventory contents string for tools
var materials = "";	//Same for materials
var treasure = "";	//Same for treasure

//This part is for the giant list of items :(
var shovelGot = false;
var autoShovelGot = false;
  
//Onclick stuff for the menu... god this took me an hour and some to figure out
getElementById("tools").onclick = showTools();
getElementById("materials").onclick = showMaterials();
getElementById("treasure").onclick = showTreasure();
  
/* dig(): increments the click counter */
function dig(){
	clicks++;
	if(clicks == 1){
		document.getElementById("digButton").innerHTML = "Dig";
		updateTools("Old Shovel");
	}
	else if(clicks > 1){
		depth = clicks - 1;
		updateDepth(depth);	//Subtract 1 so that there isn't one extra
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

/* updateTools(string): updates the tools string to contain the new item */ 
function updateTools(newItem){
	if(tools == ""){
		tools = newItem;
	}
	else{
		tools = tools + "<br><br>" + newItem;
	}
}

/* Shows the tools in the inventoryContent section */
function showTools(){
	document.getElementById("inventoryContent").innerHTML = tools;
}

/* Shows the materials in the inventoryContent section */
function showMaterials(){
	document.getElementById("inventoryContent").innerHTML = materials;
}

/* Shows the tools in the inventoryContent section */
function showTreasure(){
	document.getElementById("inventoryContent").innerHTML = treasure;
}

function generateLayerName(){
	window.alert("Make this feature!");
}

function generateBiomeName(){
	window.alert("Make this feature!");
}