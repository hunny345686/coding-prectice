const user = {
  name: "Prem",
  greet() {
    console.log("Hello!");
  },
};

console.log(user.name); // "Prem"
user.greet(); // "Hello!"

console.log(user.toString); // function

console.log(Object.getPrototypeOf(user) === Object.prototype);

// // T1

const person = {
  greet() {
    return `hello ${this.name}`;
  },
};

const user1 = Object.create(person);
const user1 = { ...person };
const user1 = person;

user1.name = "AGFDSGSHJ";

console.log(Object.getPrototypeOf(user1) === person);
// true

console.log(user1.hasOwnProperty("name"));
// true

console.log(user1.hasOwnProperty("greet"));
// false
