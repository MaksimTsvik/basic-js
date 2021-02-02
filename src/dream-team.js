const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // Check the type of input data
  if (!Array.isArray(members)) {
    return false
  }
  // We filter each element of member is it is a string or not
  // Than create array via map of each 1st letter (trimmed) -> sort -> join -> enjoy)
  return members.filter(element => typeof element == 'string')
    .map(element => element.trim()[0].toUpperCase())
    .sort()
    .join('');

};

/* THIS IS 2nd SOLUTION
// Via reduce we return an array of 1st letters, than sort it and join
return members.reduce(function (dreamTeamName, element) {
  // If type of element is not a string skip it and return previous
  if (typeof element != 'string') {
    return dreamTeamName
  }
  // Add trimmed 1st letter in upperCase to an array
  return dreamTeamName.concat(element.trim()[0].toUpperCase())

}, []).sort().join('');
*/

