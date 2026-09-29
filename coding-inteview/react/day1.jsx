function App() {
  const [count, setCount] = React.useState(0);

  console.log("App render");

  function handleClick() {
    setCount(count + 1);
    console.log("After setState:", count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
