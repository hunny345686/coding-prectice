import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "incr") {
    return { count: state + 1 };
  }
  if (action.type == "decmr") {
    return { count: state + 1 };
  }

  return state;
};

function COunter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "incr" })}>+</button>
    </>
  );
}
