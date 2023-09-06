import { containsDuplicate } from "./containsDuplicate";
import { isAnagram } from "./validAnagram";

const nums = [2, 4, 5, 6, 7, 3, 2];
console.log(containsDuplicate(nums));

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
