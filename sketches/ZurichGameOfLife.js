var grid;
//var IsAlive;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  //IsAlive = Cell.setIsAlive(floor(random(2)));
}

function draw () {
  background(250);
  //grid.updateNeighborCounts();
  grid.draw();
  grid.randomize();
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
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].drawCell();
      }
    }
  }

  randomize () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(floor(random(2)));
      }
    }
  }

  // updateNeighborCounts () {
  //   for (var column = 0; column < this.numberOfColumns; column ++) {
  //     for (var row = 0; row < this.numberOfRows; row++) {
  //       this.cells[column][row].liveNeighborCount();
  //     }
  //   }

  //   for (var xOffset = -1; xOffset <= 1; xOffset++) {
  //     for (var yOffset = -1; yOffset <= 1; yOffset++) {
  //       var neighborX = currentCell.column + xOffset
  //       var neighborY = currentCell.row + yOffset

  //       // do something with neighborX and neighborY
  //     }
  //   }
  // }
}

class Cell {
  constructor (column, row, cellSize) {
    this.column = column;
    this.row = row;
    this.cellSize = cellSize;
    //this.cellNeighborCount = 0;
  }

  drawCell () {
    if (this.IsAlive == false) {
      fill(26, 44, 87);
    } else {
      fill(209, 166, 131);
    }
    noStroke(); 
    rect(this.column * this.cellSize + 1, this.row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
  }

  setIsAlive (value) {
    this.value = value;
    if (this.value == 1){
      this.IsAlive = true;
    } else {
      this.IsAlive = false;
    }
  }

  // liveNeighborCount (){
  //   this.cellNeighborCount = 0;
  // }
}
