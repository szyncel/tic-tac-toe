window.onload = function () {
    Game.init();
}

Game = {
    padding: 15,
    fieldSize: 450,
    init: function () {
        Game.canvas = document.createElement('canvas');
        Game.context = Game.canvas.getContext('2d');
        var doc = document.querySelector('.can');
        doc.appendChild(Game.canvas);
        Game.layout();

        Game.field = new Field();
        Game.field.prepareFields();
        Game.field.drawField();
        Game.ticTac = new TicTac();

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

