const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turnsCount;
  let secondsCount;

  turnsCount = 2 ** [disksNumber] - 1;
  secondsCount = turnsCount / turnsSpeed * 3600;

  return {
    turns: Math.ceil(turnsCount),
    seconds: Math.ceil(secondsCount)
  }

};
