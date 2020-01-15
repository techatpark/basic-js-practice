const x = require('./calculator');

test('area 3 and 4.5 to equal 13.5', () => {
  expect(x.area(3, 4.5)).toBe(13.5);
});

test('perimeter 3 and 4.5 to equal 15', () => {
  expect(x.perimeter(3, 4.5)).toBe(15);
});

test('Factorial of 4 equal to 24', () => {
  expect(x.factorial(4)).toBe(24);
});
