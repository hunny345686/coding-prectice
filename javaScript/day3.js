// Question 1 - Promise.all Polyfill

function myAllPromiss(promi) {
  const result = [];
  let complete = 0;

  return new Promise((resolve, reject) => {
    if (promi.length === 0) {
      resolve([]);
    }
    promi.forEach((element, i) => {
      Promise.resolve(element)
        .then((value) => {
          result[i] = value;
          complete++;

          if (complete === promi.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myAllPromiss([p1, p2, p3]).then((data) => {
  console.log(data);
});

// Question 2 - Retry Promise

async function retry(fn, retries) {
  try {
    await fn();
  } catch (err) {
    if (retries > 0) {
      return await retry(fn, retries - 1);
    } else {
      console.log(err);
    }
  }
}

async function fetchData() {
  throw new Error();
}

retry(fetchData, 3);

// Question 4 - Output ⭐⭐⭐⭐

// Tell me the output.

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise1");
  })
  .then(() => {
    console.log("Promise2");
  });

console.log("End");

// 1 - Start - > Sync code
// 2 - End   -> Sync code
// 3 - Promise1 - async with microtask
// 4 - Promise2 - async with microtask
// 5 - Timeout - asunc with callback Queue

// Question 6 - React (Very Common)
const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// What will be the final value? => Value will be  1

// Why? => its a stale coulser issue we are not updateing the prev valuew

// How do you fix it? setCount(prev=> prev + 1);

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return fn(...args);
  };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

console.log("Memo", memoizedAdd(1, 2));

console.log(memoizedAdd(1, 2));
