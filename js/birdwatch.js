/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// total number of units I have currently
var runningTotal = 0;
// cumulative total for units
var cumulativeTotal = 0;
// total number of unique elements seen
var uniqueRunningTotal = 0;
// increment for each click
var clickmeUpcount = 1;
// number of clicks the user has made
var clickTotal = 0;
// increment per second from the autotools
var autoUpcount = 0;

// if total rewards have been unlocked
var unlockedTotal = [false, false, false, 
                    false, false, false,
                    false, false, false,
                    false ];

// if click rewards have been unlocked
var unlockedclick = [false, false, false];

// birdfeeders
// how much the item costs currently
var feedercost = 10;
// rate of increase each second
var feederrate = .1;
// number currently owned
var feederquantity = 0;
// number id
var feederid = 1;

// birdbaths
var bathcost = 150;
var bathrate = 1;
var bathquantity = 0;
var bathid = 2;

// magicians
var magiciancost = 1200;
var magicianrate = 5;
var magicianquantity = 0;
var magicianid = 3;

// whistles
var whistlecost = 14900;
var whistlerate = 10;
var whistlequantity = 0;
var whistleid = 4;

// statues
var statuecost = 160000;
var statuerate = 43;
var statuequantity = 0;
var statueid = 5;

// mansions
var mansioncost = 999800;
var mansionrate = 350;
var mansionquantity = 0;
var mansionid = 6;

function Attractor() {
    
}

function displayTotal() {
    $(".totalcount").text(Math.floor(runningTotal) + " birds attracted (" 
        + uniqueRunningTotal + " unique)");
}

function displayRate() {
    if(autoUpcount === 1) {
        $(".rate").text("Attracting " + autoUpcount + " bird per second");
    }
    else {
        $(".rate").text("Attracting " + Math.round(autoUpcount*10)/10 
            + " birds per second");   
    }
}

function displayNewCostItem1() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem1price").text("Costs " + Math.round(feedercost));
}

function displayItem1Quantity() {
    $("#shopitem1quantity").text("You have " + feederquantity + ", attracting " 
        + Math.round(feederquantity*feederrate*10)/10 + " bps.");
}

function displayNewCostItem2() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem2price").text("Costs " + Math.round(bathcost));
}

function displayItem2Quantity() {
    $("#shopitem2quantity").text("You have " + bathquantity + ", attracting " 
        + Math.round(bathquantity*bathrate*10)/10 + " bps.");
}

function displayNewCostItem3() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem3price").text("Costs " + Math.round(magiciancost));
}

function displayItem3Quantity() {
    $("#shopitem3quantity").text("You have " + magicianquantity + ", summoning " 
        + Math.round(magicianquantity*magicianrate*10)/10 + " bps.");
}

function displayNewCostItem4() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem4price").text("Costs " + Math.round(whistlecost));
}

function displayItem4Quantity() {
    $("#shopitem4quantity").text("You have " + whistlequantity + ", summoning " 
        + Math.round(whistlequantity*whistlerate*10)/10 + " bps.");
}

function displayNewCostItem5() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem5price").text("Costs " + Math.round(statuecost));
}

function displayItem5Quantity() {
    $("#shopitem5quantity").text("You have " + statuequantity + ", summoning " 
        + Math.round(statuequantity*statuerate*10)/10 + " bps.");
}

function displayNewCostItem6() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem6price").text("Costs " + Math.round(mansioncost));
}

function displayItem6Quantity() {
    $("#shopitem6quantity").text("You have " + mansionquantity + ", summoning " 
        + Math.round(mansionquantity*mansionrate*10)/10 + " bps.");
}

function calcNewCost(originalcost) {
    var newcost = originalcost * 1.5;
    return newcost;
}

function autoUpdate() {
    runningTotal = runningTotal+(autoUpcount/100);
    cumulativeTotal = runningTotal;
    achievementChecker(runningTotal, clickTotal, feederquantity, bathquantity, 
        magicianquantity);
    displayTotal();
}

function clearAttractAnnounce(bird) {
    var snip = $(".announcement").text();
    snip = snip.substring(25, (snip.length-1));
    if(snip === bird) {
        $(".announcement").html("");
    }
}

function entryUnlock(species, unlockType, unlockNum) {
    $("#entry" + uniqueRunningTotal).html(species).css("cursor", "pointer").css("display", "block");
    $(".announcement").text("You attracted your first " + species + "!");
    if(unlockType === "totalNum") {
        unlockedTotal[unlockNum] = true;
    }
    uniqueRunningTotal++;
}

