class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state

        })
    }

    async start(){
        car1 = createSprite(100,200);
        car1.addImage("car1",car1Image);

        car2 = createSprite(300,200);
        car2.addImage("car2",car2Image);

        car3 = createSprite(500,200);
        car3.addImage("car3",car3Image);

        car4 = createSprite(700,200);
        car4.addImage("car4", car4Image);

        carArray = [car1, car2, car3, car4];
        
        if(gameState == 0){
            player = new Player();
            var PLRRef = await database.ref("playerCount").once("value");
            if(PLRRef.exists()){
                playerCount = PLRRef.val();
                player.getCount();
            }
        
            form = new Form();
            form.display();

        }
    }

    play(){
        form.hideE();
        text("Game Starts!",120,100);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
            //hexa number for the color code
            background("#c68767")

            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
          //  var playerDistance = 130;
           // console.log(allPlayers);

            var X = 175;
            var Y = 0;
            var index = 0;

            for(var i in allPlayers){
                index = index+1;
                //give the position of the cars in X direction
                X = X+200;

                //use the data from the database to display the cars in Y direction
               // console.log(index);
                Y = displayHeight-allPlayers[i].distance;
                carArray[index-1].x = X;
               // console.log(playerCount);
                carArray[index-1].y = Y;

                if(index == player.playerCount){
                    stroke(10);
                  //  fill("red");
                    ellipse(X,Y,60,60);
                  //  console.log(index-1);
                   carArray[index-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y = carArray[index-1].y;
                   

                }


               
             /*   if(i=="player"+player.playerCount){
                  //  console.log(i);
                    fill("red");
                    
                }
                else{
                    fill("black");
                }*/
              //  playerDistance = playerDistance+20;
              //  text(allPlayers[i].name + ": " + allPlayers[i].distance, 120,playerDistance)
            }

        }
        if(keyIsDown(UP_ARROW) && player.playerCount != null){
            player.distance = player.distance+50;
            player.update();
        }

        if(player.distance>3860){
          gameState = 2;
        }

        drawSprites();
    }

   end(){
       game.update(2);
  
   }
}