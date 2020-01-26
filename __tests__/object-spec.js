import { Person } from '../src/object';

test('check Object creation', () => {
    const p = new Person('Sathish', 27, 'Male');
    expect(p.age).toBe(27);

    expect(p.speak('tamil')).toBe('Sathish speaks tamil');
    expect(p.friend('senthil')).toBe('Sathish has a friend named senthil');
});
