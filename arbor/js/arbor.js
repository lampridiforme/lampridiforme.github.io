/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// initial variable values for clean level/game restarts

// health and energy
var MAXHEALTH = 100;
var MAXENERGY = 100;

// health and energy loss
var STARVESLOW = 2;
var STARVEMED = 4;
var STARVEFAST = 7;
var HEALSLOW = 1;
var HEALMED = 2;
var HEALFAST = 5;

// game over types
var NOT_DIE = -1;
var ATTACKED = 0;
var DROWNED = 1;
var STARVED = 2;
var POUNCE = 3;

// game over strings
var GAME_OVER = "GAME OVER.";
var ATTACKED_DESC = "You attempt to attack, but the enemy is too strong and kills you.";
var DROWNED_DESC = "You attempt to wade through the river, but the currents are too swift for you. You drown.";
var STARVED_DESC = "You have starved to death.";

// biomes
var UNIDENTIFIED = -1;
var FORESTEASY = 0;
var FORESTMED = 1;
var FORESTHARD = 2;
var PLAINSEASY = 3;
var PLAINSHARD = 4;
var RIVER = 5;
var SWAMPEASY = 6;
var SWAMPHARD = 7;
var WASTES = 8;
var HOME = 9;
var EGGNEST = 10;
var OTHERNEST = 11;

// biome colors
var UNIDENTIFIED_COLOR = "#ff0026";
var UNVISITED_COLOR = "#bababa";
var FORESTEASY_COLOR = "#38ff4b";
var FORESTMED_COLOR = "#299734";
var FORESTHARD_COLOR = "#013800";
var PLAINSEASY_COLOR = "#e2f90e";
var PLAINSHARD_COLOR = "#d8890a";
var RIVER_COLOR = "#00b2ff";
var SWAMPEASY_COLOR = "#cc4cff";
var SWAMPHARD_COLOR = "#510ca0";
var WASTES_COLOR = "#aef9f4";
var HOME_COLOR = "#62c43e";
var EGGNEST_COLOR = "#62c43e";
var OTHERNEST_COLOR = "#62c43e";

// biome descriptions
var FORESTEASY_DESC = "You are in the western forests. The flora gets denser and thicker to the south and west, and thins out considerably to the north.";
var FORESTMED_DESC = "You are in the northern forests. The plants are thinner here than those in the southern forests. You see an open plain to the southeast and a deep gorge to the north and west. ";
var FORESTHARD_DESC = "You are in the eastern forests. The plants are thickest here and form an impenetrable wall to the east and south.";
var PLAINSEASY_DESC= "You are in the southern plains. Thin grass stretches to the north and east.";
var PLAINSHARD_DESC = "You are in the northern plains. White dunes are visible in the northeast.";
var RIVER_DESC = "You wade through the river.";
var SWAMPEASY_DESC = "You are in a swamp.";
var SWAMPHARD_DESC = "You are in a swamp. It's harder to traverse compared to the southern and western swamps.";
var WASTES_DESC = "You are in the wastes. A desert of fine, white sand stretches indefinitely to the north and east. To the south and west you see the sunbaked flats of the eastern plains.";
var HOME_DESC = "You are currently standing in a nest. Is anyone home?";
var EGGNEST_DESC = "You are currently standing in a nest. Is anyone home?";
var OTHERNEST_DESC = "You are currently standing in a nest. Is anyone home?";

// directions
var NORTH = "north";
var NORTHWEST = "northwest";
var WEST = "west";
var SOUTHWEST = "southwest";
var SOUTH = "south";
var SOUTHEAST = "southeast";
var EAST = "east";
var NORTHEAST = "northeast";
var WAIT = "wait";

// level caps
var FIRSTLEVEL = 100;
var SECONDLEVEL = 500;
var THIRDLEVEL = 1500;
var LEVELCAPLOW = 2200;
var LEVELCAPMED = 2500;
var LEVELCAPHIGH = 3000;

// for displaying color bars
var LOWPERCENT = 40;
var HIGHPERCENT = 90;

// world map
var MAP = [
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, RIVER, RIVER, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD],
    [EGGNEST, FORESTMED, SWAMPEASY, SWAMPEASY, RIVER, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, PLAINSHARD],
    [FORESTMED, FORESTMED, PLAINSEASY, SWAMPEASY, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, SWAMPHARD, PLAINSHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, RIVER, SWAMPHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, RIVER, SWAMPHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, RIVER, RIVER, FORESTHARD, OTHERNEST, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, HOME, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, EGGNEST, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD]
];

// enemies
// format: new Enemy({"name":"", "danger":});
// insects
var MILLIPEDE = new Enemy({"name":"Millipede", "danger":.2, "agilityModifier":.4, "energyModifier":4, "predator":false, "description":"a millipede crawling in the dirt"});
var BEETLE = new Enemy({"name":"Beetle", "danger":.1, "agilityModifier":.8, "energyModifier":1.5, "predator":false, "description":"a beetle"});
var DRAGONFLY = new Enemy({"name":"Dragonfly", "danger":.2, "agilityModifier":1.5, "energyModifier":3, "predator":false, "description":"a perched dragonfly"});
var SCORPION = new Enemy({"name":"Scorpion", "danger":10, "energyModifier":.5, "predator":true, "description":"a scorpion hiding under a rock"});
var BOB = new Enemy({"name":"Bob", "danger":.1, "agilityModifier":.01, "energyModifier":50, "predator":false, "description":"a snail named Bob"});
var MEGABOB = new Enemy({"name":"Megabob", "danger":100, "energyModifier":10, "predator":false, "description":"a very large snail named Bob"});

// reptiles
var LIZARD = new Enemy({"name":"Lizard", "danger":4, "predator":true, "description":"a lizard warming itself in the sun"});
var IGUANA = new Enemy({"name":"Iguana", "danger":8, "energyModifier":1.1, "predator":false, "description":"an iguana on a branch"});
var ALLIGATOR = new Enemy({"name":"Alligator", "danger":700, "predator":true, "description":"a gaping alligator"});

// amphibians
var MUDFISH = new Enemy({"name":"Mudfish", "danger":50, "agilityModifier":.5, "predator":false, "description":"a mudfish"});
var FROG = new Enemy({"name":"Frog", "danger":25, "agilityModifier":1.1, "predator":false, "description":"a frog"});

