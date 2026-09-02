// 1. call() Polyfill

const person = {
  name: "Prem",
};

function greet(age, city) {
  console.log(`Hi, I am ${this.name}, ${age}, from ${city}`);
}

greet.call(person, 30, "Mohali");

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  const fnKey = Symbol("fn");

  context[fnKey] = this;

  const result = context[fnKey](...args);

  delete context[fnKey];

  return result;
};

greet.myCall(person, 33, "CDG");

// 2. apply() Polyfill

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;

  const fnKey = Symbol("fn");

  context[fnKey] = this;

  const result = context[fnKey](...(args || []));

  delete context[fnKey];

  return result;
};

// 3. bind() Polyfill

Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
