const getGrade = n => 'FFEDCBA'[Math.ceil(n/5)];

function area(a){
    return (b) => {
        return a*b;
    }
}
module.exports = { getGrade,area};