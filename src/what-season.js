const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date/* date */) {
  // Inspection for Valid data and if date is passed
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date.toDateString() == "Invalid Date") {
    throw "Error";
  }
  // Just for fun use Switch for appropriate return of month value
  let month = date.getMonth()
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    default:
      return 'fall';
  }

};
