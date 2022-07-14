const repeatString = function(myString, myNum) {
  if (myString === '') {
    return '';
  }
  if (myNum < 0) {
    return 'ERROR';
  }

  let result = '';

  for (let i = 1; i <= myNum; i++) {
    result += myString;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
