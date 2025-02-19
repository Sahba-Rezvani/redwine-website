import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";
import { useEffect, useState } from "react";
// import required modules
import { Header } from "./Header";
import { Footer } from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Drawer from "@mui/material/Drawer";
import { ShoppingBag } from "./ShoppingBag";
import ShoppingWizard from "./ShoppingWizard";
import SignUpPage from "./SignUpPage";
import SizeGuide from "./SizeGuide";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loginDrawer, setLoginDrawer] = useState(false);
  const [registerDrawer, setRegisterDrawer] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [shoppingBagDrawer, setShoppingBagDrawer] = useState(false);
  const [count, setCount] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [openSizeGuide, setOpenSizeGuide] = useState(false);

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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      console.log("Current Logged-in User:", JSON.parse(loggedInUser));
    } else {
      console.log("No user is logged in.");
    }
  }, []);

  useEffect(() => {
    console.log("Updated cartProducts:", cartProducts);
  }, [cartProducts]); // هر وقت cartProducts تغییر کرد، این اجرا میشه

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

  const isAuthenticated = () => {
    return !!localStorage.getItem("loggedInUser");
  };

  function handleOpenSizeGuide(e) {
    e.preventDefault();
    setOpenSizeGuide(true);
  }

  function handleCloseSizeGuide(e) {
    e.preventDefault();
    setOpenSizeGuide(false);
  }

  function handleRemoveProduct(id, color, size) {
    setCartProducts((cartProducts) =>
      cartProducts.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size)
      )
    );
  }

  const updateQuantity = (id, color, size, newQuantity) => {
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // const handleAddToCart = (product, count, selectedColor, selectedSize) => {
  //   //اتفاقات داخل این فانکشن باید با فشردن دکمه کم  و زیاد در Countr رقم بخورد
  //   const existingProduct = cartProducts.find(
  //     (item) =>
  //       item.id === product.id &&
  //       item.color === selectedColor &&
  //       item.size === selectedSize
  //   );

  //   if (existingProduct) {
  //     const updatedCart = cartProducts.map((item) =>
  //       item.id === product.id &&
  //       item.color === selectedColor &&
  //       item.size === selectedSize
  //         ? { ...item, quantity: count }
  //         : item
  //     );
  //     setCartProducts(updatedCart);
  //   } else {
  //     setCartProducts([
  //       ...cartProducts,
  //       {
  //         ...product,
  //         quantity: count,
  //         color: selectedColor,
  //         size: selectedSize,
  //       },
  //     ]);
  //   }
  // };

  function forTest(product, count, selectedColor, selectedSize) {
    console.log("cartProducts:", cartProducts);
    console.log("selectedProductID:", product);
    // console.log("cartProductID:", cartPro);

    const existingProduct = cartProducts?.find(
      (item) =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === selectedSize
    );
    console.log("cartProducts:", cartProducts);

    if (existingProduct) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === selectedSize
          ? { ...item, quantity: count }
          : item
      );
      setCartProducts(updatedCart);
    }
  }

  function handleAddToCart(product) {
    setCartProducts([
      ...cartProducts,
      {
        ...product,
        quantity: count,
        color: selectedColor,
        size: selectedSize,
      },
    ]);
  }

  // const updateQuantity = (id, count) => {
  //   if (cartProducts.length !== 0) {
  //     const updateQuantity = (id, newQuantity) => {
  //       setCartProducts((prevCart) =>
  //         prevCart.map((item) =>
  //           item.id === id ? { ...item, quantity: newQuantity } : item
  //         )
  //       );
  //     };
  //   } else {
  //     console.log("not in the cart yet!");
  //   }
  // };

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
          updateQuantity={updateQuantity}
          cartProducts={cartProducts}
          toggleDrawer={toggleShoppingBagDrawer}
          handleRemoveProduct={handleRemoveProduct}
        />
      </Drawer>
      <SizeGuide
        handleCloseSizeGuide={handleCloseSizeGuide}
        openSizeGuide={openSizeGuide}
      />

      <Header
        toggleLoginDrawer={toggleLoginDrawer}
        toggleShoppingBagDrawer={toggleShoppingBagDrawer}
        toggleRegisterDrawer={toggleRegisterDrawer}
        isRegistered={isRegistered}
      />
      <Routes>
        {/* <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Home products={products} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}

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
              count={count}
              setCount={setCount}
              updateQuantity={updateQuantity}
              cartProducts={cartProducts}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              handleAddToCart={handleAddToCart}
              forTest={forTest}
              handleOpenSizeGuide={handleOpenSizeGuide}
            />
          }
        />
        <Route
          path="/shopping-wizard"
          element={
            <ShoppingWizard
              products={products}
              count={count}
              setCount={setCount}
              cartProducts={cartProducts}
            />
          }
        />
        <Route path="/login" element={<SignUpPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
