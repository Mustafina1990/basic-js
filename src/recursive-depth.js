const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counterDepth = 1;
    let max = 1;
    for(let elem of arr) {
      if (Array.isArray(elem)) {
        counterDepth += this.calculateDepth(elem);
        max = Math.max(max, counterDepth);
        counterDepth = 1;
      }
    }
    return max;
  }
};