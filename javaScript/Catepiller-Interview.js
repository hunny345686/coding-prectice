const arr = [1, 4, 5, 2, 1, 2, 2];
function removeDuplicate(arr) {
  const result = {};
  const ArrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]] = result[arr[i]] + 1;
    } else {
      ArrResult.push(arr[i]);
      result[arr[i]] = 1;
    }
  }

  return ArrResult;
}

console.log(removeDuplicate(arr));
// [1, 4, 5, 2]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }

    console.log("result", result);
  }

  return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([1, 4, 5, 2]));
// [1, 2, 4, 5]
