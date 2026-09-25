const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promis Resolve");
    reject("Rejected");
  }, 2000);

  //   resolve("Resove data");
  //   re;
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Second Task

console.log("a");

const p = new Promise((res, sej) => {
  console.log("B");
  res("Done");
});

console.log("C");

// Task 3

Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .catch((error) => {
    console.log(error.message);
  });

//   return "failed"

// Promise vs async/await

getUser()
  .then((user) => {
    return getUsers(user.id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Async Await

async function getUserData() {
  try {
    const user = await getUser();
    const data = await getMultiUser(user.id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const p2 = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Error");
});

p2.then(console.log).catch(console.log);

//  interview practice

console.log("A");

const p3 = new Promise((resolve) => {
  console.log("B");
  resolve("C");
});

p3.then((value) => {
  console.log(value);
});

console.log("D");

// Output  A => B => D => C

const p = Promise.resolve(10);

p.then((value) => {
  console.log(value);
  return value * 2;
}).then((value) => {
  console.log(value);
});

// output 10 => 20

Promise.resolve()
  .then(() => {
    console.log("A");
    throw new Error("X");
  })
  .then(() => {
    console.log("B");
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("C");
  });

//   A => X => C
