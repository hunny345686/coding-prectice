// Task One

let count = 0;
function increament() {
  setTimeout(function () {
    count++;
    console.log("timeout", count);
  }, 0);

  Promise.resolve().then(() => {
    count++;
    console.log("promise:", count);
  });
}

increament();

console.log("sync:", count);

// my OutPut is  ====> "Sync 0" =>  "Promise 1" => "timeOut= 2"

// Task 2

async function test() {
  console.log("A");

  //   await will puase the function execution
  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");
// my OutPut is  ====> "A" =>  "C" => "B"

// task 3

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");
  })
  .then(() => {
    console.log("4");
  });

console.log("5");

// My ANS => 1 => 5 => 3 => 4=> 2

// Task 4

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// My ANS => A D C B

// Task 5

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

setTimeout(() => {
  console.log("3");
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

// My ANS => 1 5 2 4 3

// task 6

// let count = 0;

async function test() {
  console.log("A", count);

  await Promise.resolve();

  count++;

  console.log("B", count);
}

test();

count++;

console.log("C", count);

// My ANS => "A" 0, "C" 1 "B" 2
