"use strict";

/*****************

W3 - Voices
Melissa Banoen-Garde

Experimenting with voices!

******************/

// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(500,500);
}


// draw()
// Description of draw()
function draw() {
  background(255,0,0);
}

function mousePressed() {
  responsiveVoice.speak("As I walk through the valley and the shadow of death, I aaaaaam... yourrrrr... father", "UK English Male", {
    pitch: .5,
    rate: 0.5,
    volume: 1
  });
}
