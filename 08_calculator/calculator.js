const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myArray) {
	if (!myArray.length) {
    return 0;
  }

  if (myArray.length === 1) {
    return myArray[0];
  }

  return myArray.reduce((total, currentValue) => total + currentValue);
};

const multiply = function(myArray) {
  return myArray.reduce((total, currentValue) => total * currentValue);
};

const power = function(base, power) {
	let answer = 1;

  for (let i = 0; i < power; i++) {
    answer *= base;
  }

  return answer;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
