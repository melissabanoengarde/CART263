"use strict";

/*****************

Activity 02: Slamina-new-game-plus
Melissa Banoen-Garde

+ obtain a list of animal names for the user to guess
+ figure out how to make ResponsiveVoice say an animal's name backwards
+ need to have annyang listen to a user command representing a guess
+ need to display whether they got it right

******************/

// holds current state
let state = `title`;

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

let phrase = `Hello there! Would you like to play a game with me?`;

// where we'll store the planet the user is guessing
let currentPlanet = ``;

// variable to store the user's guess
let currentAnswer = ``;

// variable to store Curiosity image
let curiosityImg = undefined;

let score;


function preload() {
  curiosityImg = loadImage('assets/images/curiosity.png');
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  score = new Score();

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
// Description of draw()
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `play`) {
    play();
  } else if (state === `curiosityWins`) {
    curiosityWins();
  } else if (state === `userWins`) {
    userWins();
  }
}

// title state
function title() {
  background(255);

  push();
  textSize(30);
  fill(0);
  text(`A Game with Curiosity`, width / 2 - 10, height / 3);

  imageMode(CENTER);
  image(curiosityImg, width/2, height/2, 350,200);
  pop();

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

// where the game happens
function play() {
    background(255);

    // what happens when the user is either right or wrong
    if (currentAnswer === currentPlanet) {
      right();
    } else {
      wrong();
    }

    // displayed guess
    text(currentAnswer, width / 2, height / 2);

    // scorebox
    score.display();
  }

  // what happens when the user guesses right
  function right() {
    fill(0, 255, 0);
  }

  // what happens when the user guesses wrong
  function wrong() {
    fill(255, 0, 0);
  }



// User clicks the screen, responsiveVoice says a planet backwards
function mousePressed() {
  // only plays when the state is set to 'title'
  if (state === `title`) {
    responsiveVoice.speak(phrase, "UK English Male", {
      pitch: 1.5,
      rate: 0.7
    });
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
    rate: 0.7
  });
 }
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

function curiosityWins() {

}

function userWins() {

}

// function keyPressed() {
//   if (keyIsDown(32) && state === `title`) {
//     state = `play`;
//   }
// }
