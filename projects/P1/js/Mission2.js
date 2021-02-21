class Mission2 extends State {
  constructor() {
    super();

    this.string = `Mission 2 State`;
  }

  draw() {
    super.draw();
    background(255,0,0);

    push();
    fill(0);
    textFont(ibmMono);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.string, width/2, height/2);
    pop();
  }

  keyPressed() {
    super.keyPressed();

    // placeholder
    if (keyCode === DOWN_ARROW) {
      currentState = new Field();
    }
  }
}
