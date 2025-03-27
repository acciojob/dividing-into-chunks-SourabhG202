const divide = (arr, n) => {
  let result = []; // To store the final list of subarrays
  let subarray = []; // Current subarray
  let subSum = 0; // Sum of the current subarray

  for (let num of arr) {
    if (subSum + num > n) {
      // If adding num exceeds limit, store the current subarray
      result.push(subarray);
      subarray = [num]; // Start a new subarray
      subSum = num;
    } else {
      // Otherwise, add num to the current subarray
      subarray.push(num);
      subSum += num;
    }
  }

  if (subarray.length) {
    result.push(subarray); // Add last subarray
  }

  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;
console.log(divide(arr, n)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]


If using prompt:
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
*/
