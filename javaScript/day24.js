function createFunctions() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const funcs = createFunctions();

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());

// 0 1 2

// task 2

function outer() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const a = outer();
const b = outer();

console.log(a());
console.log(a());
console.log(b());
console.log(b());

// 1 2 1 2
