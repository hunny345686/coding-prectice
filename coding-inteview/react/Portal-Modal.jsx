import { useState } from "react";
import { createPortal } from "react-dom";
function Modal({ isOpen, isClose, children }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="backdrop">
      <div className="modal">
        {children}
        <button onClick={isClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} isClose={() => setIsOpen(false)}>
        <h2>Hello Prem!</h2>
        <p>This is a reusable modal.</p>
      </Modal>
    </div>
  );
}

export default App;
