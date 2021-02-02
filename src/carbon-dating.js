const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(inputString) {

  let sampleActivity = Number(inputString);
  let time;

  if ((typeof inputString == "string") || (sampleActivity > 15) || (sampleActivity < 1) || (inputString != '')) {
    return false;
  }

  time = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

  return time;
};
