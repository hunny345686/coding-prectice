const p1 = Promise.resolve("P1");
const p2 = Promise.resolve("P2");
const p3 = Promise.resolve("P3");
const p4 = Promise.resolve("P4");

const res = await Promise.all([p1, p2, p3, p4]);

console.log("Promise ALL", res);

// Promise.allSettled()

const promises = [
  Promise.resolve("User"),
  Promise.reject("Orders failed"),
  Promise.resolve("Products"),
];

const result = await Promise.allSettled(promises);

console.log("allSettled", result);

// Promise.race()

const p11 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1");
  }, 1000);
});

const p22 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P2");
  }, 900);
});

const rl = await Promise.race([p11, p22]);

console.log("Race", rl);

// Promise.any()

const pro1 = Promise.reject("A failed");

const pro2 = new Promise((resolve) => {
  setTimeout(() => resolve("B success"), 500);
});

const pro3 = new Promise((resolve) => {
  setTimeout(() => resolve("C success"), 1000);
});

const pa = await Promise.any([pro1, pro2, pro3]);

console.log(pa);

// T1

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("C"), 100);
});

Promise.all([p1, p2, p3]).then(console.log);

// Output => Q1 A B C

// t2

const p1 = Promise.reject("Error A");

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Success B"), 500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Success C"), 1000);
});

Promise.race([p1, p2, p3]).then(console.log).catch(console.log);

// Output => Q2 Error A

// t3

const p1 = Promise.reject("Error A");

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Success B"), 500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Success C"), 1000);
});

Promise.any([p1, p2, p3]).then(console.log).catch(console.log);

// Output => Q3 B

// Q4 Promise.allSettled()
