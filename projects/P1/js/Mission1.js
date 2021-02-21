class Mission1 extends Field {
  constructor(video, handpose) {
    super(video, handpose);
    this.string = `Mission 1 State`;

    // An array that contains the set of predictions made by Handpose
    this.predictions = [];
  }

  draw() {
    super.draw();
    background(0, 255, 0);

    this.initializeWebcam();
    this.initializeHandpose();
    this.displayText();
  }

  initializeWebcam() {
    // access the webcam
    this.video = createCapture(VIDEO);
    // hides video element and only shows the canvas
    this.video.hide();
  }

  initializeHandpose() {
    this.handpose = ml5.handpose(video, {
      flipHorizontal: true
    }, function() {
      console.log(`Model loaded!! :)`);
    });

    this.handpose.on(`predict`, function(results) {
      console.log(results);
      this.predictions = results;
    });
  }

  displayText() {
    push();
    fill(0);
    textFont(ibmMono);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.string, width / 2, height / 2);
    pop();
  }

  keyPressed() {
    super.keyPressed();
    // placeholder
    if (keyCode === DOWN_ARROW) {
      currentState = new Field();
    }
  }

}




// 'Removes' the barrier and replaces it with a trail by replacing value "3" for "1"
// splice(start, amount, value);
