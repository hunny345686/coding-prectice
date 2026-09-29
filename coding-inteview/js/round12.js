// Map

const prices = [100, 200, 300];

const discounted = prices.map((price) => price * 0.2);

console.log(discounted); //[90, 180, 270]

// filter

const result = prices.filter((price) => price >= 300);

console.log(result); //[300, 400]

// 3. reduce()

const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total); // 60

// Task 1
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, item) => {
  acc[item] = acc[item] ? acc[item] + 1 : 1;
  return acc;
}, {});

console.log(count);

// Map Polyfill

Array.prototype.myMap = function (callbck) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callbck(this[i], i, this));
  }

  return result;
};

Array.prototype.myFilter = function (callbck) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callbck(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// Array.prototype.myReduce = function (callbck, acc) {
//   let acu = acc ? acc : this[0];
//   let index = acc ? 1 : 0;

//   console.log(acu, index);

//   for (let i = index; i < this.length; i++) {
//     acc = callbck(acu, this[i], i, this);
//   }

//   return acu;
// };

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex = 0;

  if (initialValue) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const numbers1 = [1, 2, 3];

const result1 = numbers1.myReduce((acc, num) => acc + num, 2);

console.log(result1);
