import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
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
  isRegistered,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header>
      <div className="logo">logoooo</div>
      <Menu />

      <button onClick={handleLogout}>log out</button>
      <div className="header-tools">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-box" />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="shopping-cart"
          onClick={toggleShoppingBagDrawer()}
        />

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
