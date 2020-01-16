const x = require('./ds-numbers');

test('calculate my grade ',() => {
expect(x.getGrade(30)).toBe('A');
expect(x.getGrade(0)).toBe('F');
expect(x.getGrade(-10)).toBe(undefined);
});

test('area of square currying ',() => {
expect(x.area(1)(2)).toBe(2);
expect(x.area(1)(0)).toBe(0);
});