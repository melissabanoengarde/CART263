"use strict";

/*****************

E4: Bubbble Popper +
Melissa Banoen-Garde

pop bubbbles by matching a pin and bubble colour!
- added multiple bubbles of colours red, green, blue, and yellow
- added multiple pins (a pin per finger)
- loading screen

******************/

// Variable to store our current state (loading screen and/or game)
let state = `loadingScreen`;

// Global video variable
let video;

// Global handpose variable
let handpose = undefined;

// Global predictions variable
let predictions = [];
const PIN_SIZE = 20;

// Bubbles array & variables to store our bubble and each colour
let bubbles = [];
let bubble;
let red;
let green;
let blue;
let yellow;

// Global variables to store each fingers' coordinates from the "predictions" array
// index finger
let indexTipX = undefined;
let indexTipY = undefined;
let indexBaseX = undefined;
let indexBaseY = undefined;

// middle finger
let middleTipX = undefined;
let middleTipY = undefined;
let middleBaseX = undefined;
let middleBaseY = undefined;

// ring finger
let ringTipX = undefined;
let ringTipY = undefined;
let ringBaseX = undefined;
let ringBaseY = undefined;

// pinky
let pinkyTipX = undefined;
let pinkyTipY = undefined;
let pinkyBaseX = undefined;
let pinkyBaseY = undefined;

// SETUP
// Creates the program's canvas & initializes all elements within the
// program: webcam, ml5's handpose library, and our bubbles.
function setup() {
  createCanvas(640, 480);
  initializeWebcam();
  initializeHandpose();
  initializeBubbles();
}

// WEBCAM
// Initializes user's webcam
function initializeWebcam() {
  // accesses the webcam
  video = createCapture(VIDEO);
  // hides video element and just shows the canvas
  video.hide();
}

// HANDPOSE
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

// Bubbles
// Initializes each bubble colour by creating a new object to and pushing them in
// in the "bubbles" array
function initializeBubbles() {
  // Red bubbles
  for (let i = 0; i < 2; i++) {
    // defining parameters of the bubbles
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    // creating a new object to call the Red.js class
    red = new Red(x, y, size);
    // pushing new object in the "bubbles" array
    bubbles.push(red);
  }

  // Green bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    green = new Green(x, y, size);
    bubbles.push(green);
  }

  // Blue bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    blue = new Blue(x, y, size);
    bubbles.push(blue);
  }

  // Yellow bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    yellow = new Yellow(x, y, size);
    bubbles.push(yellow);
  }
  // console.log(bubbles);
}

// draw
// if-statement that handles the state of the program
function draw() {
  if (state === `loadingScreen`) {
    loadingScreen();
  } else if (state === `game`) {
    game();
  }
}

// loadingScreen
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

// Game
// Once all elements are loaded, the program switches to the interactive game
function game() {
  background(255); // green
  pins();
  drawBubbles();
}

// Pins
// Checks the position of each pin & checks if a pin intersects with its respective bubble colour.
// If it does, it resets to the bottom of the canvas.
function pins() {
  // checks if predictions array has anything in it (length)
  if (predictions.length > 0) {

    pinCoordinates();
    drawPins();

    // Calls the Bubble.js' "popped()" method which checks if a pin intersects with its respective
    // bubble colour. If it does, it *pops*
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].popped();
      console.log(bubbles[i].popped);
    }
  }
}

// pinCoordinates
// defines each global finger variable by going through handpose's predictions
function pinCoordinates() {
  //INDEX FINGER
  // index finger tip's x and y value
  indexTipX = predictions[0].annotations.indexFinger[3][0];
  indexTipY = predictions[0].annotations.indexFinger[3][1];

  // index finger base's x and y value
  indexBaseX = predictions[0].annotations.indexFinger[0][0];
  indexBaseY = predictions[0].annotations.indexFinger[0][1];

  // MIDDLE FINGER
  // middle finger tip's x and y value
  middleTipX = predictions[0].annotations.middleFinger[3][0];
  middleTipY = predictions[0].annotations.middleFinger[3][1];

  // middle finger base's x and y value
  middleBaseX = predictions[0].annotations.middleFinger[0][0];
  middleBaseY = predictions[0].annotations.middleFinger[0][1];

  // RING FINGER
  // ring finger tip's x and y value
  ringTipX = predictions[0].annotations.ringFinger[3][0];
  ringTipY = predictions[0].annotations.ringFinger[3][1];

  // ring finger base's x and y value
  ringBaseX = predictions[0].annotations.ringFinger[0][0];
  ringBaseY = predictions[0].annotations.ringFinger[0][1];

  // PINKY
  // pinky finger tip's x and y value
  pinkyTipX = predictions[0].annotations.pinky[3][0];
  pinkyTipY = predictions[0].annotations.pinky[3][1];

  // pinky finger base's x and y value
  pinkyBaseX = predictions[0].annotations.pinky[0][0];
  pinkyBaseY = predictions[0].annotations.pinky[0][1];
}

// drawPins
// draws the appearance of each pins; the index finger holds a red pin,
// middle holds a green pin, ring finger holds a blue pin, and the pinky
// holds a yellow pin.
function drawPins() {
  // INDEX FINGER: RED PIN
  // body
  push();
  stroke(161, 161, 161);
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
  stroke(161, 161, 161);
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
  stroke(161, 161, 161);
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
  stroke(161, 161, 161);
  line(pinkyTipX, pinkyTipY, pinkyBaseX, pinkyBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(pinkyBaseX, pinkyBaseY, PIN_SIZE);
  pop();
}

// drawBubbles
// Calls the Bubble superclass object's methods and makes each element in the "bubbles" array
// go through them
function drawBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.motion();
    bubble.display();
  }
}
