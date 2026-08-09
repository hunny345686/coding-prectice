// Implement map().

let array = [1, 2, 3, 4, 5, 6];

function mapFn(item, i, array) {
  return item * 2;
}

Array.prototype.myMap = function (cb) {
  const result = [];

  if (typeof cb !== "function") {
    throw new TypeError("cb should be function");
  }

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};
const multByTow = array.myMap(mapFn);
// console.log(multByTow);

// Implement filter().

let arrayFilter = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (cb) {
  const result = [];
  if (typeof cb !== "function") {
    throw new TypeError("cb should be function");
  }
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const filter = arrayFilter.myFilter((item) => item % 2 === 0);

console.log(filter);
