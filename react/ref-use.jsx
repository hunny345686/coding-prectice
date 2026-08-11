import { useRef } from "react";

function App() {
  const ref = useRef(0);

  const handleCLick = () => {
    ref.current++;

    document.getElementById("ref").innerText = ref.current;
  };
  return (
    <div>
      <p id="ref">{0}</p>
      <button onClick={handleCLick}>Increament</button>
    </div>
  );
}

const App2 = () => {
  const inputRef = useRef(null);

  const handleclick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={handleclick}>Focus</button>
    </div>
  );
};
