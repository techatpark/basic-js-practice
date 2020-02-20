import {
    decimal2binary,
    maximumNumberOfOnes,
    getMaxLessThanK,
    quartiles,
    getMaxLessThanKm,
    closure,
    fineCalculator,
} from '../src/dailypractice';

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
    expect(getMaxLessThanKm(3, 3)).toBe(2);
});

test('understanding closures', () => {
    let closh = closure('outerVariable');
    closh('inner variable');
});

test('quartiles', () => {
    expect(quartiles(`9\n3 7 8 5 12 14 21 13 18`)).toBe(9, 12);
});

test('fine calculator', () => {
    console.log(fineCalculator('9 6 2015\n6 6 2015'));
});
