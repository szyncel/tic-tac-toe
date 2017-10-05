function Field() {
    this.fields = [];
    this.size = 150;
}


Field.prototype.prepareFields = function () {
    for (var i = 0; i < 3; i++) {
        this.fields[i] = [];
        for (var j = 0; j < 3; j++) {
            var posX = i * (150 + Game.padding);
            var posY = j * (150 + Game.padding);
            this.fields[i][j] = { x: posX, y: posY };
        }
    }
}

Field.prototype.drawField = function () {
    Game.context.fillStyle = "orange";
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var x = this.fields[i][j].x;
            var y = this.fields[i][j].y;
            Game.context.beginPath();
            Game.context.fillRect(x, y, this.size, this.size);
            Game.context.closePath();
        }
    }
}