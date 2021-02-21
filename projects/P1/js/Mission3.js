class Mission3 extends State {
  constructor() {
    super();

    this.string = `Mission 3 State`;
  }

  draw() {
    super.draw();
    background(0,0,255);

    this.displayText();
  }

  displayText() {
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
    // If the user lands on this.maze[8][5], the program switches to the mission3 state. Once the mission is complete, the final barrier is removed.
  }
}
