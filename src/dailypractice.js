function decimal2binary(n) {
    return (n >>> 0).toString(2);
}

function maximumNumberOfOnes(n) {
    let array = decimal2binary(n);
    array = array.split('').map(Number);
    let s1 = 0,
        max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            s1 = 0;
        } else {
            s1 = s1 + 1;
            if (s1 > max) {
                max = s1;
            }
        }
    }
    return max;
}

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = n; i >= 1; i--) {
        for (let j = i - 1; j > 0; j--) {
            if ((i & j) < k && (i & j) > max) {
                max = i & j;
            }
        }
    }
    return max;
}

function getMaxLessThanKm(n, k) {
    if (n === k) {
        if (n % 2 === 0) {
            return k - 2;
        } else {
            return k - 1;
        }
    } else {
        return k - 1;
    }
}

function closure(outer) {
    return inner => {
        console.log(`I have accesed the ${outer} from inside`);
        console.log(`this is ${inner}`);
    };
}

function quartiles(input) {
    let array = input.split('\n');
    let [len, list] = array;
    len = len.map(Number);
    list = list.map(Number);
    return len, list;
}

function fineCalculator(input) {
    let [actDate, expDate] = input.split('\n');
    let [actDay, actMonth, actYear] = actDate.split(' ').map(x => Number(x));
    let [expDay, expMonth, expYear] = expDate.split(' ').map(x => Number(x));
    const dayDiff = actDay - expDay;
    const monthDiff = actMonth - expMonth;
    const yearDiff = actYear - expYear;

    return yearDiff > 0
        ? 10000
        : monthDiff > 0 && yearDiff === 0
        ? monthDiff * 500
        : dayDiff > 0 && yearDiff === 0
        ? dayDiff * 15
        : 0;
}

const standardDeviation = input => {
    let [n, array] = input.split('\n');
    array = array.split(' ').map(x => Number(x));
    n = Number(n);

    //finding the mean
    let mean =
        array.reduce((total, curr) => {
            return total + curr;
        }, 0) / n;

    //finding the variance
    let variance =
        array
            .map(x => Math.pow(x - mean, 2))
            .reduce((total, curr) => {
                return total + curr;
            }, 0) / n;

    // finding the standard deviation
    return Number(Math.sqrt(variance).toFixed(1));
};

function try_catch_magic(input) {
    try {
        let n = parseInt(input);
        isNaN(n) && k();
        return n;
    } catch (error) {
        return 'Bad string';
    }
}

function interquartileRange(input) {
    let [n, arr, freq] = input.split('\n');
    let array = [];
    arr = arr.split(' ').map(x => Number(x));
    freq = freq.split(' ').map(x => Number(x));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < freq[i]; j++) {
            array.push(arr[i]);
        }
    }
    array.sort((a, b) => a - b);
    // till now only the sorting part is done getting into mainproblem

    //here let's divide into quartiles and also find q1, q2
    // so there are two possibilities no.1 array has odd no. of elements
    // or it has even no. of elements;
    n = array.length;
    // if it has even no. of elements
    if (n % 2 === 0) {
        let arr1 = [],
            q1 = 0,
            q3 = 0;
        let arr2 = [];
        for (let i = 0; i < n / 2; i++) {
            arr1.push(array[i]);
            arr2.push(array[n - 1 - i]);
        }
        //finding quartile ranges of each;
        let length = arr1.length;
        if (length % 2 === 0) {
            q1 = (arr1[length / 2] + arr1[length / 2 - 1]) / 2;
            q3 = (arr2[length / 2] + arr2[length / 2 - 1]) / 2;
        } else {
            q1 = array[Math.floor(length / 2)];
            q3 = array[n - Math.floor(length / 2) - 1];
        }
        return Math.floor(q3 - q1).toFixed(1);
    } else {
        let arr1 = [],
            q1 = 0,
            q3 = 0;
        let arr2 = [];
        for (let i = 0; i < Math.floor(n / 2); i++) {
            arr1.push(array[i]);
            arr2.push(array[n - 1 - i]);
        }
        //finding the quartile range of each
        let length = arr1.length;
        if (length % 2 === 0) {
            q1 = (arr1[length / 2] + arr1[length / 2 - 1]) / 2;
            q3 = (arr2[length / 2] + arr2[length / 2 - 1]) / 2;
        } else {
            q1 = array[Math.floor(length / 2)];
            q3 = array[n - Math.floor(length / 2) - 1];
        }
        return Math.floor(q3 - q1).toFixed(1);
    }
}

function phoneBook(input) {
    let array = input.split('\n');
    array[0] = Number(array[0]);
    // eslint-disable-next-line no-undef
    let phoneBook = new Map();
    for (let i = 1; i <= array[0]; i++) {
        phoneBook.set(array[i].split(' ')[0], Number(array[i].split(' ')[1]));
    }
    for (let i = array[0] + 1; i < array.length; i++) {
        if (phoneBook.has(array[i])) {
            console.log(`${array[i]}=${phoneBook.get(array[i])}`);
        } else {
            console.log('Not found');
        }
    }
}

