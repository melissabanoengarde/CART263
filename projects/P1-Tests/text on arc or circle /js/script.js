"use strict";

/*****************
text on arc or circle
melissa banoen-garde
******************/

let string = `As I walk through the valley of the shadow of death`;
let r = 100; // radius
// width & height of boxes
let w = 40;
let h = 40;


// setup()
// Description of setup
function setup() {
  createCanvas(700,500);

  textAlign(CENTER,CENTER);
}


// draw()
// Description of draw()
function draw() {
  background(0);

  displayCircle();
  // drawBoxes();
  displayText();
}

function displayCircle() {
  // translates all objects to the center of the canvas
  translate(width/2, height/2);

  noFill();
  noStroke();
  ellipse(0,0, r*2, r*2);
}

/*
// draws 10 boxes along the curve
function drawBoxes() {
  const TOTALBOXES = 10;
  let arclength = 0; // keeps track of our position along the curve

  // for every box
  for (let i = 0; i < TOTALBOXES; i++) {
    // each box is centered so we move half the width
    arclength += w/2;
    // ***angle in radians = arclength divided by the radius
    const THETA = arclength / r;

    push();
    translate(r*cos(THETA), r*sin(THETA));
    //rotate the boxes
    rotate(THETA);
    // display the boxes
    fill(255,255,0);
    rectMode(CENTER);
    rect(0,0,w,h);
    pop();

    //move halfway again
    arclength += w/2;
  }
}
*/

function displayText() {
  // keeps track of the position along the curve
  let arclength = 0;
  let speed = 0.03;

  for (let i = 0; i < string.length; i++) {
    // checks the width of each character (in comparison to checking the width of each box)
    let currentChar = string.charAt(i); // goes through each character of the string's length
    // textWidth() calculates and returns the width of any character or text string.
    // Therefore, we calculate the width of each character in the string's length.
    let w = textWidth(currentChar);

    // remember, each box is centered so we move half the width
    arclength += w/2;
    // Angle in radians = arclength/radius
    // To start on the left side of the circle, we add PI
    let theta = PI + arclength/r;

    push();
    translate(r*cos(theta), r*sin(theta)); // polar to cartesian coordinate conversion
    // rotates the box, offset by 90 degrees
    rotate(theta+PI/2);
    // displays the character
    fill(255);
    text(currentChar,0,0);
    pop();

    // move halfwat again
    arclength += w/2;

  }
}


/*
NOTE

method .charAt() draws the selected character

function textDisplay() {
  push();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  let x = 10;

  for (let i = 0; i < string.length; i++) {
    // draws *each* character inside the string
    text(string.charAt(i),x, height/2);
    x += 32;
  }
  pop();
}
*/
