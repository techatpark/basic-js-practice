import {
    Professor,
    SingletonPersonClass,
    Employee,
    Manager,
    EmployeeBuilder,
    Channel,
    NewsAgency,
    Customer,
    GooglePay,
    taxOnEmployees,
    PersonClass,
} from '../src/class';
//import { PersonBuilder } from '../src/object';
//adding a comment
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

test('News transmitting', () => {
    const hindu = new Channel('The Hindu', 'Political');
    const adithya = new Channel('Adithya', 'Entertainment');
    const sirripoli = new Channel('Sirripoli', 'Entertainment');
    const thanthi = new Channel('Thanthi', 'Political');
    const newsAgency = new NewsAgency();

    newsAgency
        .addSubscribers(hindu, 'Political')
        .addSubscribers(adithya, 'Entertainment')
        .addSubscribers(sirripoli, 'Entertainment')
        .addSubscribers(thanthi, 'Political');
    newsAgency.transmit('Vadivelu Comedy', 'Entertainment');
    expect(true).toBe(true);
});
// here let us look at mediator patterns

test('Mediator patterns', () => {
    let karthick = new Customer('Karthick');
    let sathish = new Customer('Sathish');
    let aravind = new Customer('Aravind');
    let googlepay = new GooglePay();
    googlepay.register(karthick, sathish, aravind);
    //googlepay.send(1000, 'karthick', 'Sathish');
    googlepay.send(2000, 'k', 'kjkjk');
});

//here we will look into visitor patterns

test('Visitor pattern', () => {
    let karthick = new Employee('Karthick', 22, 12345, 'M', 15000);
    let sathish = new Employee('Sathish', 37, 54321, 'M', 150000);
    console.log(`salary of karthick before tax =  ${karthick.GetSalary()}`);
    console.log(`salary of sathish before tax =  ${sathish.GetSalary()}`);
    //Now we have to accept the tax rates on our income. :)
    karthick.accept(taxOnEmployees);
    console.log(`salary of karthick after tax =  ${karthick.GetSalary()}`);
    sathish.accept(taxOnEmployees);
    console.log(`salary of Sathish after tax =  ${sathish.GetSalary()}`);
});
// Promises
test('testing promises ', () => {
    let student = new PersonClass('Karthick', 22, 'M');
    //student.name = 'ragu';
    // eslint-disable-next-line no-undef
    let p = new Promise((resolve, reject) => {
        if (student.name === 'Karthick') {
            resolve('Student name has not changed');
        } else {
            reject('Student has changed the name');
        }
    });
    //student.name = 'ragu';
    p.then(message => {
        console.log(message);
    }).catch(message => {
        console.log(message + ' due to mismatch');
    });
});

test('Json objects', () => {
    let karthick = new PersonClass('karthick', 33, 'M');
    const json = JSON.stringify(karthick);
    console.log(json);
    console.log(JSON.parse(json));
});
