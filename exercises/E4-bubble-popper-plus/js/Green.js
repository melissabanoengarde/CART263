class Green extends Bubble  {
  constructor(x, y, size) {
    super(x, y, size);
  }

  // displays green bubbles
  display() {
    push();
    fill(0,255,0);
    super.display();
    pop();
  }

}
