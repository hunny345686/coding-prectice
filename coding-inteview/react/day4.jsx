import React, { useMemo } from "react";
import { useState } from "react";

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

// T2

import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("App render");

  function handleClick() {
    setCount(count + 1);
    console.log("After setState:", count);
  }

  useEffect(() => {
    console.log("After Effect:", count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;

// T3

function ProductList({ products, search }) {
  const productMemo = useMemo(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
    return filteredProducts;
  }, [products, search]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
// What should go inside the dependency array? => products, search
// Why shouldn't we simply use useMemo everywhere? => It should has its own comaristion so again react meed to compare there will be one more works react needs to do if necessory then only we can use Usememo
// What happens if products is recreated as a new array on every parent render? it will re run the useMemo
