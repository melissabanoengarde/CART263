class LevelRed extends Level {

  constructor(x, y, image) {
    super(x, y, image);

  }

  // when the sausge dog is found, it spins
  update() {
    super.update();

    if (this.found) {
      // we can use this.angle because it is inherited from the superclass
      this.angle += this.rotationSpeed;
    }
  }

  // establishes the constraints of the sausage dog's image's clickability (? can't formulate a sentence)
  // if the mouse is clicked inside the sausage dog image, the found property is set to "true"
  mousePressed() {
    super.overlap();
  }

}
