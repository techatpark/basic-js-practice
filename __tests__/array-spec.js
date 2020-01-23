import { votingRight, nameStudent, studentExist, underAge, totalStudents } from '../src/array';
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
