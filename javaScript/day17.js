function firstNonRepeatingChar(str) {
  const frequency = {};

  // Step 1: count characters
  for (let char of str) {
    //    V1
    // if (frequency[char]) {
    //   frequency[char] = frequency[char] + 1;
    // } else {
    //   frequency[char] = 1;
    // }

    //     V2
    // frequency[char] = frequency[char] ? frequency[char] + 1 : 1;

    //  V3
    frequency[char] = (frequency[char] || 0) + 1;
  }
  console.log(frequency);

  // Step 2: find first character with count 1
  for (let char in frequency) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbbcdde")); // c

// removeDuplicates

function removeDuplicates(arr) {
  const result = [];

  for (let item of arr) {
    let exists = false;

    for (let value of result) {
      if (value === item) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(item);
    }
  }

  return result;
}

console.log(removeDuplicates([2, 1, 2, 3, 2, 3, 4, 4, 5]));

function missingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  console;

  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 3, 5, 6])); // 4
