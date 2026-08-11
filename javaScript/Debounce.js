function debounce(fn, delay) {
  let timer;

  return function (...agrs) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, agrs);
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
