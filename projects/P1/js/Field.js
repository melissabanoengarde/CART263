class Field extends State {
  constructor() {
    super();
    // drawing the map of the maze field (22x14)
    // 0 = walls, 1 = trails, 2 = missions, 3 = barriers, 4 = target item
    this.maze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0],
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

    console.log(`Brick in Field.js: ${this.maze[12][16]}`); // brick1
  };

  draw() {
    super.draw();
    background(0, 10);

    this.displayMaze();
    this.userPosition();
    this.checkMission(this.maze, this.maze[2], this.maze[10], this.maze[8], this.user.x, this.user.y);
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
    // if (this.bricksActive.b1 === false) {
    //   this.tile === 2;
    // }
  }

  // draw's the user's position in the maze. is represented as a blue circle.
  userPosition() {
    push();
    noStroke();
    fill(0, 47, 163);
    rect(this.user.x * this.tileSize, this.user.y * this.tileSize, this.tileSize, this.tileSize,50);
    pop();
    // console.log(`User's position [x: ${this.user.x}, y: ${this.user.y}]`);
  }

  // checkMission
  // Handles missions' states. Specific sub-missions are prompted depending on
  // the tile that is occupied AND the user's x and y position.
  checkMission(maze, mission1, mission2, mission3, xPos, yPos) {
    // MISSION 1
    if (maze[yPos][xPos] === mission1[11] && xPos === 11 && yPos === 2) {
      currentState = new Mission1();
    }
    // MISSION 2
    else if (maze[yPos][xPos] === mission2[14] && xPos === 5 && yPos === 8) {
      currentState = new Mission2();
    }
    // MISSION 3
    else if (maze[yPos][xPos] === mission3[5] && xPos === 14 && yPos === 10) {
      currentState = new Mission3();
    }
  }

  checkItem() {
    if (this.maze[this.user.y][this.user.x] === 3) {
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

/*
Notes:
Brick1: this.maze[12][16];
*/
