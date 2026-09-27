// JavaScript Coding: call Polyfill

const user = {
  name: "prem",
};

const user2 = {
  name: "mohit",
};

function greet(a, b) {
  console.log("param " + a, b);
  console.log("Hello " + this.name);
}

// Using Normal
user.fn = greet;
user2.fn = greet;

user.fn("Normal", "User");
user2.fn("Normal", "User2");

// using call

greet.call(user, "Using Call", "User");
greet.call(user2, "Using Call", "User2");

// Call palifill

Function.prototype.myCall = function (context, ...args) {
  const fn = Symbol();

  context[fn] = this;

  const res = context[fn](...args);

  delete context[fn];

  return res;
};

greet.myCall(user, "MyCall", "User");

// T 1

const user1 = {
  name: "Prem",
};

const user4 = {
  name: "Rahul",
};

function greet(city) {
  console.log(this.name, city);
}

user1.greet = greet;
user4.greet = greet;

greet("Delhi");
// Undefiedn Delhi this will be window or globla obj

user1.greet("Bangalore");
// Prem Bangalore => green fn will be bind to user1 Obj

greet.call(user4, "Mumbai");
// Rahul Mumbai // this will expicitly bind
