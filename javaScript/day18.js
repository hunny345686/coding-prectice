// removeDuplicates

function removeDuplicates(arr) {
  const result = {};

  for (let item of arr) {
    result[item] = result[item] ? result[item]++ : 1;
  }
  console.log(Object.keys(result));
  // return result;
}

console.log(removeDuplicates([2, 1, 2, 3, 2, 3, 4, 4, 5]));

async function retry(fn, retries) {
  let lastError;

  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
