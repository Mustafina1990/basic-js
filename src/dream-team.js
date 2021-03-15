const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = [];
  if(!Array.isArray(members)) {
    return false;
  }
  for(let value of members) {
    if(typeof value === 'string') {
      for(let j = 0; j < value.length; j++) {
        if(value[j] != ' ') {
          name.push(value[j].toUpperCase());
          break;
        }
      }
    }
  }
  return name.sort().join('');
};
