function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

// console.log(sum(2)(3)(4)(5)(6)());

function sumWIthMultiArgs(a) {
  return function (...b) {
    if (b.length === 0) return a;

    const total = b.reduce((acc, num) => acc + num, 0);
    console.log(total);

    return sumWIthMultiArgs(a + total);
  };
}

console.log(sumWIthMultiArgs(2)(3)(4, 1)(5, 3)(6)());
