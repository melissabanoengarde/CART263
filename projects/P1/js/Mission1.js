class Mission1 extends State {
  constructor() {
    super();
    this.string = `Mission 1 State`;
  }

  draw() {
    super.draw();
    background(0,255,0);

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
    // 'Removes' the barrier and replaces it with a trail by replacing value "3" for "1"
    // splice(start, amount, value);
  }
}