// arborsaurs
var MOMMA = new Enemy({"name":"Adult Female Arborsaur", "danger":2200, "predator":false, "description":"a female arborsaur"});
var J_ARBORSAUR_WEAK = new Enemy({"name":"Juvenile Arborsaur", "danger":100, "predator":true, "description":"a juvenile arborsaur"});
var J_ARBORSAUR_MED = new Enemy({"name":"Juvenile Arborsaur", "danger":200, "predator":true, "description":"a juvenile arborsaur"});
var J_ARBORSAUR_STRONG = new Enemy({"name":"Juvenile Arborsaur", "danger":350, "predator":true, "description":"a juvenile arborsaur"});
var F_ARBORSAUR_WEAK = new Enemy({"name":"Adult Female Arborsaur", "danger":2000, "predator":true, "description":"a female arborsaur"});
var F_ARBORSAUR_MED = new Enemy({"name":"Adult Female Arborsaur", "danger":2200, "predator":true, "description":"a female arborsaur"});
var F_ARBORSAUR_STRONG = new Enemy({"name":"Adult Female Arborsaur", "danger":2700, "predator":true, "description":"a female arborsaur"});
var M_ARBORSAUR_WEAK = new Enemy({"name":"Adult Male Arborsaur", "danger":2300, "predator":true, "description":"a male arborsaur"});
var M_ARBORSAUR_MED = new Enemy({"name":"Adult Male Arborsaur", "danger":2500, "predator":true, "description":"a male arborsaur"});
var M_ARBORSAUR_STRONG = new Enemy({"name":"Adult Male Arborsaur", "danger":3000, "predator":true, "description":"a male arborsaur"});

// lungs
var J_LUNG = new Enemy({"name":"Juvenile Lung", "danger":120, "predator":true, "description":"a juvenile lung"});
var LUNG_WEAK = new Enemy({"name":"Adult Lung", "danger":450, "predator":true, "description":"an adult lung"});
var LUNG_MED = new Enemy({"name":"Adult Lung", "danger":500, "predator":true, "description":"an adult lung"});
var LUNG_STRONG = new Enemy({"name":"Adult Lung", "danger":670, "predator":true, "description":"an adult lung"});

// wyverns
var DAPHYLDRAKE = new Enemy({"name":"Daphyldrake", "danger":60, "agilityModifier":1.5, "predator":true, "description":"a daphyldrake resting on the ground"});
var WYVERN = new Enemy({"name":"Wyvern", "danger":1700, "agilityModifier":1.1, "predator":true, "description":"a wyvern picking at a rancid carcass"});

// birds
var JOHNNIE = new Enemy({"name":"Johnnie", "danger":16, "energyModifier":1.3, "predator":false, "description":"a johnnie looking at you nervously"});
var STEEVIE = new Enemy({"name":"Steevie", "danger":800, "agilityModifier":1.2, "energyModifier":1.1, "predator":false, "description":"a steevie scratching at the dirt"});
var SNIPEY = new Enemy({"name":"Snipey", "danger":80, "agilityModifier":1.1, "predator":false, "description":"a snipey standing in the reeds"});

// large herbivores
var AVALON = new Enemy({"name":"Avalon", "danger":550, "predator":false, "description":"an avalon"});
var BEHEMOTH = new Enemy({"name":"Behemoth", "danger":1920, "predator":false, "description":"a behemoth"});
var TUSKER = new Enemy({"name":"Tusker", "danger":2790, "predator":true, "description":"a grazing tusker"});
var ATLAS = new Enemy({"name":"Atlas", "danger":6000, "predator":false, "description":"an atlas"});   // good luck killing this thing
var DIPLO = new Enemy({"name":"Diplo", "danger":100000, "predator":false, "description":"a diplo"});    // hah

// large carnivores
var DREAD = new Enemy({"name":"Dread", "danger":450, "agilityModifier":1.1, "predator":true, "description":"a dread sharpening it's claws"});
var DREWSARK = new Enemy({"name":"Drewsark", "danger":800, "energyModifier":.8, "predator":true, "description":"a laughing drewsark"});
var YIPYIP = new Enemy({"name":"Yipyip", "danger":1067, "predator":true, "description":"a yipyip staring at you"});

// biome enemy generation
var FORESTEASY_GENERATOR = [{"enemy":BEETLE, "probability":35}, {"enemy":DRAGONFLY, "probability":20}, 
    {"enemy":MILLIPEDE, "probability":40}, {"enemy":LIZARD, "probability":15}, {"enemy":JOHNNIE, "probability":10}, 
    {"enemy":J_LUNG, "probability":5}, {"enemy":LUNG_WEAK, "probability":2}, {"enemy":LUNG_MED, "probability":1}, 
    {"enemy":J_ARBORSAUR_WEAK, "probability":2}, {"enemy":J_ARBORSAUR_MED, "probability":1}, {"enemy":F_ARBORSAUR_MED, "probability":1}];
var FORESTMED_GENERATOR = [{"enemy":IGUANA, "probability":10}, {"enemy":SCORPION, "probability":9}, 
    {"enemy":MILLIPEDE, "probability":2}, {"enemy":LIZARD, "probability":15}, {"enemy":JOHNNIE, "probability":28}, 
    {"enemy":J_LUNG, "probability":8}, {"enemy":LUNG_MED, "probability":7}, {"enemy":LUNG_STRONG, "probability":5}, 
    {"enemy":J_ARBORSAUR_WEAK, "probability":2}, {"enemy":J_ARBORSAUR_STRONG, "probability":7}, {"enemy":F_ARBORSAUR_MED, "probability":6}];
var FORESTHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var PLAINSEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var PLAINSHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var RIVER_GENERATOR = [];
var SWAMPEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var SWAMPHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var WASTES_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var HOME_GENERATOR = [{"enemy":BEETLE, "probability":50}];
var EGGNEST_GENERATOR = [{"enemy":J_LUNG, "probability":50}, {"enemy":LUNG_STRONG, "probability":50}, {"enemy":LUNG_MED, "probability":30}, {"enemy":LIZARD, "probability":10}];
var OTHERNEST_GENERATOR = [];

var pb = new ParagraphBuffer();

var enableUI = true;

// egg nest egg count. Start at 3.
var eggsSouthCount = 3;
var eggsNorthCount = 3;

// pre-level choices
var mommaPresent = false; // choice1 is momma here?
var metabolismEnergy = STARVEMED;   // choice2 what is growth like?
var metabolismHealth = HEALMED;
var metabolismLevelCap = LEVELCAPMED;
var packHunter = false; // turn pack hunting on?

// level
var currentLevel = 0;
// offspring
var offspring = 0;

// starve rate
var starveRate = STARVEMED;
// heal rate 
var healRate = HEALMED;

// weight
var currentWeight = 1.5;
// energy
var currentEnergy = 100;
// health
var currentHealth = 100;

// player's current location
var currentLocation = new PlayerLocation();

// times the player has stayed in the same location
var idleTime = 0;

