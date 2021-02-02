"use strict";

/*****************

E2: Slamina new game plus
Melissa Banoen-Garde

exercise applying the responsiveVoice
and annyang library

******************/

// array of instructions
let instructions = [
  `Zoom out`,
  `Welcome 🍵\nFeeling anxious?`,
  `How you feel is valid and real`,
  `But this is a gentle reminder that not all feelings are necessarily facts.`,
  `Before we begin with this grounding technique, please be mindful of your breathing`,
  `Inhale... Exhale...`,
  `Name 5 things you see around you.`
];

// variable to store CURRENT line displayed
let currentInstruction = 0;


// ellipse's size
let size = 100;


// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont('Inconsolata', 20);
  textAlign(CENTER, CENTER);
  // Interprets the text's wrap parameters as the shape's center point
  rectMode(CENTER);
}


// draw()
// Description of draw()
function draw() {
  background(19, 0, 82); //19, 0, 82, 50

  // A variable set to the current instruction.
  // In this case, the current instruction is the variable "currentInstruction", which is set to 0.
  let displayed = instructions[currentInstruction];

  // text colour yay
  fill(227, 216, 230);

  // APPLAYING THE DECLARED VARIABEL:
  // Displays the string in the declared value of the array; 0 = `Zoom Out` 🌀
  text(displayed, width / 2, height / 2, 200,100);


  // Ripples
  push();
  ellipseMode(CENTER);
  noFill();

  // ellipse
  stroke(227, 216, 230);
  strokeWeight(1);
  ellipse(width / 2, height / 2, size);

  pop();

  // instructions
  if (size > 180 && size < 220) {
  // Welcome...
  currentInstruction = 1;
  }
    else if (size > 220 && size < 290) {
      // How you feel...
      currentInstruction = 2;
    }
    else if (size > 290 && size < 320) {
      // But this is a gentle...
      currentInstruction = 3;
    }
    else if(size > 320 && size < 350){
      // Before we begin with...
      currentInstruction = 4;
    }
    else if(size > 350 && size < 390){
      // Inhale... Exhale
      currentInstruction = 5;
    }
    else if (size > 390 && size < 410){
      responsiveVoice.speak(instructions[6], "UK English Female", {rate:.5});
    }
    else {
      return;
    }
}

function mouseWheel(event) {
  size += event.delta;
  console.log(size);

}
