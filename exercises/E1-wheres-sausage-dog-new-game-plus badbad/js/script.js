"use strict";

/*****************

E1: Where's Sausage Dog? New Game+
Melissa Banoen-Garde

Player has to click on the sausage dog to win the game.

******************/

// variable storing currently active state object
let currentState;

// declaring global constant for the number of animal images and the number of animals to display
const NUM_RED_EMOJI_PNGS = 7;
const NUM_RED_EMOJIS = 100;

// RED
// declaring global arrays for the red emojis and red objects
// and variable for heart break emoji png and object
let redEmojiPngs = [];
let redEmojis = [];
let heartbreakEmojiPng;
let heartbreakEmoji;


// global constant for path and prefix of the animal images and sausage dog
const RED_EMOJIS_PNG_PATH = `assets/images/red`;
const HEARTBREAK_EMOJI_PNG_PATH = `assets/images/red/heartbreak.png`;



// preload()
// preloads game's assets
function preload() {
  // for-loop that counts up to the number of animal images, puts that loaded image into our array
  for (let i = 0; i < NUM_RED_EMOJI_PNGS; i++) {
    // NEW NEW
    let redEmojiPng = loadImage(RED_EMOJIS_PNG_PATH + `${i}.png`);
    redEmojiPngs.push(redEmojiPng);
  }

  // heartbreak emoji png
  heartbreakEmojiPng = loadImage(HEARTBREAK_EMOJI_PNG_PATH);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  currentState = new Title();

  // level red
  for (let i = 0; i < NUM_RED_EMOJIS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let redEmojiPng = random(redEmojiPngs); // randomizes one of the 10 images

    let redEmoji = new LevelRed(x, y, redEmojiPng);
    redEmojis.push(redEmoji);
  }
}


// draw()
// Description of draw()
function draw() {
  background(255);

  currentState.draw();
}

function mousePressed() {
  currentState.mousePressed();
}

/*

// function that creates the animals
function createAnimals() {
  for (let i = 0; i < NUM_ANIMALS_DISPLAYED; i++) {
    createRandomAnimals();
  }
}

// function that creates specific random animals
function createRandomAnimals() {
  let x = random(0, width);
  let y = random(0, height);
  let animalImage = random(animalImgs); // randomizes one of the 10 images

  let animal = new Animal(x, y, animalImage);
  animals.push(animal);
}

// function that creates the sausage Dog
function createSausageDog() {
  // create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImg);
}

// function that draws random animals
function updateAnimals() {
  for (let i = 0; i < animals.length; i++) {
    // NEW NEW
    animals[i].update();
  }
}

// updates code of sausage Dog
function updateSausageDog() {
  // displaying sausage Dog
  sausageDog.update();
}

*/
