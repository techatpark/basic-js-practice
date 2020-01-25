import { printer, Car } from '../src/class';

let car1 = new Car('honda', 'city', 1993);

test('print the class car1 method', () => {
    expect(printer(car1)).toBe('honda city has been made in 1993');
});