// current enemies
var enemy1;
var enemy2;
var enemy3;
var enemy4;

/***** Objects *****/

/*
 * Use an info array to initialize the enemy. 
 * info array:
 * - name: name of enemy, capitalized first letter (eg. Beetle)
 * - danger: how dangerous the enemy is
 * - agilityModifier: modifies the agility by a multiplier
 * - energyModifier: modifies the energy by a multiplier
 * - aggressive: checks if the enemy will pounce or not 
 * - desciption: description that will be printed out in the "You see..." string
 * 
 * @param {type} info
 * @returns {Enemy}
 */
function Enemy(info) {
    
    if(info["name"]) {
        this.name = info["name"];
    }
    else {
        console.log("Error: No name (Enemy)");
    }

    if(info["danger"]) {
        this.danger = info["danger"];
    }
    else {
        console.log("Error: No danger (Enemy)");
    }
    
    if(info["agilityModifier"]) {
        this.agilityModifier = info["agilityModifier"];
    }
    
    if(info["energyModifier"]) {
        this.energyModifier = info["energyModifier"];
    }
    
    // TODO: fix this so it says aggressive instead
    if(info["predator"]) {
        this.aggressive = info["predator"];
    }
    
    if(info["description"]) {
        this.description = info["description"];
    }
}

/*
 * Location varructor
 * 
 * @returns {PlayerLocation}
 */
function PlayerLocation() {
    this.index = 2; // index
    this.row = 12; // row
    this.biome = HOME;
}

/***** Actual Game Methods *****/

/*
 * Use in move() to check if the player is still in the map.
 * 
 * @param {type} index
 * @param {type} row
 * @returns {Boolean}
 */
function validatePosition(index, row) {
    if(index < 0 || row < 0 || index > 13 || row > 13) {
        console.log("Invalid position");
        return false;
    }
    console.log("Valid position");
    return true;    //valid!
}


function drown(location) {
    if(currentLevel < 3 && location.biome === RIVER) {
        return true;
    }
    return false;
}

/*
 * 
 * @param {type} direction
 * @returns {PlayerLocation|currentLocation}
 */
function move(direction) {
    
    var newLocation = new PlayerLocation();
    
    if(direction === NORTH) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index;
    }
    else if(direction === NORTHWEST) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === WEST) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === SOUTHWEST) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === SOUTH) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index;
    }
    else if(direction === SOUTHEAST) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === EAST) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === NORTHEAST) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === WAIT) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index;
    }
    else {
        // I should really read some more about exception handling
        console.log("Error: Invalid direction (move)");
    }
        
    /* A cool way to do it: 
        var map = {
            "N": function() {
                //do something...
            }
            ...
        };
        var func = map[direction];
        if(func) {
            func();
        }
    */
   
   console.log("Moving to " + newLocation.index + ", " + newLocation.row + " from " + currentLocation.index + ", " + currentLocation.row + " (move)");
   
   if(validatePosition(newLocation.index, newLocation.row) === true) {
       // index
       currentLocation.index = newLocation.index;
       currentLocation.row = newLocation.row;
       // biome
       currentLocation.biome = MAP[newLocation.row][newLocation.index];
       
       // did player idle
       if(currentLocation.index === newLocation.index && currentLocation.row === newLocation.row) {
           idleTime++;
       }
       
       // generate enemies
       generateEnemies(currentLocation.row, currentLocation.index);
       
       // starve and heal on valid move
       if(direction === WAIT) {
           starve(true);
       }
       else {
          starve(false); 
       }
       
       heal();
   }
      
   return currentLocation;
}

/*
 * Attack button functionality
 * 
 * @param {type} enemy
 * @returns {Boolean}
 */
function attack(enemy) {
    var energy = calculateEnemyEnergy(enemy);
    var damage = calculateEnemyDamage(enemy);
    var agility = calculateEnemyAgility(enemy);
    
    // exit if enemy runs away
    if(enemyFlee(agility) === true) {
        writeFlee(enemy);
        console.log("Enemy fled (attack)");
        starve();
        
        return;
    }
    
    // incur damage on player during attack
    currentHealth = currentHealth - damage;
    
    // gain energy and grow
    currentEnergy = currentEnergy + energy;
    currentWeight = currentWeight + energy/10;
    
    if(currentEnergy > 100) {
        currentEnergy = 100;
    }
    
    writeAttack(enemy, damage);
    
    console.log("Attacked " + enemy.name + ". Health: " + currentHealth + " Energy: " + currentEnergy + "Size: " + currentWeight + " (attack)");

}

/*
 * TODO: come back to this
 * @returns {Boolean}
 */
function mate() {
    if(currentLevel === 3) {
        offspring = offspring + 1;
        return true;
    }
    return false;
}

/*
 * Return true if player starves to death
 * 
 * @returns {Boolean}
 */
function starve(waited) {
    if(waited === false) {
        currentEnergy = currentEnergy - metabolismEnergy;
    }
    if(waited === true) {
        currentEnergy = currentEnergy - metabolismEnergy/2;
    }
    
    console.log("You starve a little. Current energy at: " + currentEnergy + " (starve)");
    
    return false;
}

/*
 * Heal player
 * 
 * @returns {undefined}
 */
function heal() {
    if(currentHealth < MAXHEALTH) {
        currentHealth = currentHealth + metabolismHealth;
    }
    if(currentHealth > 100) {
        currentHealth = 100;
    }
}

/*
 * Increase player size.
 * 
 * @param {type} energy
 * @returns {undefined}
 */
function grow(energy) {
    // only grow if less than level cap
    if(currentWeight < metabolismLevelCap) {
        currentWeight = currentWeight + energy;
    }
}

/*
 * Eat an egg if there is one. If there are no more eggs, no eating is allowed.
 * Returns true if player successfully ate an egg.
 * 
 * @param {type} location
 * @returns {Boolean}
 */
function eatEgg(location) {
    // decrement egg count in respective nest
    if(location.row === 4 && location.index === 0 && location.biome === EGGNEST) {
        if(eggsNorthCount === 0) {
            return false;
        }
        eggsNorthCount = eggsNorthCount - 1;
    }
    else if(location.row === 13 && location.index === 7 && location.biome === EGGNEST) {
        if(eggsSouthCount === 0) {
            return false;
        }
        eggsSouthCount = eggsSouthCount - 1;
    }
    else {
        console.log("Not in an egg nest, how was this called? (eatEgg)");
    }
    
    // The player is now full
    currentEnergy = 100;
    
    return true;
}

/*
 * Is the player dead?
 * 
 * @returns {Boolean}
 */
