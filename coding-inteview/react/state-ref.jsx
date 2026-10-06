function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    setCount(count + 1);
    ref.current++;
  }

  console.log("render");

  return (
    <button onClick={handleClick}>
      {count} - {ref.current}
    </button>
  );
}

//  render 0 - 0 after click 1 - 1

const previousValue = useRef();

useEffect(() => {
  previousValue.current = value;
}, [value]);

// T1

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    setCount(count + 1);
    ref.current++;
  }

  console.log("render");

  return (
    <button onClick={handleClick}>
      {count} - {ref.current}
    </button>
  );
}

//  {count} - {ref.current} = 1 - 1
// console.log("render"); +render
