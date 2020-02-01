import { Professor, SingletonPersonClass } from '../src/class';
import { PersonBuilder, Person } from '../src/object';

test('inheritance in class', () => {
    const p = new Professor('Karthick', 22, 'M');
    expect(p.teach('Maths')).toBe('Karthick teaches Maths');
});

test('How singleton class works', () => {
    const p = new SingletonPersonClass('Karthick', 22, 'M');
    const q = new SingletonPersonClass('Ravi', 28, 'F');
    const r = new SingletonPersonClass('Sathish', 29, 'M');
    console.log(p.speak('French'));
    console.log(q.speak('French'));
    console.log(r.speak('French'));
    expect(q.name).toBe('Karthick');
});

test('Trying Test Builder', () => {
    let people = new PersonBuilder()
        .setName('karthick')
        .setAge(22)
        .setGender('M');
    console.log(people);
});
//in the above problem only one instance is created.
//so no matter how many additional instances are declared it only returns one.
