const Wardrobe = require("./wardrobe.js");

let wardrobe;

beforeEach(() => {
  wardrobe = new Wardrobe();
});

test("should instance wardrobe", () => {});

test("wall size must be 250cm", () => {
  expect(wardrobe.wallSize()).toBe(250);
});

test("wardrobe elements available are 50cm, 75cm, 100cm, and 120cm", () => {
  expect(wardrobe.elements()).toEqual([50, 75, 100, 120]);
});

test("combinations of elements to exactly fill wall size", () => {
  wardrobe.findCombinations();

  expect(wardrobe.getCombinations()).toBe([]);
});
