"use strict";

/*****************

Activity 02: Slamina
Melissa Banoen-Garde

+ obtain a list of animal names for the user to guess
+ figure out how to make ResponsiveVoice say an animal's name backwards
+ need to have annyang listen to a user command representing a guess
+ need to display whether they got it right

******************/

const planets = [
  "earth",
  "jupiter",
  "mars",
  "saturn",
  "venus",
  "uranus",
  "neptune",
  "mercury"
];

// where we'll store the planet the user is guessing
let currentPlanet = ``;

// variable to store the user's guess
let currentAnswer = ``;

// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  // annyang
  if (annyang) {
    // declaring a commands variable
    let commands = {
      // when annyang hears "I think it is *planet", its calls the guess Planet function
      'I think it is *planet': guessPlanet
    };

    // we add the custom command for annyang to execute
    annyang.addCommands(commands);

    // annyang starts to listen and repeat
    annyang.start();

    // text styling
    textSize(40);
    textAlign(CENTER, CENTER);
  }
}


// draw()
// Description of draw()
function draw() {
  background(238, 247, 188);

  if (currentAnswer === currentPlanet) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);
}

function mousePressed() {
  // assigns a random planet name from the planets array into "currentPlanet"
  currentPlanet = random(planets);

  // currentPlanet goes into the reverseString function --> "reverseString(string)"
  let reversePlanet = reverseString(currentPlanet);

  // responsiveVoice repeats the element in reverse
  responsiveVoice.speak(reversePlanet);
}

// when annyang calls this function, it's going to send what the user said to this function in the parameter
function guessPlanet(planet) {
  // current answer is the planet that was just said (by the user)
  // answer is always converted to lowercase
  currentAnswer = planet.toLowerCase();
  console.log(currentAnswer)
}

// taken from the acitivity notes
// https://pippinbarr.github.io/cart263-2021/activities/slamina.html
// reverses the provided string...
function reverseString(string) {

  // 3 STEPS TO MAKE THE STRING GO BACKWARDS
  // 1) Split the string into an array of characters
  //    Separates the characters and puts them all into an array, so we end up with each character from a string  in an array as individual elements
  let characters = string.split('');

  // 2) Reverse the array of characters
  //    then we call the reverse method to reverse the elements in the array
  let reverseCharacters = characters.reverse();

  // 3) Join the array of characters back into a string
  //    joins all the elements together then turns it into a string
  let result = reverseCharacters.join('');

  // Return the result
  return result;
}
