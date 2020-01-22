const x = require('../src/object');

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let a = new Car('toyota', 12, 2009);
let b = new Car('honda', 13, 1995);

test('log the helloWorld program', () => {
    expect(x.helloWorld('Hello World')).toStrictEqual('Hello World');
});

test('Using Assign Function', () => {
    expect(x.Random(a, b)).toStrictEqual(b);
});

test('Using Objectdefineproperties', () => {
    expect(x.writable(a)).toBe("It is non writable property");
});

// displays all the enumerable properties
test('checks for enumerable properties', () => {
    expect(x.check_enumerable(b)).toStrictEqual(['make', 'model', 'year']);
});

//delete a particular property in an array
test('delete the property in an object', () => {
    expect(x.delet(a)).toStrictEqual(['make', 'model']);
});
// the following two test cases are for finding length of Object
test('get the length of Object', () => {
    expect(x.getlength(a)).toBe(3);
});

test('here we calculate the length of object', () => {
    expect(x.getlength2(a)).toBe(3);
});

// so here i have to make an array of objects from the given objects
test('we have to input objects and get array of objects', () => {
    expect(x.arglength(a, b)).toBe(undefined);
});