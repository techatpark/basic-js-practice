const printer = x => x.printThis();

class Car {
    constructor(make, model, year) {
        (this.make = make), (this.model = model), (this.year = year);
    }
    printThis() {
        return `${this.make} ${this.model} has been made in ${this.year}`;
    }
}

module.exports = { printer, Car };
