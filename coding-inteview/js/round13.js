// Shallow copy

const user = {
  name: "prem",

  addres: {
    city: "delhi",
  },
};
// 1 way to shallow capy
const copy = { ...user }; // First Level Cappy
// user.addres.city = "Bangalore";

//  Second way
const copy2 = Object.assign({}, user);
console.log(user);
console.log(copy);

// deep copy

const deepCapy = structuredClone(user);
deepCapy.addres.city = "GJKGJLKHjkl";

console.log(deepCapy);

// JSON deep clone

const copy3 = JSON.parse(JSON.stringify(user));

// it doesn't correctly preserve things such as:
// Date
// Map
// Set
// undefined
// functions
// RegExp
// special object prototypes

// T1
const user = {
  name: "Prem",
  address: {
    city: "Bangalore",
  },
};

const copy = { ...user };

copy.address.city = "Chandigarh";

console.log(user.address.city);

// T2
const user = {
  name: "Prem",
  address: {
    city: "Bangalore",
  },
};

const copy = structuredClone(user);

copy.address.city = "Chandigarh";

console.log(user.address.city);
console.log(copy.address.city);

// T3

const obj = {
  a: 10,
  nested: {
    b: 20,
  },
};

const copy = { ...obj };

console.log(obj === copy);
console.log(obj.nested === copy.nested);

// Q1 => "Chandigarh"
// Q2 => Bangalore ,Chandigarh
//  Q3 => False , True
// Q4 => B
