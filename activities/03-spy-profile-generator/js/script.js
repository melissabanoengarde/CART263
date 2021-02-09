"use strict";

/*****************

Activity 03: Spy Profile Generator
Melissa Banoen-Garde

+ get user's name and display a default profile
+ generate a profile instead using JSON data
+ save and load the generated profile
+ add a password check

******************/

// global variable
let spyProfile = {
  name: `REDACTED`,
  alias: `REDACTED`,
  secretWeapon: `REDACTED`,
  password: `REDACTED`
};


// setup()
// Description of setup
function setup() {
  createCanvas(380, 550);

  // prompts user to provide name
  spyProfile.name = prompt(`Please provide your name.`);
}


// draw()
// Description of draw()
function draw() {
  background(8, 25, 74);

  // displays name input
  push();
  textFont('Courier');
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(230, 209, 90);
  text(`Greetings, ${spyProfile.name}.`, width/2, height/4);
  pop();
}
