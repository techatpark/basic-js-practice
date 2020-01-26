import { Person, teacher } from '../src/object';
import { PersonClass } from '../src/class';

test('Test Basic Object Creation', () => {
    const p = new Person('Sathish', 27, 'Male');
    expect(p.age).toBe(27);
    expect(p.speak('tamil')).toBe('Sathish speaks tamil');
    expect(p.friend('senthil')).toBe('Sathish has a friend named senthil');
});

test('Test Basic Object Creation through class', () => {
    const p = new PersonClass('Sathish', 27, 'Male');
    expect(p.age).toBe(27);
    expect(p.speak('tamil')).toBe('Sathish speaks tamil');
    expect(p.friend('senthil')).toBe('Sathish has a friend named senthil');
});

test('Test Basic Object Creation with inheritance', () => {
    const p = new teacher('Karthick', 22, 'Male', 'Science');
    expect(p.subject).toBe('Science');
    expect(p.teaching()).toBe('Karthick teaches Science');
});
