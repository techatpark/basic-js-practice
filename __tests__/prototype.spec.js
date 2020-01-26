import { Person } from '../src/object';
import { PersonClass } from '../src/class';

test('Test Basic Object Creation', () => {
    const person = new Person('Sathish', 27, 'Male');
    const person_withNew = new Person('Sathish', 27, 'Male');
    const person_withPrototype = Object.create(person);
    // There are two  instances of the function object 'friend'
    expect(person.friend === person_withNew.friend).toBe(false);

    // There is only one instances of the function object 'friend'
    expect(person.friend === person_withPrototype.friend).toBe(true);
});

test('Test Basic Object Creation through Class', () => {
    const person = new PersonClass('Sathish', 27, 'Male');
    const person_withNew = new PersonClass('Sathish', 27, 'Male');

    // There is only one instances of the function object 'friend'
    expect(person.friend === person_withNew.friend).toBe(true);
});
