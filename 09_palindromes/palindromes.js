const palindromes = function (word) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const sanitizedInput = word.replace(regex, '');
  const cleanString = sanitizedInput.replace(/\s+/g, '');
  const reversed = cleanString.toLowerCase().split('').reverse().join('');
  const lowerCase = cleanString.toLowerCase();
  return lowerCase === reversed;
};

// Do not edit below this line
module.exports = palindromes;
