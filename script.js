const divide = (arr, n) => {
  let result = []; // Final subarrays store karne ke liye
  let subarray = []; // Current subarray
  let subSum = 0; // Current subarray ka sum

  for (let num of arr) {
    if (subSum + num > n) {
      // Agar add karne se limit cross ho jaye, toh current subarray ko store kar do
      result.push(subarray);
      subarray = [num]; // Naya subarray start karo
      subSum = num;
    } else {
      // Varna, num ko current subarray me add kar do
      subarray.push(num);
      subSum += num;
    }
  }

  // Last subarray agar bacha ho toh use bhi add karna hai
  if (subarray.length) {
    result.push(subarray);
  }

  return result;
};

// Prompt se input lena
const arr = [1, 2, 3, 4, 1, 0, 2, 2]; 
const n = parseInt(prompt("Enter n: ")); 
alert(JSON.stringify(divide(arr, n)));
