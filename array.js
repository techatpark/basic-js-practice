const greatest_sum = num => {
    let sum = num[0] + num[1];
    let position = [num[0], num[1]];
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] > sum) {
                sum = num[i] + num[j];
                position[0] = num[i];
                position[1] = num[j];
            }
        }
    }
    return position;
}
//rotating an array

const rotate = (arr, d) => {
    let arr1 = [];
    for (let i = 0; i < d; i++) {
        arr1[i] = arr.shift();
    }
    for(let i=0;i<d;i++){
        arr.push(arr1[i]);   
    }
    return arr;
}

module.exports = { greatest_sum, rotate };