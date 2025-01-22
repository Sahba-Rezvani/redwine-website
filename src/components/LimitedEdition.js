import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
//Slider Dependencies
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function LimitedEdition({ products }) {
  console.log(products);

  return (
    <div className="limited-edition section-width">
      <h2 className="section-title">
        limited <strong>edition</strong>
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        navigation
        autoplay
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide className="slide-item" key={product.id}>
            <SwiperElement product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
function SwiperElement({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter(id) {
    setIsHovered(true);
  }
  function handleMouseLeave(id) {
    setIsHovered(false);
  }

  return (
    <div
      onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={() => handleMouseLeave(product.id)}
    >
      <div className="sl-img-box">
        <img src={product.image} alt="product-0" className="sl-img" />
        {isHovered && (
          <button className={`pc-btn ${isHovered ? `pc-btn-visible` : ""}`}>
            add to cart
          </button>
        )}
      </div>
      <div className="sl-info-box">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <p className="sl-category">{product.type}</p>
          <FontAwesomeIcon
            icon={RegularHeart}
            style={{ color: "#767676", marginRight: "7px" }}
          />
          {/* <FontAwesomeIcon icon={SolidHeart} /> */}
        </div>
        <h6 className="sl-name">{product.name}</h6>
        <p className="sl-price">{product.price}$</p>
      </div>
    </div>
  );
}
