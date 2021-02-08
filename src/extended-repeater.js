const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  let separator = (options.separator ? options.separator : '+').toString();
  let addition = options.addition ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  let additionSeparator = (options.additionSeparator ? options.additionSeparator : '|').toString();
  let result = '';

  for (let i = 1; i <= repeatTimes; i++) {
    result += str;
    for (let j = 1; j <= additionRepeatTimes; j++) {
      result += addition;
      if (j != additionRepeatTimes) {
        result += additionSeparator;
      }
    }
    if (i != repeatTimes) {
      result += separator;
    }
  }


  return result;
};
