// Sausage Dog
// subclass of super class Animal.js

class SausageDog {

  constructor(x,y,image) {

    // call superclass constructor
    super(x,y,image);

    // tracking finding
    this.found = false;
    rotationSpeed = 0.25;
  }

  // when the sausge dog is found, it spins
  update() {
    super.update();

    if (this.found = true) {
      // we can use this.angle because it is inherited from the superclass
      this.angle += this.rotationSpeed;
    }
  }

  // establishes the constraints of the sausage dog's image's clickability (? can't formulate a sentence)
  mousePressed() {
    if (mouseX > this.x - this.image.width/2 &&
        mouseX < this.x + this.image.width/2 &&
        mouseY > this.y - this.image.height/2 &&
        mouseY < this.y + this.image.height/2) {
          this.found = true;
    }
  }

}
