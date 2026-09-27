// JavaScript Coding: Apply Polyfill

const user = {
  name: "prem",
};

const user2 = {
  name: "mohit",
};

function greet(a) {
  console.log("param " + a);
  console.log("Hello " + this.name);
}

Function.prototype.myApply = function (ctx, args) {
  const fn = Symbol();
  ctx[fn] = this;
  const re = ctx[fn](args);
  delete ctx[fn];
  return re;
};

// greet.myApply(user, ["Pem"]);

// bind();

Function.prototype.myBind = function (ctx, ...args) {
  return function (...args) {};
};
const d = greet.bind(user, "prem");

console.log(d());

// Partial application with bind

function multiply(a, b) {
  return a * b;
}

const duble = multiply.bind(null, 2);

console.log(duble(8));

//T1

const user = {
  name: "Prem",
};

function greet(age) {
  console.log(this.name, age);
}

greet.call(user, 30);
greet.apply(user, [40]);

// T2
const user = {
  name: "Prem",
};

function greet() {
  console.log(this.name);
}

const fn = greet.bind(user);

console.log("A");

fn();

console.log("B");

// T3
const user = {
  name: "Prem",
};

const greet = () => {
  console.log(this.name);
};

greet.call(user);

function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}

const user = {
  name: "Prem",
};

// q1 Prem 30 , Prem, [40]
// Q2 A Prem B
// Q3 Prem
//  Q4 greet.call(ussr,"Hello","For punctuation")
