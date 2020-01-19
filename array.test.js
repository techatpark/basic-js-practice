const x = require ('./array');

test('find the greatest sum', () => {
expect(x.greatest_sum([1,2,3,4])).toStrictEqual([3,4]);
expect(x.greatest_sum([1,1,1,1,1])).toStrictEqual([1,1]);
});

test('rotate an array about whatever is said', () => {
expect(x.rotate([1,2,3,4,5], 3)).toStrictEqual([4,5,1,2,3]);
expect(x.rotate([1,1,1,1,1], 3)).toStrictEqual([1,1,1,1,1]);
});

test('find the subarray with the given sum', () => {
expect(x.sub_array([1, 2, 3, 7, 5],12)).toStrictEqual([2,4]);
expect(x.sub_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],15)).toStrictEqual([1,5]);
});

test('find maximum index', () => {
expect(x.maximum_index([34, 8, 10, 3, 2, 80, 30, 33, 1])).toBe(6);
});