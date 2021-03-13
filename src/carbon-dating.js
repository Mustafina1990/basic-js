const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //let result;
  if( typeof sampleActivity != 'string' || typeof sampleActivity == "NaN"){
    return false;
  }
  else  if (Number(sampleActivity) > 0 && Number(sampleActivity) <= MODERN_ACTIVITY){
    let ln = (Math.log(MODERN_ACTIVITY/sampleActivity));
    let k = 0.693/5730;
    let t = ln /k;
    result = Math.ceil(t);
    return result; 
  }
  else {
    return false;
  }
};
