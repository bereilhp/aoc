function calculateSafeReports(report) {
  for (let i = 0; i < report.length - 1; i++) {
    if (Math.abs(report[i] - report[i + 1]) >= 3) {
      return "unsafe"; //0
    }
  }
  return "safe"; //1
}

module.exports = calculateSafeReports;
