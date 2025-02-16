import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function MainBanner() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      navigation
      autoplay={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-container">
          <div className="banner-info-box">
            <div className="banner-textline">
              <span className="line"></span>
              <p>trending 2025</p>
            </div>
            <h1 className="banner-title">Heeeelooooooooooooooo</h1>
            <p className="banner-subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo
            </p>
            <Link to="/shop">
              <button className="btn primary-btn">shop now</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
