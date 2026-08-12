function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          result[i] = value;
          completed++;

          if (promises.length === completed) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

promiseAll([p1, p2, p3]).then((d) => {
  console.log(d);
});
