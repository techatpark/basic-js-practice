import { fib }  from './ds-numbers';

test('Calculate fibannoci value', () => {
    expect(fib(9)).toBe(34);
    expect(fib(0)).toBe(0);
    expect(fib(-10)).toBe(undefined);
  });