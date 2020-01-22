const x = require('../src/object');

test('log the helloWorld program', () => {
    expect(x.helloWorld('Hello World')).toStrictEqual('Hello World');
});

test('Using Assign Function', () => {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    let a = new Car('toyota', 12, 2009);
    let b = new Car('honda', 13, 1995);
    expect(x.Random(a, b)).toStrictEqual(b);
});

test('Using Objectdefineproperties', () => {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    let a = new Car('toyota', 12, 2009);
    let b = new Car('honda', 13, 1995);
    expect(x.writable(a)).toBe("It is non writable property");
});
