const reverse = a => {
    let b="";
    for(let i=(a.length)-1;i>=0;i--){
        b+=a[i];
    }
    return b;
}

const isPalindrome = input => input === reverse(input);

module.exports = { reverse ,isPalindrome};