function validatePlayerLife() {
    if(currentHealth > 0 && currentHealth > 0) {
        return true;
    }
    else {
        return false;
    }
}

/*
 * Check if the player's position is bordering a river.
 * 
 * @param {type} index
 * @param {type} row
 * @returns {Array|isBorderingRiver.locations}
 */
function isBorderingRiver(row, index) {
    var locations = [];
    // north
    if(validatePosition(row-1, index) && MAP[row-1][index] === RIVER) {
        locations.push(NORTH);
    }
    // south
    if(validatePosition(row+1, index) && MAP[row+1][index] === RIVER) {
        locations.push(SOUTH);
    }
    // west
    if(validatePosition(row, index-1) && MAP[row][index-1] === RIVER) {
        locations.push(WEST);
    }
    // east
    if(validatePosition(row, index+1) && MAP[row][index+1] === RIVER) {
        locations.push(EAST);
    }
    return locations;
}

/*
 * Calculate the amount of damage the enemy should do
 * 
 * Inverse relationship to the player's weight.
 * 
 * @param {type} enemy
 * @returns {undefined}
 */
function calculateEnemyDamage(enemy) {
    var damage = enemy.danger/currentWeight * 100;
    
    // player can attack safely if enemy is significantly smaller
    if(enemy.danger < currentWeight/2) {
        return 0;
    }
    
    console.log(enemy.name + " danger: " + damage + " (calculateEnemyDamage)");
    
    return damage;
}

/*
 * Will the enemy pounce?
 * Only happens after "wait" command and if the enemy is larger than the player.
 * 
 * Keep an enemy in the display if it is much stronger than the player. Each 
 * idle action the user makes runs a random function testing to see if the 
 * enemy will pounce.
 * 
 * @param {type} enemy
 * @returns {Boolean}
 */
function isEnemyPounce(enemy) {
    var aggression = calculateEnemyDamage(enemy);
    
    if(aggression > 200) {
        aggression = 100;
    }
    else if(aggression <= 0) {
        return false;
    }
    
    // do not pounce on first move to a location
    if(idleTime === 0) {
        return false;
    }
    
    // will the enemy pounce?
    if(getRandomNum(0,100)-idleTime*2 < aggression/5 && enemy.aggressive === true) {
        console.log("Enemy " + enemy.name + " pounced.");
        // was it successful?
        //if(getRandomNum(0, 100) < 100*(currentWeight/enemy.danger)) {
            // TODO: player fled string
            console.log("Enemy has attacked.");
            return true;
        //}
        //console.log("Enemy attempted to pounce but missed.");
    }
    
    // did not pounce
    return false;
}

/**
 * 
 * @param {type} enemy
 * @returns {undefined}
 */
function pounce(enemy) {
    var enemyPounced = isEnemyPounce(enemy);
    
    if(enemyPounced) {
        console.log("Perform pounce attack calculations.");
        
        // TODO: pounce string
        var damage = calculateEnemyDamage(enemy);

        console.log("The enemy has pounced and did " + damage + " damage (pounce)");

        // incur damage on player during attack
        currentHealth = currentHealth - damage;

        if(currentEnergy > 100) {
            currentEnergy = 100;
        }
        
        return true;
        // TODO: unique attack phrase
    }
    return false;
}

function pounceAll() {
    var pounced = false;
    
    if(idleTime <= 0) {
        return;
    }
    
    var enemyList = Array();
    
    if(enemy1) {
        enemyList.push(enemy1);
    }
    if(enemy2) {
        enemyList.push(enemy2);
    }
    if(enemy3) {
        enemyList.push(enemy3);
    }
    if(enemy4) {
        enemyList.push(enemy4);
    }
    
    for(var i = 0; i < enemyList.length; i++) {
        if(enemyList[i]) {
            pounced = pounce(enemyList[i]);
            if(pounced) {
                writePounceResult(enemyList[i], pounced);
                break;
            }
        }
    }
    
    if(currentHealth <= 0 && pounced === true) {
        gameOver(POUNCE);
        return true;
    }
    
    return false;
}

/*
 * Calculate enemy agility
 * 
 * Direct relationship to player's weight
 * 
 * @param {type} enemy
 * @returns {Number}
 */
function calculateEnemyAgility(enemy) {
    var agility = (1 - enemy.danger/currentWeight) * currentWeight;
    
    if(agility < 0) {
        agility = 0;
    }
    if(agility > 100) {
        agility = 100;
    }
    
    if(enemy.agilityModifier) {
        agility = agility * enemy.agilityModifier;
    }
    
    console.log(enemy.name + " agility: " + agility + " (calculateEnemyAgility)");
    
    return agility;
}

/*
 * Calculate how much energy the player gains from eating
 * 
 * @param {type} enemy
 * @returns {Number}
 */
function calculateEnemyEnergy(enemy) {
    var energy = enemy.danger/currentWeight * 100;
    
    if(enemy.energyModifier) {
        energy = energy * enemy.energyModifier;
    }
    
    console.log(enemy.name + " energy: " + energy + " (calculateEnemyEnergy)");
    
    return energy;
}

/*
 * Did the enemy flee successfully?
 * 
 * @param {type} agility
 * @returns {Boolean}
 */
function enemyFlee(agility) {
    if(getRandomNum(0, 100) < agility) {
        return true;
    }
    return false;
}

/*
 * Helper method for generateEnemies. Actually performs the generation and sets the enemy slots.
 * chanceOfNothing should be between 0 and 100.
 * 
 * @param {type} chanceOfNothing
 * @param {type} generator
 * @returns {undefined}
 */
function generateEnemiesHelper(chanceOfNothing, generator) {
    var enemiesToDisplay = Array();
    
    // One for each of the enemy slots
    for(var i = 0; i < 4; i++) {   
        if(getRandomNum(0, 100) < chanceOfNothing) { 
            enemiesToDisplay[i] = null;
        }
        else {
            var newEnemy = randomEnemyGenerator(generator);
            // only add unique enemies
            var j = 0;
            for(j; j < enemiesToDisplay.length; j++) {
                // NOTE: I knoe NB complains about this, but using != instead of !== for null is better since it also accounts for "undefined"
                if(enemiesToDisplay[j] != null && enemiesToDisplay[j].name === newEnemy.name) {
                    break;
                }
            }
            if(j === enemiesToDisplay.length) {
                enemiesToDisplay[i] = newEnemy;
            }
        }
    }
    
    enemy1 = enemiesToDisplay[0];
    enemy2 = enemiesToDisplay[1];
    enemy3 = enemiesToDisplay[2];
    enemy4 = enemiesToDisplay[3];
    
    return enemiesToDisplay;
}

