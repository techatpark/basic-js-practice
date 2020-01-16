import { fib }  from './ds-numbers';

test('Calculate fibannoci value', () => {
    expect(fib(9)).toBe(34);
    expect(fib(0)).toBe(0);
  });

  test('calculate fibanocci without memoization ',() => {
  expect(fib(9)).toBe(34);
  });