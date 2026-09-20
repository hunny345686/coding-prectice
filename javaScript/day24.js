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

// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());

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

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(b());

// 1 2 1 2

// console.log(a); // undifined

// var a = 10;

// console.log(a);

// undifined 10

//  Task 3

console.log(a);

var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();

//  undifiend , undifiend

let a = 10;

{
  console.log(a);
  let a = 20;
}

// give a reffrence eroor

sayHello();

var sayHello = function () {
  console.log("Hello");
};

function sayHello() {
  console.log("Hi");
}

// when we call var sayhello it will give type error that sayhello is not a function
// and second will console HI
