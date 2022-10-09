class Wardrobe {
  combinations = [];

  wallSize() {
    return 250;
  }

  elements() {
    return [50, 75, 100, 120];
  }

  getCombinations() {
    return this.combinations;
  }

  findCombinations() {
    for (let i = 0; i < this.elements().length; i++) {
      let currentCombination = [this.elements()[i]];
      let currentSum = this.elements()[i];
      for (let j = 1; j < this.elements().length; j++) {
        if (i === j) {
          break;
        }
        if (currentSum + this.elements()[i] > this.wallSize()) {
          break;
        } else {
          this.combinations.push([...currentCombination]);
          currentCombination.push(this.elements()[j]);
          currentSum += this.elements()[i];
        }
      }
    }
  }
}

module.exports = Wardrobe;
