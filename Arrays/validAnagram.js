// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//solution one

// export const isAnagram = (s, t) => {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

export const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of t) {
    if (!map.has(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);

    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  if (map.size > 0) return false;

  return true;
};
