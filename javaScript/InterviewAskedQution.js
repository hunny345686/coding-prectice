// Interview Questions in JavaScript

// array like [1,2,5,1,6,2,1,6,7] => [1,2,5,1,8,6,2,1,6,7] Asked in Photon Company

const arr = [1, 2, 5, 1, 6, 2, 1, 6, 7];

// V1

const result = [];
let count = 0;

arr.forEach((elem, i) => {
  result.push(elem);

  if (arr[i] == 1 && arr[i + 1] == 6 && count < 1) {
    result.push(8);
    count++;
  }
});

// console.log(result);

// V2

const res = arr.splice(4, 0, 8);

// console.log(res);
// console.log(arr);

// Asked in Capgimini
const arr1 = [
  [1, 2, 3, 5],
  [2, 3, 7, 9, 5],
  [3, 5, 0],
];

//Output = [ 3, 5 ]

// V1
const output = arr1.reduce((acc, item) => {
  return acc.filter((elem) => item.includes(elem));
});

// V2
let result1 = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  const temp = [];
  for (let j = 0; j < arr1[i].length; j++) {
    if (result1.includes(arr1[i][j])) {
      temp.push(arr1[i][j]);
    }
  }
  result1 = temp;
}

console.log(result1);
console.log(output);