function generateEnemies(row, index) {  // TODO: maybe turn this into switch instead
    var enemiesToDisplay = Array();
    
    if(MAP[row][index] === FORESTEASY) {
        enemiesToDisplay = generateEnemiesHelper(75, FORESTEASY_GENERATOR);
    }
    else if(MAP[row][index] === FORESTMED) {
        enemiesToDisplay = generateEnemiesHelper(80, FORESTMED_GENERATOR);
        displayEnemies(enemiesToDisplay);
    }
    else if(MAP[row][index] === FORESTHARD) {
        enemiesToDisplay = generateEnemiesHelper(90, FORESTHARD_GENERATOR);
    }
    else if(MAP[row][index] === PLAINSEASY) {
        enemiesToDisplay = generateEnemiesHelper(75, PLAINSEASY_GENERATOR);
    }
    else if(MAP[row][index] === PLAINSHARD) {
        enemiesToDisplay = generateEnemiesHelper(90, PLAINSHARD_GENERATOR);
        displayEnemies(enemiesToDisplay);
    }
    else if(MAP[row][index] === RIVER) {
        enemiesToDisplay = generateEnemiesHelper(100, RIVER_GENERATOR);
    }
    else if(MAP[row][index] === SWAMPEASY) {
        enemiesToDisplay = generateEnemiesHelper(70, SWAMPEASY_GENERATOR);
    }
    else if(MAP[row][index] === SWAMPHARD) {
        enemiesToDisplay = generateEnemiesHelper(90, SWAMPHARD_GENERATOR);
    }
    else if(MAP[row][index] === WASTES) {
        enemiesToDisplay = generateEnemiesHelper(95, WASTES_GENERATOR);
    }
    else if(MAP[row][index] === HOME) {
        enemiesToDisplay = generateEnemiesHelper(80, HOME_GENERATOR);
    }
    else if(MAP[row][index] === EGGNEST) {
        enemiesToDisplay = generateEnemiesHelper(80, EGGNEST_GENERATOR);
    }
    else if(MAP[row][index] === OTHERNEST) {
        enemiesToDisplay = generateEnemiesHelper(90, OTHERNEST_GENERATOR);
    }
    else {
        console.log("Error: unidentified biome. Check if -1 or some other number (generateEnemies)");
        enemiesToDisplay = [null, null, null, null];
    }
    
    if(enemiesToDisplay.length !== 0) {
       displayEnemies(enemiesToDisplay);
    }
    else {
        console.log("Warning: No enemies (generateEnemies).");
    }

    // eh, needed for reloadEnemies
    if(enemiesToDisplay.length !== 0) {
        return enemiesToDisplay;
    }
    
}

/*
 * 
 * @param {type} enemy
 * @returns {Boolean}
 */
function isMateable(enemy) {
    if(enemy.name === "Adult Female Arborsaur" && enemy !== MOMMA) {
        return true;
    }
    return false;
}

function checkGameOver(energy, health) {
    if(energy <= 0) {
        gameOver(STARVED);
        return STARVED;
    }
    
    if(health <= 0) {
        gameOver(ATTACKED);
        return ATTACKED;
    }
    
    if(drown(currentLocation)) {
        gameOver(DROWNED);
        return DROWNED;
    }
    
    // did not game over
    return NOT_DIE;
}

/*
 * TODO: put checks inside this function so I can call it from the JQ functions
 * End game if player won or lose.
 * 
 * @param {type} wonGame
 * @returns {undefined}
 */
function gameOver(deathType) {    
    // lock UI
    lockUI();
    
    displayHealth(0);
    displayEnergy(0);
    
    // clear enemies
    var emptyArray = Array();
    displayEnemies(emptyArray);
    
    if(deathType !== POUNCE) {
        writeGameOver(deathType);
    }
}

/***** UI Stuff *****/

/*
 * For game over scenarios.
 * 
 * @returns {undefined}
 */
function lockUI() {
    enableUI = false;
    $(".direction").hover(function() {
        $(this).css("color", "black");
    });
    hideEatButton();
}

function moveMapMarker(newRow, newIndex) {
    console.log("Moving display to here: " + newIndex + ", " + newRow + " (moveMapMarker)");
    
    // clear current position's marker
    $("#placemark").remove();
    
    // I hate the way jQuery selects indices; might just use JS in the future
    var newCoords = newRow*14 + newIndex;
    
    // change the location as you go to reveal the minimap
    changeLocationColor(newRow, newIndex);
    
    // display new position's marker
    $("#minimaptable td").eq(newCoords).html("<div id='placemark'></div>");
}

function changeLocationColor(row, index) {
    var coords = row*14 + index;
    var newColor = "";
    
    if(MAP[row][index] === FORESTEASY) {
        newColor = FORESTEASY_COLOR;
    }
    else if(MAP[row][index] === FORESTMED) {
        newColor = FORESTMED_COLOR;
    }
    else if(MAP[row][index] === FORESTHARD) {
        newColor = FORESTHARD_COLOR;
    }
    else if(MAP[row][index] === PLAINSEASY) {
        newColor = PLAINSEASY_COLOR;
    }
    else if(MAP[row][index] === PLAINSHARD) {
        newColor = PLAINSHARD_COLOR;
    }
    else if(MAP[row][index] === RIVER) {
        newColor = RIVER_COLOR;
    }
    else if(MAP[row][index] === SWAMPEASY) {
        newColor = SWAMPEASY_COLOR;
    }
    else if(MAP[row][index] === SWAMPHARD) {
        newColor = SWAMPHARD_COLOR;
    }
    else if(MAP[row][index] === WASTES) {
        newColor = WASTES_COLOR;
    }
    else if(MAP[row][index] === HOME) {
        newColor = HOME_COLOR;
    }
    else if(MAP[row][index] === EGGNEST) {
        newColor = EGGNEST_COLOR;
    }
    else if(MAP[row][index] === OTHERNEST) {
        newColor = OTHERNEST_COLOR;
    }
    else {
        console.log("Error: unidentified biome. Check if -1 or some other number (changeLocationColor)");
        newColor = UNIDENTIFIED_COLOR;
    }
    
    $("#minimaptable td").eq(coords).css("background-color", newColor);
}

function displayEnemyMateButton(location, enemy) {
    if(isMateable(enemy)) {
        $(location + ">.mate").css("display", "inline-block");
    }
    else {
        $(location + ">.mate").css("display", "none");
    }
}

/*
 * Set an enemy's info (name, bars) in the gui.
 * 
 * @param {type} location
 * @param {type} enemy
 * @returns {undefined}
 */
