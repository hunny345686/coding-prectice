function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

function throttle(fn, dely) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= dely) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
