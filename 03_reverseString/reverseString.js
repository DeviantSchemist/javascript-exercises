const reverseString = function(myString) {
  if (myString === '') {
    return '';
  }

  return myString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
