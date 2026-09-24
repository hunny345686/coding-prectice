const user = {
  name: "Prem",
};

console.log(Object.getPrototypeOf(user));

// const user1 = {
//   name: "Prem",
// };

// const user2 = {
//   name: "Rahul",
// };

const userMethods = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const user1 = Object.create(userMethods);
user1.name = "Prem";

const user2 = Object.create(userMethods);
user2.name = "Rahul";

// 5. Constructor function + prototype

function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user1 = new User("Prem");
const user2 = new User("Rahul");

user1.greet();
user2.greet();

// __proto__ vs prototype

// One very common interview question
// What is the output?

function User(name) {
  this.name = name;
}

User.prototype.role = "Developer";

const user1 = new User("Prem");
const user2 = new User("Rahul");

console.log(user1.role);
console.log(user2.role);

//
