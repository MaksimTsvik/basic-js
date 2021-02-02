const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // Set-up catCount variable to count our cats.
  let catCount = 0;
  // Check for correct input in 'matrix'.
  if (matrix === undefined || !matrix.length) {
    return 0;
  }
  // Flatern our matrix.
  let flatMatrix = matrix.reduce(function (resultArr, currentArr) {
    return resultArr.concat(currentArr);
  })
  // For each element of flatMatrix array perform comparisson. Increase counter if found a cat.
  flatMatrix.forEach(function (currentElement) {
    if (currentElement == "^^") {
      catCount++;
    }
  });
  // Return qty of cats.
  return catCount;
};
