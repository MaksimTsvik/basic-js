const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!str) throw Error;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0;


  let result = '';

  for (let i = 0; i < +options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < +options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j < +options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i < +options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
};
