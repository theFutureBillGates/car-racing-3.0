class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.playerCount = null;

    }

    getCount(){
        var PCR = database.ref("playerCount");
        PCR.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
        playerCount:count

        })

    }

    update(){
        var playerIndex = "Player/player"+ playerCount;

        database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance
        })

    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("Player");
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }
}