function displayEnemyBars(location, enemy) {    
    var dangerPercent = calculateEnemyDamage(enemy)/1;
    var agilityPercent = calculateEnemyAgility(enemy)/1;
    var energyPercent = calculateEnemyEnergy(enemy)/1;
    
    console.log("Sizebar percentage: " + dangerPercent + " (displayEnemyBars)");
    
    // sizebar color

    if(currentHealth - dangerPercent <= 0) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "red");
    }
    else if(dangerPercent > 10) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "yellow");
    }
    else {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "lime");
    }
    
    console.log("Agility percentage: " + agilityPercent + " (displayEnemyBars)");
    
    // agilitybar color
    $(location + ">.stats>.enemyagility>.agilitybar").css("background-color", "lime");
    
    console.log("Energybar percentage: " + energyPercent + " (displayEnemyBars)");
    
    // energybar color
    $(location + ">.stats>.enemyenergy>.energybar").css("background-color", "lime");
    
    if(dangerPercent > 100) {
        dangerPercent = 100;
    }
    if(agilityPercent > 100) {
        agilityPercent = 100;
    }
    if(energyPercent > 100) {
        energyPercent = 100;
    }
    
    var nameLocation = location + ">.enemyname";
    var dangerLocation = location + ">.stats>.enemysize>.sizebar";
    var agilityLocation = location + ">.stats>.enemyagility>.agilitybar";
    var energyLocation = location + ">.stats>.enemyenergy>.energybar";
    
    
    displayEnemyMateButton(location, enemy);
    $(nameLocation).html(enemy.name);
    $(dangerLocation).css("width", dangerPercent);
    $(agilityLocation).css("width", agilityPercent);
    $(energyLocation).css("width", energyPercent);
}

function displayEnemies(enemies) {
    
    console.log("Enemies to display: ");
    for(var i = 0; i < 4; i++) {
        if(enemies[i] != null) {
            console.log("\t" + enemies[i].name);
        }
        else {
            console.log("\t" + "null");
        }
    }
    
    var toDisplay = Array();
    // needed to match to the global variable
    var enemyCounter = 1;

    // if enemy exists, get enemy information from global variable
    for(var i = 0; i < 4; i++) {
        var enemyVar = "enemy" + (enemyCounter);
        if(enemies[i]) {
            window[enemyVar] = enemies[i];
            console.log("enemyVar: " + enemyVar);
            toDisplay.push(enemies[i]);
            enemyCounter++;
        }
    }
    
    console.log("toDisplay's length: " + toDisplay.length + " (displayEnemies)");
    
    // fill up remaining space with nulls (necessary??)
    for(var i = toDisplay.length; i < 4; i++) {
        var enemyVar = "enemy" + (enemyCounter);
        console.log("null enemyVar: " + enemyVar);
        window[enemyVar] = null;
        toDisplay.push(null);
        enemyCounter++;
    }
    
    
    if(toDisplay[0] !== null) {
        displayEnemyBars("#enemy1>.desc", toDisplay[0]);
        $("#enemy1").css("display", "inline-block");
    }
    else {
        $("#enemy1").css("display", "none");
    }
    
    if(toDisplay[1] !== null) {
        displayEnemyBars("#enemy2>.desc", toDisplay[1]);
        $("#enemy2").css("display", "inline-block");
    }
    else {
        $("#enemy2").css("display", "none");
    }
    
    if(toDisplay[2] !== null) {
        displayEnemyBars("#enemy3>.desc", toDisplay[2]);
        $("#enemy3").css("display", "inline-block");
    }
    else {
        $("#enemy3").css("display", "none");
    }
    
    if(toDisplay[3] !== null) {
        displayEnemyBars("#enemy4>.desc", toDisplay[3]);
        $("#enemy4").css("display", "inline-block");
    }
    else {
        $("#enemy4").css("display", "none");
    }
    
}

function displayWeight(weight) {
    var string = "Your weight: " + Math.round(weight*10)/10 + " lbs.";
    $("#weight").html(string);
}

function displayEnergy(energy) {
    var string = "Your energy: " + Math.round(energy) + "/100";
    $("#energy").html(string);
}

function displayHealth(health) {
    var string = "Your health: " + Math.round(health) + "/100";
    
    $("#health").html(string);
}

function displayCurrentPlayerInfo() {
    displayWeight(currentWeight);
    displayEnergy(currentEnergy);
    displayHealth(currentHealth);
}

function displayEatButton() {
    $(".eat").css("display", "inline-block");
}

function hideEatButton() {
    $(".eat").css("display", "none");
}

function toggleEatButton(location) {
    if(location.row === 4 && location.index === 0 && location.biome === EGGNEST) {
        if(eggsNorthCount === 0) {
            hideEatButton();
        }
        else {
            displayEatButton();
        }
    }
    else if(location.row === 13 && location.index === 7 && location.biome === EGGNEST) {
        if(eggsSouthCount === 0) {
            hideEatButton();
        }
        else {
            displayEatButton();
        }
    }
    else {
        hideEatButton();
    }
}
    
$(document).ready(function() { 
    
    // display home
    changeLocationColor(currentLocation.row, currentLocation.index);
    createDescription();
    pb.flushBuffer();
    // display info
    displayCurrentPlayerInfo();
    
    /*
     * Compass click
     */
    $(".direction").click(function() {
        if(enableUI === true) {
            
            var pounceDeath = false;

            if(this.id === WAIT) {
                pounceDeath = pounceAll();
            }
            else {
                idleTime = 0;
            }
            
            // Player did not die from being pounced
            if(!pounceDeath) {
                // move
                var newPos = move(this.id);
                moveMapMarker(currentLocation.row, currentLocation.index);
                // if this is an egg nest, display eat button
                toggleEatButton(currentLocation);
                // Prints a description to top div
                createDescription();
                displayCurrentPlayerInfo();
                
                checkGameOver(currentEnergy, currentHealth);
            }
            
            pb.flushBuffer();
        }
    });
    
    /*
     * Attack click
     */
    $(".attack").click(function() {
        writeLocationDescription(currentLocation.row, currentLocation.index);

        console.log("Attacking " + this.parentNode.parentNode.id);
        attack(window[this.parentNode.parentNode.id]);
        
        // died from attack?
        var deathType = checkGameOver(currentEnergy, currentHealth);
        
        // TODO: make it so some enemies remain?
        var lastEnemy = window[this.parentNode.parentNode.id];
        
        var pounceDeath = false;
        pounceDeath = pounceAll();
        idleTime++;
        
        // only move onto next step if enemy has not pounced and killed player
        if(!pounceDeath && deathType === NOT_DIE) {
            // create enemies for area
            generateEnemies(currentLocation.row, currentLocation.index);
            // same enemy?
            writeReloadDescription(lastEnemy);
            // update UI
            displayCurrentPlayerInfo();
        }
    
        pb.flushBuffer();
    });
    
    /*
     * Mate click
     */
    $(".mate").click(function() {
        console.log("Mating");
    });
    
    /* 
     * Display infosheet
     */
    $(".info").click(function() {
        console.log("Infosheet");
    });
    
    $(".eat").click(function() {
        console.log("Eating");
        
        var pounceDeath = false;
        pounceDeath = pounceAll();
        idleTime++;
        
        if(pounceDeath === false) {
            eatEgg(currentLocation);

            // TODO: location, replace egg nest count, etc.
            displayCurrentPlayerInfo();

            writeLocationDescription(currentLocation.row, currentLocation.index);
            generateEnemies(currentLocation.row, currentLocation.index);
            writeEatEgg();
            writeEggDescription(currentLocation.row, currentLocation.index);

            toggleEatButton(currentLocation);
        }
        
        pb.flushBuffer();
    });
    
    $("#restartgame").click(function() {
        location.reload();
    });
    
});

