const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // Check the type of input data
  if (!Array.isArray(members)) {
    return false
  }
  // Via reduce we return an array of 1st letters, than sort it and join 
  return members.reduce(function (dreamTeamName, element) {
    // If type of element is not a string skip it and return previous
    if (typeof element != 'string') {
      return dreamTeamName
    }
    // Add trimmed 1st letter in upperCase to an array
    return dreamTeamName.concat(element.trim()[0].toUpperCase())

  }, []).sort().join('');

};