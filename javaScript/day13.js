const users = [
  { id: 1, name: "Prem" },
  { id: 2, name: "John" },
  { id: 1, name: "Prem" },
  { id: 3, name: "Sam" },
  { id: 2, name: "John" },
];

function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i].id === result[j].id && arr[i].name === result[j].name) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

console.log(removeDuplicates(users));
