var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(250);
  grid.updateNeighborCounts();
  grid.draw();
  grid.randomize();
  print (grid.updateNeighborCounts);
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
    var liveNeighborCount = 0;
    this.liveNeighborCount = liveNeighborCount;
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
    this.live = live;
  }

  updateNeighborCounts () {
    var currentCell = this.cells;
    for (var xOffset = -1; xOffset <= 1; xOffset++) {
      var neighborX = currentCell.column + xOffset
      if (xOffset <= 0 && xOffset > this.cells.length) {
        print("bad number");
      } else {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
        if (yOffset <= 0 && yOffset > this.cells.length){
          print("bad number");
        } else {
          if (this.live == true){
            this.liveNeighborCount++;
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
}

