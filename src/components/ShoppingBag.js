import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function ShoppingBag({
  toggleDrawer,
  cartProducts,
  updateQuantity,
  handleRemoveProduct,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("ShoppingBag cartProducts updated:", cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotalPrice(total.toFixed(2));
  }, [cartProducts]);

  const bagProductsNum = cartProducts ? cartProducts.length : 0;
  // const discountPrice =
  //   product?.price -
  //   (selectedProduct?.price * selectedProduct?.isDiscount) / 100;

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
                key={`${product.id}-${product.color}-${product.size}`}
                updateQuantity={updateQuantity}
                handleRemoveProduct={handleRemoveProduct}
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
