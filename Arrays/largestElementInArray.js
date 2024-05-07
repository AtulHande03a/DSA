// Problem Statement: Given an array, we have to find the largest element in the array.

// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array.

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.

//solution 1:

function largestElement(nums) {
  let sortArr = nums.sort(function (a, b) {
    return a - b;
  });
  return sortArr[sortArr.length - 1];
}

//solution 2:

function largestElementArr(nums) {
  let maxElement = nums[0];

  for (let i = 0; i <= nums.length; i++) {
    if (maxElement < nums[i + 1]) {
      maxElement = nums[i + 1];
    }
  }
  return maxElement;
}
