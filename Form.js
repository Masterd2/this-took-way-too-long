class Form{
    constructor(){}

    display(){
        var title=createElement('h2');
        title.html("Ayyy! Welcome to the car racing game! Please pay me. My life is a disaster.")
        title.position(0,10);

        var input=createInput("name");
        input.position(200,200);

        var button=createButton("find worthy opponent");
        button.position(225,400);

        var greeting=createElement('h3');
        greeting.position(125, 200);

        button.mousePressed(function(){
            input.hide();
            title.hide();
            button.hide();

            var name=input.value();

            greeting.html(name+", we are finding you a worthy match. Loading");

            playerCount++;

            if (playerCount>4){
                playerCount=0
            }

            player.upNameDate(name);
            player.upCountDate(playerCount);
        })
    }
}