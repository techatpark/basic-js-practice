const votingRight = input => {
    let filtered = input.filter(a => a.age > 18);
    return filtered.map(b => b.name);
};

const nameStudent = input => input.map(a => a.name);

const studentExist = input => input.some(a => a.name === 'Rahul');

const underAge = input => input.some(a => a.age <= 18);

const totalStudents = input => {
    let total = input.map(a => a.name);
    return total.length;
};

const forEachMap = input => {
    let arr1 = input.forEach(value => value + 2).map(elements => console.log(elements));
    return arr1;
};
//forEach always returns undefined unlike map which return the array as it puts up the error
//cannot map undefinede
module.exports = { votingRight, nameStudent, studentExist, underAge, totalStudents, forEachMap };
