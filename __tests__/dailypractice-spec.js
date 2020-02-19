import { decimal2binary, maximumNumberOfOnes, getMaxLessThanK } from '../src/dailypractice';

test('decimal to binary', () => {
    console.log(decimal2binary(25));
});

test('finding max no. of ones', () => {
    console.log(maximumNumberOfOnes(30));
    expect(maximumNumberOfOnes(13)).toBe(2);
});

test('finding max of A & B less than k', () => {
    expect(getMaxLessThanK(5, 3)).toBe(2);
    expect(getMaxLessThanK(Math.floor(Math.random() * 100), 5)).toBe(4);
    expect(getMaxLessThanK(3, 3)).toBe(2); // so n = 3, k = 3 gives us 2
    expect(getMaxLessThanK(5, 5)).toBe(4);
    expect(getMaxLessThanK(14, 14)).toBe(12);
});
