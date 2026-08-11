const person = {
  name: "Prem",
};

function greet(age) {
  return `${this.name} is ${age}`;
}

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  const key = Symbol();

  context[key] = this;

  const result = context[key](...args);

  delete context[key];
  return result;
};

console.log(greet.myCall(person, 30));
