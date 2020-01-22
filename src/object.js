const helloWorld = x => {
    return x;
}
// Assign function named random for no reason
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
            return 2009;
        }
    }
}

//deleting the year of Car in the object Car
const delet = a => {
    delete a.year;
    return Object.keys(a);
}

const check_enumerable = a => {
    return Object.keys(a);
}
// lets suppose we want to find the length of the object
// it can be done in two ways
// lets look at method 1

const getlength = a => {
    return Object.getOwnPropertyNames(a).length;
}
// yes  or you could also apply the method 2

const getlength2 = a => {
    return Object.keys(a).length;
}

// ok so lets see the use of arguments.length

const arglength = (a, b) => {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr;
}
module.exports = { arglength, Random, writable, check_enumerable, delet, helloWorld, getlength, getlength2 };