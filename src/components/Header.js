import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightToBracket,
  faSignInAlt,
  faUserLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./Menu";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export function Header({
  toggleShoppingBagDrawer,
  toggleLoginDrawer,
  toggleRegisterDrawer,
  toggleProfileDrawer,
  isRegistered,
  setCartProducts,
  cartProducts,
  isLogin,
  setIsLogin,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("loggedInUser");
    // setCartProducts([]);
    // setIsLogin(false);
    // alert("Logged out successfully!");
    // navigate("/login");

    toggleLoginDrawer();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <div className="logo">logoooo</div>
      <Menu />

      <div className="header-tools">
        {isLogin ? (
          <FontAwesomeIcon
            icon={faUser}
            className="login-icon"
            onClick={toggleProfileDrawer()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faUserPlus}
            className="login-icon"
            onClick={handleLogin}
            title="login"
          />
        )}
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-box" />
        <div className="cart-container" onClick={toggleShoppingBagDrawer()}>
          <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />

          {cartProducts.length > 0 && (
            <span className="cart-badge">{cartProducts.length}</span>
          )}
        </div>

        {isRegistered ? (
          <FontAwesomeIcon
            icon={faUser}
            className="profile"
            onClick={toggleLoginDrawer()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            onClick={toggleRegisterDrawer()}
          />
        )}
      </div>
    </header>
  );
}
