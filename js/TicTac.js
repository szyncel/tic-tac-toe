function TicTac() {
    this.position;
    this.clickedField;
    this.winningCombinations = [];

    this.actualTurn = 1;



    Game.canvas.addEventListener('mousedown', function (e) {
        this.position = getMousePos(e);
        this.clickedField = this.checkField();

        if (this.clickedField !== 1) {

            var test = Game.field.fields[this.clickedField.x][this.clickedField.y];
            if (this.actualTurn === 1) {
                this.drawX(test.x + 75, test.y + 75);
                this.actualTurn = 2;
            } else {
                this.drawO(test.x + 75, test.y + 75);
                this.actualTurn = 1;
            }

        }

    }.bind(this), false);

}


TicTac.prototype.drawX = function (x, y) {
    Game.context.beginPath();
    Game.context.fillStyle = 'black';
    // context.lineCap='round';
    Game.context.lineWidth = 15;
    Game.context.moveTo(x - 50, y - 50);
    Game.context.lineTo(x + 50, y + 50);
    Game.context.stroke();
    Game.context.moveTo(x + 50, y - 50);
    Game.context.lineTo(x - 50, y + 50);
    Game.context.stroke();

}

TicTac.prototype.drawO = function (x, y) {
    Game.context.beginPath();
    Game.context.fillStyle = 'black';
    // context.lineCap='round';
    Game.context.lineWidth = 15;
    Game.context.arc(x, y, 50, 0, 2 * Math.PI);
    Game.context.stroke();

}

TicTac.prototype.checkField = function () {
    var field = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var f = Game.field.fields[i][j];
            // var f = fields[i][j];
            if (this.position.x > f.x && this.position.y > f.y && this.position.x < f.x + 150 && this.position.y < f.y + 150) {
                return {
                    x: i,
                    y: j
                }
            }
        }
    }
    return field;

}