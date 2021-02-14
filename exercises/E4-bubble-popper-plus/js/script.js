"use strict";

/*****************

E4: Bubbble Popper +
Melissa Banoen-Garde

pop bubbbles by matching pin and bubble colour
- adding multiple bubbles
- loading screen


******************/

// variable to store our current state (loading screen and/or game)
let state = `loadingScreen`;

// global video variable
let video;

// global handpose variable
let handpose = undefined;

// global predictions variable
let predictions = [];

// bubbles array
let bubbles = [];
// variable to store our bubble
let bubble;
let red;
let green;
let blue;
let yellow;


// setup()
// Description of setup
function setup() {
  createCanvas(640, 480);
  initializeWebcam();
  initializeHandpose();
  initializeBubbles();
}

// WEBCAM
function initializeWebcam() {
  // accesses the webcam
  video = createCapture(VIDEO);
  // hides video element so it doesn't display on the page
  video.hide();
}

// HANDPOSE
function initializeHandpose() {
  // handpose = ml5.handpose(?video, ?options, ?callback);
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    state = `game`; // switches state to "game"
    console.log(`Model loaded.`)
  });
  // listens for predictions
  // keeps predictions array up to date with the latest result
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });
}

// BUBBLES
function initializeBubbles() {
  // Red bubbles
  for (let i = 0; i < 2; i++) {
    // defining parameters of the bubbles
    let x = random(width);
    let y = random(height, 550);
    let size = random(10, 50);
    // creating a new object to call the Red.js class
    red = new Red(x, y, size);
    // pushing new object in the "bubbles" array
    bubbles.push(red);
  }

  // Green bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(10, 50);
    green = new Green(x, y, size);
    bubbles.push(green);
  }

  // Blue bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(10, 50);
    blue = new Blue(x, y, size);
    bubbles.push(blue);
  }

  // Yellow bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(10, 50);
    yellow = new Yellow(x, y, size);
    bubbles.push(yellow);
  }
}

// if-statement that handles the state of the program
function draw() {
  if (state === `loadingScreen`) {
    loadingScreen();
  } else if (state === `game`) {
    game();
  }
}

function loadingScreen() {
  push();
  textAlign(CENTER, CENTER);
  fill(0, 170, 0);
  textSize(20);
  text(`Loading... 📍`, width / 2, height / 2);
  pop();
}

function game() {
  background(45, 161, 62); // green
  pins();
  bubblePop();
}

function pins() {
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

    // check bubble popping
    // calculates the distance between the bubble and the pin
    // let d = dist(tipX, tipY, bubble.x, bubble.y);
    // // // if the distance is less than half the size of the bubble
    // if (d < bubble.size / 2) {
    //   //   // the bubble resets (starts from the bottom again )
    //   bubble.x = random(width);
    //   bubble.y = random(height, 500);
    // }
  }
}

function bubblePop() {
  // calling the Bubble superclass object's methods
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.motion();
    bubble.display();
  }
}
