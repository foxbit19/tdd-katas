class LightsGrid {
  grid = Array.from(
    {
      length: 1000,
    },
    () => new Array(1000).fill(0)
  );

  turnOn(x, y) {
    this.grid[x][y] = 1;
  }

  turnOff(x, y) {
    this.grid[x][y] = 0;
  }

  toggle(x, y) {
    this.grid[x][y] = 1 - this.grid[x][y];
  }

  isOn(x, y) {
    return this.grid[x][y] === 1 ? true : false;
  }

  ligthsOnCount() {
    let count = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        count += this.grid[i][j];
      }
    }

    return count;
  }
}

module.exports = LightsGrid;
