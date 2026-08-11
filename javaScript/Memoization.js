function memoization(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Cache...", cache[key]);
      return cache[key];
    }

    const result = fn(...args);

    cache[key] = result;
    console.log("Direct", result);

    return result;
  };
}

const add = (a, b) => {
  return a + b;
};

const memoizationAdd = memoization(add);

memoizationAdd(2, 3);
memoizationAdd(2, 3);
memoizationAdd(2, 5);
memoizationAdd(2, 5);
memoizationAdd(2, 8);
