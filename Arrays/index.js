import { containsDuplicate } from "./containsDuplicate";
import { isAnagram } from "./validAnagram";
import { maxSubArray } from "./maximumSubArray";
import { productExceptSelf } from "./productExceptSelf";
import { maxArea } from "./maxArea";

const nums = [2, 4, 5, 6, 7, 3, 2];
console.log(containsDuplicate(nums));

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));

const numSub = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(numSub));

console.log(productExceptSelf(nums));

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
