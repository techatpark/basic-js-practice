function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

function getSecondLargest(nums) {
  nums.sort(function(a, b){return a-b});
  let arr = nums.reverse();
  let index = arr[0];
  for(let i=0; i<arr.length; i++){
      if(arr[i]<index){
          return arr[i];
      }
      else if(i===arr.length-1){
        return arr[i];
      }
  }
}
module.exports = {mapForEach,getSecondLargest};