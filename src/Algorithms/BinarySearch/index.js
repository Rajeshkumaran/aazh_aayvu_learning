let arr = [1, 2, 3, 5, 6, 7, 9, 11, 13];

let element = 11;

function linearSearch(arr, element) {
  // Time complexity : O(N), where N is the array size
  for (let i = 0; i < arr.length; i++) {
    // Uncomment below to check the number of iterations
    // console.log('linearSearch: Iteration', i + 1);
    if (arr[i] === element) return true;
  }
  return false;
}

function binarySearch(arr, element) {
  // Time complexity : O(log N), where N is the array size
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // Uncomment below to check the number of iterations
    // console.log('binarySearch: Iteration');
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === element) return true;
    else if (arr[mid] < element) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

console.log(linearSearch(arr, element));
console.log(binarySearch(arr, element));
