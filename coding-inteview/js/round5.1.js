// JavaScript Coding: Promise.all

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completion = 0;
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((vale) => {
          completion++;
          result[i] = vale;
          if (completion === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.myAll([p1, p2, p3]).then((result) => {
  console.log(result);
});
