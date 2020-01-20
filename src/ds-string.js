const reverse = a => {
    let b = "";
    for (let i = (a.length) - 1; i >= 0; i--) {
        b += a[i];
    }
    return b;
}

//program tells if it is palindrome
const isPalindrome = input => input === reverse(input);

//program tells how many words it is made up of
const camelCase = s => {
    let j = 1;
    s = s.replace(/\s/g, " ");
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == s[i].toUpperCase()) && isNaN(s[i])) {
            j = j + 1;
        }
    }
    return j;
}

//program tells if password is strong
const strongpassword = (n, password) => {
    let [m, k_num, k_low, k_upper, k_spl] = [0, 0, 0, 0,0];
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    for (let i = 0; i < n; i++) {
        if (numbers.includes(password[i])) {
            k_num = k_num + 1;
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (lower_case.includes(password[i])) {
            k_low = k_low + 1;
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (upper_case.includes(password[i])) {
            k_upper = k_upper + 1;
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (special_characters.includes(password[i])) {
            k_spl = k_spl + 1;
            break;
        }
    }

    if (k_low < 1) {
        m = m + 1;
    }
    if (k_upper < 1) {
        m = m + 1;
    }
    if (k_num < 1) {
        m = m + 1;
    }
    if (k_spl < 1) {
        m = m + 1;
    }
    if (m+n < 6) {
        m = m +(6-m-n);
    }
    //print the number of additional characters required
    return m;
}

module.exports = { reverse, isPalindrome, camelCase, strongpassword };