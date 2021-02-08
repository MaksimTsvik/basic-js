const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mod) {
    this.mod = mod;
  }

  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw Error;



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
