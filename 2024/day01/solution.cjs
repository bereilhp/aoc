function calculateDistance(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error("Both lists must have the same length.");
  }

  const sortedList1 = list1.sort((a, b) => a - b);
  const sortedList2 = list2.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < sortedList1.length; i++) {
    ans.push(Math.abs(sortedList1[i] - sortedList2[i]));
  }
  const totalDistance = ans.reduce((a, b) => a + b, 0);

  return totalDistance;
}

module.exports = calculateDistance;
