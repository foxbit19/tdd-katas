const Rover = require("./src/rover.js");
const Mars = require("./src/mars.js");

const setUp = (position, direction) => {
  _rover = new Rover(position, direction);
};

test("should instance rover class", () => {
  const rover = new Rover();
});

test("should initialize the rover with initial starting point", () => {
  const rover = new Rover([1, 1]);

  expect(rover.currentPosition()).toEqual([1, 1]);
});

test("should initialize the rover with initial direction", () => {
  setUp([1, 1], "N");
  expect(_rover.currentDirection()).toBe("N");
});

test("should move the rover forward", () => {
  setUp([1, 1], "N");
  _rover.moveForward();

  expect(_rover.currentPosition()).toEqual([1, 0]);
});

test("should move the rover backward", () => {
  setUp([1, 1], "N");
  _rover.moveBackward();

  expect(_rover.currentPosition()).toEqual([1, 2]);
});

test("should turn the rover left", () => {
  setUp([1, 1], "N");
  _rover.turnLeft();

  expect(_rover.currentDirection()).toBe("O");
});

test("should turn the rover right", () => {
  setUp([1, 1], "N");
  _rover.turnRight();

  expect(_rover.currentDirection()).toBe("E");
});

test("should instance Mars class", () => {
  const mars = new Mars();
});

test("should return mars surface", () => {
  const mars = new Mars();

  expect(mars.getSurface()).toBe(100);
});

test("should wrapping edges moving forward", () => {
  setUp([0, 0], "N");
  _rover.moveForward();

  expect(_rover.currentPosition()).toEqual([0, 9]);
});

test("should wrapping edges moving backward", () => {
  setUp([9, 9], "O");
  _rover.moveBackward();

  expect(_rover.currentPosition()).toEqual([0, 9]);
});

test("should wrapping edges moving using a sequence of instructions", () => {
  setUp([8, 5], "E");
  _rover.moveForward();
  _rover.moveForward();
  _rover.turnLeft();
  _rover.moveForward();
  _rover.moveForward();
  _rover.turnLeft();
  _rover.moveForward();
  _rover.turnLeft();
  _rover.moveForward();
  _rover.turnRight();
  _rover.moveBackward();

  expect(_rover.currentPosition()).toEqual([0, 4]);
});

test("should place an obstacle on planet", () => {
  const mars = new Mars();
  mars.setObstacle([3, 4]);

  expect(mars.obstacleExists([3, 4])).toBe(true);
});

test("should encounter an obstacle during a sequence #1 of instructions", () => {
  setUp([0, 0], "E");
  _rover._planet.setObstacle([2, 2]);

  expect(instructionSet1).toThrow();
});

test("should encounter an obstacle during a sequence #2 of instructions", () => {
  setUp([0, 0], "E");
  _rover._planet.setObstacle([2, 2]);

  expect(instructionSet2).toThrow();
});

const instructionSet1 = () => {
  _rover.moveForward();
  _rover.moveForward();
  _rover.turnRight();
  _rover.moveForward();
  _rover.moveForward();
  _rover.moveForward();
  _rover.moveForward();
};

const instructionSet2 = () => {
  _rover.moveForward();
  _rover.moveForward();
  _rover.turnLeft();
  _rover.moveBackward();
  _rover.moveBackward();
  _rover.moveBackward();
  _rover.moveBackward();
  _rover.moveBackward();
};
