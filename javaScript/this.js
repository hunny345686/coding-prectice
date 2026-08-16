const user = {
  name: "prem Singh",

  greet() {
    return this.name;
  },
  welcome: function () {
    return () => {
      return this.name;
    };
  },
};

const d = user.welcome();
console.log(user.greet());
console.log(d());
