window.onload = function () {
    Game.init();
}

Game = {
    padding: 15,
    fieldSize: 450,
    init: function () {
        Game.canvas = document.createElement('canvas');
        Game.context = Game.canvas.getContext('2d');
        Game.doc = document.querySelector('.can');
        Game.newGame=document.querySelector('.lead');
        Game.doc.appendChild(Game.canvas);
        Game.layout();

        Game.field = new Field();
        Game.field.prepareFields();
        Game.field.drawField();
        Game.tictac = new TicTac();

        Game.newGame.onclick=function(){
            Game.tictac.resetGame();
            Game.context.clearRect(0,0,Game.canvas.width,Game.canvas.height);
            Game.field.prepareFields();
            Game.field.drawField();
        }



        // Game.canvas.addEventListener('mousedown', function (e) {
        //     var mousePos = getMousePos(e);
        //     Game.ticTac.position = mousePos;
        // }, false);


    },
    layout: function () {
        this.canvas.width = Game.fieldSize + Game.padding * 2;
        this.canvas.height = Game.fieldSize + Game.padding * 2;
    },
}

function getMousePos(e) {
    var rect = Game.canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

