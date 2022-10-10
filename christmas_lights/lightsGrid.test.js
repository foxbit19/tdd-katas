const Grid = require("./lightsGrid.js");

let grid;

beforeEach(() => {
  grid = new Grid();
});

afterEach(() => {
  grid = null;
});

const turnOnRow = (rowIndex, startIndex) => {
  for (let i = startIndex; i < 1000; i++) {
    grid.turnOn(i, rowIndex);
  }
};

const turnOnColumn = (columnIndex, startIndex) => {
  for (let i = startIndex; i < 1000; i++) {
    grid.turnOn(columnIndex, i);
  }
};

const turnOnRange = (
  sourceRowIndex,
  sourceColumnIndex,
  destRowIndex,
  destColumnIndex
) => {
  let rowIndex = sourceRowIndex;

  do {
    let colIndex = sourceColumnIndex;
    do {
      grid.turnOn(rowIndex, colIndex);
    } while (++colIndex <= destColumnIndex);
  } while (++rowIndex <= destRowIndex);
};

test("instances grid", () => {});

test("turns on one light", () => {
  grid.turnOn(0, 0);

  expect(grid.isOn(0, 0)).toBe(true);
});

test("turns off one light", () => {
  grid.turnOff(0, 0);

  expect(grid.isOn(0, 0)).toBe(false);
});

test("should toggle one light from on to off", () => {
  grid.turnOn(0, 0);
  grid.toggle(0, 0);

  expect(grid.isOn(0, 0)).toBe(false);
});

test("should toggle one light from off to on", () => {
  grid.turnOff(0, 0);
  grid.toggle(0, 0);

  expect(grid.isOn(0, 0)).toBe(true);
});

test("should turn on first row", () => {
  turnOnRow(0, 0);

  let isOn = true;

  for (let i = 0; i < 1000; i++) {
    isOn = isOn && grid.isOn(i, 0);
  }

  expect(isOn).toBe(true);
});

test("should turn on first column", () => {
  turnOnRange(0, 0, 0, 1000);

  let isOn = true;

  for (let i = 0; i < 1000; i++) {
    isOn = isOn && grid.isOn(0, i);
  }

  expect(isOn).toBe(true);
});

test("should return total number of lights on", () => {
  turnOnRow(0, 0);
  grid.turnOn(10, 10);
  grid.turnOn(11, 10);
  expect(grid.ligthsOnCount()).toBe(1002);
});

/* test("should follow instuctions and turn on the correct number of lights", () => {
  grid.followInstructions();

  expect(grid.ligthsOnCount()).toBe(1);
}); */
