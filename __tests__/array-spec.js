import { votingRight, nameStudent, studentExist, underAge, totalStudents, forEachMap } from '../src/array';
const student = [
    {
        name: 'Rahul',
        age: 22,
        marks: 90,
    },
    {
        name: 'Peter',
        age: 17,
        marks: 60,
    },
    {
        name: 'Suresh',
        age: 20,
        marks: 80,
    },
    {
        name: 'Rahul',
        age: 16,
        marks: 100,
    },
];

const ageGroup = [1, 21, 33, 45, 56, 96];

test('Students voting right', () => {
    expect(votingRight(student)).toStrictEqual(['Rahul', 'Suresh']);
});

test('students print their names', () => {
    expect(nameStudent(student)).toStrictEqual(['Rahul', 'Peter', 'Suresh', 'Rahul']);
});

test('Does student Exist', () => {
    expect(studentExist(student)).toBe(true);
});

test('Are there any underage students', () => {
    expect(underAge(student)).toBe(true);
});

test('total Students', () => {
    expect(totalStudents(student)).toBe(4);
});

test('do array.forEach.map', () => {
    expect(forEachMap(ageGroup)).toBe();
});
