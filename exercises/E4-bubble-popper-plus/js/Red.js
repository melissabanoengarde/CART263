// Red, displays red bubbles and is a subclass that extends from Bubble.js


class Red extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);
  }

  // displays red bubbles
  display() {
    push();
    fill(255,0,0);
    super.display();
    pop();
  }
}
