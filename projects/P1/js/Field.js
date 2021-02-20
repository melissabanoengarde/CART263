class Field extends State {
  constructor() {
    super();
    createCanvas(1199,762);
    // drawing the map of the maze field (22x14)
    // 0 = walls, 1 = trails, 2 = missions, 3 = barriers, 4 = target item
    this.maze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 3, 3, 4, 4, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.tileSize = 54.5;
    // this.row and this.tile are defined in the displayMaze() method
    this.row = undefined;
    this.tile = undefined;
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
    this.checkMission();
    this.checkItem();
  }

  // draws the maze of game. this will simulate as user's journey through the field.
  displayMaze() {
    for (let y = 0; y < this.maze.length; y++) {
      this.row = this.maze[y];
      // draws y for every x
      for (let x = 0; x < this.row.length; x++) {
        this.tile = this.row[x];
        push();

        // walls
        if (this.tile === 0) {
          fill(64, 74, 58);
        }
        // trails
        else if (this.tile === 1) {
          fill(110, 109, 81, 100);
        }
        // missions
        else if (this.tile === 2) {
          fill(11, 66, 14);
        }
        // barriers
        else if (this.tile === 3) {
          fill(91, 91, 92);
        }
        // target item to retrieve
        else if (this.tile === 4) {
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

  checkMission() {
    if (this.maze[this.user.y][this.user.x] === 2) {
      // fill(255,0,0);
      // rect(width/2, height/2, 300);

    console.log(`${this.maze.length} elements`);
    console.log(this.maze[12][17]);
    // console.log("Mission");
    }
  }

  checkItem() {
    if (this.maze[this.user.y][this.user.x] === 3) {
      fill(0,255,0);
      rect(width/2, height/2, 300);
      console.log("Target Item");
    }
  }

  // allows the user to move in the tile based maze
  keyPressed() {
    super.keyPressed();
    // A = RIGHT
    //
    if (keyCode === 65 && this.maze[this.user.y][this.user.x + 1] !== 0 && this.maze[this.user.y][this.user.x +1] !==3) {
    this.user.x += 1;
    }
    // D = LEFT
    else if (keyCode === 68 && this.maze[this.user.y][this.user.x - 1] !== 0) {
      this.user.x -= 1;
    }
    // W = DOWN
    else if (keyCode === 87 && this.maze[this.user.y + 1][this.user.x] !== 0 ) {
      this.user.y += 1;
    }
    // S = UP
    else if (keyCode === 83 && this.maze[this.user.y - 1][this.user.x] !== 0) {
      this.user.y -= 1;
    }
  }

}
