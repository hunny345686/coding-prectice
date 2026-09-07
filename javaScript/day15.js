const str = "aabbbcdde";

function firstNonRepeatingChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result == str[i]) {
      result = "";
    } else {
      result += str[i];
    }
  }
}

firstNonRepeatingChar(str);

function firstNonRepeatingChar(str) {
  const frequency = {};

  // Count frequency
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbbcdde")); // c
