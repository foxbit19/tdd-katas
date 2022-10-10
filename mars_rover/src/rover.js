const Mars = require("./mars");

class Rover {
  _directions = ["O", "N", "E", "S"];
  _currentPosition;
  _currentDirectionIndex;
  _planet;

  constructor(initialPosition, initialDirection) {
    this._currentPosition = initialPosition;
    for (let i = 0; i < this._directions.length; i++) {
      if (initialDirection === this._directions[i]) {
        this._currentDirectionIndex = i;
        break;
      }
    }
    this._planet = new Mars();
  }

  currentPosition() {
    return this._currentPosition;
  }

  currentDirection() {
    return this._directions[this._currentDirectionIndex];
  }

  moveForward() {
    const oldPosition = this._currentPosition;

    switch (this._directions[this._currentDirectionIndex]) {
      case "N":
        this._currentPosition[1]--;
        break;
      case "S":
        this._currentPosition[1]++;
        break;
      case "O":
        this._currentPosition[0]--;
        break;
      case "E":
        this._currentPosition[0]++;
        break;
    }

    this.wrappingEdges();
    this.findObstacle();
  }

  moveBackward() {
    switch (this._directions[this._currentDirectionIndex]) {
      case "N":
        this._currentPosition[1]++;
        break;
      case "S":
        this._currentPosition[1]--;
        break;
      case "O":
        this._currentPosition[0]++;
        break;
      case "E":
        this._currentPosition[0]--;
        break;
    }

    this.wrappingEdges();
    this.findObstacle();
  }

  wrappingEdges() {
    const surfaceLinearSize = Math.sqrt(this._planet.getSurface());

    for (let i = 0; i <= 1; i++) {
      if (this._currentPosition[i] < 0) {
        this._currentPosition[i] = surfaceLinearSize - 1;
      }

      if (this._currentPosition[i] >= surfaceLinearSize) {
        this._currentPosition[i] = 0;
      }
    }
  }

  findObstacle() {
    if (this._planet.obstacleExists(this._currentPosition)) {
      this._currentPosition = oldPosition;
      throw new Error(
        "Obstacle found, last valid position is ",
        this._currentPosition
      );
    }
  }

  turnLeft() {
    this._currentDirectionIndex =
      this._currentDirectionIndex - 1 < 0 ? 3 : this._currentDirectionIndex - 1;
  }

  turnRight() {
    this._currentDirectionIndex =
      this._currentDirectionIndex + 1 > 3 ? 0 : this._currentDirectionIndex + 1;
  }
}

module.exports = Rover;
