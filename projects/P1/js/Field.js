class Field {
  constructor() {
    createCanvas(1200, 800);

    // drawing the map of the maze field
    // 0 = walls, 1 = trails, 2 = missions, 3 = target item
    this.maze = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1],
      [0,],
      [0,],
      [0,],
      [0,],
      [0,],
      [0,],
      [0,],
      [0,],
    ];
    this.rows = 20;
    this.colums = 10;
    this.tileSize = 30;
  };

  draw() {
    background(220);
  }

  keyPressed() {

  }
}
