// 1 Attempt

import { useCallback, useEffect, useRef } from "react";

const useDebounce = (fn, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn.apply(this, args);
    });

    return () => {
      timer.clearTimeout();
    };
  }, [delay, fn]);
};

// 2 Attempt

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);

  const deouncFn = useCallback(
    (...args) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    },
    [fn, delay],
  );
  useEffect(() => {
    return clearTimeout(timerRef.current);
  }, []);

  return deouncFn;
};

const App = () => {
  function inputCal(value) {
    console.log(value);
  }

  const debouceSerach = useDebounce(inputCal, 1000);

  return (
    <div>
      <input type="text" onChange={(e) => debouceSerach(e.target.value)} />
    </div>
  );
};
