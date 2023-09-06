// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// solution one

// export const containsDuplicate = (nums) => {
//   const map = new Map(); //O(n)

//   for (const num of nums) {
//     if (map.has(num)) return true;
//     map.set(num, true);
//   }
//   return false;
// };

//solution two

export const containsDuplicate = (nums) => {
  const set = new Set(nums);

  return set.size !== nums.length;
};
