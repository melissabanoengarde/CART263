class Score {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.w = 400;
    this.h = 200;

    this.userScore = 0;
    this.curiosityScore = 0;

    // this.string = `ANSWER:`;
    this.userString = `User:`;
    this.curiosityString = `Curiosity:`;
  }

  display() {
    push();
    fill(0);
    textSize(20);
    text(this.string, width / 2, height / 3 * 2);
    text(this.userString + this.userScore, width / 4, height / 3 * 2.5);
    text(this.curiosityString + this.curiosityScore, width / 4 * 3, height / 3 * 2.5);
    pop();

    // what happens when the user is either right or wrong
    // if (currentAnswer === currentPlanet) {
    //   this.userScore+1;
    //   fill(0, 255, 0);
    // } else {
    //   this.curiosityScore+1;
    //   fill(255,0,0);
    // }


  }


}
