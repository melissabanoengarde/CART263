"use strict";

/*****************

E1: Where's Sausage Dog? New Game+
CART263-A
Winter 2021
Melissa Banoen-Garde

Player has to click given emoji.

******************/

// declaring global constant for the number of redEmoji images and the number of redEmojis to display
const NUM_RED_EMOJI_IMGS = 7;
const NUM_RED_EMOJIS = 250;

// declaring global arrays for the redEmoji images and redEmoji objects
let redEmojiImgs = [];
let redEmojis = [];

// global variable for sausage dog
let heartbreakEmojiImg = undefined;
let heartbreakEmoji = undefined;

// global constant for path and prefix of the redEmoji images and sausage dog
const RED_EMOJI_IMGS_PATH = `assets/images/red/red`;
const HEARTBREAK_EMOJI_IMG_PATH = `assets/images/red/heartbreak.png`;
// global constant for


// preload()
// Description of preload
function preload() {
  // for-loop that counts up to the number of redEmoji images, puts that loaded image into our array
  for (let i = 0; i < NUM_RED_EMOJI_IMGS; i++) {
    // NEW NEW
    let redEmojiImg = loadImage(RED_EMOJI_IMGS_PATH + `${i}.png`);
    redEmojiImgs.push(redEmojiImg);
  }

  // sausage dog image
  heartbreakEmojiImg = loadImage(HEARTBREAK_EMOJI_IMG_PATH);
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
  background(217, 43, 43);

  updateRedEmojis();
  updateHeartbreakEmoji();
}

function mousePressed() {
  heartbreakEmoji.mousePressed();
}

// function that creates the redEmojis
function createRedEmojis() {
  for (let i = 0; i < NUM_RED_EMOJIS; i++) {
    createRandomRedEmojis();
  }
}

// function that creates specific random redEmojis
function createRandomRedEmojis() {
  let x = random(0, width);
  let y = random(0, height);
  let redEmojiImg = random(redEmojiImgs); // randomizes one of the 10 images

  let redEmoji = new Emoji(x, y, redEmojiImg);
  redEmojis.push(redEmoji);
}

// function that creates the sausage Dog
function createHeartbreakEmoji() {
  // create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  heartbreakEmoji = new RedEmoji(x, y, heartbreakEmojiImg);
}

// function that draws random redEmojis
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
