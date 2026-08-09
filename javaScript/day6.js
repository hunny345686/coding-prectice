const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

function getObjectKeys() {
  //   console.log(this.name);
  return this.name;
}

// getObjectKeys.call(obj); // "John"

Function.prototype.myCall = function (ctx) {
  //   console.log(ctx);

  ctx["fn"] = this;

  ctx["fn"]();
};

getObjectKeys.myCall(obj);

// Implement infinite currying

function sum(a) {
  return function (...args) {
    if (args.length === 0) {
      return a;
    }

    const total = args.reduce((acc, val) => acc + val, 0);

    return sum(a + total);
  };
}

console.log(sum(2)(3)(4)(5, 1)(6)());
