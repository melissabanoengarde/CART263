// Heartbreak Emoji
// subclass of super class Emoji.js

class Red extends Emoji {

  constructor(x, y, image) {

    // call superclass constructor
    super(x, y, image);

    this.info = `Find the broken-heart emoji`;

    // tracking finding
    this.found = false;
    this.rotationSpeed = 0.25;
  }

  // when the heartbreak emoji is found, it spins and zooms
  update() {
    super.update();
    // if the heartbreak emoji is found...
    if (this.found) {
      // image rotates
      this.angle += this.rotationSpeed;

      // image size increases
      this.image.width += 1;
      this.image.height += 1;
    }
  }

  // switches state to the "end" page
  ending() {
    state = `endPage`;
  }

  mousePressed() {
    // defining the overlap method's parameters
    const clicked = this.overlap(mouseX, mouseY);
    // if the heartbreak emoji is clicked, its found property changes to "true"
    if (clicked === true){
      this.found = true;
      // allows found emoji to spin and zoom for 3 seconds before switching to the end page
      setTimeout(this.ending, 3000);
    }
  }

}
