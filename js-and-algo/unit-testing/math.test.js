const { add, multiply } = require('./math');

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

