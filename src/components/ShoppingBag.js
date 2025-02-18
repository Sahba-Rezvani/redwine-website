import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function ShoppingBag({ toggleDrawer, cartProducts, updateQuantity }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // const addedProducts = null;
  // const addedProducts = products.slice(5, 11);

  const bagProductsNum = cartProducts ? cartProducts.length : 0;

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
        {cartProducts.length > 0 ? (
          <div className="bag_products">
            {cartProducts.map((product, i) => (
              <CartProduct
                product={product}
                key={product.id}
                // updateQuantity={updateQuantity}
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
        {cartProducts ? (
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

export function CartProduct({ product, updateQuantity }) {
  const increaseQuantity = () => {
    const newCount = product.quantity + 1;
    // updateQuantity(product.id, newCount);
  };

  const decreaseQuantity = () => {
    const newCount = product.quantity > 1 ? product.quantity - 1 : 1;
    // updateQuantity(product.id, newCount);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    updateQuantity(product.id, value);
  };

  return (
    <div className="bag_product">
      <div className="bag_product-img">
        <img src={product.image} alt="pc-cart" />
      </div>
      <div className="bag_product-info">
        <h4>{product.name}</h4>
        <p>Color: {product.color}</p>
        <p>Size: {product.size}</p>
        <div>
          <div className="bag_counter">
            <button onClick={decreaseQuantity} type="button">
              -
            </button>
            <input
              type="text"
              value={product.quantity}
              onChange={handleChange}
            />

            <button onClick={increaseQuantity} type="button">
              +
            </button>
          </div>
          <p className="bag_product-price">${product.price}</p>
        </div>
      </div>
      <FontAwesomeIcon className="bag_product-remove" icon={faXmark} />
    </div>
  );
}
