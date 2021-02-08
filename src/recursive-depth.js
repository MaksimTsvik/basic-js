const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array) {
    // Add array counter
    let count = 1
    // Return 0 is it is not array
    if (!Array.isArray(array)) {
      return 0
    }
    // if it is array - calculate nested arrays count via reducer and recursion
    let nestedCount = array.reduce((count, next) => {
      if (Array.isArray(next)) {
        let newCount = this.calculateDepth(next);
        return count > newCount ? count : newCount;
      }
      return count;
    }, 0)
    // Return total count
    return count + nestedCount
  }
};

