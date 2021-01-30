"use strict";

/*****************

Activity 02: Slamina
Melissa Banoen-Garde

+ obtain a list of animal names for the user to guess
+ figure out how to make ResponsiveVoice say an animal's name backwards
+ need to have annyang listen to a user command representing a guess
+ need to display whether they got it right

******************/

const animals = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ];

// where we'll store the animal the user is guessing
let currentAnimal = ``;

// variable to store the user's guess
let currentAnswer = ``;

// setup()
// Description of setup
function setup() {

  // annyang
  if (annyang) {
    // declaring a commands variable
    let commands = {
      // when annyang hears "I think it is *animal", its calls the guess Animal function
      'I think it is *animal': guessAnimal
      };

      // we add the custom command for annyang to execute
      annyang.addCommands(commands);

      // annyang starts to listen and repeat
      annyang.start();

      // text styling
      textSize(40);
      textAlign(CENTER, CENTER);
    }
  }



// draw()
// Description of draw()
function draw() {

}

function mousePressed() {
  // assigns a random animal name from the animals array into "currentAnimal"
  currentAnimal = random(animals);

  // currentAnimal goes into the reverseString function --> "reverseString(string)"
  let reverseAnimal = reverseString(currentAnimal);

  // responsiveVoice repeats the element in reverse
  responsiveVoice.speak(reverseAnimal);
}

// when annyang calls this function, it's going to send what the user said to this function in the parameter
function guessAnimal(animal) {
  // current answer is the animal that was just said (by the user)
  currentAnswer = animal;
  console.log(currentAnswer)
}


// taken from the acitivity notes
// https://pippinbarr.github.io/cart263-2021/activities/slamina.html
// reverses the provided string...
function reverseString(string) {

  // 3 STEPS TO MAKE THE STRING GO BACKWARDS
  // 1) Split the string into an array of characters
  //    separates the characters and puts them all into an array, so we end up with each     character from a string in an array as individual elements
  let characters = string.split('');

  // 2) Reverse the array of characters
  //    then we call the reverse method to reverse the elements in the array
  let reverseCharacters = characters.reverse();

  // 3) Join the array of characters back into a string
  //  joins all the elements together then turns it into a string
  let result = reverseCharacters.join('');

  // Return the result
  return result;
}
