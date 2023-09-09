// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

export const twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let compliment_pair = target - value;

    if (hash[compliment_pair] !== undefined) {
      return [hash[compliment_pair], i];
    } else {
      hash[value] = i;
    }
  }
};
