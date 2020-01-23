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

module.exports = { votingRight, nameStudent, studentExist, underAge, totalStudents };
