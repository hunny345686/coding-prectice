function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      fn(...args);
      last = now;
    }
  };
}

const search = throttle(() => {
  console.log("The Event");
}, 1000);

search();
search();
search();
search();

// async await

async function test() {
  console.log("A");

  const value = await Promise.resolve(10);

  console.log("B", value);
}

test();

console.log("C");

//sequential

const user = await getUser();
const orders = await getOrders();
const products = await getProducts();

// Parallel execution

const userPromise = getUser();
const ordersPromise = getOrders();
const productsPromise = getProducts();

const [user1, orders2, products3] = await Promise.all([
  userPromise,
  ordersPromise,
  productsPromise,
]);

// Task 1

async function test() {
  await Promise.resolve();
  console.log("B");
}

console.log("A");

test();

console.log("C");

// A  C B

async function test() {
  const value = await 10;

  console.log(value);
}

// 10 will be like Promis.resove(10)

// T1

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");

// Q1 C => A => D => B

// T2

async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");

  await Promise.resolve();

  console.log("3");
}

test();

console.log("4");

// Q2 => 1 => 4 => 2 => 3

// T3

const a = await getA();
const b = await getB();
const c = await getC();

const [a, b, c] = await Promise.all([getA(), getB(), getC()]);

// Q3  Faster will be Promiss.all becouse it will load all promiss in paralaer with awit it will be sequenc
