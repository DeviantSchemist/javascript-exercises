const sumAll = function(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  const largerNumber = num1 > num2 ? num1 : num2;
  const smallerNumber = num1 < num2 ? num1 : num2;

  let total = smallerNumber;

  for (let i = smallerNumber+1; i <= largerNumber; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
