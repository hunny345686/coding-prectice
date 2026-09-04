// 1. Remove duplicates from an array

const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let exist = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exist = true;

        break;
      }
    }

    if (!exist) {
      //   console.log("coms");
      result.push(arr[i]);
    }
  }
  //   console.log(result);
  return result;
}

removeDuplicates(arr);

// 1. Remove duplicates from an array V2

// const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let exist = true;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exist = false;

        break;
      }
    }

    if (exist) {
      //   console.log("coms");
      result.push(arr[i]);
    }
  }
  //   console.log(result);
  return result;
}

removeDuplicates(arr);

// 3. Flatten nested array

const farr = [1, [2, [3, 4]], 5, [6, [7]]];

function flaternArry(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flaternArry(item));
      flaternArry(item);
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flaternArry(farr));

// 4. Implement map

function myMap(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }

  return result;
}

// 5. Implement filter

function myFiler(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

// 6. Implement reduce

function myFiler(arr, cb, initVal) {
  let acc = initVal;

  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
}

// 7. Find frequency of elements
const arr2 = ["a", "b", "a", "c", "b", "a"];

function frequency(arr) {
  const result = {};

  for (const item of arr) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  console.log(result);
}

frequency(arr2);

// 10. Debounce 🔥

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 11. Throttle

function throttle(fn, delay) {
  const lastTime = 0;

  return function (...args) {
    const now = Date.mow();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
