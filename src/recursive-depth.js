const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    return Array.isArray(arr)
      ? 1 + arr.reduce((curr, next) => this.calculateDepth(next), 0)
      : 0;

  }
};