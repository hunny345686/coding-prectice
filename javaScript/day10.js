// Problem 2 — Two Sum

// Approch one
function twoSum1(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    if (arr[s] + arr[e] === target) {
      return [arr[s], arr[e]];
    }

    if (arr[s] + arr[e] > target) {
      e--;
    } else {
      s++;
    }
  }
  return [];
}

// Approch 2
function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

let nums = [2, 11, 15, 7];
let target = 9;

console.log(twoSum(nums, target));
