<!-- // array of instructions
let instructions = [
  `Zoom out`,
  `Welcome\nFeeling anxious?`,
  `How you feel is\nvalid and real`,
  `But this is a gentle reminder that not all feelings are\nnecessarily facts.`,
  `Before we begin with this grounding technique, please be mindful of your breathing`,
  `Inhale... Exhale...`,
  `Name 5 things you see around you.`
];

// variable to store CURRENT line displayed
let currentInstruction = 0;


// ellipse's size
let size = 100;


// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont('Inconsolata', 20);
  textAlign(CENTER, CENTER);
  // Interprets the text's wrap parameters as the shape's center point
  rectMode(CENTER);
}


// draw()
// Description of draw()
function draw() {
  background(19, 0, 82); //19, 0, 82, 50

  // A variable set to the current instruction.
  // In this case, the current instruction is the variable "currentInstruction", which is set to 0.
  let displayed = instructions[currentInstruction];

  // text colour yay
  fill(227, 216, 230);

  // APPLAYING THE DECLARED VARIABEL:
  // Displays the string in the declared value of the array; 0 = `Zoom Out` 🌀
  text(displayed, width / 2, height / 2, 300, 100);


  // Ripples
  push();
  ellipseMode(CENTER);
  noFill();

  // ellipse
  stroke(227, 216, 230);
  strokeWeight(1);
  ellipse(width / 2, height / 2, size);

  pop();

  let talk = instructions[6];

  // instructions
  if (size > 180 && size < 250) {
    // Welcome...
    currentInstruction = 1;
  } else if (size > 250 && size < 300) {
    // How you feel...
    currentInstruction = 2;
  } else if (size > 300 && size < 350) {
    // But this is a gentle...
    currentInstruction = 3;
  } else if (size > 350 && size < 400) {
    // Before we begin with...
    currentInstruction = 4;
  } else if (size > 400 && size < 450) {
    // Inhale... Exhale
    currentInstruction = 5;
  } else if (size >= 450 || size < 480) { // size > 450 && size < 510
    // missCounselor();
    responsiveVoice.speak(talk, "US English Female", {
      rate: 0.5
    });
  } else if (size > 480) {
    responsiveVoice.cancel();
  }
}

// ellipse's size increases as the user zooms in/out
function mouseWheel(event) {
  size += event.delta;
  console.log(size);

} -->
