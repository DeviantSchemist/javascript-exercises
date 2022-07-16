const fibonacci = function(num) {
  const loop = Number(num);

  if (loop < 0) {
    return 'OOPS';
  }

  let a = 0, b = 1, c = loop;

  for (let i = 2; i <= loop; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

// Do not edit below this line
module.exports = fibonacci;
