import "./App.css";
import { Profiler, useEffect, useState } from "react";

// import required modules
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import MainBanner from "./Banner";
import ImageMenu from "./ImageMenu";
import { LimitedEdition } from "./LimitedEdition";
import { Discount } from "./Discount";
import Login from "./Login";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(false);
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
    <div className="container">
      <Home>
        {profile ? <Login setProfile={setProfile} /> : ""}
        <Header setProfile={setProfile} />
        <Main>
          <MainBanner />
          <ImageMenu />
          <Discount />
          <LimitedEdition products={products} />
        </Main>
        <Footer />
      </Home>
    </div>
  );
}

function Home({ children }) {
  return <>{children}</>;
}
