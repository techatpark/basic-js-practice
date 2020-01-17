const x = require('./functional');
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
test('Functional program', () => {
expect(x.mapForEach(strArray, function(item) {
    return item.length;
  })).toStrictEqual([ 10, 6, 3, 4, 1 ]);
});