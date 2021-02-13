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

// variable to store our bubble
let bubble = undefined;

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
  }, function() {
    console.log(`Model loaded.`)
  });

  // listens for predictions
  // keeps predictions array up to date with the latest result
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });

  // BUBBLE
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }

}


// draw()
// Description of draw()
function draw() {
  background(45, 161, 62); // green
  pin();
  risingBubble();

}

function pin() {
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
    // pin body
    push();
    stroke(255);
    line(baseX, baseY, tipX, tipY);
    pop();

    // pin head
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();
  }

  popCheck();
}

function risingBubble() {
  // bubble's movement
  bubble.x += bubble.vx;
  bubble.y += bubble.vy

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble = height;
  }

  // bubble's display
  push();
  fill(174, 226, 242);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

function popCheck() {
  // check bubble popping
  // calculates the distance between the bubble and the pin
  let d = dist(tipX, tipY, bubble.x, bubble.y);
  // if the distance is less than half the size of the bubble
  if (d < bubble.size / 2) {
    // the bubble resets (starts from the bottom again )
    bubble.x = random(width);
    bubble = height;
  }
}
