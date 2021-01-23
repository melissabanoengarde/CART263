class Title extends State{

  constructor() {
    super();

    this.h1 = `Emoji Frenzy!`;
    this.h1px = 30;
    this.h2 = `Find the given emoji to win!`;
    this.h2px = 20;
  }

  draw() {
    super.draw();

    push();
    fill(255,0,0);
    textAlign(CENTER,CENTER);
    textSize(this.h1px);
    text(this.h1, width/2, height/2);

    pop();
  }

  mousePressed() {
    super.mousePressed();
    currentState = new LevelRed();
  }

}