/***** Strings *****/

function ParagraphBuffer() {
    // Strings that make up the paragraph. Deliminated by <br><br> tags.
    this.cache = Array();
    
    // flush the buffer and print to 
    this.flushBuffer = function flushBuffer() {
        var newDescString = "";
        for(var i = 0; i < (this.cache.length - 1); i++) {
            newDescString = newDescString + this.cache[i] + "<br><br>";
        }
        // once more to prevent extra <br><br>
        newDescString = newDescString + this.cache[i];
        
        // print
        console.log("Flushing: wrote this: " + newDescString);
        $("#locationdesc").html(newDescString);
        
        // remove everything if necessary
        this.cache.length = 0;
    };
    
    // write a string to the buffer
    this.writeBuffer = function writeBuffer(newString) {
        console.log("Wrote to buffer: " + newString + " (ParagraphBuffer.writeBuffer)");
        this.cache.push(newString);
    };
    
    // clears the buffer of all contents
    this.clear = function clear() {
        console.log("Buffer cleared. Here's what it said: " + this.cache);
        this.cache.length = 0;
    };
}

function createDescription() {
    writeLocationDescription(currentLocation.row, currentLocation.index);
    
    if(currentLocation.biome !== RIVER) {
        writeRiverBorder();
    }
    
    writeEnemyDescription();
    
    writeEggDescription(currentLocation.row, currentLocation.index);
}

function writeLocationDescription(row, index) {
    var description = "";
    
    switch(MAP[row][index]) {   // TODO
        case FORESTEASY: description = FORESTEASY_DESC;
            break;
        case FORESTMED: description = FORESTMED_DESC;
            break;
        case FORESTHARD: description = FORESTHARD_DESC;
            break;
        case PLAINSEASY: description = PLAINSEASY_DESC;
            break;
        case PLAINSHARD: description = PLAINSHARD_DESC;
            break;
        case RIVER: description = RIVER_DESC;
            break;    
        case SWAMPEASY: description = SWAMPEASY_DESC;
            break;
        case SWAMPHARD: description = SWAMPHARD_DESC;
            break;
        case WASTES: description = WASTES_DESC;
            break;
        case HOME: description = HOME_DESC;
            break;
        case EGGNEST: description = EGGNEST_DESC;
            break;
        case OTHERNEST: description = OTHERNEST_DESC;
            break;
        default:
            console.log("Error: no description available for biome (writeLocationDescription)");
    }
    
    pb.writeBuffer(description);
}

/**
 * NOTE: Assumes that generateEnemies has been called prior to this
 * Puts "another" in front of an enemy that was just eaten.
 * 
 * @param {type} lastEnemy
 * @param {type} enemyList
 * @returns {undefined}
 */
function writeReloadDescription(lastEnemy) {
    // the index at which the lastEnemy is present; -1 if none are the same
    var sameIndex = -1;
    
    // bottom is nearly identical to writeEnemyDescription
    var description = "You see ";
    
    var enemyList = Array();
    
    // remove null enemies
    if(enemy1) {
        enemyList.push(enemy1);
    }
    if (enemy2) {
        enemyList.push(enemy2);
    }
    if (enemy3) {
        enemyList.push(enemy3);
    }
    if(enemy4) {
        enemyList.push(enemy4);
    }
    
    // loop through the array of new enemies to see if any are the same as the old
    for(var i = 0; i < enemyList.length; i++) {
        console.log("Currently at enemy " + i + ": " + enemyList[i]);
        if(lastEnemy != null && enemyList[i] != null && lastEnemy.name === enemyList[i].name) {
            sameIndex = i;
            break;
        }
    }
    
    if(enemyList.length === 0) {
        description = "You see nothing of interest.";
    }
    else if(enemyList.length === 1) {
        if(sameIndex === 0) {
            description = description + "another " + enemyList[0].name.toLowerCase() + ".";
        }
        else {
            description = description + enemyList[0].description + ".";
        }   
    }
    else if(enemyList.length === 2) {
        if(sameIndex === 0) {
            description = description + "another " + enemyList[0].name.toLowerCase() + " and " + enemyList[1].description + ".";
        }
        else if(sameIndex === 1) {
            description = description + enemyList[0].description + " and another " + enemyList[1].name.toLowerCase() + ".";    
        }
        else {
            description = description + enemyList[0].description + " and " + enemyList[1].description + "."; 
        }
    }
    else {
        for(var i = 0; i < (enemyList.length - 1); i++) {            
            // add the "another"
            if(sameIndex === i) {
                description = description + "another " + window[enemyList[i].name.toUpperCase()].name.toLowerCase() + ", ";
                continue;
            }
            
            description = description + enemyList[i].description + ", ";
        }
        // ... and ....
        if(sameIndex === enemyList.length - 1) {
            description = description + "and another " + window[enemyList[enemyList.length - 1].name.toUpperCase()].name.toLowerCase() + ".";
        }
        else {
            description = description + "and " + enemyList[enemyList.length - 1].description + ".";
        }
    }
    console.log("Write: wrote to buffer: " + description);
    pb.writeBuffer(description);
}

function writeEnemyDescription() {
    var description = "You see ";
    
    var enemyList = Array();  // TODO: ... replace with code block from enemy generator
    
    if(enemy1) {
        enemyList.push(enemy1);
    }
    if (enemy2) {
        enemyList.push(enemy2);
    }
    if (enemy3) {
        enemyList.push(enemy3);
    }
    if(enemy4) {
        enemyList.push(enemy4);
    }
    
    if(enemyList.length === 0) {
        description = "You see nothing of interest.";
    }
    else if(enemyList.length === 1) {
        description = description + enemyList[0].description + ".";
    }
    else if(enemyList.length === 2) {
        description = description + enemyList[0].description + " and " + enemyList[1].description + "."; 
    }
    else {
        for(var i = 0; i < (enemyList.length - 1); i++) {
            description = description + enemyList[i].description + ", ";
        }
        // ... and ....
        description = description + "and " + enemyList[enemyList.length - 1].description + ".";
    }
    
    console.log("Write: wrote to buffer: " + description);
    pb.writeBuffer(description);
}

