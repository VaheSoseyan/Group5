class Grass extends LivingCreature{
   
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





