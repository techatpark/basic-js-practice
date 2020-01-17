function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

function getSecondLargest(nums) {
  nums.sort(function (a, b) { return a - b });
  let arr = nums.reverse();
  let index = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < index) {
      return arr[i];
    }
    else if (i === arr.length - 1) {
      return arr[i];
    }
  }
}
// function find if a given item is an array or not;
const is_array = input => (toString.call(input) === "[object Array]") ? true : false;
  module.exports = { mapForEach, getSecondLargest,is_array };