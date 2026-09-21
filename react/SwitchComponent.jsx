{
  /* <style>
    .switch input {
      opacity: 0;
    }

    .switch {
      position: relative;
    }

    .slider {
      position: absolute;
      inset: 0;
      width: 100px;
      height: 100%;
      background-color: red;
      border-radius: 100px;
      cursor: pointer;
    }

    .slider::before {
      content: "";
      position: absolute;
      background: yellow;
      width: 18px;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateY(-50%);
      height: 18px;
      border-radius: 50%;
    }
  </style> */
}

import { useState } from "react";

function Switch({ isOn, onToggle = () => {} }) {
  console.log(isOn, onToggle);
  return (
    <div className="switch">
      <label>
        <input type="checkbox" checked={isOn} onChange={onToggle} />
        <span class="slider"></span>
        <span>Hello</span>
      </label>
    </div>
  );
}

function App() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <Switch isOn={isOn} onToggle={handleToggle} />
    </div>
  );
}

export default App;
