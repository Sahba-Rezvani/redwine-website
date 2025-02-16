import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left-col">
          <div>
            <p className="footer-logo">logo</p>
            <h2 className="footer-label">
              <span>Red</span> Wine
            </h2>
            <p>Register your email and get informed about the last discounts</p>
          </div>
          <form>
            <input
              placeholder="Your email"
              className="footer-email
            "
            />
            <button
              className="tertiary-btn
            "
            >
              register
            </button>
          </form>
        </div>
        <div className="footer-right-col">
          <ul className="footer-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="footer-social-links">
            <li>
              <a href="#">Insta</a>
            </li>
            <li>
              <a href="#">Tel</a>
            </li>
            <li>
              <a href="#">Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p> &#169;Red wine 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
