"use strict";

/*****************

Activity 01: Where's Sausage Dog?
Melissa Banoen-Garde

Player has to click on the sausage dog to win the game.

******************/

// declaring global constant for the number of animal images and the number of animals to display
const NUM_RED_EMOJI_PNGS = 7;
const NUM_RED_EMOJIS = 100;

// declaring global arrays for the animal images and animal objects
let redEmojiPngs = [];
let redEmojis = [];

// global variable for sausage dog
let heartbreakEmojiPng = undefined;
let heartbreakEmoji = undefined;

// global constant for path and prefix of the animal images and sausage dog
const RED_EMOJI_PNGS_PATH = `assets/images/red/red`;
const HEARTBREAK_EMOJI_PATH = `assets/images/red/heartbreak.png`;


// preload()
// Description of preload
function preload() {
  // for-loop that counts up to the number of animal images, puts that loaded image into our array
  for (let i = 0; i < NUM_RED_EMOJI_PNGS; i++) {
    // NEW NEW
    let redEmojiPng = loadImage(RED_EMOJI_PNGS_PATH + `${i}.png`);
    redEmojiPngs.push(redEmojiPng);
  }

  // sausage dog image
  heartbreakEmojiPng = loadImage(HEARTBREAK_EMOJI_PATH);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  createRedEmojis();
  createHeartbreakEmoji();
}


// draw()
// Description of draw()
function draw() {
  background(255);

  updateRedEmojis();
  updateHeartbreakEmoji();
}

function mousePressed() {
  heartbreakEmoji.mousePressed();
}

// function that creates the animals
function createRedEmojis() {
  for (let i = 0; i < NUM_RED_EMOJIS; i++) {
    createRandomRedEmojis();
  }
}

// function that creates specific random animals
function createRandomRedEmojis() {
  let x = random(0, width);
  let y = random(0, height);
  let redEmojiPng = random(redEmojis); // randomizes one of the 10 images

  let redEmoji = new Animal(x, y, redEmojiPngs);
  redEmojis.push(redEmoji);
}

// function that creates the sausage Dog
function createHeartbreakEmoji() {
  // create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  heartbreakEmoji = new SausageDog(x, y, heartbreakEmojiPng);
}

// function that draws random animals
function updateRedEmojis() {
  for (let i = 0; i < redEmojis.length; i++) {
    // NEW NEW
    redEmojis[i].update();
  }
}

// updates code of sausage Dog
function updateHeartbreakEmoji() {
  // displaying sausage Dog
  heartbreakEmoji.update();
}
