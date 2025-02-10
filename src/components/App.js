import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
// import { Contact } from "./Contact/Contact";

import { useEffect, useState } from "react";

// import required modules
import { Header } from "./Header";
import { Footer } from "./Footer";
import Login from "./Login";
import Drawer from "@mui/material/Drawer";
import { ShoppingBag } from "./ShoppingBag";
import ShoppingWizard from "./ShoppingWizard";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);
  const [shoppingBagDrawer, setShoppingBagDrawer] = useState(false);
  const [counter, setCounter] = useState(0);

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

  const toggleLoginDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLoginDrawer(!loginDrawer);
  };

  const toggleShoppingBagDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShoppingBagDrawer(!shoppingBagDrawer);
  };

  return (
    <div className="container">
      {/* {profile ? <Login setProfile={setProfile} /> : ""} */}
      <Drawer anchor="right" open={loginDrawer} onClose={toggleLoginDrawer()}>
        <Login toggleDrawer={toggleLoginDrawer}  setLoginDrawer={setLoginDrawer}/>
      </Drawer>
      <Drawer
        anchor="right"
        open={shoppingBagDrawer}
        onClose={toggleShoppingBagDrawer()}
      >
        <ShoppingBag
          counter={counter}
          setCounter={setCounter}
          products={products}
          toggleDrawer={toggleShoppingBagDrawer}
        />
      </Drawer>
      <Header
        setProfile={setProfile}
        toggleLoginDrawer={toggleLoginDrawer}
        toggleShoppingBagDrawer={toggleShoppingBagDrawer}
      />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop"
          element={<Shop products={products} itemsPerPage={10} />}
        />
        <Route
          path="/product-details/:id"
          element={
            <ProductDetails
              products={products}
              counter={counter}
              setCounter={setCounter}
            />
          }
        />
        <Route
          path="/shopping-wizard"
          element={
            <ShoppingWizard
              products={products}
              counter={counter}
              setCounter={setCounter}
            />
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
