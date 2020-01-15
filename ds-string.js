const reverse = a => {
    let b = "";
    for (let i = (a.length) - 1; i >= 0; i--) {
        b += a[i];
    }
    return b;
}

const isPalindrome = input => input === reverse(input);

//program tells how many words it is made up of
const camelCase = s => {
    let j = 1;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == s[i].toUpperCase())) {
            j=j+1;
        }
    }
    return j;
}

module.exports = { reverse, isPalindrome,camelCase };