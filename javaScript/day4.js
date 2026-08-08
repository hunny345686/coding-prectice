function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("cha");
      return cache[key];
    }
    console.log("Noramal");

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

// console.log(memoizedAdd(1, 2));

// console.log(memoizedAdd(1, 2));

// Question 1 implement deepClone

const obj = {
  name: "Prem",
  address: {
    city: "Bangalore",
    pincode: 560001,
  },
  skills: ["React", "JS"],
};

// objClone = JSON.parse(JSON.stringify(obj)); // Clone but with function it will create issue
objClone = obj; // not clone it will refrance to the object

// objClone = { ...obj }; // Fist level only Clone

// obj.name = "Updated Prem";
// obj.address.city = "Updated Bangalore";

// console.log("Obj", obj);
// console.log("objClone", objClone);

function deepClone(obj) {
  const cloneObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      deepClone(obj[key]);
    }
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}

// console.log(deepClone(objClone));

obj.name = "Updated Prem";
obj.address.city = "Updated Bangalore";

// Question 2 Flatten Object

const user = {
  name: "Prem",
  address: {
    city: "Delhi",
    state: "Delhi",
  },
};

function flatObj(obj) {
  const cloneObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      deepClone(obj[key]);
    }
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}

console.log(flatObj(user));
