// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

export const productExceptSelf = function (nums) {
  const n = nums.length;
  const left = Array(n).fill(0);
  const right = Array(n).fill(0);
  const output = Array(n).fill(0);

  left[0] = nums[0];
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i];
  }

  for (let i = n - 2; i > 0; i--) {
    right[i] = right[i + 1] * nums[i];
  }

  output[0] = right[1];
  output[n - 1] = left[n - 2];

  for (let i = 1; i < n - 1; i++) {
    output[i] = left[i - 1] * right[i + 1];
  }

  return output;
};
