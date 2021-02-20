"use strict";

/*****************
Project 1
Melissa Banoen-Garde
******************/

// global variable to store the current state
let currentState;

// custom font
let ibmMono;

// let canvas3D = new p5(script);


// preload()
// preloads the program's custom font
function preload() {
  ibmMono = loadFont('assets/fonts/IBMPlexMono-Medium.otf');
}


// setup()
// sets the first state which is the intro
function setup() {
  createCanvas(1200, 800);

  currentState = new Field();
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
