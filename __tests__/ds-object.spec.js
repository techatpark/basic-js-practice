const x = require('../src/ds-object');

test('object properties', () => {
    expect(x.Car('Eagle', 'Talon TSi', 1993).make).toBe('Eagle');
});