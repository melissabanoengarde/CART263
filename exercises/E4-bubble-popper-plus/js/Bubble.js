class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = -2; // for element to rise
    this.active = true;
  }

  // check bubble popping
  popped() {
    // calculates the distance between the bubble and the pin
    let dRed = dist(indexTipX, indexTipY, red.x, red.y);
    let dGreen = dist(middleTipX, middleTipY, green.x, green.y);
    let dBlue = dist(ringTipX, ringTipY, blue.x, blue.y);
    let dYellow = dist(pinkyTipX, pinkyTipY, yellow.x, yellow.y);

    // if the distance is less than half the size of the bubble
    if (dRed < red.size / 2 || dGreen < green.size / 2 ||
        dBlue < blue.size / 2 || dYellow < yellow.size / 2) {
      // the bubble resets (starts from the bottom again )
      red.x = random(width);
      red.y = random(height, 500);
      green.x = random(width);
      green.y = random(height, 500);
      blue.x = random(width);
      blue.y = random(height, 500);
      yellow.x = random(width);
      yellow.y = random(height, 500);
    }
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
