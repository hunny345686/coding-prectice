// Implement debounce.
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//Implement debounce.

function throtal(fn, delay) {
  const lastTime = 0;
  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;

      fn.apply(this, args);
    }
  };
}
