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
// finding subarray with given sum

const sub_array = (arr,sum) => {
    let tot = arr[0];
    for(let i=0;i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            tot = tot+arr[j];
            if(tot === sum){
                return [i+1, j+1];
            }
        }
        tot = arr[i+1];
    }
}
//Maximum index
const maximum_index = array => {
    let max =-1;
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]<=array[j]){
                if((j-1)>max){
                    max = j-i;
                }
            }
        }
    }
    return max;
}


module.exports = { greatest_sum, rotate, sub_array, maximum_index};