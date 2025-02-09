import { Link } from "react-router-dom";
import { useState } from "react";
export function Menu() {
  // const [activeTab, setActiveTab] = useState(true);
  return (
    <menu className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </menu>
  );
}
