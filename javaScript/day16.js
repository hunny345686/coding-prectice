// 1. First non-repeating character
const str = "aabbbcdde";

// Output: "c"

function firstNonRepeatingChar(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar(str));

// 2. Remove duplicates from array
const arr = [1, 2, 2, 3, 4, 4, 5];

// Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  const result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(removeDuplicates(arr));

// V2
function removeDuplicates(arr) {
  const result = [];
  const seen = {};

  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}
