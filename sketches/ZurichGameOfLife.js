var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
}

function keyPressed (){
  if (keyCode == ENTER) {
    grid.randomize();
  }
}

function draw () {
  background(250);
  grid.updateNeighborCounts();
  grid.updatePopulation();
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
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var currentCell = this.cells[column][row];
        currentCell.liveNeighborCount = 0;
        for (var xOffset = -1; xOffset <= 1; xOffset++) {
          var neighborX = currentCell.column + xOffset;
          if (neighborX < 0 || neighborX > this.numberOfColumns - 1){
            //
          } else {
            for (var yOffset = -1; yOffset <= 1; yOffset++) {
              var neighborY = currentCell.row + yOffset
              if (neighborY < 0 || neighborY > this.numberOfRows - 1) {
              //
              }else {
                if (this.cells[neighborX][neighborY].IsAlive == true && this.cells[neighborX][neighborY]!== currentCell) {
                  currentCell.liveNeighborCount++;
                }
              }
            }
          }
        }
      }
    }
  }

  updatePopulation (){
    for (var column = 0; column < this.numberOfColumns; column ++) { 
      for (var row = 0; row < this.numberOfRows; row++) {  
        this.cells[column][row].liveOrDie();
      }
    }
  }
}

class Cell {
  constructor (column, row, cellSize, liveNeighborCount) {
    this.column = column;
    this.row = row;
    this.cellSize = cellSize;
    this.liveNeighborCount = liveNeighborCount;
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
  }

  liveOrDie () {
    if (this.IsAlive == true){
      if (this.liveNeighborCount < 2 || this.liveNeighborCount > 3) {
        this.IsAlive = false;
      }
    } else{
      if (this.IsAlive == false) {
        if (this.liveNeighborCount == 3) {
          this.IsAlive = true;
        }
      }
    }
  }
}
