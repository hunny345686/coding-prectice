function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((value) => {
  console.log("API call:", value);
}, 500);

search("r");
search("re");
search("rea");
search("react");

const user = {
  name: "Prem",

  regular: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

user.regular();
user.arrow();

// Prem ,undefind
