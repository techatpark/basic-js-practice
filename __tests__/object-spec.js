import { person, ifFrozen } from '../src/object';

const person1 = new person('karthick', 22, 'M');
const person2 = new person('Rahul', 22, 'M');

Object.freeze(person1);
test('check if object is frozen', () => {
    expect(ifFrozen(person1)).toBe(true);
    expect(ifFrozen(person2)).toBe(false);
});
