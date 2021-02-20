class Phase1 extends State {
  // constructor() acts as a setup()
  constructor() {
    super();
    // sets the canvas into a 3-dimensional one
    // this.canvas = createCanvas(1200, 800, WEBGL);

    // this.canvas3D = new p5(script);


    this.description = `3D entrance scene`;
  }

  draw() {
    super.draw();

    background('black');

    // class the display method
    this.display3D();
    this.displayText();
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

  displayText() {
    push();
    textFont(ibmMono);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.description, 0,0);
    pop();
  }

  keyPressed() {
    super.keyPressed();

    // press the spacebar to switch to the maze state
    if (keyCode === 32) {
      currentState = new Field();
    }
  }
}
