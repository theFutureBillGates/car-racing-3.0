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
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

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
        form.hide();
        text("Game Starts!",120,100);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
          //  var playerDistance = 130;
            console.log(allPlayers);

            var X = 0;
            var Y = 0;
            var index = 0;

            for(var i in allPlayers){
                index = index+1;
                //give the position of the cars in X direction
                X = X+200;

                //use the data from the database to display the cars in Y direction
                console.log(index);
                Y = displayHeight-allPlayers[i].distance;
                carArray[index-1].x = X;
               // console.log(playerCount);
                carArray[index-1].y = Y;

                if(index == player.playerCount){
                    console.log(index-1);
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
        drawSprites();
    }
   
}