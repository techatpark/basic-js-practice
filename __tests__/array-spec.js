import { Person } from '../src/object';
// The Array.from() method creates a new,
// shallow-copied Array instance from an array-
// shallocopy-Deep copy
const people = [new Person('Karthick', 22, 'Male'), new Person('Sathish', 37, 'Male'), new Person('Kumar', 28, 'Male')];

//here let us learn about the Various array methods
//starting from destructuring

test('Array destructuring method', () => {
    const [myDetails, ...restOfThem] = people;
    expect(myDetails.age).toBe(22);
    expect(restOfThem[0].friend('Senthil')).toBe('Sathish has a friend named Senthil');
});

//Now let us understand array.reduce method
//here we add up the ages of all the people in the array

test('Reduce method', () => {
    const array = people.map(element => element.age);
    expect(array.reduce((accumulator, currentValue) => accumulator + currentValue)).toBe(87);
});

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

//Testing in
test('understanding singleton', () => {});
