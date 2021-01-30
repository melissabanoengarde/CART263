// Emoji
// Class object for the game's emojis

class Emoji {

  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.vx = 0;
    this.vy = 0;
    this.image = image;
    this.angle = 0;
  }

  update() {
    this.display();
    this.move();
    this.infoDisplay();
  }

  // displays instruction
  infoDisplay() {
    textSize(30);
    text(this.info, width/2, height/10);
  }

  // emojis move in random directions at random speeds, constrained within the window
  move() {
    let change = random(0, 1);
    if (change < 0.05) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    this.x = constrain(this.x + this.vx, 0,width);
    this.y = constrain(this.y + this.vy, 0, height);
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  // x and y are defined in subclass Red.js in the mousePressed method
  overlap(x, y) {
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2) {
      // if mouse fits within the given parameters, the method returns true
      // if not, then it returns false
      return true;
    } else {
      return false;
    }
  }

}
