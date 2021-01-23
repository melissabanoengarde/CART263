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
  }

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

  overlap(x, y) {
    if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2) {
      this.found = true;
    }
  }

}
