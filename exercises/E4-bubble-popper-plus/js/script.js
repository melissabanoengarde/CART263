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
const PIN_SIZE = 20;

// bubbles array
let bubbles = [];
// variable to store our bubble
let bubble;
let red;
let green;
let blue;
let yellow;


/* Setup */
// Creates the program's canvas & initializes all elements within the
// program: webcam, ml5's handpose library, and our bubbles.
function setup() {
  createCanvas(640, 480);
  initializeWebcam();
  initializeHandpose();
  initializeBubbles();
}

/* WEBCAM */
// Initializes user's webcam
function initializeWebcam() {
  // accesses the webcam
  video = createCapture(VIDEO);
  // hides video element and just shows the canvas
  video.hide();
}

/* HANDPOSE */
// Creates a new handpose method. When the model is loaded, the program's state
// switches to the "game" state and listens to new "predict" events
function initializeHandpose() {
  handpose = ml5.handpose(video, { // handpose = ml5.handpose(?video, ?options, ?callback);
    flipHorizontal: true
  }, function() {
    state = `game`; // switches state to "game"
    console.log(`Model loaded.`)
  });
  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });
}

/* BUBBLES */
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

/* DRAW */
// if-statement that handles the state of the program
function draw() {
  if (state === `loadingScreen`) {
    loadingScreen();
  } else if (state === `game`) {
    game();
  }
}

/*  loadingScreen */
// A state that displays a "loading" text for the user to wait while
// the program's elements are loading
function loadingScreen() {
  push();
  textAlign(CENTER, CENTER);
  fill(0, 170, 0);
  textSize(20);
  text(`Loading... 📍`, width / 2, height / 2);
  pop();
}

/*  game */
// Once all elements are loaded, the program switches to the interactive game
function game() {
  background(45, 161, 62); // green
  pins();
  drawBubbles();
}

/* pins */
//
function pins() {
  // checks if predictions array has anything in it (length)
  if (predictions.length > 0) {
    //INDEX FINGER
    // index finger tip's x and y value
    let indexTipX = predictions[0].annotations.indexFinger[3][0];
    let indexTipY = predictions[0].annotations.indexFinger[3][1];

    // index finger base's x and y value
    let indexBaseX = predictions[0].annotations.indexFinger[0][0];
    let indexBaseY = predictions[0].annotations.indexFinger[0][1];

    // MIDDLE FINGER
    // middle finger tip's x and y value
    let middleTipX = predictions[0].annotations.middleFinger[3][0];
    let middleTipY = predictions[0].annotations.middleFinger[3][1];

    // middle finger base's x and y value
    let middleBaseX = predictions[0].annotations.middleFinger[0][0];
    let middleBaseY = predictions[0].annotations.middleFinger[0][1];

    // RING FINGER
    // ring finger tip's x and y value
    let ringTipX = predictions[0].annotations.ringFinger[3][0];
    let ringTipY = predictions[0].annotations.ringFinger[3][1];

    // ring finger base's x and y value
    let ringBaseX = predictions[0].annotations.ringFinger[0][0];
    let ringBaseY = predictions[0].annotations.ringFinger[0][1];

    // PINKY
    // pinky finger tip's x and y value
    let pinkyTipX = predictions[0].annotations.pinky[3][0];
    let pinkyTipY = predictions[0].annotations.pinky[3][1];

    // pinky finger base's x and y value
    let pinkyBaseX = predictions[0].annotations.pinky[0][0];
    let pinkyBaseY = predictions[0].annotations.pinky[0][1];

    // drawPins();
    // INDEX FINGER: RED PIN
    // body
    push();
    stroke(255);
    line(indexTipX, indexTipY, indexBaseX, indexBaseY);
    pop();

    // head
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(indexBaseX, indexBaseY, PIN_SIZE);
    pop();

    // MIDDLE FINGER: GREEN PIN
    // body
    push();
    stroke(255);
    line(middleTipX, middleTipY, middleBaseX, middleBaseY);
    pop();

    // head
    push();
    noStroke();
    fill(0, 255, 0);
    ellipse(middleBaseX, middleBaseY, PIN_SIZE);
    pop();

    // RING FINGER: BLUE PIN
    // body
    push();
    stroke(255);
    line(ringTipX, ringTipY, ringBaseX, ringBaseY);
    pop();

    // head
    push();
    noStroke();
    fill(0, 0, 255);
    ellipse(ringBaseX, ringBaseY, PIN_SIZE);
    pop();

    // PINKY FINGER: YELLOW PIN
    // body
    push();
    stroke(255);
    line(pinkyTipX, pinkyTipY, pinkyBaseX, pinkyBaseY);
    pop();

    // head
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(pinkyBaseX, pinkyBaseY, PIN_SIZE);
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

/*
// Draws the pins
function drawPins() {
  // INDEX FINGER: RED PIN
  // body
  push();
  stroke(255);
  line(indexTipX, indexTipY, indexBaseX, indexBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(indexBaseX, indexBaseY, PIN_SIZE);
  pop();

  // MIDDLE FINGER: GREEN PIN
  // body
  push();
  stroke(255);
  line(middleTipX, middleTipY, middleBaseX, middleBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(middleBaseX, middleBaseY, PIN_SIZE);
  pop();

  // RING FINGER: BLUE PIN
  // body
  push();
  stroke(255);
  line(ringTipX, ringTipY, ringBaseX, ringBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(0, 0, 255);
  ellipse(ringBaseX, ringBaseY, PIN_SIZE);
  pop();

  // PINKY FINGER: YELLOW PIN
  // body
  push();
  stroke(255);
  line(pinkyTipX, pinkyTipY, pinkyBaseX, pinkyBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(pinkyBaseX, pinkyBaseY, PIN_SIZE);
  pop();
}
*/

/* bubblePop */
//
function drawBubbles() {
  // calling the Bubble superclass object's methods
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.motion();
    bubble.display();
  }
}
