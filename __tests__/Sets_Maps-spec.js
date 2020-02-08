/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import { students, array } from '../src/Sets&Maps';
test('', () => {
    console.log(students.delete('Steve Wog')); //It returns boolean
    //whether it has deleted or not
    console.log(students);
    console.log(students.size);
    expect(students.has('Bill Gates')).toBe(true);
});

test('delete duplicate entries in an array', () => {
    let teachers = ['kiyoshi', 'Raja', 'Sursh', 'Sursh', 'Peter', 'kiyoshi'];
    const temp = new Set(teachers);
    teachers = [...temp];
    expect(teachers).toStrictEqual(['kiyoshi', 'Raja', 'Sursh', 'Peter']);
});
//adding a comment
test('find no. of occurances', () => {
    const obj = new Object();
    function mode() {
        for (let i = 0; i < array.length; i++) {
            if (obj.hasOwnProperty(array[i])) {
                obj[array[i]] = obj[array[i]] + 1;
            } else {
                obj[array[i]] = 1;
            }
        }
        let some = Object.entries(obj);
        let print = some.sort((a, b) => b[1] - a[1]);
        console.log(print);
    }
    mode();
    //console.table(obj);
});
//full traversal to half traversal
//time and space complexity
// look at its scope.
//no.of iterations is to be optimized.
