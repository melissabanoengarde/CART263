"use strict";

/*****************

WEEK 4: Web Storage API
Melissa Banoen-Garde

******************/

// user data object
let userData = {
  name: `stranger`
};

function setup() {
  createCanvas(500, 500);

  // check if we already the user's name
  // load data
  let data = JSON.parse(localStorage.getItem(`web-storage-example-personalization`));

  // need to check if this data is null
  if (data !== null) {
    // user's input is stored are as data; saves user's name in the name property
    userData.name = data.name;
  } else {
    // if there ISN'T data
    // prompt() will return what they typed!
    // prompt(`What's your name?`);
    // userData.name is assigned whatever the user types in the prompt box
    userData.name = prompt(`What's your name?`);

    // SAVE and store the name when typed
    // what am i gonna save? the STRINGIFIED version of that userData
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }
}

function draw() {
  background(255);

  push();
  textSize(54);
  textAlign(CENTER);
  text(`Howdy, ${userData.name}!`, width / 2, height / 2);
  pop();
}
