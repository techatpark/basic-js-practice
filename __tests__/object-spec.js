/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { Person, Teacher } from '../src/object';
import { PersonClass, Professor } from '../src/class';

test('check Object creation', () => {
    const p = new Person('Sathish', 27, 'Male');
    const q = Object.create(p);
    q.name = 'karthick';
    q.age = 22;
    q.gender = 'M';
    // const q = new Person('Karthick', 19, 'M');
    //expect(p.age).toBe(27);

    //expect(p.speak('tamil')).toBe('Sathish speaks tamil');
    expect(p.friend('senthil') === q.friend('senthil')).toBe(true);
});

test('check Object creation through class', () => {
    //const p = new PersonClass('Sathish', 27, 'Male');
    const q = new Professor('Karthick', 22, 'M');
    //const q = new PersonClass('Karthick', 22, 'Male');
    //expect(p.age).toBe(27);
    expect(q.teach('English')).toBe('Karthick teaches English');
    //expect(p.speak('tamil')).toBe('Sathish speaks tamil');
    //expect(p.friend('senthil') === q.friend('Rahul')).toBe(false);
});

test('understanding inheritance', () => {
    const p = new Teacher('Karthick', 22, 'Male', 'Science');
    Object.defineProperty(Person, interest, {
        value: 'Swimming',
        writable: true,
    });
    console.log(Person.hasOwnProperty('interest'));
    expect(p.subject).toBe('Science');
    expect(p.teach()).toBe('Karthick teaches Science');
    expect(p.name).toBe('Karthick');
});
