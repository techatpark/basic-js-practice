const votingRight = input => {
    return input.filter(a => a.age > 18).map(b => b.name);
};

const nameStudent = input => input.map(a => a.name);

const studentExist = input => input.some(a => a.name === 'Rahul');

const underAge = input => input.some(a => a.age <= 18);

const totalStudents = input => {
    let total = input.map(a => a.name);
    return total.length;
};

const forEachMap = input => {
    // eslint-disable-next-line prettier/prettier
    let arr1 = input.filter(value => value<40).map(value => value +1)
    return arr1;
};
/*const forMap = input => {
    let arr1 = input.forEach(value => value + 2).map(elements => console.log(elements));
    return arr1;
};*/
//forEach always returns undefined unlike map which return the array as it puts up the error
//cannot map undefinede
module.exports = { votingRight, nameStudent, studentExist, underAge, totalStudents, forEachMap };
