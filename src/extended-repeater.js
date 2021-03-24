const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = (str === null) ? 'null' : str + '';
  let add = (options.addition === undefined) ? '' : (options.addition === null) ? 'null' : options.addition + '';
  let result = res;
  let addition = add;

  if (options.separator === undefined) {
    options.separator = '+';
  }

  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
    addition = addition + options.additionSeparator.toString() + add;
  }

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result = result + addition + options.separator.toString() + res;
  }

  return result + addition;
};
  