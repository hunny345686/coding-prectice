// JavaScript Coding: Promise.all

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completion = 0;
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((vale) => {
          completion++;
          result[i] = vale;
          if (completion === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.myAll([p1, p2, p3]).then((result) => {
  console.log(result);
});

// Prototype Chain & Property Lookup

const animal = {
  eats: true,
};

const dog = Object.create(animal);

dog.barks = true;

// console.log(dog.barks);
// console.log(dog.eats);
console.log(dog.hasOwnProperty("barks")); // true
console.log(dog.hasOwnProperty("eats")); // false

const animal1 = {
  sound: "generic",
};

const dog1 = Object.create(animal1);

dog1.sound = "bark";

console.log(dog1.sound);
console.log(animal1.sound);

// A tricky interview question

const parent = {
  name: "Parent",
  age: 50,
};

const child = Object.create(parent);

child.name = "Child";

console.log(child.name);
console.log(child.age);
console.log(child.hasOwnProperty("name"));
console.log(child.hasOwnProperty("age"));

// Child , 50 true, false
