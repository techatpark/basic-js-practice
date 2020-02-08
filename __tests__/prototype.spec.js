import { Person } from '../src/object';
import { PersonClass } from '../src/class';
// when using constructor function
test('No. of methods alloted when using constructor function', () => {
    const p = new Person('karthick', 22, 'M');
    const q = new Person('karthick', 22, 'M');
    expect(p.friend === q.friend).toBe(false);
    //It gives false as two different memory space is
    //getting alloted hence the test : false
    // to solve this we use create method
    const r = Object.create(p);
    expect(p.friend === r.friend).toBe(true);
});
//adding a comment
//when using Class
test('No. of methods alloted when using class', () => {
    const p = new PersonClass('2020', 22, 'M');
    const q = new PersonClass('karthick', 22, 'M');
    expect(p.friend === q.friend).toBe(true);
});
