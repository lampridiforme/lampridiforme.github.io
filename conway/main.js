const BLOCK_SIZE = 10;

let conway = ConwayLogic;
let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');

let length = 100; // user defined size
let width = 1000;
let height = 1000;
let gridSize = 10;

let confettiMode = false;
let paused = false;
let fps = 100;

function pause() {
  paused = true;
}

function run() {
  paused = false;
}

function initCanvas() {
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  let arena = conway.init(width/gridSize, true, true, false);
  renderArena(arena);
  console.log(conway);
  console.log(arena);
}

function step() {
  let arena = conway.next();
  renderArena(arena);
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
  let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  return confettiMode ? colors[Math.floor(Math.random()*colors.length)] : "white";
}

initCanvas();
setInterval(function() {
  if(!paused) step();
}, fps);