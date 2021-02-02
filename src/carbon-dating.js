const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(inputString) {

  if ((typeof inputString == "string") || (inputString > 15) || (inputString < 1) || (inputString != '')) {
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY / inputString)) / (0.693 / HALF_LIFE_PERIOD));
};
