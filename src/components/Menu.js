import { Link } from "react-router-dom";

export function Menu() {
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
