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

export { decimal2binary, maximumNumberOfOnes };
