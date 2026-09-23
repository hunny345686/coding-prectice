// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log("var:", i);
//   }, 100);
// }

// // 3 3 3

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => {
//     console.log("let:", j);
//   }, 100);
// }

// 0 1 2

// Concentrix Inteview Qutions

//  Inrto and my project
// how many hoos you know => use of usememo
// diifre btn context and redux ? Can we use redux for small app    and context for large app complex app
// Next js why you will use next js over react and why not
// Next vs react and node ?
// abot next js and react the usecase pro nd cons
// how many ways to share data within 2 component A B

// inteview coding  question are

// var a = 1;

// function outer() {
//   var a = 2;

//   function inner() {
//     var a = 3;

//     console.log(a);
//   }

//   inner();
// }
// outer();

// 2

class Test {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }

  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    var height = 2;
    var width = 2;
    return this.width * this.height;
  }
}

const obj = new Test(10, 10);
console.log(obj.area);
