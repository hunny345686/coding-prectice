function fakeFecher(url, time, failedIt = false) {
  return () => {
    return new Promise(function (resolve, rejeect) {
      setTimeout(function () {
        if (failedIt) {
          rejeect(new Error(` Request Failed :${url}`));
        } else {
          resolve(url);
        }
      }, time);
    });
  };
}

const p1 = fakeFecher("p1", 1000, true);
const p2 = fakeFecher("p2", 2000);
const p3 = fakeFecher("p3", 200);

Promise.settellALL = function (promisses) {
  return new Promise(function (resolve, reject) {
    const result = [];
    let completion = 0;

    promisses.forEach((promise, inx) => {
      promise
        .then((data) => {
          result[inx] = { status: "FullField", value: data };
        })
        .catch((err) => {
          result[inx] = { status: "Reject", resone: err };
        })
        .finally(() => {
          completion++;
          if (completion === promisses.length) {
            reject(result);
          }
        });
    });
  });
};

const allData = Promise.settellALL([p1(), p2(), p3()]);

allData
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
