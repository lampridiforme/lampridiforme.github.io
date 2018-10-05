const BLOCK_SIZE = 10;

let conway = ConwayLogic;
let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');

let width = 1000;
let height = 1000;
let gridSize = 10;

let confettiMode = false; // :)
let paused = false;
let fps = 10;

let history = [];
let currentStepNum = -1; // ignore init

function pause() {
  paused = true;
}

function run() {
  paused = false;
}

function initCanvas() {
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  let arena = conway.init(100, true, true, false);
  renderArena(arena);
}

function step() {
  let arena;

  // up to date
  if(currentStepNum === history.length-1) {
    arena = conway.next();
    history.push(deepCopy(arena));
  }
  else {
    arena = history[currentStepNum+1];
  }

  if(arena){ 
    renderArena(arena);
    currentStepNum++;
  }
}

function renderArena(arena) {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  for(let i = 0; i < arena.length; i++) {
    for(let j = 0; j < arena[i].length; j++) {
      if(arena[i][j] === 1) {
        context.fillStyle = getColor();
        context.fillRect(i*gridSize, j*gridSize, gridSize, gridSize);
        context.stroke();
      }
    }
  }
}

function getColor() {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
  return confettiMode ? colors[Math.floor(Math.random()*colors.length)] : "white";
}

function deepCopy(elem) {
  return JSON.parse(JSON.stringify(elem));
}

// what happens each frame
function intervalLogic(newFps) {
  if(!paused) {
    step();
    disableElement('prev');
    disableElement('next');
  }
  else {
    if(currentStepNum > 0) {
      enableElement('prev');
    }
    enableElement('next');
  }

  if(currentStepNum === 0) {
    disableElement('prev');
  }
  setTimeout(intervalLogic, 1000 / fps);
};

// set how fast
function setFps(newFps) {
  fps = newFps;
};

// ------ RANGES -----
// document.getElementById('size').addEventListener('change', function() {
//   gridSize = document.getElementById('size').value;
//   document.getElementById('sizeVal').innerHTML = gridSize;
//   initCanvas();
// });

document.getElementById('fps').addEventListener('input', function() {
  let input = document.getElementById('fps').value;
  setFps(input);
  document.getElementById('fpsVal').innerHTML = input;
});

// ------ EVENTS -----

document.getElementById('reset').addEventListener('click', function() {
  history = [];
  currentStepNum = -1;
  initCanvas();
});

document.getElementById('prev').addEventListener('click', function() {
  if(paused) {
    console.log(currentStepNum);
    if(currentStepNum > 0) {
      currentStepNum--;
      renderArena(history[currentStepNum]);
    }
  }
});

document.getElementById('next').addEventListener('click', function() {
  if(paused) {
    console.log(currentStepNum);
    step();
  }
});

document.getElementById('toggleRun').addEventListener('click', function() {
  if(paused) {
    pressedPlay();
  }
  else {
    pressedPause();
  }
});

function pressedPlay() {
  let pauseImgString = "<img src='../assets/img/conway/pause.svg' />";
  document.getElementById('toggleRun').innerHTML = pauseImgString;
  run();
}

function pressedPause() {
  let playImgString = "<img src='../assets/img/conway/play.svg' />";
  document.getElementById('toggleRun').innerHTML = playImgString;
  pause();
}

function disableElement(id) {
  let elem = document.getElementById(id);
  elem.style.opacity = ".5";
}

function enableElement(id) {
  let elem = document.getElementById(id);
  elem.style.opacity = "1";
}

// ----- INSTANT CALLS ------

initCanvas();
disableElement('prev');
setTimeout(intervalLogic, 1000 / fps);

// setInterval(function() {
//   if(!paused) {
//     step();
//     disableElement('prev');
//     disableElement('next');
//   }
//   else {
//     if(currentStepNum > 0) {
//       enableElement('prev');
//     }
//     enableElement('next');
//   }

//   if(currentStepNum === 0) {
//     disableElement('prev');
//   }
// }, fps);