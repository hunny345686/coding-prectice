import { useReducer } from "react";

const initvale = {
  count: 0,
};
const reducer = (state, action) => {
  console.log(action.id);
  if (action.type === "IN") {
    return { count: state.count + 1 };
  }
  if (action.type === "DE") {
    return { count: state.count - 1 };
  }
  if (action.type === "RE") {
    return { count: 0 };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initvale);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "IN" })}>IN</button>
      <button onClick={() => dispatch({ type: "DE" })}>DE</button>
      <button onClick={() => dispatch({ type: "RE", id: 10 })}>RE </button>
    </div>
  );
}

export default App;
