var database;
var gameState = 0, playerCount = 0;
var game,form,player;
var allPlayers;
var car1,car2,car3,car4,cars;
var c1,c2,c3,c4;
var track;

function preload(){
  formBG = loadImage("form bg.jpg");
  rankBG = loadImage("rank bg.jpg")
  c1 = loadImage("car1.png");
  c2 = loadImage("car2.png");
  c3 = loadImage("car3.png");
  c4 = loadImage("car4.png");
  track = loadImage("track.jpg")

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
game = new Game();
game.getState();
game.start();

}

function draw(){
  background("white");
  if (gameState===0){
   background(formBG)
  }
  if (playerCount===4){
    game.updateState(1);
  }
    if (gameState===1){
      clear ()
      game.play()
    }
    if (gameState===2){
      clear ()
      background(rankBG)
      game.end()
    }
  

}

