class Amenaker extends LivingCreature{
    
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
    