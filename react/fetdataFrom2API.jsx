import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const idRes = await fetch("https://api.example.com/productIds");
        const idData = await idRes.json();
        if (!idData.ok) throw new Error("Something went wrong");

        const productData = await Promise.all(
          idData.map(async (ids) => {
            const responce = await fetch(
              `https://api.example.com/products/${id}`,
            );

            return responce.json();
          }),
        );

        setData(productData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
};
