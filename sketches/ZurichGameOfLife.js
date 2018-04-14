var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(250);
  grid.draw();
}

class Grid {
  constructor (cellSize) {
    this.cellSize = cellSize;
    this.numberOfRows = width / this.cellSize;
    this.numberOfColumns = height / this.cellSize;
    var x = this.numberOfRows; 
    var y = this.numberOfColumns; 
    var cells = new Array(x); 
    this.cells = cells;
    for (var i = 0; i < cells.length; i ++) { 
      cells[i] = new Array(y); 
    }
    for (var column = 0; column < this.numberOfColumns; column ++) { 
      for (var row = 0; row < this.numberOfRows; row++) {  
        this.cells[column][row] = new Cell(column, row, this.cellSize);
      }
    }
    print (this.cells);
  }
  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells.drawCell;
      }
    }
  }
}

class Cell {
  constructor (column, row, cellSize) {
    this.column = column;
    this.row = row;
    this.cellSize = cellSize;
    this.IsAlive =  true; //setIsAlive(floor(random(1)));
  }

  drawCell () {
    if (this.IsAlive = false) {
      fill(240);
    } else {
      fill(0);
    }
    noStroke(); 
    rect(this.column * this.cellSize + 1, this.row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
  }

  // setIsAlive (value) {
  //   this.value = value;
  //   if (this.value == 1){
  //     this.IsAlive = true;
  //   } else {
  //     this.IsAlive = false;
  //   }
  // }
}
