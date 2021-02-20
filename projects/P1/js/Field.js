class Field {
  constructor() {
    createCanvas(1200,600, P2D);

    // drawing the map of the maze field (20x10)
    // 0 = walls, 1 = trails, 2 = missions, 3 = target item
    this.maze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.tileSize = 50;
  };

  draw() {

    background(220);

    this.displayMaze();
  }

  // draws the maze of game. this will simulate as user's journey through the field.
  displayMaze() {
    for (let y = 0; y < this.maze.length; y++) {
      let row = this.maze[y];
      // draws y for every x
      for (let x = 0; x < row.length; x++) {
        let tile = row[x];
        push();
        rectMode(CENTER);

        // walls
        if (tile === 0) {
          fill(135, 138, 106);
        }
        // trails
        else if (tile === 1) {
          fill(200);
        }
        // missions
        else if (tile === 2) {
          fill(0, 0, 255);
        }
        // target item to retrieve
        else if (tile === 3) {
          fill('gold');
        }
        noStroke();
        ellipse(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
        pop();
      }
    }
    // sphere(200);
  }

  keyPressed() {

  }
}
