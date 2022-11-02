var matrix = [];
var side = 10;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var PlainArr = [];
var AmenakerArr = [];

function setup() {
    function generator(matrixsize, grass, grassEater, predator, Plain, Amenaker) {
        for (let i = 0; i <= matrixsize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixsize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let x1 = Math.floor(random(matrixsize));
            let y1 = Math.floor(random(matrixsize));
            matrix[y1][x1] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let x1 = Math.floor(random(matrixsize));
            let y1 = Math.floor(random(matrixsize));
            matrix[y1][x1] = 2;
        }
        for (let i = 0; i < predator; i++) {
            let x1 = Math.floor(random(matrixsize));
            let y1 = Math.floor(random(matrixsize));
            matrix[y1][x1] = 3;
        }
        for (let i = 0; i < Plain; i++) {
            let x1 = Math.floor(random(matrixsize));
            let y1 = Math.floor(random(matrixsize));
            matrix[y1][x1] = 4;
        }
        for (let i = 0; i < Amenaker; i++) {
            let x1 = Math.floor(random(matrixsize));
            let y1 = Math.floor(random(matrixsize));
            matrix[y1][x1] = 5;
        }
    }

    generator(60, 70, 65, 50, 35, 20);

    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac")

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            }
            else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            }
            else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x, y))
            }
            else if (matrix[y][x] == 4) {
                PlainArr.push(new Airplane(x, y))
            }
            else if (matrix[y][x] == 5) {
                AmenakerArr.push(new Amenaker(x, y))
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 0) {
                fill("#acacac")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("aqua")
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (let g = 0; g < grassArr.length; g++) {
        grassArr[g].mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat();
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat();
    }
    for (let i = 0; i < PlainArr.length; i++) {
        PlainArr[i].move();
    }
    for (let i = 0; i < AmenakerArr.length; i++) {
        AmenakerArr[i].eat();
    }
}