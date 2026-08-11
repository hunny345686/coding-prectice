function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll");
}, 1000);

window.addEventListener("scroll", handleScroll);
