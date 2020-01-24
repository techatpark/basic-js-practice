import { printer } from '../src/class';

class Car {
    constructor(make, model, year) {
        (this.make = make), (this.model = model), (this.year = year);
    }
    printThis() {
        return `${this.make} ${this.model} has been made in ${this.year}`;
    }
}

let car1 = new Car('honda', 'city', 1993);

test('print the class car1 method', () => {
    expect(printer(car1)).toBe('honda city has been made in 1993');
});
