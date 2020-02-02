import { Professor, SingletonPersonClass, Employee, Manager, EmployeeBuilder, TVChannel, News } from '../src/class';
//import { PersonBuilder } from '../src/object';

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
    let Sathish = new EmployeeBuilder()
        .setName('Sathish')
        .setAge(37)
        .setId(109293)
        .setGender('M')
        .build();
    console.log(Sathish);
});
//in the above problem only one instance is created.
//so no matter how many additional instances are declared it only returns one.

test('Defining composite functions', () => {
    let managerSathish = new Manager('Sathish', 37, 200091, 'M');
    let employee = new Employee('Karthick', 22, 12334, 'M');
    let juniorManager = new Manager('Rabi', 47, 12335, 'M');
    console.log(managerSathish.add(employee, juniorManager).employees());
});

test('getters and setters', () => {
    let local = new TVChannel('Sun TV', 'General');
    console.log(local);
});
//console.log is not allowed in src file.
