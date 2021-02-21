"use strict";

/*****************
Project 1
Melissa Banoen-Garde
******************/

// Global variable to store the current state
let currentState;

// custom font
let ibmMono;

// Global variable for the user's webcam and Handpose object
let video = undefined;
let handpose = undefined;


// preload()
// loads the IBM Plex Mono typeface
function preload() {
  ibmMono = loadFont('assets/fonts/IBMPlexMono-Medium.otf');
}

// setup()
// sets the first state which is the intro
function setup() {
  createCanvas(1200, 800);

  currentState = new Title();

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
