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

function preload() {
  // from Darius Kazemi's corpora project
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
}

// setup()
// Description of setup
function setup() {
  createCanvas(550, 380);

  // loads profile data
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

  if (data !== null) {
    spyProfile.name = data.name;
    spyProfile.alias = data.alias;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.password = data.password;
  }
  else {
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
  background(171, 169, 157);

  // template string
  let profile = `** AGENT PROFILE **\n
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}
`;

  // displays name input
  push();
  textFont('Courier');
  textSize(20);
  textAlign(LEFT);
  fill(82, 81, 74);
  text(profile, 30, height/7);
  pop();
}
