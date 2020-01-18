const x = require ('./array');

test('find the greatest sum', () => {
expect(x.greatest_sum([1,2,3,4])).toStrictEqual([3,4]);
expect(x.greatest_sum([1,1,1,1,1])).toStrictEqual([1,1]);
});

test('rotate an array about whatever is said', () => {
expect(x.rotate([1,2,3,4,5], 3)).toStrictEqual([4,5,1,2,3]);
expect(x.rotate([1,1,1,1,1], 3)).toStrictEqual([1,1,1,1,1]);
});