class Mars {
  _surface;

  constructor() {
    this._surface = Array.from(
      {
        length: 10,
      },
      () => new Array(10).fill(0)
    );
  }

  getSurface() {
    return this._surface.length * this._surface[0].length;
  }

  setObstacle(position) {
    if (!position[0] || !position[1]) {
      return;
    }
    this._surface[position[0]][position[1]] = 1;
  }

  obstacleExists(position) {
    return this._surface[position[0]][position[1]] === 1 ? true : false;
  }
}

module.exports = Mars;
