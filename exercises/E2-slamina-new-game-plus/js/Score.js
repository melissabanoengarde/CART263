class Score {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.w = 400;
    this.h = 200;
    this.score = 0;

    this.string = `SCORE:`;
    this.userString = `User:`;
    this.curiosityString = `Curiosity:`;
  }

  display() {
    text(this.string, width/4, height/2);
    
  }
}
