// Blue, displays blue bubbles and is a subclass that extends from Bubble.js

class Blue extends Bubble  {
  constructor(x, y, size) {
    super(x, y, size);
  }

  // displays blue bubbles
  display() {
    push();
    fill(0,0,255);
    super.display();
    pop();
  }
}
