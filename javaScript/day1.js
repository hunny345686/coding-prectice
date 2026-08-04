// Question 1 – Array Transformation

const users = [
  { id: 1, name: "Prem", age: 28 },
  { id: 2, name: "John", age: 32 },
  { id: 3, name: "Alice", age: 25 },
  { id: 4, name: "Bob", age: 35 },
];

const res = users.filter((item) => {
  if (item.age >= 30) {
    return item.name;
  }
});

const fRes = res.map((item) => item.name);

// console.log(fRes);

// Question 2 – Coding – Without using Array.prototype.flat(), convert const arr = [1, [2, 3], [4, [5, 6]], 7]; =>[1,2,3,4,5,6,7]

// V1

const arr = [1, [2, 3], [4, [5, 6]], 7];
const flatArray = arr.flat(Infinity);

// v2
function flaterArray(arr) {
  const res = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      res.push(...flaterArray(element));
    } else {
      res.push(element);
    }
  });
  return res;
}

// console.log(flaterArray(arr));

// console.log(flatArray);

// Question 3 – Real Interview Question
// Implement a function: groupBy(array, key)

const people = [
  { name: "Prem", city: "Delhi" },
  { name: "John", city: "Mumbai" },
  { name: "Alice", city: "Delhi" },
];

function groupBy(arr, key) {
  return arr.reduce((acc, elem) => {
    const cityName = elem[key];
    console.log(cityName);

    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(elem);
    // console.log(acc);
    return acc;
  }, {});
}

function groupBy1(arr, key) {
  const obj = {};
  arr.forEach((elem) => {
    const citiName = elem[key];
    if (!obj[citiName]) {
      obj[citiName] = [];
    }
    obj[citiName].push(elem);
  });

  return obj;
}

// console.log(groupBy1(people, "city"));

// console.log(groupBy(people, "city"));

// Question 4 – Debugging
//  output will be  4,4,4,

//  why - Due to var its in function scop every time it will print 4

// fix 1 -> for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// fix 2 - for (var i = 0; i < 3; i++) {
// (function(){
//     setTimeout(() => console.log(i), 0);
// })()
// }

function groupBy2(arr, key) {
  return arr.reduce((acc, elem) => {
    const groupBy = elem[key];
    console.log(groupBy);
    if (!acc[groupBy]) {
      acc[groupBy] = [];
    }
    acc[groupBy].push(elem);

    return acc;
  }, {});
}

console.log(groupBy2(people, "city"));
