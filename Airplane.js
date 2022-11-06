class Airplane extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.directions = [];
        // this.y = y;
        // this.x = x;
      
        this.time = 0;
        matrix[this.y][this.x] = 4;
        PlainArr.push(this);

    }

    newPlain() {
        if (this.x >= matrix.length - 1, this.y >= matrix.length + 1) {
            var random_y = Math.round(Math.random() * matrix.length - 1);
            var NewPlain = new Airplane(random_y);
        }

    }



    move() {
        matrix[this.y][this.x] = 0;
        this.x++;
        matrix[this.y][this.x] = 4;
        if (this.x >= matrix.length - 1) {
            matrix[this.y][this.x] = 0;
            for (var i in PlainArr) {
                if (this.x == PlainArr[i].y)
                    PlainArr.splice(i, 1);
            }

        }

    }

    start() {
        this.move();
        if (this.x >= matrix.length - 1) {
            this.newPlain();
        }
    }


}

