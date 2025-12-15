// app.test.js
const doMath = require('./app');

// 👇 Mock the entire './math' module
jest.mock('./math', () => ({
  add: jest.fn(),
  multiply: jest.fn(),
}));

const math = require('./math');

test('should call mock functions and return mocked values', () => {
  // Mock implementations
  math.add.mockReturnValue(10);
  math.multiply.mockReturnValue(20);

  const result = doMath(2, 3);

  expect(math.add).toHaveBeenCalledWith(2, 3);
  expect(math.multiply).toHaveBeenCalledWith(2, 3);
  expect(result).toEqual({ sum: 10, product: 20 });
});
