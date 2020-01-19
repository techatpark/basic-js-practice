const x = require ('./ds-object');

test('object properties', () => {
expect(x.cars('make')).toBe('Ford');
});