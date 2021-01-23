"use strict";

/*****************

E1: Where's Sausage Dog? New Game+
CART263-A
Winter 2021
Melissa Banoen-Garde

Player has to click given emoji.

******************/

// declaring global constant for the number of animal images and the number of animals to display
const NUM_ANIMAL_IMGS = 7;
const NUM_ANIMALS_DISPLAYED = 250;

// declaring global arrays for the animal images and animal objects
let animalImgs = [];
let animals = [];

// global variable for sausage dog
let sausageDogImg = undefined;
let sausageDog = undefined;

// global constant for path and prefix of the animal images and sausage dog
const ANIMAL_IMGS_PATH = `assets/images/red/red`;
const SAUSAGED_DOG_IMG_PATH = `assets/images/red/heartbreak.png`;
// global constant for


// preload()
// Description of preload
function preload() {
  // for-loop that counts up to the number of animal images, puts that loaded image into our array
  for (let i = 0; i < NUM_ANIMAL_IMGS; i++) {
    // NEW NEW
    let animalImage = loadImage(ANIMAL_IMGS_PATH + `${i}.png`);
    animalImgs.push(animalImage);
  }

  // sausage dog image
  sausageDogImg = loadImage(SAUSAGED_DOG_IMG_PATH);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  createAnimals();
  createSausageDog();
}


// draw()
// Description of draw()
function draw() {
  background(217, 43, 43);

  updateAnimals();
  updateSausageDog();
}

function mousePressed() {
  sausageDog.mousePressed();
}

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

  let animal = new Emoji(x, y, animalImage);
  animals.push(animal);
}

// function that creates the sausage Dog
function createSausageDog() {
  // create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new RedEmoji(x, y, sausageDogImg);
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
