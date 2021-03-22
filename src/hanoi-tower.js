const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   let min = Math.pow(2, disksNumber) - 1;
   let sec = Math.floor(min / turnsSpeed * 3600);
   return {turns: min, seconds: sec};
};
