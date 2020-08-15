class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("reset");

    }

    hideE(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");

        this.input.position(displayWidth/2-20,displayHeight/2-70);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);

       this.button.mousePressed(()=>{
           
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.playerCount = playerCount;
            this.input.hide();
            this.button.hide();

            player.update();
            player.updateCount(playerCount);

           this.greeting.html("Hello "+ player.name);
           this.greeting.position(displayWidth/2-50,displayHeight/2);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref("/").child("Player").remove();
        })
    }
}