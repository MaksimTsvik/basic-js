const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // Input array inspection
  if (!Array.isArray(arr)) { throw Error }
  // We create separate array for result
  let resultArr = [];
  // For each in input array we make comparison and fill output array appropriate
  // If there is no element next to the control sequence to which it can be applied, 
  // it does nothing. - implemented as inspection with arr[i - 2] != '--discard-next'
  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        (resultArr.length && arr[i - 2] != '--discard-next') ? resultArr.pop() : resultArr;
        break;
      case '--double-next':
        (i < arr.length - 1) ? resultArr.push(arr[i + 1]) : resultArr;
        break;
      case '--double-prev':
        (i > 0 && arr[i - 2] != '--discard-next') ? resultArr.push(arr[i - 1]) : resultArr;
        break;
      default:
        resultArr.push(arr[i]);
    }

  }

  return resultArr;
};
