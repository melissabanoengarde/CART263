"use strict";

/*****************

Activity 03: Spy Profile Generator
Melissa Banoen-Garde

+ get user's name and display a default profile
+ generate a profile instead using JSON data
+ save and load the generated profile
+ add a password check

******************/

// global variable
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`
};

// variable to store data (alias)
let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;

// constants of the URLs to the JSON datas
const TAROT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const OBJECT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const INSTRUMENT_DATA_SOURCE = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;

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
}

// setup()
// Description of setup
function setup() {
  createCanvas(550, 380);
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
      spyProfile.secretWeapon = data.secretWeapon;
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

  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;

  let object = random(objectData.objects);
  spyProfile.secretWeapon = object;

  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords); //randomizes card, selects its "keyword" category then randomizes and selects an element in that (keyword) category

  // saves generated profile
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

// draw()
// Description of draw()
function draw() {
  background(bgFill.r, bgFill.g, bgFill.b);

  // template string
  let profile = `** AGENT PROFILE **\n
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}
`;

  // displays name input
  push();
  textFont('Courier', 'monospace');
  textSize(20);
  textAlign(LEFT);
  fill(fontFill.r, fontFill.g, fontFill.b);
  text(profile, 30, height / 7);
  pop();
}

// ++ adding this here ++
// erases data
function keyPressed() {
  // if the c key is pressed then...
  if (key === `c`) {
    // it will call the removeItem() function and the data is erased
    localStorage.removeItem(`spy-profile-data`);
  }
}
