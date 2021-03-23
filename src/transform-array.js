const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const task = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let newArr = arr.slice();

  if(!Array.isArray(newArr)) {
    throw new Error('Error');
  }
  else if(newArr.length === 0) {
    return newArr
  }
  
  for(let i = 0; i < newArr.length; i++) {
    if(task.includes(newArr[i])) {
      let newTask = newArr[i];
      delete newArr[i];

      switch(newTask) {
        case '--discard-next':
          if(i + 1 == newArr.length) break;
          delete newArr[i+1];
          break;
        case '--discard-prev':
          if(i - 1 < 0) break;
          delete newArr[i-1];
          break;
        case '--double-next':
          if(i + 1 == newArr.length) break;
          newArr[i] = newArr[i+1];
          break;
        case '--double-prev':
          if(i - 1 < 0 || newArr[i-1] === undefined) break;
          newArr[i] = newArr[i-1];
          break;
      }
    }
  }
  let result = [];
  newArr.forEach(element => {
    result.push(element);
  });  
  return result;
};
