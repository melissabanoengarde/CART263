class Intro extends State {
  constructor() {
    super();

    this.textString = `DUMMY TITLE:\n PRESS THE SPACEBAR`;
  }

  draw() {
    super.draw();
    background(0);

    // calls the display method
    this.display();
  }

  display() {
    push();
    fill(0, 47, 163);
    textFont(ibmMono);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(this.textString, width/2, height/2);
    pop();
  }

  keyPressed() {
    super.keyPressed();

    // press the spacebar to switch to the phase1 state
    if (keyCode === 32) {
      currentState = new Phase1();
    }

  }
}
