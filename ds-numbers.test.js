const x = require('./ds-numbers');

test('calculate my grade ',() => {
expect(x.getGrade(30)).toBe('A');
expect(x.getGrade(0)).toBe('F');
expect(x.getGrade(-10)).toBe(undefined);
});