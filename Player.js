class Player {
    constructor (){}

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    upCountDate(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    upNameDate(name){
        var playerIndex="Player " + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}