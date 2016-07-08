//Note to self: There is an appalling lack of getters and setters; implement them when done

//Begin constants
var AUTOSHOVEL_START_PRICE = 20;

var clicks = 0;	//Number of clicks on the button
var depth = 0;	//Actual depth, not just clicks
var width = 0;	//Width of the hole; effects how many things you can keep in your hole
var currentBiome;	//The current biome object the player is in
var currentResources = [];	//A list of the resources one can currently obtain
var initialDepth = 0;	//The starting depth of a biome, used to calculate if the biome is done

var tools = [];	//Saves inventory contents array for tools
var materials = [];	//Same for materials
var treasure = [];	//Same for treasure
var store = ["Auto-Shovel", "Red Bull"];	//Same for store; static	

var toolsQuantity = [];	//Parallel array to tools that contains the number of each item in the corresponding index
var materialsQuantity = [];	//Same for materials
var treasureQuantity = []; //Same for treasure
var storePrice = [20, 50];	//Prices of items for the store; updated

var toolToggle = false;	//Toggle for hiding the tools menu
var materialsToggle = false;	//Toggle for hiding the material menu
var treasureToggle = false;	//Toggle for hiding the treasure menu

var biomeNameFront = ["Reg", "Sub", "Shift", "Org", "Bed", "Surf", "Strat", "Top", "Tax", "O", "A", "Ba", "Rub", "Tun", "Anar", "Ign", "Metamorph", "Mercur", "Wolf", "Sed", "Sat"];
var biomeNameBack = ["olite", "soil", "rock", "pit", "olos", "izon", "ural", "ologic", "imentary", "ic", "eous", "imorph", "elogos", "undre", "ilayer", "abond", "anic"];
var oreList = ["Copper Ore", "Iron Ore", "Silver Ore", "Gold Ore", "Platinum Ore", "Palladium Ore", "Uranium Ore", "Lead Ore", "Aluminum Ore"]

//Misc objects/variables
var checker = setInterval(automatic, 10);	//Keep checking the automatic function
var storeString = "";	//String that will contain the store information

//Some initial item booleans
var shovelGot = false;
  
//Other initializtion booleans







/* getRandomInt(int, int): generates a random integer given a min and max integer */
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
/* biome(string, int, array, bool): constructor for a biome
	-name: name of biome as string
	-depth: integer number of clicks it takes to get through
	-resources: array of resources that can be found
	-moh: the general hardness of the soil (1 for 1 ratio)
*/
function biome(biomeName, biomeSize, biomeResources, biomeMoh){
	//window.alert("Biome construction initialized.");
	this.name = biomeName;
	//window.alert("Biome named: " + this.name);
	this.size = biomeSize;
	//window.alert("Biome size calculated: " + this.size);	
	this.resources = biomeResources;
	//window.alert("Biome resources allocated.");	
	this.moh = biomeMoh;
	//window.alert("Biome constructed.");
}
  
/* generateBiomeName(): Creates a random biome name from the given prefixes and suffixes */
function generateBiomeName(){
	//window.alert("Biome name generation initialized.");
	var front = biomeNameFront[Math.floor(Math.random() * biomeNameFront.length)];	//Random element from the array
	//window.alert("Front chosen.");
	var back = biomeNameBack[Math.floor(Math.random() * biomeNameBack.length)];
	//window.alert("Back chosen.");
	var name = front + back + " Layer";
	//window.alert("Name concatenated: " + name);
	return name;
}

/* pickRandomOre(): Selects a randum ore from the list of ores */
function pickRandomOre(){
	//window.alert("Ore chosen.");
	var ore = oreList[Math.floor(Math.random() * oreList.length)];
	return ore;
}
 
