import {
    decimal2binary,
    maximumNumberOfOnes,
    getMaxLessThanK,
    quartiles,
    getMaxLessThanKm,
    closure,
    fineCalculator,
    standardDeviation,
    try_catch_magic,
    interquartileRange,
    phoneBook,
    plusMinus,
    try_catch_throw,
    miniMaxSum,
    birthdayCakeCandles,
    timeConversion,
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

test('standard deviation', () => {
    expect(standardDeviation('5\n10 40 30 50 20')).toBe(14.1);
});

test('try catch magic', () => {
    expect(try_catch_magic('23')).toBe(23);
    expect(try_catch_magic('hello world')).toBe('Bad string');
});

test('interquartile range', () => {
    expect(interquartileRange('6\n6 12 8 10 20 16\n5 4 3 2 1 5')).toBe('9.0');
});

test('phone Book', () => {
    phoneBook('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry');
});

test('try catch throw', () => {
    try_catch_throw('4\n3 5\n2 4\n-1 -2\n-1 3');
});

test('plus minus', () => {
    plusMinus([-4, 3, -9, 0, 4, 1]);
    let arr = new Array(2).join('#');
    console.log(arr);
});

test('minmaxsum', () => {
    miniMaxSum([7, 69, 2, 221, 8974]);
});

test('birthday cakes problem', () => {
    console.log(birthdayCakeCandles([1, 2, 3, 4, 4, 6, 6, 6]));
});

test('time conversion', () => {
    console.log(timeConversion('07:05:45PM'));
});
