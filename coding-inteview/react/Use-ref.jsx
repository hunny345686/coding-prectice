import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus in Input</button>
    </div>
  );
}

export default App;
