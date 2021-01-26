class Title {

  constructor() {
    this.h1 = `👹 Emoji Frenzy 👹`;
    this.h1px = 40;
    this.h2 = `Press 'Enter' to begin`;
    this.h2px = 20;
  }

  display() {
    background(255);

    let h1Size = this.h1px +=1;

    if (this.h1px > 80) {
      this.h1px = 40;
    }

    textAlign(CENTER, CENTER);
    textSize(h1Size);
    text(this.h1, width / 2, height / 2);

    textSize(this.h2px);
    text(this.h2, width / 2, height / 3 * 1.8);
  }

}
