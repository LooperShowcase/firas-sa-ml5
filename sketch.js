let player;
let bg;
let playerImg;
let obsImg;
let gameover;
let obstacles = [];
let wordClassifier;
let obs2;

function preload() {
  bg = loadImage("background.jpg");
  playerImg = loadImage("player.png");
  obsImg = loadImage("obstacle.png");
  gameover = loadImage("Gradient-Game-Over-Transparent-PNG.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1200, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);

  if (random(1) < 0.009) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      console.log("Game over !");
      image(gameover, 100, 100);
      noLoop();
    }
  }

  player.show();
  player.move();
}
