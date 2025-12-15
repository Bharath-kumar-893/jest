// app.js
const math = require('./math');

function doMath(a, b) {
  const sum = math.add(a, b);
  const product = math.multiply(a, b);
  return { sum, product };
}

module.exports = doMath;
