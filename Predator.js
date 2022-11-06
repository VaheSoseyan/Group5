class Predator extends LivingCreature{

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
