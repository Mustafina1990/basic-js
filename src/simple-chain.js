const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'arrLink': [],
  'arrLinkString': '',

  getLength() {
    return this.arrLink.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arrLink.push(" ");
    }
    else if (value === null) {
      this.arrLink.push('null');
    }
    else {
      this.arrLink.push(value);
    }
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.arrLink.length) {
      this.arrLink = [];
      throw new Error;
    }
    this.arrLink.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrLink.reverse();
    return this;
  },
  finishChain() {
    this.arrLinkString = '( ' + this.arrLink.join(' )~~( ') + ' )';
    this.arrLink = [];
    return this.arrLinkString;
  }
};

module.exports = chainMaker;