function achievementChecker(total, clicks, item1, item2, item3) {
    // total flock size
    switch(true) {
        case (total >= 5000000 && !unlockedTotal[9]):
            entryUnlock("Pupoo", "totalNum", 9);
            break;
        case (total >= 1000000 && !unlockedTotal[8]):
            entryUnlock("Loor", "totalNum", 8);
            break; 
        case (total >= 70007 && !unlockedTotal[7]):
            entryUnlock("Renan Gottle", "totalNum", 7);
            break;
        case (total >= 10052 && !unlockedTotal[6]):
            entryUnlock("Violeteye", "totalNum", 6);
            break; 
        case (total >= 4230 && !unlockedTotal[5]):
            entryUnlock("Noknok", "totalNum", 5);
            break;
        case (total >= 1093 && !unlockedTotal[4]):
            entryUnlock("Redhead Triller", "totalNum", 4);
            break;
        case (total >= 511 && !unlockedTotal[3]):
            entryUnlock("Common Dole", "totalNum", 3);
            break;
        case (total >= 128 && !unlockedTotal[2]):
            entryUnlock("Blackback", "totalNum", 2);
            break;
        case (total >= 25 && !unlockedTotal[1]):
            entryUnlock("Nard", "totalNum", 1);
            break;
        case (total >= 1 && !unlockedTotal[0]):
            entryUnlock("Common Triller", "totalNum", 0);
            break;    
        default:
            // nothing
    }
    
    // number of unique birds
    
    // number of bird feeders
    switch(true) {
        case (item1 >= 1):

            break;
    }
    
    // number of birdbaths
    
    // number of magicians
    
    // number of whistles
    
    // number of statues
    
    // number of mansions
}

// seconds elapsed since page load
/*
var time = 0;
function debugTimer() {
    time++;
    $(".shoptitle").text(time);
}
*/

// for our intents and purposes, the main function
$(document).ready(function() {
    
    setInterval(autoUpdate, 10); // TODO: 3rd party script allows tab out to be accurate
    //setInterval(debugTimer, 1000);
    
    // when the main clickable element is clicked
    $(".mainclick").click(function() {
        runningTotal += clickmeUpcount;
        cumulativeTotal += clickmeUpcount;
        clickTotal++;
        $(".mainclick>img").fadeTo(50, .7);
        $(".mainclick>img").fadeTo(50, 1.0);
        //var rand = Math.floor(Math.random() * 360);
        achievementChecker(runningTotal, clickTotal, feederquantity, 
            bathquantity, magicianquantity);
        displayTotal();
    });
    
    // attractor shop
    $("#special").click(function() {
       $("#special").css("background-color", "#fef2cf").css("cursor", "default");
       $("#attractors").css("background-color", "#e4cda2").css("cursor", "pointer");
       $(".shopitem").css("display", "none"); 
    });
    
    // special shop
    $("#attractors").click(function() {
       $("#attractors").css("background-color", "#fef2cf").css("cursor", "default");
       $("#special").css("background-color", "#e4cda2").css("cursor", "pointer");
       $(".shopitem").css("display", "block"); 
    });
    
    // bird feeder
    $("#shopitem1").click(function() {
        if(runningTotal-feedercost >= 0) {
            runningTotal -= feedercost;
            feedercost = calcNewCost(feedercost);
            autoUpcount += feederrate;
            feederquantity++;
            displayItem1Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem1();
        }
    });
    
    // birdbath
    $("#shopitem2").click(function() {
        if(runningTotal-bathcost >= 0) {
            runningTotal -= bathcost;
            bathcost = calcNewCost(bathcost);
            autoUpcount += bathrate;
            bathquantity++;
            displayItem2Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem2();
        }
    });
    
    // magician
    $("#shopitem3").click(function() {
        if(runningTotal-magiciancost >= 0) {
            runningTotal -= magiciancost;
            magiciancost = calcNewCost(magiciancost);
            autoUpcount += magicianrate;
            magicianquantity++;
            displayItem3Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem3();
        }
    });
    
    // whistle
    $("#shopitem4").click(function() {
        if(runningTotal-whistlecost >= 0) {
            runningTotal -= whistlecost;
            whistlecost = calcNewCost(whistlecost);
            autoUpcount += whistlerate;
            whistlequantity++;
            displayItem4Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem4();
        }
    });
    
    $("#shopitem5").click(function() {
        if(runningTotal-statuecost >= 0) {
            runningTotal -= statuecost;
            statuecost = calcNewCost(statuecost);
            autoUpcount += statuerate;
            statuequantity++;
            displayItem5Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem5();
        }
    });
    
    $("#shopitem6").click(function() {
        if(runningTotal-mansioncost >= 0) {
            runningTotal -= mansioncost;
            mansioncost = calcNewCost(mansioncost);
            autoUpcount += mansionrate;
            mansionquantity++;
            displayItem6Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem6();
        }
    });
    
    $(".entryclose").click(function() {
        $(".entryimage, .entryinfo, .entryclose, .entrytitle").fadeOut(200); 
    });
    
    $("li").click(function() {
       //$(".entryimage, .entryinfo, .entryclose").css("display", "block"); 
       var speciesRaw = $(this).text();
       var species = $(this).text().toLowerCase().trim().replace(/ /g,'');
       // image source
       var img = "img/birdwatch/" + species + ".png";
       // text entry
       var text = $('.' + species).text();
       $(".entryimage>img").attr("src", img);
       $(".entryinfo").text(text);
       $(".entrytitle").text(speciesRaw);
       $(".entryimage, .entryinfo, .entryclose, .entrytitle").fadeIn(200);
       clearAttractAnnounce(speciesRaw);
    });
    
});

