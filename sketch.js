var database;
var gameState = 0, playerCount, form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var carArray;
var car1Image, car2Image, car3Image, car4Image;
var groundImage;
var trackImage;
function preload(){
  car1Image = loadImage("Sprites.Images/car1.png");
  car2Image = loadImage("Sprites.Images/car2.png");
  car3Image = loadImage("Sprites.Images/car3.png");
  car4Image = loadImage("Sprites.Images/car4.png");

  groundImage = loadImage("Sprites.Images/ground.png" );

  trackImage = loadImage("Sprites.Images/track.jpg");
}

function setup(){
    database = firebase.database();
    
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount == 4){
        game.update(1);
    }

    if(gameState==1){
        clear();
        game.play();
    }

    if(gameState==2){
        game.end();
    }

}