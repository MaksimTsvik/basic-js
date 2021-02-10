const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod) {
    this.mod = mod;
  }

  encrypt(message, key) {
    // Add message and key inspection
    if (!message || !key) throw Error;

    let answer = '';
    message = message.toUpperCase(); // Convert message and key to UpperCase string
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i += 1, j += 1) {
      if (isUppercase(message[i])) { // is UPPERCASE letter
        let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 65) % 26;
        answer += String.fromCharCode(res + 65);
      }
      else { //Add symbol
        answer += message[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) {
      return answer;
    } else {
      return answer.split('').reverse().join('');
    }

    // Tests whether the given letter is an Latin uppercase letter.
    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }
  }
  decrypt(encryptMessage, key) {

    if (!encryptMessage || !key) throw Error;
    encryptMessage = encryptMessage.toUpperCase();
    key = key.toUpperCase();
    let answer = '';
    for (let i = 0, j = 0; i < encryptMessage.length; i += 1, j += 1) {

      if (isUppercase(encryptMessage[i])) {
        let res = ((encryptMessage[i].charCodeAt() - 65) - (key[j % key.length].charCodeAt() - 65) % 26);
        if (res < 0) {
          res = eval(`26 ${res}`);
        }
        answer += String.fromCharCode(res + 65);
      }
      else {
        answer += encryptMessage[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) {
      return answer;
    } else {
      return answer.split('').reverse().join('');
    }
    // Tests whether the given character code is an Latin uppercase letter.
    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }
  }
}

module.exports = VigenereCipheringMachine;
