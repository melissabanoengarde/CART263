"use strict";

/*****************

W3 - Voices
Melissa Banoen-Garde

Experimenting with voices!

******************/

// Default name
let userName = `stranger`

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let command = {
      // A command that listens for "my name is..." and the captures
      // whatever they say after that and sends it as an argument to setName()
      // Remember that anything after a splat (*) is captured and passes it to a function
      'My name is *name': setName
    }
    annyang.addCommands(command);
    annyang.start();
  }
}

// Sets the current username to whatever argument is passed to it by annyang!
// Now how what the user said will be passed into the parameter called name
function setName(name) {
  userName = name;
}

function draw() {
  background(0);

  // Greet the user
  push();
  fill(255, 255, 0);
  textSize(32);
  rectMode(CENTER);
  text(`Hi there, ${userName}!`, 100, 100);
  pop();
}



// RESPONSIVEVOICE
// function mousePressed() {
//   responsiveVoice.speak("As I walk through the valley and the shadow of death, I aaaaaam... yourrrrr... father", "UK English Male", {
//     pitch: .5,
//     rate: 0.5,
//     volume: 1
//   });
// }
