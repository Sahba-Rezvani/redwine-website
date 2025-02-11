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
import Register from "./Register";
import Drawer from "@mui/material/Drawer";
import { ShoppingBag } from "./ShoppingBag";
import ShoppingWizard from "./ShoppingWizard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loginDrawer, setLoginDrawer] = useState(false);
  const [registerDrawer, setRegisterDrawer] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [shoppingBagDrawer, setShoppingBagDrawer] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

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

  const toggleRegisterDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setRegisterDrawer(!registerDrawer);
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

  function handleAddToCart(product) {
    const newCartItem = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };

    setCartProducts([...cartProducts, newCartItem]);
  }

  return (
    <div className="container">
      <Drawer anchor="right" open={loginDrawer} onClose={toggleLoginDrawer()}>
        <Login
          toggleDrawer={toggleLoginDrawer}
          setLoginDrawer={setLoginDrawer}
        />
      </Drawer>
      <Drawer
        anchor="right"
        open={registerDrawer}
        onClose={toggleRegisterDrawer()}
      >
        <Register
          toggleDrawer={toggleRegisterDrawer}
          setIsRegistered={setIsRegistered}
          setRegisterDrawer={setRegisterDrawer}
        />
      </Drawer>
      <Drawer
        anchor="right"
        open={shoppingBagDrawer}
        onClose={toggleShoppingBagDrawer()}
      >
        <ShoppingBag
          quantity={quantity}
          setQuantity={setQuantity}
          cartProducts={cartProducts}
          toggleDrawer={toggleShoppingBagDrawer}
        />
      </Drawer>
      <Header
        toggleLoginDrawer={toggleLoginDrawer}
        toggleShoppingBagDrawer={toggleShoppingBagDrawer}
        toggleRegisterDrawer={toggleRegisterDrawer}
        isRegistered={isRegistered}
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
              quantity={quantity}
              setQuantity={setQuantity}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/shopping-wizard"
          element={
            <ShoppingWizard
              products={products}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
