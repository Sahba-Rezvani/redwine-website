import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";

// import React, { Component } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

//Slider Dependencies
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return <div className="container">{<Home />}</div>;
}

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">logoooo</div>
      <Menu />
      <div className="header-tools">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-box" />
        <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
        <FontAwesomeIcon icon={faUser} className="profile" />
      </div>
    </header>
  );
}

function Menu() {
  return (
    <menu className="menu">
      <ul className="menu-list">
        <li className="menu-item">Home</li>
        <li className="menu-item">Shop</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Contact</li>
      </ul>
    </menu>
  );
}

function Main() {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
    console.log("hover in");
  }
  function handleMouseLeave() {
    setIsHovered(false);
    console.log("hover out");
  }

  return (
    <main>
      {/* Banner */}
      {/* Image Menu */}
      {/* Trendy collection */}
      {/* Deal of the week */}
      <div className="discount-box">
        <div className="discount-text-group">
          <span className="line"></span>
          <p>deal of the week</p>
        </div>

        <h2 className="discount-title">
          <strong>spring</strong> collection
        </h2>
        <button className="btn shop-now-btn">Shop now &rarr; </button>

        <div className="timer-box">
          <FlipClockCountdown
            className="flip-clock"
            to={new Date().getTime() + 30 * 60 * 1000 + 5000}
            labels={["days", "hours", "minutes", "seconds"]}
            labelStyle={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            digitBlockStyle={{ width: 30, height: 50, fontSize: 25 }}
            duration={0.5}
          >
            Finished
          </FlipClockCountdown>
        </div>
      </div>

      <div className="limited-edition">
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
          <SwiperSlide
            className="slide-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              {isHovered && (
                <button
                  className={`pc-btn ${isHovered ? `pc-btn-visible` : ""}`}
                >
                  add to cart
                </button>
              )}
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-1-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-2-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-3-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>

              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>

              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>

              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sl-img-box">
              <img
                src="../images/product-0-1.webp"
                alt="product-0-1"
                className="sl-img"
              />
              <button className="pc-btn">add to cart</button>
            </div>
            <div className="sl-info-box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <p className="sl-category">socks</p>
                <FontAwesomeIcon
                  icon={RegularHeart}
                  style={{ color: "#767676", marginRight: "7px" }}
                />
                {/* <FontAwesomeIcon icon={SolidHeart} /> */}
              </div>
              <h6 className="sl-name">poppy christmas socks 1</h6>
              <p className="sl-price">$23</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

function Footer() {
  return <footer>FOOTER</footer>;
}

//Trendy products
//off
//Limited edition
