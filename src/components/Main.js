import { useEffect, useState } from "react";
import MainBanner from "./Banner";
import { Discount } from "./Discount";
import ImageMenu from "./ImageMenu";
import { LimitedEdition } from "./LimitedEdition";

export function Main({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs once on mount.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <main>
      <MainBanner />
      <ImageMenu />
      <Discount />
      <LimitedEdition products={products} />
    </main>
  );
}
