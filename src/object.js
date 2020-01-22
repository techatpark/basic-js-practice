const helloWorld = x => {
    return x;
}

/*function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}*/
const Random = (x, y) => {
    return Object.assign(x, y);
}

// object properies creater
const writable = a => {
    Object.defineProperty(a, 'year', {
        writable: false,
        enumerable: true
    });
    try {
        if (a.year != 2021) {
            throw ("It is non writable property");
        }
    } catch (e) {
        if (e === "It is non writable property") {
            return "It is non writable property";
        }
        else {
            return 2009 ;
        }
    }
}

//
module.exports = { Random, writable };