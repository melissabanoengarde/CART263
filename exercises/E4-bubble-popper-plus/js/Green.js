// Green, displays green bubbles and is a subclass that extends from Bubble.js


class Green extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);

    this.green = {
      r: 0,
      g: 255,
      b: 0,
      alpha: 100
    };
  }

  // displays green bubbles
  display() {
    push();
    stroke(this.green.r, this.green.g, this.green.b);
    fill(this.green.r, this.green.g, this.green.b, this.green.alpha);
    super.display();
    pop();
  }

}
