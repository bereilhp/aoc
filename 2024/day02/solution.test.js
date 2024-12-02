const calculateSafeReports = require("./solution.cjs");

test("calculates the status of report", () => {
  const report = [1, 3, 5, 5, 10];
  expect(calculateSafeReports(report)).toBe("unsafe");
});

test("calculates the status of report example aoc", () => {
  const report = [7, 6, 4, 2, 1];
  expect(calculateSafeReports(report)).toBe("safe");
});

test("calculates the status of report example aoc #2", () => {
  const report = [1, 2, 7, 8, 9];
  expect(calculateSafeReports(report)).toBe("unsafe");
});

test("calculates the status of report example aoc #3", () => {
  const report = [9, 7, 6, 2, 1];
  expect(calculateSafeReports(report)).toBe("unsafe");
});

test("calculates the status of report example aoc #4", () => {
  const report = [1, 3, 2, 4, 5];
  expect(calculateSafeReports(report)).toBe("safe");
});
