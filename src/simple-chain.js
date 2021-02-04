const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {

    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = ' ';
    }
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position != "number") {
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let output = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return output;
  }

};

module.exports = chainMaker;
