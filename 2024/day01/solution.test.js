const calculateDistance = require("./solution.cjs");

test("calculates the total distance between two lists of equal length", () => {
  const list1 = [1, 3, 5];
  const list2 = [2, 4, 6];
  expect(calculateDistance(list1, list2)).toBe(3);
});

test("calculates the total distance between two lists of NOT equal length", () => {
  const list1 = [1, 3];
  const list2 = [2, 4, 6];
  expect(() => calculateDistance(list1, list2)).toThrow(
    "Both lists must have the same length."
  );
});

test("calculates the total distance when lists contain negative numbers", () => {
  const list1 = [-1, -3, -5];
  const list2 = [-2, -4, -6];
  expect(calculateDistance(list1, list2)).toBe(3);
});

test("calculates the total distance when lists are already sorted", () => {
  const list1 = [1, 2, 3];
  const list2 = [1, 2, 3];
  expect(calculateDistance(list1, list2)).toBe(0);
});

test("calculates the total distance from the example", () => {
  const list1 = [3, 4, 2, 1, 3, 3];
  const list2 = [4, 3, 5, 3, 9, 3];
  expect(calculateDistance(list1, list2)).toBe(11);
});
