import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "Ince") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "Decr") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { conte: 0 });

  return (
    <div>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: "Incre" })}>Incrment</button>
    </div>
  );
};

function reducer(state, action) {
  if (action.type == "A") {
    return {
      ...state,
      count: state + 1,
    };
  }
  if (action.type == "B") {
    return {
      ...state,
      count: state - 1,
    };
  }
  if (action.type == "C") {
    return {
      ...state,
      count: state + action.id,
    };
  }

  return state;
}

const App = () => {
  const initVal = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initVale);

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "A" })}>I</button>
      <button onClick={() => dispatch({ type: "B" })}>D</button>
      <button onClick={() => dispatch({ type: "C", id: 5 })}>ByValue</button>
    </div>
  );
};
