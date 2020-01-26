import { Person } from '../src/object';

test('check Object creation', () => {
    const p = new Person('Sathish', 27, 'Male');
    expect(p.age).toBe(27);
});
