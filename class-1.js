class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        matrix[y][x] = 1
        grassArr.push(this);

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }


    mul() {

        let newCell = random(this.chooseCell(0))
        // console.log(newCell);
        if (this.multiplay >= 10 && newCell) {
            // console.log(122);
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            new Grass(newX, newY);
            this.multiplay = 0;

        }
        this.multiplay += 5
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
        this.directions = []

        matrix[y][x] = 2
        grassEaterArr.push(this);


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }
    }




    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new GrassEater(newX, newY, 1);
            this.energy = 8;
        }
    }

    die() {
        for (const i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1)
                break

            }
        }
        matrix[this.y][this.x] = 0
    }


    eat() {
        var grassCells = this.chooseCell(1);
        var newCell = random(grassCells);

        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy += 5;

            for (const i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break

                }

            }

            if (this.energy >= 12) {
                // console.log(this.energy);
                this.mul();
            }
        }
        else {
            this.move();
        }
    }


}

class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
        this.directions = []

        matrix[y][x] = 3
        predatorArr.push(this);


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        console.log(found);

        return found;

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        // console.log(newCell);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }
    }




    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Predator(newX, newY, 2);
            this.energy = 8;
        }
    }

    die() {
        for (const i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1)
                break

            }
        }
        matrix[this.y][this.x] = 0
    }


    eat() {
        var grassEaterCells = this.chooseCell(2);
        var newCell = random(grassEaterCells);

        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy += 5;

            for (const i in grassEaterArr) {

                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break

                }

            }

            if (this.energy >= 12) {
                // console.log(this.energy);
                this.mul();
            }
        }
        else {
            this.move();
        }
    }


}

class Airplane {
    constructor(x, y) {
        this.directions = [];
        this.y = y;
        this.x = x;
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

class Amenaker {
constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.energy = 8;
    this.directions = []

    matrix[y][x] = 5;
    AmenakerArr.push(this);


}
getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}
chooseCell(character) {
    this.getNewCoordinates()
    var found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }

    }
    console.log(found);

    return found;

}

move() {
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);
    // console.log(newCell);

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];

        matrix[newY][newX] = 5;
        matrix[this.y][this.x] = 0;

        this.x = newX;
        this.y = newY;
    }

    this.energy--;
    if (this.energy <= 0) {
        this.die();
    }
}




mul() {
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

    if (newCell && this.energy >= 8) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = new Amenaker(newX, newY,2,3);
        this.energy = 8;
    }
}

die() {
    for (const i in AmenakerArr) {
        if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
           AmenakerArr.splice(i, 1)
            break

        }
    }
    matrix[this.y][this.x] = 0
}


eat() {
    var grassEaterCells = this.chooseCell(2);
    var NewCell = random(grassEaterCells.concat(this.chooseCell(3)));

    
    if (NewCell) {

        var NewX = NewCell[0];
        var NewY = NewCell[1];

        matrix[NewY][NewX] = 5; 
        matrix[this.y][this.x] = 0;

        this.x = NewX;
        this.y = NewY;
        this.energy += 8;

        for (const i in grassEaterArr,Predator) {

            if (NewX == AmenakerArr.x && NewY == AmenakerArr[i].y) {
                AmenakerArr.splice(i, 1)
                break

            }

        }

        if (this.energy >= 8) {
            // console.log(this.energy);
            this.mul();
        }
    }
    else {
        this.move();
    }
}


}


