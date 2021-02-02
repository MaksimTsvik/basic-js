const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members/* members */) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return members.reduce((dreamTeamName, element) =>
    dreamTeamName.concat(element.trim()[0].toUpperCase()), []).sort().join('');
};
