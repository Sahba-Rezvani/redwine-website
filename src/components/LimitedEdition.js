import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
//Slider Dependencies
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ProductCard } from "./ProductCard";

export function LimitedEdition({ products }) {
  const limitedProducts = products.slice(0, 8);
  console.log(limitedProducts);

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
        {limitedProducts.map((product) => (
          <SwiperSlide className="slide-item" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
