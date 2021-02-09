"use strict";

/*****************

E3: Spy Profile Generator Plus
Melissa Banoen-Garde

+ Add more categories to the profile and generate them with other data ☑️
+ Add the ability to delete the current profile data with a keyboard command or button ☑️
+ Find more creative ways to generate profile values, such as combining parts of different sets of data ☑️

******************/

// global variable
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  specialMove: `**REDACTED**`,
  target: `**REDACTED**`,
  password: `**REDACTED**`
};

// variable to store data
let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;
let gemstoneData = undefined;
let nationalityData = undefined;
let movesData = undefined;
let targetData = undefined;

// variable for custom font
let spyFont = undefined;

// constants of the URLs to the JSON datas and typeface file
const TAROT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const OBJECT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const INSTRUMENT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const GEMSTONE_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/gemstones.json`;
const NATIONALITY_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/nationalities.json`;
const MOVES_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/games/street_fighter_ii.json`;
const TARGET_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/celebrities.json`;
const IBM_FONT = `assets/fonts/IBMPlexMono-Medium copy.otf`;

// variable for the background colour
let bgFill = {
  r: 171,
  g: 169,
  b: 157
};

// variable for the font fill
let fontFill = {
  r: 82,
  g: 81,
  b: 74
};

function preload() {
  // from Darius Kazemi's corpora project
  tarotData = loadJSON(TAROT_DATA_SOURCE);
  objectData = loadJSON(OBJECT_DATA_SOURCE);
  instrumentData = loadJSON(INSTRUMENT_DATA_SOURCE);
  gemstoneData = loadJSON(GEMSTONE_DATA_SOURCE);
  nationalityData = loadJSON(NATIONALITY_DATA_SOURCE);
  movesData = loadJSON(MOVES_DATA_SOURCE);
  targetData = loadJSON(TARGET_DATA_SOURCE);
  spyFont = loadFont(IBM_FONT);
}

// setup()
function setup() {
  createCanvas(610, 380);
  checkData();
}

// checkData
// checks for existing data.
function checkData() {
  // loads profile data
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

  // checks if there is data in the data variable
  if (data !== null) {
    // asks user to provide previously given password
    let password = prompt(`Please provide secret password`);
    // if password matches given password
    if (password === data.password) {
      // user can see their profile
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.gemstone + data.secretWeapon;
      spyProfile.specialMove = data.specialMove;
      spyProfile.target = data.target;
      spyProfile.password = data.password;
    }
    // if password doesn't match, nothing happens and they can only see the "redacted" profile
  } else {
    generateSpyProfile();
  }
}

// generateSpyProfile
// generates user's alias, secret weapon, and password
function generateSpyProfile() {
  // prompts user to provide name
  spyProfile.name = prompt(`Please provide your name.`);

  // Alias
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `the ${instrument}`;

  // Secret weapon
  let object = random(objectData.objects);
  let gemstone = random(gemstoneData.gemstones); // New
  spyProfile.secretWeapon = `${gemstone} ${object}`;

  // Special Move
  let nationality = random(nationalityData.nationalities);
  let character = random(movesData.characters);
  let move = random(character.moves);
  spyProfile.specialMove = `the ${nationality} ${move}`;

  // Target
  let target = random(targetData.celebrities);
  spyProfile.target = `${target}`;


  // Password
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords); //randomizes card, selects its "keyword" category then randomizes and selects an element in that (keyword) category

  // saves generated profile
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

// draw()
// displays the generated agent profile
function draw() {
  displayProfile();
}

// displays the agent's profile
function displayProfile() {
  background(bgFill.r, bgFill.g, bgFill.b);

  // template string
  let profile = `** AGENT PROFILE **\n
NAME: ${spyProfile.name}
ALIAS: ${spyProfile.alias}
SECRET WEAPON: ${spyProfile.secretWeapon}
SPECIAL MOVE: ${spyProfile.specialMove}
TARGET: ${spyProfile.target}
PASSWORD: ${spyProfile.password}
`;

  // displays profile
  push();
  textFont(spyFont);
  textSize(18);
  textAlign(LEFT);
  fill(fontFill.r, fontFill.g, fontFill.b);
  text(profile, 30, height / 7);

  push();
  noFill();
  stroke(69, 66, 50);
  rectMode(CENTER);
  rect(width / 2, height / 2, 590, 360);
  pop();

  textSize(10);
  text(`SPACEBAR KEY = SELF-DESTRUCT DOCUMENT`, 30, height - 30);
  pop();


}

// erases data
function keyPressed() {
  // if the spacebar key is pressed then...
  if (keyIsDown(32)) {
    // it will call the removeItem() function to erase data and reloads the page
    localStorage.removeItem(`spy-profile-data`);
    // source: https://www.freecodecamp.org/news/location-reload-method-how-to-reload-a-page-in-javascript/
    window.location.reload();
  }
}
