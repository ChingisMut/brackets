module.exports = function check(str, bracketsConfig) {
  let result = [];
  let resPop = [];
  let arr = str.split('');
  if (arr.length % 2 !== 0) {
    return false} else {
      const arrBrackets = bracketsConfig.flat();
      for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arrBrackets.length; k++) {
          if(arr[i] === arrBrackets[k]) {
            if(k % 2 == 0) {
              result.push(arr[i]);
            } else {
              let resNew = result.concat(resPop).pop();
              if(resNew === '(' || resNew === '[' || resNew === '{' || resNew === '|' || resNew === '1' || resNew === '3' || resNew === '5' || resNew === '7') {
                if(arrBrackets[arrBrackets.indexOf(resNew) + 1] === arr[i]) {
                  result.pop();
                }
              } else {
                return false;
              }
            }
          }
      }
    }
    if(result.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
