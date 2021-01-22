"use strict";

/*****************

Activity 01: Where's Sausage Dog?
Melissa Banoen-Garde

Player has to click on the sausage dog to win the game.

******************/

// declaring global constant for the number of animal images and the number of animals to display
const NUM_ANIMAL_IMGS = 10;
const NUM_ANIMALS_DISPLAYED = 100;

// declaring global arrays for the animal images and animal objects
let animalImgs = [];
let animals = [];

// global variable for sausage dog
let sausageDogImg = undefined;
let sausageDog = undefined;

// global constant for path and prefix of the animal images
const ANIMAL_IMGS_PATH = `assets/images/animal`;


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
  sausageDogImg = loadImage(`assets/images/sausage-dog.png`);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create the animals
  for (let i = 0; i < NUM_ANIMALS_DISPLAYED; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImgs); // randomizes one of the 10 images

    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  // create sausage dog
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImg);
}


// draw()
// Description of draw()
function draw() {
  background(255, 255, 0);

  for (let i = 0; i < animals.length; i++) {
    // NEW NEW
    animals[i].update();
  }

  // displaying sausage Dog
  sausageDog.update();
}

function mousePressed() {
  sausageDog.mousePressed();
}