class Calculator {
    power(n, p) {
        if (n < 0 || p < 0) throw 'n and p should be non-negative';
        else {
            return Math.pow(n, p);
        }
    }
}
function try_catch_throw(input) {
    const myCalculator = new Calculator();
    let array = input.split('\n');
    array[0] = Number(array[0]);
    for (let i = 1; i < array.length; i++) {
        try {
            let n = Number(array[i].split(' ')[0]);
            let p = Number(array[i].split(' ')[1]);
            const ans = myCalculator.power(n, p);
            console.log(ans);
        } catch (e) {
            console.log(e);
        }
    }
}
function plusMinus(arr) {
    let p = 0,
        n = 0,
        z = 0,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        arr[i] > 0 ? (p += 1) : arr[i] < 0 ? (n += 1) : (z += 1);
    }
    console.log((p / len).toFixed(6));
    console.log((n / len).toFixed(6));
    console.log((z / len).toFixed(6));
}

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = arr.reduce((total, curr) => {
        return total + curr;
    }, 0);
    console.log(sum - arr[arr.length - 1], sum - arr[0]);
}

function birthdayCakeCandles(ar) {
    let max = Math.max(...ar);
    let count = 0;
    ar.forEach(input => {
        if (input === max) {
            count += 1;
        }
    });
    return count;
}
function timeConversion(s) {
    let [hour, min, sec] = s.split(':');
    let re = new RegExp('AM');
    if (re.test(sec)) {
        if (hour === '12') {
            hour = '00';
        }
        let str = [hour, min, sec.split('AM')[0]].join(':');
        return str;
    } else {
        if (hour === '12') {
            hour = '12';
        } else {
            hour = Number(hour) + 12;
        }
        let str = [hour, min, sec.split('PM')[0]].join(':');
        return str;
    }
}

const findRemainder = x => {
    let lowerMultiple = x - (x % 5);
    return lowerMultiple + 5;
};

function tweetMatching(input) {
    let [, ...array] = input.split('\n');
    let regex = /hackerrank/gi;
    if (array.join(' ').match(regex) != null) {
        console.log(array.join(' ').match(regex).length);
    } else {
        console.log(0);
    }
}

function runtime(input) {
    input = input.split('\n');
    function primeOrNot(n) {
        let count = 0;
        if (n === 1) {
            console.log('Not prime');
        } else if (n != 2 && n % 2 === 0) {
            console.log('Not prime');
        } else {
            let sqrt = Math.pow(n, 0.5);
            for (let i = 1; i <= sqrt; i++) {
                if (n % i === 0) {
                    count += 1;
                }
            }
            count === 1 ? console.log('Prime') : console.log('Not prime');
        }
    }
    for (let i = 1; i <= Number(input[0]); i++) {
        primeOrNot(Number(input[i]));
    }
}

function regularExpression(firstNameEmailID) {
    const firstName = firstNameEmailID[0];
    const emailID = firstNameEmailID[1];
    const reg = RegExp('@gmail.com');
    if (reg.test(emailID)) {
        return firstName;
    } else {
        return null;
    }
}
function alienUserName(input) {
    input = input.split('\n');
    let regex = new RegExp('^[_.][0-9]+[a-zA-Z]*_?$');
    for (let i = 1; i < input.length; i++) {
        regex.test(input[i]) ? console.log('VALID') : console.log('INVALID');
    }
}

function phoneNumber(input) {
    input = input.split('\n');
    let regex = /^(\d{1,3})[-\s](\d{1,3})[-\s](\d{4,10})$/;
    let array = [];
    for (let i = 1; i < input.length; i++) {
        if ((array = input[i].match(regex)) != null) {
            console.log(`CountryCode=${array[1]},LocalAreaCode=${array[2]},Number=${array[3]}`);
        }
    }
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0,
        countOranges = 0;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) {
            countApples += 1;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] + b >= s && oranges[i] + b <= t) {
            countOranges += 1;
        }
    }
    console.log(countApples);
    console.log(countOranges);
}

function dayOfProgrammer(year) {
    if (year < 1918) {
        if (year % 4 === 0) {
            return `12.09.${year}`;
        } else return `13.09.${year}`;
    } else if (year === 1918) {
        return `26.09.${year}`;
    } else {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
            return `12.09.${year}`;
        } else return `13.09.${year}`;
    }
}
export {
    decimal2binary,
    maximumNumberOfOnes,
    getMaxLessThanK,
    standardDeviation,
    getMaxLessThanKm,
    closure,
    quartiles,
    fineCalculator,
    try_catch_magic,
    interquartileRange,
    phoneBook,
    try_catch_throw,
    Calculator,
    plusMinus,
    miniMaxSum,
    birthdayCakeCandles,
    timeConversion,
    findRemainder,
    tweetMatching,
    runtime,
    regularExpression,
    alienUserName,
    phoneNumber,
    countApplesAndOranges,
    dayOfProgrammer,
};
