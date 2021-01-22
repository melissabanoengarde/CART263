"use strict";

/*****************

W2 - Review
Melissa Banoen-Garde

Going over constants, object parameters,
and first-class function

******************/

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let config = {
    x: 250,
    y:250,
    width:200,
    height:200,
    fillColour: {
      r:255,
      g:255,
      b:0
    },
    mode: CENTER
  };

  drawFancyRect(config);
}

// destructring..
function drawFancyRect({ x, y, width, height, fillColour, mode}) {
  push();
  fill(fillColour.r, fillColour.g, fillColour.b);
  rectMode(mode);
  rect(x, y, width, height);
  pop();
}
