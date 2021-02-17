// Yellow, displays yellow bubbles and is a subclass that extends from Bubble.js

class Yellow extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);
    this.yellow = {
      r: 255,
      g: 255,
      b: 0,
      alpha: 100
    };
  }

  // displays yellow bubbles
  display() {
    push();
    stroke(this.yellow.r, this.yellow.g, this.yellow.b);
    fill(this.yellow.r, this.yellow.g, this.yellow.b, this.yellow.alpha);
    super.display();
    pop();
  }
}
