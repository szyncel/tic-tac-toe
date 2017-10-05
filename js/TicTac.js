function TicTac() {
    this.position;
    this.clickedField;
    this.table = [];

    for (var i = 0; i < 3; i++) {
        this.table[i] = [];
        for (var j = 0; j < 3; j++) {
            this.table[i][j] = "*";
        }
    }

    this.actualTurn = 1;



    Game.canvas.addEventListener('mousedown', function (e) {
        this.position = getMousePos(e);
        this.clickedField = this.checkField();

        if (this.clickedField !== 1) {

            var test = Game.field.fields[this.clickedField.x][this.clickedField.y];
            if (this.table[this.clickedField.x][this.clickedField.y] === "*") {
                if (this.actualTurn === 1) {

                    this.table[this.clickedField.x][this.clickedField.y] = 'x';
                    this.drawX(test.x + 75, test.y + 75);
                    this.test('x');
                    this.actualTurn = 2;


                } else {
                    this.drawO(test.x + 75, test.y + 75);
                    this.table[this.clickedField.x][this.clickedField.y] = 'o';
                    this.test('o');
                    this.actualTurn = 1;
                }
            }


        }

    }.bind(this), false);

}

TicTac.prototype.test = function (ch) {
    var x = this.table;
    if (x[0][0] == ch && x[0][1] == ch && x[0][2] == ch) alert('dziala, Wygrał: ' + ch);
    if (x[1][0] == ch && x[1][1] == ch && x[1][2] == ch) alert('dziala, Wygrał: ' + ch);
    if (x[2][0] == ch && x[2][1] == ch && x[2][2] == ch) alert('dziala, Wygrał: ' + ch);

    if (x[0][0] == ch && x[1][0] == ch && x[2][0] == ch) alert('dziala, Wygrał: ' + ch);
    if (x[0][1] == ch && x[1][1] == ch && x[2][1] == ch) alert('dziala, Wygrał: ' + ch);
    if (x[0][2] == ch && x[1][2] == ch && x[2][2] == ch) alert('dziala, Wygrał: ' + ch);

    if (x[0][0] == ch && x[1][1] == ch && x[2][2] == ch) alert('dziala, Wygrał: ' + ch);
    if (x[2][0] == ch && x[1][1] == ch && x[0][2] == ch) alert('dziala, Wygrał: ' + ch);

    // if (x[0][0] == "x" && x[0][1] == "x" && x[0][2] == "x")
    // if (x[0][0] == "x" && x[0][1] == "x" && x[0][2] == "x")
    // if (x[0][0] == "x" && x[0][1] == "x" && x[0][2] == "x")
    // if (x[0][0] == "x" && x[0][1] == "x" && x[0][2] == "x")


}


TicTac.prototype.drawX = function (x, y) {
    Game.context.strokeStyle="#CA7D00";
    Game.context.beginPath();
    
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
    Game.context.strokeStyle="#CA7D00";
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