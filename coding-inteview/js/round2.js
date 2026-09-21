// This Keyword

const user1 = {
  name: "Prem",
  greet,
};

const user2 = {
  name: "Rahul",
  greet,
};

function greet() {
  console.log(this.name);
}

user1.greet();
user2.greet();

// Task 2

const user = {
  name: "Prem",

  greet() {
    console.log(this.name);
  },
};

user.greet();
// Output Prem

const user4 = {
  name: "Prem",

  greet: () => {
    console.log(this.name);
  },
};

user4.greet();

// Output undifiend

const user6 = {
  name: "Prem",

  greet() {
    return function () {
      console.log(this.name);
    };
  },
};

user6.greet()();

// Type Error will be there

// Implement map() polyfill

const numbers = [1, 2, 3, 4];

Array.prototype.myMap = function (cl) {
  if (typeof cb !== "function") {
    throw new Error("Callback is not a function");
  }
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cl(this[i], i, this));
  }

  return result;
};

const res = numbers.myMap((item) => {
  return item + 2;
});

console.log(res);
