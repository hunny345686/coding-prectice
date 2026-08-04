function myPromiseAll(promise) {
  const result = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    if (promise.length === 0) return resolve([]);
    promise.forEach((element, i) => {
      Promise.resolve(element)
        .then((value) => {
          result[i] = value;
          completed++;

          if (promise.length === completed) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

// const p1 = Promise.resolve("P1");

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("P2");
//   }, 200);
// });

// const p3 = Promise.resolve("P3");

// myPromiseAll([p1, p2, p3])
//   .then((res) => {
//     console.log("Tehn Call", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 3000));

const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 2000));
myPromiseAll([p1, p2, p3])
  .then((res) => {
    console.log("Tehn Call", res);
  })
  .catch((err) => {
    console.log(err);
  });

//   Question 1 – Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
function hello(args) {
  console.log(args);
}
const debonce = debounce(hello, 1000);
debonce("P");
debonce("Pr");
debonce("Pre");
debonce("Prem");

// Question 2 – Throttle
function throtell(fn, delay) {
  let lastExecution = 0;
  return function (...args) {
    const now = Date.now();

    if (now - lastExecution >= delay) {
      lastExecution = now;
      fn.apply(this, args);
    }
  };
}

function helloT(args) {
  console.log(args);
}
const throte = throtell(helloT, 50);
throte("A");
throte("B");
throte("C");
throte("D");
throte("E");
throte("E");
throte("E");
throte("E");
throte("E");

// Question 3 – Currying Convert this:

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// Question 4 – Output

function outer() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const a = outer();
const b = outer();

console.log(a()); // 1
console.log(a()); // 2
console.log(b()); // 1
console.log(a()); // 3

// Question 5 – React

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log(count);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }

// What's the bug? => We need pass dependecie count in useEffect
// Why? => when state will change only the the useeffect will run else it will run only once
// Fix it in two ways. pass the defendency value . I can fix it in only one way

function once(fn) {
  let count = 0;
  return function () {
    if (count < 1) {
      fn();
      count++;
    }
  };
}

const initialize = once(() => {
  console.log("App initialized");
});

initialize();
initialize();
initialize();
