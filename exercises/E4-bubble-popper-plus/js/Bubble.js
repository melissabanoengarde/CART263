class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = -2; // for element to rise
    this.active = true;
  }

  // bubbles' movement: bubbles rise from the bottom of the canvas
  motion() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y < 0) {
      this.x = random(width);
      this.y = height;
    }
  }

  // draws bubbles
  display() {
    push();
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

  // popped() {
  //   if (this.active) {
  //     fill(255,100,77);
  //     noStroke();
  //     ellipse(this.x, this.y, this.size);
  //   }
  // }

}