/*
 * Prints quantity of eggs in nest.
 * 
 * @param {type} row
 * @param {type} index
 * @returns {undefined}
 */
function writeEggDescription(row, index) {
    if(row === 4 && index === 0) {   // TODO: make specific to each nest
        if(eggsNorthCount === 0) {
            pb.writeBuffer("The nest is empty.");
        }
        else {
            if(eggsNorthCount === 1) {
                pb.writeBuffer("You see " + eggsNorthCount + " egg in the nest. Eat one?");
            }
            else {
                pb.writeBuffer("You see " + eggsNorthCount + " eggs in the nest. Eat one?");
            }
        }
    }
    if(row === 13 && index === 7) {
        if(eggsSouthCount === 0) {
            pb.writeBuffer("The nest is empty.");
        }
        else {
            if(eggsSouthCount === 1) {
                pb.writeBuffer("You see " + eggsSouthCount + " egg in the nest. Eat one?");
            }
            else {
                pb.writeBuffer("You see " + eggsSouthCount + " eggs in the nest. Eat one?");
            }
        }
    }
}

function writeRiverBorder() {
    var borders = isBorderingRiver(currentLocation.row, currentLocation.index);
    var description = "You hear rushing water to the ";
    
    if(borders.length > 2) {
        for(var i = 0; i < (borders.length - 1); i++) {
            description = description + borders[i] + ", ";
        }
        description = description + "and " + borders[borders.length - 1] + ".";
        pb.writeBuffer(description);
    }
    else if(borders.length === 1) {
        description = description + borders[0];
        pb.writeBuffer(description + ".");
    }
    else if(borders.length === 2) {
        description = description + borders[0] + " and " + borders[1] + ".";
        pb.writeBuffer(description);
    }
    else {
        console.log("No bordering rivers (writeRiverBorder)");
    }
    
}

function writeFlee(enemy) {
    var fleeMessage = "The " + enemy.name.toLowerCase() + " flees.";
    
    pb.writeBuffer(fleeMessage);
}

function writeAttack(enemy, damage) {
    var struggle = "There is a struggle and you are injured.";
    var attackMessage = "You attack and eat the " + enemy.name.toLowerCase() + ".";
    
    if(damage > 0 && damage < 100) {
        attackMessage = attackMessage + " " + struggle;
    }
    
    pb.writeBuffer(attackMessage);
}

function writeGameOver(deathType) {
    var desc = "";
    
    if(deathType === STARVED) {
        desc = STARVED_DESC;
    }
    else if(deathType === DROWNED) {
        desc = DROWNED_DESC;
    }
    else if(deathType === ATTACKED) {
        desc = ATTACKED_DESC;
    }
    else if(deathType === POUNCE) {
        // Needed?
    }
    
    pb.clear();
    pb.writeBuffer(desc);
    pb.writeBuffer(" " + GAME_OVER);
}

function writePounceResult(enemy, pounceSuccess) {
    var desc = articleGenerator(enemy.name) + " " + enemy.name.toLowerCase() + " pounces";
    
    if(pounceSuccess) {
        if(currentHealth <= 0) {
            console.log("Pounce: player killed. Writing message now.");
            desc = desc + " and kills you.";
            pb.clear();
            pb.writeBuffer(desc);
            pb.writeBuffer(" " + GAME_OVER);
        }
        else {
            desc = desc + " and manages to injure you, but you manage to escape.";
        }
    }
    else {
        desc = desc + " but you manage to escape unharmed.";
    }
}

function writeEatEgg() {
    var desc = "You eat an egg.";
    pb.writeBuffer(desc);
}
/***** Tests *****/

function testAttack() {
    
}

function testIsBorderingRiver() {    
    console.log(isBorderingRiver(0, 1)); // E
    console.log(isBorderingRiver(1, 0)); // none
    console.log(isBorderingRiver(2, 3)); // S, W
    console.log(isBorderingRiver(6, 10)); // N, S, E
}

// should display BEETLE and MILLIPEDE at a roughly 50:50 rate.
function testRandomEnemyGenerator() {
    var testList = [{"enemy":BEETLE, "probability":50}, {"enemy":MILLIPEDE, "probability":50}];
    console.log("Enemy returned:" + randomEnemyGenerator(testList).name);
}

function testWriteEnemyDescription() {
    var list = [BEETLE, MILLIPEDE, SCORPION, DRAGONFLY];
    writeEnemyDescription(list);
    pb.flushBuffer();
}

function testWriteRiverBorder() {
    writeRiverBorder();
}

/***** Tools *****/

/*
 * Gets a random number
 * 
 * @param {type} lower
 * @param {type} upper
 * @returns {Number}
 */
function getRandomNum(lower, upper) {
    return (Math.random() * upper) + lower;
}

/*
 * Generate an article (a, an) for a word. Does not take into consideration 
 * phenomes (eg. hour --> a hour).
 * 
 * @param {type} word
 * @returns {String}
 */
function articleGenerator(word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var firstChar = word.charAt(0).toLowerCase();
    
    for(var i = 0; i < vowels.length; i++) {
        if(firstChar === vowels[i]) {
            return "An";
        }
    }
    return "A";
}

/*
 * Randomly generates an enemy from a list of enemy-probability pairs
 * 
 */
function randomEnemyGenerator(list) {
    var totalCount = 0;
    
    // TODO: maybe find way to ensure the type is an array
    
    for(var i = 0; i < list.length; i++) {
        console.log(list[i]);
        totalCount = totalCount + list[i].probability;
    }
    
    console.log("totalCount is: " + totalCount);
    
    var selector = getRandomNum(0, totalCount);
    
    console.log("selector is: " + selector);
    
    var runningTotal = 0;
    for(var i = 0; i < list.length; i++) {
        runningTotal = runningTotal + list[i].probability;
        console.log("runningTotal is: " + runningTotal + ", we are at list element " + i);
        if(runningTotal >= selector) {
            console.log("Enemy returned: " + list[i].enemy.name);
            return list[i].enemy;
        }
    }
    console.log("Error: Hit end of list before making decision, returning final enemy instead (randomEnemyGenerator)");
    return list[list.length - 1].enemy;   // emergency return last element
}

