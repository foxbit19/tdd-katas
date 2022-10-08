class Game {
  rolls = [];
  currentRoll = 0;

  roll(n) {
    this.rolls[this.currentRoll++] = n;
  }

  score() {
    let points = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] === 10) {
        // strike
        points += 10 + this.rolls[i + 1] + this.rolls[i + 2];
        i++;
      } else if (this.rolls[i] + this.rolls[i + 1] === 10) {
        // spare (or strike?)
        points += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        points += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }

    }

    return points;
  }
}

module.exports = Game;
