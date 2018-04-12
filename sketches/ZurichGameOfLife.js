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
        fill(240);
        noStroke(); 
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }
}

class Cell {
	constructor (column, row, cellSize) {
		this.column = column;
		this.row = row;
		this.cellSize = cellSize;
		this.IsAlive = false;
	}
}
