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
};
