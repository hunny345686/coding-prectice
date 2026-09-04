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
