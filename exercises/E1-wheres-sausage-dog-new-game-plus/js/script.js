"use strict";

/*****************

E1: Where's Sausage Dog? New Game+
CART263-A
Winter 2021
Melissa Banoen-Garde

Player has to click given emoji.

******************/

// variables for our states/levels
let state = `title`;
let title;
let end;

// declaring global constant for the number of redEmoji images and the number of redEmojis to display
const NUM_RED_EMOJI_IMGS = 7;
const NUM_RED_EMOJIS = 250;

// declaring global arrays for the redEmoji images and redEmoji objects
let redEmojiImgs = [];
let redEmojis = [];

// global variable for heartbreka Emoji
let heartbreakEmojiImg = undefined;
let heartbreakEmoji = undefined;

// global constant for path and prefix of the redEmoji images and sausage dog
const RED_EMOJI_IMGS_PATH = `assets/images/red/red`;
const HEARTBREAK_EMOJI_IMG_PATH = `assets/images/red/heartbreak.png`;


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

  initializeStates();
  initializeEmojis();
}

function initializeStates() {
  title = new Title();
  end = new End();
}

function initializeEmojis() {
  // creates the red emojis 
  for (let i = 0; i < NUM_RED_EMOJIS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let redEmojiImg = random(redEmojiImgs); // randomizes one of the 7 images

    let redEmoji = new Emoji(x, y, redEmojiImg);
    redEmojis.push(redEmoji);
  }

  // find heartbreak emoji
  let x = random(0, width);
  let y = random(0, height);
  heartbreakEmoji = new Red(x, y, heartbreakEmojiImg);
}


// draw()
// Description of draw()
function draw() {
  background(217, 43, 43);

  if (state === `title`) {
    titlePage();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `endPage`) {
    endPage();
  }
}

function titlePage() {
  title.display();
}

function simulation() {
  // draws random red emojis
  for (let i = 0; i < redEmojis.length; i++) {
    redEmojis[i].update();
  }
  // updaets heartbreak emoji
  heartbreakEmoji.update();
}

function endPage() {
  end.display();
}

function mousePressed() {
  heartbreakEmoji.mousePressed();
}

function keyPressed() {
  if (keyIsDown(13) && state === `title`) {
    state = `simulation`;
  }
}
