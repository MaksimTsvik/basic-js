const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let depth = 0;
    depth++;
    arr.map(item => Array.isArray(item) ? calculateDepth(item) : item);
    return depth;

  }
};