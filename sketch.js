var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var bk1;
var bc1;

function preload(){
   
}
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  var bc1;
}


function draw(){
 
 
  }

