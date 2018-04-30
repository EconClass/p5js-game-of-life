var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
  //grid.updateNeighborCounts();//**TEST**
}

function draw () {
  background(250);
  grid.updateNeighborCounts();
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
    //var liveNeighborCount = this.liveNeighborCount;
    this.liveNeighborCount = 0;
    for (var i = 0; i < cells.length; i ++) { 
      cells[i] = new Array(y); 
    }
    for (var column = 0; column < this.numberOfColumns; column ++) { 
      for (var row = 0; row < this.numberOfRows; row++) {  
        this.cells[column][row] = new Cell(column, row, this.cellSize, this.liveNeighborCount);
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
        var live = this.cells[column][row].setIsAlive(floor(random(2)));
      }
    }
  }

  updateNeighborCounts () {
    this.liveNeighborCount = 0;
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var currentCell = this.cells[column][row];
        //print(currentCell);
        for (var xOffset = -1; xOffset <= 1; xOffset++) {
          var neighborX = currentCell.column + xOffset;
          if (neighborX <= 0 && neighborX > this.cells[column].length) {
            //print(neighborX);
          } else {
            for (var yOffset = -1; yOffset <= 1; yOffset++) {
              var neighborY = currentCell.row + yOffset;
              //print(neighborY);
              if (neighborY <= 0 && neighborY > this.cells[row].length){
                // print(currentCell);
              } else {
                if (currentCell.isAlive == true){
                  this.liveNeighborCount++;
                  //print(currentCell.liveNeighborCount);
                }
              }
            }
          }
        }
      }
    }
  }
}

class Cell {
  constructor (column, row, cellSize, cellNeighborCount) {
    this.column = column;
    this.row = row;
    this.cellSize = cellSize;
    this.cellNeighborCount = cellNeighborCount;
    //this.IsAlive = var isAlive;
    var isAlive = this.IsAlive;
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
    if (value == 1){
      this.IsAlive = true;
    } else {
      this.IsAlive = false;
    }
    //var isAlive = this.IsAlive;
  }
}
