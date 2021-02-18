class Phase1 extends State {
  // constructor() acts as a setup()
  constructor() {
    super();
    // sets the canvas into a 3-dimensional one
    createCanvas(800, 600, WEBGL);
  }

  draw() {
    super.draw();
    background('black');

    // class the display method
    this.display3D();
  }

  display3D() {
    push();
    noFill();
    strokeWeight(0.5);
    stroke('green')
    rotateY(frameCount * 0.005);
    sphere(200);
    pop();
  }
}
