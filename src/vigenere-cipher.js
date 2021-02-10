const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod) {
    this.mod = mod;
  }

  encrypt(message, key) {
    // Add message and key inspection
    if (!message || !key) throw Error;

    let answer = '';
    message = message.toUpperCase(); // Convert message to UpperCase string
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i += 1, j += 1) {
      //if (/[A-Za-z]/.test(message[i])) { // is letter
      if (isUppercase(message[i])) { // is UPPERCASE letter
        //if (isUppercase(key[j % key.length])) {
        let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 65) % 26;
        answer += String.fromCharCode(res + 65);
        //}
        // if (isLowercase(key[j % key.length])) {
        //  let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 97) % 26;
        //  answer += String.fromCharCode(res + 65);
        //}
      }
      //}
      else {
        answer += message[i];
        j -= 1;
      }
    }
    if (!this.mod) {
      return answer.toUpperCase();
    } else {
      return answer.toUpperCase().split('').reverse().join('');
    }

    // Tests whether the given character code is an Latin uppercase letter.
    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }

    // Tests whether the given character code is a Latin lowercase letter.
    function isLowercase(letter) {
      return 97 <= letter.charCodeAt() && letter.charCodeAt() <= 122;  // 97 is character code for 'a'. 122 is 'z'.
    }

  }
  decrypt(encryptMessage, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!encryptMessage || !key) throw Error;
    if (this.mod) {

    }


  }
}

module.exports = VigenereCipheringMachine;