/* generateBiome(int, bool): generates a new biome; richness is the possibility of there being ore, can be 0, 5, 10, or 20 currently */
function generateBiome(richness, firstTime){
	//window.alert("richness: " + richness + " boolean: " + firstTime);
	var name = generateBiomeName();	//Biome name
	var depth = 0;
	
	if(firstTime == true){	//This generates the initial biome
		currentResources = ["Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", pickRandomOre(), "Iron Ore",];
		currentBiome = new biome(name, 500, currentResources, 1);
		//window.alert("Biome generated.");
	}
	else{
		if(richness == 0){	//This is literally just all dirt
			depth = getRandomInt(100, 400);
			currentResources = ["Dirt"];
			currentBiome = new biome(name, depth, currentResources, 1);
		}
		else if(richness > 5){
			depth = getRandomInt(100, 700);
			currentResources = ["Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), "Dirt"];
			currentBiome = new biome(name, depth, currentResources, 1);
		}
		else if(richness > 10){
			depth = getRandomInt(100, 500);
			currentResources = ["Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), "Dirt"];
			currentBiome = new biome(name, depth, currentResources, 1);
		}
		else if(richness == 20){
			depth = getRandomInt(100, 200);
			currentResources = ["Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", "Dirt", pickRandomOre(), pickRandomOre(), "Dirt", "Dirt", pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), pickRandomOre(), "Dirt"];
			currentBiome = new biome(name, depth, currentResources, 1);
		}
	}
}
  
/* dig(): increments the click counter and performs other button-related actions*/
function dig(){
	var richness = getRandomInt(0,20);
	
	clicks++;
	
	if(clicks == 1){
		document.getElementById("digButton").innerHTML = "Dig";
		document.getElementById("eventContent").innerHTML = "Check your inventory by clicking on Tools, Materials, or Treasure tabs.";
		generateBiome(richness, true);
		updateTools("Old Shovel");
		updateStore("Auto-Shovel");
		width++;
	}
	else if(clicks > 1){
		depth = clicks - 1;	//Subtract 1 so that there isn't one extra
							//meter, but theres got to be a better way...
		updateDepth(depth * toolsQuantity[0]);	//Multiply by the number of shovels
												//Note to self- find the index of any other click tools later on
		updateWidth(width);
		if(clicks == 5){
			document.getElementById("eventContent").innerHTML = "";
		}
	
		if((clicks - initialDepth) == currentBiome.size){	//Hit another biome
			initialDepth = clicks;
			generateBiome(richness, false);
			document.getElementById("eventContent").innerHTML = "You have hit the " + currentBiome.name + "!";
		}
		if(clicks == initialDepth+5){	//Get rid of the new biome message after 5 clicks
			document.getElementById("eventContent").innerHTML = "";
		}
		updateMaterials(currentResources[Math.floor(Math.random() * currentResources.length)]);	//Only start updating when the shovel hits the dirt
	}
	
 }
 
/* automatic(): performs automatic functions, eg. timer based incremeters */
function automatic(){
	if(materialsQuantity[materials.indexOf("Auto-Shovel")] > 0){
		var rate = setInterval(autoShovelFunctionality, 1000 * 20);	//Shovel once every 20 seconds
	}
}
 
/* buyItem(string): performs the necessary calculations to buy an item from the store, then updates the html */
function buyItem(item){
	var dirtIndex = materials.indexOf("Dirt");	//At this point the vars contain the index of the items
	var autoShovelIndex = materials.indexOf("Auto-Shovel");
	
	//window.alert("BUYITEM1 dirtIndex: " + dirtIndex);
	//window.alert("BUYITEM1 autoShovelIndex: " + autoShovelIndex);
	
	if(dirtIndex >= 0){	//At this point vars contain the quantity of items
		dirtIndex = materialsQuantity[dirtIndex];
	}
	else{
		dirtIndex = 0;
	}
	
	if(autoShovelIndex >= 0){
		autoShovelIndex = materialsQuantity[autoShovelIndex];
	}
	else{
		autoShovelIndex = 0;
	}
	
	//window.alert("BUYITEM2 dirtIndex: " + dirtIndex);
	//window.alert("BUYITEM2 autoShovelIndex: " + autoShovelIndex);
	
	if(item == "Auto-Shovel"){	//Initial price: 50 dirt
		if(dirtIndex - priceRaiser(AUTOSHOVEL_START_PRICE, autoShovelIndex) > 0){	//If the purchase doesn't run us into the ground...
			materialsQuantity[materials.indexOf("Dirt")] = dirtIndex -  priceRaiser(AUTOSHOVEL_START_PRICE, autoShovelIndex) - 1;	//Use -1 to negate the additional +1 made by updateMaterials
			updateTools("Auto-Shovel");
			updateMaterials("Dirt");
			document.getElementById("shovelPrice").innerHTML = priceRaiser(AUTOSHOVEL_START_PRICE, toolsQuantity[tools.indexOf("Auto-Shovel")]) + " Dirt";	//Layer violation but its the only way :(
			autoShovelFunctionality();
		}
		else{
			//window.alert("NOT ENOUGH: Dirt: " + dirtIndex + " Price: " + priceRaiser(AUTOSHOVEL_START_PRICE, autoShovelIndex));
		}
	}
}

/* priceRaiser(int, int): raises the price of an item depending on the quantity and original price (exponential) */
function priceRaiser(originalPrice, quantity){
	//window.alert("PRICERAISER Original Price: " + originalPrice + " Quantity: " + quantity);
	newPrice = Math.ceil((Math.pow(quantity, 1.5))/1.5) + originalPrice;
	//window.alert("PRICERAISER Original Price: " + originalPrice + " Quantity: " + quantity + " New Price: " + newPrice);
	return newPrice;
}

/* autoShovelFunctionality(): Performs the depth incrementation for an auto-shovel */
function autoShovelFunctionality(){
	//window.alert("autoShovel index: " + tools.indexOf("Auto-Shovel"));
	depth = depth + (1 * toolsQuantity[tools.indexOf("Auto-Shovel")]);
	updateDepth(depth);
	window.setTimeout("autoShovelFunctionality();", 1000*1);
}
  
/* updateDepth(int): updates the HTML depth line to equal the new value */
function updateDepth(value){
	document.getElementById("depth").innerHTML = "Depth: " + value + "m";
}

/* updateWidth(int): updates the HTML radius line to equal the new value */
function updateWidth(value){
	document.getElementById("width").innerHTML = "Radius: " + value + "m";
}

/* updateTools(string): updates the tools array to contain a new item or increment the quantity of an existing item */ 
function updateTools(newItem){
	toolIndex = tools.indexOf(newItem);
	if(toolIndex == -1){
		tools.push(newItem);	//If the item is new, create new index in both arrays
		toolsQuantity.push(1);
	}
	else{
		toolsQuantity[toolIndex]++;	//Otherwise increment the quantity
	}
	
	if(toolToggle == true){	//If window is already open, update it
		toolsString = "";
		for(var item = 0; item < tools.length; item++){	//Loop through the arrays to generate a string
			if(toolsQuantity[item] > 1){
				if(item > 0){
					toolsString = toolsString + "<br><br>" + tools[item] + " X " + toolsQuantity[item];
				}
				else{
					toolsString = tools[item] + " X " + toolsQuantity[item];	//This way we avoid having <br><br> before the initial element
				}
			}
			else{
				if(item > 0){
					toolsString = toolsString + "<br><br>" + tools[item];
				}
				else{
					toolsString = tools[item];
				}
			}
		}
		document.getElementById("inventoryContent").innerHTML = toolsString;
	}
}

/* updateMaterials(string): updates the materials array to contain a new item or increment the quantity of an existing item */
function updateMaterials(newItem){
	materialIndex = materials.indexOf(newItem);
	if(materialIndex == -1){
		materials.push(newItem);	//If the item is new, create new index in both arrays
		materialsQuantity.push(1);
	}
	else{
		materialsQuantity[materialIndex]++;	//Otherwise increment the quantity
	}
	
	if(materialsToggle == true){
		materialsString = "";
		for(var item = 0; item < materials.length; item++){	//Loop through the arrays to generate a string
			//window.alert(materialsQuantity[item]);
			if(materialsQuantity[item] > 1){
				if(item > 0){
					materialsString = materialsString + "<br><br>" + materials[item] + " X " + materialsQuantity[item];
				}
				else{
					materialsString = materials[item] + " X " + materialsQuantity[item];	//This way we avoid having <br><br> before the initial element
				}
			}
			else{
				if(item > 0){
					materialsString = materialsString + "<br><br>" + materials[item];
				}
				else{
					materialsString = materials[item];
				}
			}
		}
		document.getElementById("inventoryContent").innerHTML = materialsString;
	}
}

/* updateTreasure(string): updates the treasure array to contain a new item or increment the quantity of an existing item */
function updateTreasure(newItem){
	treasureIndex = treasure.indexOf(newItem);
	if(treasureIndex == -1){
		treasure.push(newItem);	//If the item is new, create new index in both arrays
		treasureQuantity.push(1);
	}
	else{
		treasureQuantity[treasureIndex]++;	//Otherwise increment the quantity
	}
	
	if(treasureToggle == true){
		treasureString = "";
		for(var item = 0; item < treasure.length; item++){	//Loop through the arrays to generate a string
			if(treasureQuantity[item] > 1){
				if(item > 0){
					treasureString = treasureString + "<br><br>" + treasure[item] + " X " + treasureQuantity[item];
				}
				else{
					treasureString = treasure[item] + " X " + treasureQuantity[item];	//This way we avoid having <br><br> before the initial element
				}
			}
			else{
				if(item > 0){
					treasureString = treasureString + "<br><br>" + treasure[item];
				}
				else{
					treasureString = treasure[item];
				}
			}
		}
		document.getElementById("inventoryContent").innerHTML = treasureString;
	}
}

/* updateStore(): updates the store stock and prices */
function updateStore(item){
	//This is harder than I thought
}

//grumble...stupid layer violations...grumble...

/* Shows the tools in the inventoryContent section */
function showTools(){
	toolsString = "";
	for(var item = 0; item < tools.length; item++){	//Loop through the arrays to generate a string
		if(toolsQuantity[item] > 1){
			if(item > 0){
				toolsString = toolsString + "<br><br>" + tools[item] + " X " + toolsQuantity[item];
			}
			else{
				toolsString = tools[item] + " X " + toolsQuantity[item];	//This way we avoid having <br><br> before the initial element
			}
		}
		else{
			if(item > 0){
				toolsString = toolsString + "<br><br>" + tools[item];
			}
			else{
				toolsString = tools[item];
			}
		}
	}
	if(toolToggle == false){
		document.getElementById("inventoryContent").innerHTML = toolsString;
		toolToggle = true;
		materialsToggle = false;
		treasureToggle = false;
	}
	else{
		document.getElementById("inventoryContent").innerHTML = "";	
		toolToggle = false;
	}
}

/* Shows the materials in the inventoryContent section */
function showMaterials(){
	materialsString = "";
	for(var item = 0; item < materials.length; item++){	//Loop through the arrays to generate a string
		//window.alert(materialsQuantity[item]);
		if(materialsQuantity[item] > 1){
			if(item > 0){
				materialsString = materialsString + "<br><br>" + materials[item] + " X " + materialsQuantity[item];
			}
			else{
				materialsString = materials[item] + " X " + materialsQuantity[item];	//This way we avoid having <br><br> before the initial element
			}
		}
		else{
			if(item > 0){
				materialsString = materialsString + "<br><br>" + materials[item];
			}
			else{
				materialsString = materials[item];
			}
		}
	}
	if(materialsToggle == false){
		document.getElementById("inventoryContent").innerHTML = materialsString;
		toolToggle = false;
		materialsToggle = true;
		treasureToggle = false;
	}
	else{
		document.getElementById("inventoryContent").innerHTML = "";	
		materialsToggle = false;
	}}

/* Shows the tools in the inventoryContent section */
function showTreasure(){
	treasureString = "";
	for(var item = 0; item < treasure.length; item++){	//Loop through the arrays to generate a string
		if(treasureQuantity[item] > 1){
			if(item > 0){
				treasureString = treasureString + "<br><br>" + treasure[item] + " X " + treasureQuantity[item];
			}
			else{
				treasureString = treasure[item] + " X " + treasureQuantity[item];	//This way we avoid having <br><br> before the initial element
			}
		}
		else{
			if(item > 0){
				treasureString = treasureString + "<br><br>" + treasure[item];
			}
			else{
				treasureString = treasure[item];
			}
		}
	}
	if(treasureToggle == false){
		document.getElementById("inventoryContent").innerHTML = treasureString;
		toolToggle = false;
		materialsToggle = false;
		treasureToggle = true;
	}
	else{
		document.getElementById("inventoryContent").innerHTML = "";	
		treasureToggle = false;
	}
}






/* OBSOLETE: updateToolsOld(string): older version of updateTools that only updates the string */ 
function updateToolsOld(newItem){
	if(tools == ""){
		tools = newItem;
	}
	else{
		tools = tools + "<br><br>" + newItem;
	}
}

/* OBSOLETE: updateMaterialsOld(string): older version of updateMaterials that only updates the string */
function updateMaterialsOld(newItem){
	if(materials == ""){
		materials = newItem;
	}
	else{
		materials = materials + "<br><br>" + newItem;
	}
}

/* OBSOLETE: updateMaterialsOld(string): older version of updateTreasure that only updates the string */
function updateTreasureOld(newItem){
	if(treasure == ""){
		treasure = newItem;
	}
	else{
		treasure = treasure + "<br><br>" + newItem;
	}
}