import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function ShoppingBag({ toggleDrawer, products, counter, setCounter }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // const addedProducts = null;
  const addedProducts = products.slice(5, 11);

  const bagProductsNum = addedProducts ? addedProducts.length : 0;

  // function handleTotalPrice() {}

  console.log("SHOPPING");

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="bag_header">
        <p>Shopping Bag ({bagProductsNum})</p>
        <FontAwesomeIcon
          className="bag_close"
          icon={faXmark}
          onClick={toggleDrawer()}
        />
      </div>
      <div className="bag_content">
        {addedProducts ? (
          <div className="bag_products">
            {addedProducts.map((product, i) => (
              <CartProducts
                product={product}
                counter={counter}
                setCounter={setCounter}
                key={i}
              />
            ))}
          </div>
        ) : (
          <p className="bag_empty">Your cart is empty. Start shopping!</p>
        )}
        <div className="bag_total">
          <label>subtotal:</label>
          <span>${totalPrice}</span>
        </div>
        {addedProducts ? (
          <Link to="/shopping-wizard">
            <button className="secondary-btn" onClick={toggleDrawer()}>
              view cart{" "}
            </button>
          </Link>
        ) : (
          <Link to="/shop">
            <button className="secondary-btn" onClick={toggleDrawer()}>
              explore shop
            </button>
          </Link>
        )}
      </div>
    </Box>
  );
}

export function CartProducts({ product, counter, setCounter }) {
  function handleDecCounter() {
    setCounter((c) => (c > 0 ? c - 1 : 0));
  }
  function handleIncCounter() {
    setCounter((c) => c + 1);
  }
  return (
    <div className="bag_product">
      <div className="bag_product-img">
        <img src={product.image} alt="pc-cart" />
      </div>
      <div className="bag_product-info">
        <h4>{product.name}</h4>
        <p>Color: #XXXXXX</p>
        <p>Size: XX</p>
        <div>
          <div className="bag_counter">
            <button onClick={handleDecCounter} type="button">
              -
            </button>
            <input
              type="text"
              value={counter}
              onChange={(e) => setCounter(Number(e.target.value))}
            />
            <button onClick={handleIncCounter} type="button">
              +
            </button>
          </div>
          <p className="bag_product-price">${product.price}</p>
        </div>
      </div>
      <FontAwesomeIcon className="bag_product-remove" icon={faXmark} />{" "}
    </div>
  );
}
