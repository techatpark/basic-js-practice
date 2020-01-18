const x = require ('./array');

test('find the greatest sum', () => {
expect(x.greatest_sum([1,2,3,4])).toStrictEqual([3,4]);
expect(x.greatest_sum([1,1,1,1,1])).toStrictEqual([1,1]);
});