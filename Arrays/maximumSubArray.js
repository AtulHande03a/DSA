//Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

export const maxSubArray = function (nums) {
  let sm = 0;
  let max = nums[0];

  nums.forEach((n) => {
    sm += n;
    max = Math.max(sm, max);
    if (sm < 0) sm = 0;
  });

  return max;
};
