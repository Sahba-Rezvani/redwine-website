import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="banner-container">
      <div className="banner-info-box">
        <div className="banner-textline">
          <span className="line"></span>
          <p>trending 2025</p>
        </div>
        <h1 className="banner-title">red wine clothing</h1>
        <p className="banner-subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo
        </p>
        <Link to="/shop">
          <button className="btn primary-btn">shop now</button>
        </Link>
      </div>
    </div>
  );
}
