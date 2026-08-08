import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);

      // Fetch product IDs
      const response = await fetch("/products");
      const productIds = await response.json();

      // Fetch all product details in parallel
      const productDetails = await Promise.all(
        productIds.map((id) =>
          fetch(`/products/${id}`).then((res) => res.json()),
        ),
      );

      setProducts(productDetails);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}



import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Step 1: Fetch product IDs
      const response = await fetch("https://api.example.com/productIds");
      const productIds = await response.json();

      // Example Response:
      // [1,2,3]

      // Step 2: Fetch all product details in parallel
      const productDetails = await Promise.all(
        productIds.map(async (id) => {
          const response = await fetch(
            `https://api.example.com/products/${id}`
          );

          return response.json();
        })
      );

      // Step 3: Save data into state
      setProducts(productDetails);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.title}</h3>

          <p>Price : ${product.price}</p>

          <p>Category : {product.category}</p>
        </div>
      ))}
    </div>
  );
}
