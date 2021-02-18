"use strict";

/*****************
Project 1
Melissa Banoen-Garde
******************/

// global variable to store the current state
let currentState;

// preload()
// Description of preload
function preload() {

}


// setup()
// sets the first state which is the intro
function setup() {
  createCanvas(800, 600);

  currentState = new Intro();

}


// draw()
// draws the methods inside the current state
function draw() {
  currentState.draw();
}

function keyPressed() {
  // class the keyPressed method of the state
  currentState.keyPressed();
}
