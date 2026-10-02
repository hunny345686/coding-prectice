const person = {
  greet() {
    return `Hello, ${this.name}`;
  },
};

const developer = person;

developer.name = "Prem";

console.log(developer.greet());
// Hello, Prem

console.log(Object.hasOwn(developer, "name"));
// true

console.log(Object.hasOwn(developer, "greet"));
// false;

// Classs

class Presone {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Developer extends Presone {
  constructor(name) {
    super();
    this.name = name;
  }
  code() {
    return `Develoer Wirting the code `;
  }
}

const dev = new Developer("Prem");

console.log(dev.greet()); // Hello, Prem
console.log(dev.code()); // Writing JavaScript

// Js dynamic import

async function loadCompo(params) {
  const module = await import("../js");

  return module.default;
}

// setInterval(() => {
//   const memory = process.memoryUsage();

//   console.log({
//     rssMB: Math.round(memory.rss / 1024 / 1024),
//     heapUsedMB: Math.round(memory.heapUsed / 1024 / 1024),
//     heapTotalMB: Math.round(memory.heapTotal / 1024 / 1024),
//     externalMB: Math.round(memory.external / 1024 / 1024),
//   });
// }, 10000);

// Flatern an aary

function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, [2, [3, 4]], 5]));

// T1

console.log("1");

// async function foo() {
//   console.log("2");

//   await Promise.resolve();

//   console.log("3");

//   await Promise.resolve();

//   console.log("4");
// }

// foo();

// Promise.resolve().then(() => {
//   console.log("5");
// });

// console.log("6");

//  1 ,2 , 6, 3, 5, 4

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

queueMicrotask(() => console.log("D"));

console.log("E");

// A E C D B
