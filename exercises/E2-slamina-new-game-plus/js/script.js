"use strict";

/*****************

Activity 02: A Game with Curiosity!
Melissa Banoen-Garde

+ added states and a separate in-game state
  - in-game states helps responsiveVoice determine what to say
+ added sounded effects. responsiveVoice either says
  - a planet
  - "good job!" when the answer is right
  -"not quite!" when the answer is wrong
+ changed the set of answers
 
******************/

// holds current state
let state = `title`;

// holds the states in game
let resultState = ``;

// array of planets
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

// This is what curiosity says in the "title" state
let phrase = `Hello there! Would you like to play a game with me?`;

// where we'll store the planet the user is guessing
let currentPlanet = ``;

// variable to store the user's guess
let currentAnswer = ``;

// variable to store the Curiosity rover image
let curiosityImg = undefined;


function preload() {
  curiosityImg = loadImage('assets/images/curiosity.png');
}


// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // annyang
  if (annyang) {
    // declaring a commands variable
    let commands = {
      // when annyang hears "I think it is *planet", its calls the guess Planet function
      'Is it *planet': guessPlanet
    };
    annyang.debug();
    // we add the custom command for annyang to execute
    annyang.addCommands(commands);

    // annyang starts to listen and repeat
    annyang.start();

    // text styling
    textSize(50);
    textFont(`courier`);
    textAlign(CENTER, CENTER);
  }
}

// draw()
// order of the states
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `play`) {
    play();
  }
}

// title state displaying Curiosity, asking the user if they'd like to play with them
// user must reply yes or no. if the user say yes, it switches states.
function title() {
  background(255);

  push();
  textSize(30);
  fill(0);
  text(`A Game with Curiosity`, width / 2 - 10, height / 3);

  push();
  textSize(10);
  text(`Click me!`, width / 2 - 10, height / 3 * 2);
  pop();
  pop();

  image(curiosityImg, width / 2, height / 2, 350, 200);

  // if the user says yes, the state switches to the game
  // if the user says no, the user is prompted to basically say yes
  if (annyang) {
    let commands = {
      'Yes': function() {
        state = `play`;
      },
      'No': function() {
        alert(`Please say "yes", Curiosity would like to play with you.`);
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

// where the game begins
function play() {
  background(255);

  // instructions
  push();
  fill(0);
  textSize(15);
  textAlign(LEFT);
  text(`1. Guess the planet that Curiosity is saying in reserve.\n2. Click Curiosity for a word to guess.\n3. Articulate your answer starting with "Is it..."`, 10, 50);
  pop();

  image(curiosityImg, width / 2, height / 2, 350, 200);

}

// if the user guesses right, the program calls the "right" function
// if the user guesses wrong, the program calls the "wrong" function
function answer() {
  // // what happens when the user is either right or wrong
  if (currentAnswer === currentPlanet) {
    right();
  } else {
    wrong();
  }
}

// Curiosity says "good job!" when the user guesses right
function right() {
  push();
  resultState = `right`;
  responsiveVoice.speak(`Good job!`, "UK English Male", {
    pitch: 1.5,
    rate: 0.7
  });
  pop();
}

// Curiosity says "not quite!" when the user guesses wrong
function wrong() {
  push();
  resultState = `wrong`;
  responsiveVoice.speak(`Not quite!`, "UK English Male", {
    pitch: 1.5,
    rate: 0.7
  });
  pop();
}


// User clicks the screen, responsiveVoice says a planet backwards
function mousePressed() {
  // only plays when the state is set to 'title'
  if (state === `title`) {
    responsiveVoice.speak(phrase, "UK English Male", {
      pitch: 1.5,
      rate: 0.7,
    });
    resultState = `none`;
  }

  // only works when state is set to 'play'
  if (state === `play`) {

    // assigns a random planet name from the planets array into "currentPlanet"
    currentPlanet = random(planets);

    // currentPlanet goes into the reverseString function --> "reverseString(string)"
    let reversePlanet = reverseString(currentPlanet);

    // responsiveVoice repeats the element in reverse
    responsiveVoice.speak(reversePlanet, "UK English Male", {
      pitch: 1.5,
      rate: 0.7,
    });
    resultState = `inGame`;
  }
}


// when annyang calls this function, it's going to send what the user said to this function in the parameter
function guessPlanet(planet) {
  // current answer is the planet that was just said (by the user)
  // answer is always converted to lowercase
  currentAnswer = planet.toLowerCase();
  answer();
}


// taken from the acitivity notes
// https://pippinbarr.github.io/cart263-2021/activities/slamina.html
// reverses the provided string...
function reverseString(string) {

  // 3 STEPS TO REVERSE THE STRING
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
