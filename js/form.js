class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");

    }

    hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");

        this.input.position(displayWidth/2-20,displayHeight/2-70);
        this.button.position(displayWidth/2+30,displayHeight/2);

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
    }
}