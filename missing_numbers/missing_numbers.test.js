const MissingNumbers = require("./missingNumbers.js");

let missingNumbers;

beforeEach(() => {
  missingNumbers = new MissingNumbers();
});

test("should istance the class", () => {});

test("should return empty array on empty sequence", () => {
  expect(missingNumbers.missingNumbers([])).toEqual([]);
});

test("should return empty array on sequence without missing numbers", () => {
  expect(missingNumbers.missingNumbers([1, 2, 3])).toEqual([]);
});

test("should return missing numbers using example sequence", () => {
  expect(missingNumbers.missingNumbers([1, 2, 4, 5, 7])).toEqual([3, 6]);
});

test("should return missing numbers using [0,1,3] sequence", () => {
  expect(missingNumbers.missingNumbers([0, 1, 3])).toEqual([2]);
});
