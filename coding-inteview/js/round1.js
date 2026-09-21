console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

async function test() {
  console.log("D");

  await Promise.resolve();

  console.log("E");
}

test();

console.log("F");

// Output will be A => F => D => C => E => B

//  First Sync code AF => Fuction test Call D Print => first Promis C => Indide function Promiss E => The Timer => B

// Second 2

// Remove duplicate objects from an array

const users = [
  { id: 1, name: "Prem" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Prem" },
  { id: 3, name: "Amit" },
  { id: 2, name: "Rahul" },
];

function removeDuplicate(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let exist = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i].id === arr[j].id) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      result.push(arr[i]);
    }
  }
  return result;
}

removeDuplicate(users);

// Expected output:
// [
//   { id: 1, name: "Prem" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Amit" }
// ]

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter2();
counter1();
counter2();

// Output 1 2 1 3 2
