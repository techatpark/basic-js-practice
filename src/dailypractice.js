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
export { decimal2binary, maximumNumberOfOnes, getMaxLessThanK, getMaxLessThanKm, closure };
