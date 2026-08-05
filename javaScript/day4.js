function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("cha");
      return cache[key];
    }
    console.log("Noramal");

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

// console.log(memoizedAdd(1, 2));

// console.log(memoizedAdd(1, 2));
