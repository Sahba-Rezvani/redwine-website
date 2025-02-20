import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Profile({ toggleDrawer, setCartProducts, setIsLogin }) {
  const handleLogout = (event) => {
    localStorage.removeItem("loggedInUser");
    setCartProducts([]);
    setIsLogin(false);
    alert("Logged out successfully!");
    toggleDrawer()(event);
    // navigate("/login");
  };
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userData = JSON.parse(loggedInUser);

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="bag_header">
        <p>Profile</p>
        <FontAwesomeIcon
          className="bag_close"
          icon={faXmark}
          onClick={toggleDrawer()}
        />
      </div>
      <div className="profile_content">
        <div className="profile-info">
          <div className="profile_img">
            <img src="../images/blank_profile.png" alt="profile-image" />
          </div>
          <h3 className="profile_name">{userData.username}</h3>
        </div>
        <ul className="profile_items">
          <li className="profile_item">
            <Link to="/shopping-wizard">My Cart</Link>
          </li>
          <li className="profile_item">
            <Link to="/wish-list">MY wish list</Link>
          </li>{" "}
          <li className="profile_item" onClick={handleLogout}>
            Log out
          </li>
        </ul>
      </div>
    </Box>
  );
}

export function CartProduct({ product, updateQuantity, handleRemoveProduct }) {
  const increaseQuantity = () => {
    updateQuantity(
      product.id,
      product.color,
      product.size,
      product.quantity + 1
    );

    console.log(product, "❤️❤️");
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      updateQuantity(
        product.id,
        product.color,
        product.size,
        product.quantity - 1
      );
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    updateQuantity(product.id, product.color, product.size, value);
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
          <p className="bag_product-price">{product.price}</p>
        </div>
      </div>
      <FontAwesomeIcon
        className="bag_product-remove"
        icon={faXmark}
        onClick={() =>
          handleRemoveProduct(product.id, product.color, product.size)
        }
      />
    </div>
  );
}
