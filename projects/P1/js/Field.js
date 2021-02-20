class Field extends State {
  constructor() {
    super();
    createCanvas(1199,762);
    // drawing the map of the maze field (22x10)
    // 0 = walls, 1 = trails, 2 = missions, 3 = target item
    this.maze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.tileSize = 54.5;

    // user's position
    this.user = {
      x: 1,
      y: 1
    };
  };

  draw() {
    super.draw();
    background(64, 74, 58, 10);

    this.displayMaze();
    this.showUserPosition();
  }

  // draws the maze of game. this will simulate as user's journey through the field.
  displayMaze() {
    for (let y = 0; y < this.maze.length; y++) {
      let row = this.maze[y];
      // draws y for every x
      for (let x = 0; x < row.length; x++) {
        let tile = row[x];
        push();

        // walls
        if (tile === 0) {
          fill(64, 74, 58);
        }
        // trails
        else if (tile === 1) {
          fill(110, 109, 81, 100);
        }
        // missions
        else if (tile === 2) {
          fill(11, 66, 14);
        }
        // target item to retrieve
        else if (tile === 3) {
          fill(110, 41, 12);
        }
        noStroke();
        rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize,10);
        pop();
      }
    }
  }

  // draw's the user's position in the maze. is represented as a blue circle.
  showUserPosition() {
    push();
    noStroke();
    fill(0, 47, 163);
    rect(this.user.x * this.tileSize, this.user.y * this.tileSize, this.tileSize, this.tileSize,50);
    pop();
  }

  // allows the user to move in the tile based maze 
  keyPressed() {
    super.keyPressed();

    if (keyCode === 65 && this.maze[this.user.y][this.user.x - 1] !== 0) {
    this.user.x -= 1;
    }
    else if (keyCode === 68 && this.maze[this.user.y][this.user.x + 1] !== 0) {
      this.user.x += 1;
    }
    else if (keyCode === 87 && this.maze[this.user.y - 1][this.user.x] !== 0) {
      this.user.y -= 1;
    }
    else if (keyCode === 83 && this.maze[this.user.y + 1][this.user.x] !== 0) {
      this.user.y += 1;
    }
  }

}
