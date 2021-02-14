class Yellow extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);
  }

  // displays yellow bubbles
  display() {
    push();
    fill(255,255,0);
    super.display();
    pop();
  }
}
