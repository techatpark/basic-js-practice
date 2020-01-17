const x = require('./functional');
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
test('Functional program', () => {
expect(x.mapForEach(strArray, function(item) {
    return item.length;
  })).toStrictEqual([ 10, 6, 3, 4, 1 ]);
});

test('find the second largest', () => {
expect(x.getSecondLargest([6,6,6,6,6])).toBe(6);
expect(x.getSecondLargest([10,6,3,10,10])).toBe(6);
});

test('find if a given item is an array', () => {
expect(x.is_array('w3resource')).toBe(false);
expect(x.is_array([1, 2, 4, 0])).toBe(true);
});

test('cloning an array', () => {
expect(x.array_Clone([1, 2, 4, 0])).toStrictEqual([1, 2, 4, 0]);
expect(x.array_Clone([1, 2, [4, 0]])).toStrictEqual([1, 2, [4, 0]]);
expect(x.array_Clone([0])).toStrictEqual([0]);
});