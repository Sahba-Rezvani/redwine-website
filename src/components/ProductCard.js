import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter(id) {
    setIsHovered(true);
  }
  function handleMouseLeave(id) {
    setIsHovered(false);
  }

  const discountPrice =
    product.price - (product.price * product.isDiscount) / 100;

  return (
    <div
      onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={() => handleMouseLeave(product.id)}
      className="product"
    >
      <Link to={`/product-details/${product.id}`}>
        <div className="pc-img-box">
          <img src={product.image} alt="product-0" className="pc-img" />
          {isHovered && (
            <button className={`pc-btn ${isHovered ? `pc-btn-visible` : ""}`}>
              add to cart
            </button>
          )}

          {product.isDiscount !== 0 ? (
            <div className="discount-label">-{product.isDiscount}%</div>
          ) : (
            ""
          )}
        </div>
        <div className="pc-info-box">
          <div className="pc-info-header">
            <p className="pc-category">{product.category}</p>
            <FontAwesomeIcon
              icon={RegularHeart}
              style={{ color: "#767676", marginRight: "7px" }}
            />
            {/* <FontAwesomeIcon icon={SolidHeart} /> */}
          </div>
          {/* <h3>{product.favoritesCount}</h3> */}
          <h6 className="pc-name">{product.name}</h6>
          <p className="pc-price">
            ${product.price}
            {product.isDiscount ? <div className="pc-discount-line"></div> : ""}
          </p>
          {product.isDiscount !== 0 ? (
            <>
              <span className="pc-discount-price">
                ${+discountPrice.toFixed(2)}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
}
