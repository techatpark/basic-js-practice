import { Person, Scientist } from '../src/object';
// The Array.from() method creates a new,
// shallow-copied Array instance from an array-
// shallocopy-Deep copy
const people = [
    new Person('Karthick', 22, 'Male'), // This is Sample Array
    new Person('Sathish', 37, 'Male'),
    new Person('Kumar', 28, 'Male'),
];
//here let us learn about the Various array methods
//starting from destructuring
//adding a comment
test('Array destructuring method', () => {
    const [firstPerson, ...restOfThem] = people;
    expect(firstPerson.age).toBe(22);
    expect(restOfThem[0].friend('Senthil')).toBe('Sathish has a friend named Senthil');
});

//Now let us understand array.reduce method
//here we add up the ages of all the people in the array

test('Reduce method', () => {
    const array = people.map(element => element.age);
    //here accumulator keeps track of the sum, it acts like a sum and initialised to zero
    expect(
        array.reduce(((acc, cur)=> acc+cur),0)).toBe(87);

//Now let us understand some very basic array methods
//Starting from array.push(), array.pop(), and array.shift()

//let's start with array.shift() which removes the element from starting index
// here they return value is the removed element

test('Shift method', () => {
    const returnedArray = people.shift();
    expect(returnedArray.age).toBe(22);
    expect(returnedArray.speak('Tamil')).toBe('Karthick speaks Tamil');
});

//next one is array.pop(), this is similar to shift() but removes from end

test('Pop Method', () => {
    const returnedArray = people.pop();
    expect(returnedArray.name).toBe('Kumar');
});

//so last one is array.push where we push a new element to the end of the array

test('Pushing towards the end', () => {
    const arrayToPush = new Person('Rahul', 23, 'Male');
    people.push(arrayToPush);
    expect(people.length).toBe(4);
});
//so above you can see that it appends the original array

//Now let us move forward to array.from()
//this method makes a shallow copy of the source array to the array to which we like it to be copied

//Shallow copy is a bit-wise copy of an object
//A new object is created that has an exact copy of the values in the original object
//If any of the fields of the object are references to other objects,
//just the reference addresses are copied i.e., only the memory address is copied.

//while A deep copy copies all fields,
//and makes copies of dynamically allocated memory pointed to by the fields.
//A deep copy occurs when an object is copied along with the objects to which it refers.

//Here we will loook at example of shallow copy
test('Shallow copy examples', () => {
    const p = new Person('Karthick', 22, 'M');
    const q = p; //this is a shallow copy
    q.name = 'Suresh';
    expect(p.name).toBe('Suresh'); //This results true the both are refernced to the same memory
});

//now let us look at deep copy
test('Deep copy examples', () => {
    const p = new Person('Karthick', 22, 'M');
    const q = {
        name: p.name,
        age: p.age,
        gender: p.gender,
    };
    q.name = 'Suresh';
    expect(p.name).toBe('Karthick'); //so here we have made a deep copy
});
// there is one more way to test deep copy using spread operator;
test('deep copy using spread operator', () => {
    const p = [...people].push(new Person('ravi', 22, 'M'));
    p.push(new Person('ravi', 22, 'M'));
    expect(p.length).toBe(4);
    expect(people.length).toBe(3);
});

//same without using spread operator
test('shallow copy direct allocation', () => {
    const p = people;
    p.push(new Person('ravi', 22, 'M'));
    expect(p.length).toBe(4);
    expect(people.length).toBe(4);
});

//Array.from()
test('array.from()', () => {
    const p = [...people];
    let fromArray = Array.from(p);
    expect(fromArray[0].name).toBe('Karthick');
});

//Array.splice() changes the contents of the array, by removing or replacing
//and/or adding elements to the array
//let us see its working
test('array.splice', () => {
    people.splice(1, 0, new Person('somebody', 28, 'Male'));
    console.log(people); //so somebody is appended at index 1.
    //now let us delete somebody.
    people.splice(1, 1);
    console.log(people); //so we have deleted it.
});

//Array.of() directly takes the argument and converts it into array
test('Array.of()', () => {
    expect(Array.of(3)).toStrictEqual([3]); //while array() creates that many empty slots
    expect(Array(3)).toEqual([undefined, undefined, undefined]);
});

//next- array.copyithin()
test('Array.copyWithin()', () => {
    console.log(people.copyWithin(1, 2));
});

//array.concat()
test('Array.concat()', () => {
    const r = [new Person('Sekhar', 45, 'M')];
    let p = r.concat(people);
    console.log(p);
});

//array.isArray() checks if the given file is an array
test('Array.isArray()', () => {
    expect(Array.isArray(people)).toBe(true);
    expect(Array.isArray(Person)).toBe(false);
});

//Array.sort
test('array sorting', () => {
    console.log(people.map(element => element.name).sort());
    //aranges in alphabetic order.
});

//array.flat()
test('Array.flat', () => {
    const p = [1, 2, [3, 4, 5], 6, [7, 8]];
    //console.log(people.flat()); // so it only affects nested arrays.
    console.log(p.flat(1)); //if lot of nested is: use flat(infinity);
    expect(p.flat(1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
//array.flatmap
test('flatmap()', () => {
    const p = [1, 2, 3, 4, 5, 6, 7, 8];
    //the flat map first maps the elements then flatens it to depth 1;
    console.log(p.flatMap(element => element * 2));
    expect(p.flatMap(element => element * 2)).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16]);
});

//how to print tables
test('Print the people array in a table format', () => {
    console.table(people);
});

// here we will look at a new class

const scientist = [
    new Scientist('Albert Einstein', 'M', ['E= mc^2', ' General relativity'], '14 March 1879'),
    new Scientist('Satyendra Nath Bose', 'M', ['Bose Einstein condensate', ' Photons'], '1 January 1894'),
    new Scientist('Kalpana Chawla', 'F', ['She was the First women to go to space '], '1 July 1961'),
];

test('Print all the achievements of the scientist along with their name', () => {
    scientist.forEach(element => console.log(element.achievement()));
    //Now let us see who is the oldest scientist.
});
