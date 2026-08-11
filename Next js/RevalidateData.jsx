async function Product(params) {
  const res = await fetch("https://api.example.com/products", {
    next: {
      revalidate: 60,
    },
  });

  const product = await res.json();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
