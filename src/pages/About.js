// import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  return (
    <section className="about">
      <div className="about_banner section-width">
        <div className="about_title">
          <h1>ABOUT UOMO</h1>
        </div>
        <div className="about_banner-img">
          <img
            src="/images/about-1.webp"
            width={2000}
            height={2000}
            alt="about"
          />
        </div>
      </div>
      <div className="about_main">
        <div className="about_story">
          <h3>OUR STORY</h3>
          <h4>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h4>

          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
        </div>

        <div className="flex">
          <div className="flexItems">
            <h3>Our Mission</h3>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
          <div className="flexItems">
            <h3>Our Vision</h3>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flexItems">
            <img
              src="/images/about-2.webp"
              width={2000}
              height={2000}
              alt="about"
            />
          </div>

          <div className="flexItems">
            <h3>The Company</h3>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras..
            </p>
          </div>
        </div>

        <div className="info">
          <div className="feature">
            <FontAwesomeIcon icon={faTruckFast} className="feature_icon" />{" "}
            <h3 className="title">FAST AND FREE DELIVERY</h3>
            <p className="description">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faHeadset} className="feature_icon" />{" "}
            <h3 className="title">24/7 CUSTOMER SUPPORT</h3>
            <p className="description">Friendly 24/7 customer support</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faCircleCheck} className="feature_icon" />{" "}
            <h3 className="title">MONEY BACK GUARANTEE</h3>
            <p className="description">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
