"use strict";

/*****************

Activity04: Bubbble Popper
Melissa Banoen-Garde

- Get Handpose working
- Draw a pin
- Draw and move a bubble
- Make the bubble pop

******************/

// global video variable
let video;

// global handpose variable
let handpose = undefined;

// global predictions variable
let predictions = [];


// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(640, 480);

  // WEBCAM
  // accesses the webcam
  video = createCapture(VIDEO);
  // hides video element so it doesn't display on the page
  video.hide();

  // HANDPOSE
  // handpose = ml5.handpose(?video, ?options, ?callback);
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function () {
    console.log(`Model loaded.`)
  });

  // listens for predictions
  // keeps predictions array up to date with the latest result
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  });

}


// draw()
// Description of draw()
function draw() {
  background(45, 161, 62); // green

  // checks if predictions aaray has anything in it (length)
  if (predictions.length > 0) {
    let hand = predictions[0]; // handpose only predicts a single hand
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
      let tipX = tip[0];
      let tipY = tip[1];
        let baseX = base[0];
        let baseY = base[1];

    // drawing the pin
    push();
    stroke(255);
    line(baseX, baseY, tipX, tipY);
    pop();
  }
}
