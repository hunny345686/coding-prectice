const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

function getObjectKeys() {
  console.log(this.name);
  return this.name;
}

// getObjectKeys.call(obj); // "John"

Function.prototype.myCall = function (ctx) {
  console.log(ctx);

  ctx["fn"] = this;

  ctx["fn"]();
};

getObjectKeys.myCall(obj);

// Implement infinite currying

function sum(a) {
  return function (...b) {
    if (b.length === 0) {
      return a;
    }

    // if multi Args there
    const totel = b.reduce((acc, num) => acc + num, 0);

    return sum(a + totel);
  };
}

console.log(sum(2)(3)(4)(5, 1)(6)());
