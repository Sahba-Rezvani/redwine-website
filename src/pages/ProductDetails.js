import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tabs } from "@base-ui-components/react/tabs";

export default function ProductDetails({ products, setCounter, counter }) {
  const { id } = useParams(); // Access the ID from the route
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    console.log(product);
    setSelectedProduct(product);
    console.log(selectedProduct);
  }, [selectedProduct, id, products]);
  console.log(id);

  function handleImageSelect(imgUrl) {
    setSelectedImage(imgUrl);
    console.log("image selected");
  }

  return (
    <>
      {selectedProduct ? (
        <div className="pc-detail-container section-width">
          <div className="pc-detail-overview">
            <div className="pc-details-img-box">
              <div className="pc-details-thumbnail">
                {selectedProduct.thumbnailImages.map((image, i) => (
                  <div
                    key={i}
                    className="pc-details-img"
                    onClick={() => handleImageSelect(i)}
                    style={{ opacity: selectedImage === i ? 1 : 0.5 }}
                  >
                    <img src={image} alt="pc-01" />
                  </div>
                ))}
              </div>
              <div className="pc-details-main-img">
                <img
                  src={selectedProduct.thumbnailImages[selectedImage]}
                  alt="pc-01"
                />
              </div>
            </div>
            <div className="pc-details-info-box">
              <h4 className="pc-details--name row">{selectedProduct.name}</h4>
              <p className="pc-details--price row">$29</p>
              <p className="pc-details-info row">
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>
              <form>
                <div className="pc-details-swatch">
                  <div className="pc-details-swatch-left">
                    {" "}
                    <label className="size-label">sizes</label>
                    <SizeRadioGroup sizeRange={selectedProduct.sizes} />
                  </div>
                  <button className="primary-btn">size guid</button>
                </div>
                <div className="row pc-details-swatch">
                  <label className="color-label">color</label>
                  <ColorRadioGroup colorPallet={selectedProduct.color} />
                </div>
                <div className="row pc-details-count">
                  <Counter setCounter={setCounter} counter={counter} />
                  <button className="secondary-btn">add to cart</button>
                </div>
              </form>
              <div className="row">
                <button className="primary-btn add-to-wishlist">
                  <FontAwesomeIcon
                    icon={RegularHeart}
                    style={{ color: "#767676", marginRight: "7px" }}
                  />
                  {/* <FontAwesomeIcon icon={SolidHeart} /> */} add to wish list
                </button>
                <button className="primary-btn share">
                  <FontAwesomeIcon icon={faShareNodes} /> share
                </button>
              </div>
              <div className="row pc-details-meta">
                <div className="meta-item">
                  <label>sku:</label>
                  <span>N/A</span>
                </div>
                <div className="meta-item">
                  <label>categories:</label>
                  <span>Casual & Urban Wear, Jackets, Men</span>
                </div>
                <div className="meta-item">
                  <label>tags:</label>
                  <span>biker, black, bomber, leather</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-detail-tab-box">
            <TabNavigation />
          </div>
          <div className="related-products"></div>
        </div>
      ) : (
        <div>Loading product details...</div>
      )}
    </>
  );
}

export function SizeRadioGroup({ sizeRange }) {
  const [selectedSize, setSelectedSize] = useState("");
  function handleSizeChange(e) {
    setSelectedSize(e.target.value);
    console.log(e.target);
    console.log(e.target.value);
  }
  return (
    <ul className="swatch_list">
      {sizeRange.map((size, i) => (
        <li className="swatch_item" key={i}>
          <label
            htmlFor={`swatch-${i + 1}`}
            aria-label="Small"
            className="swatch_item-label"
          >
            {size}
          </label>
          <input
            type="radio"
            name="size"
            id={`swatch-${i + 1}`}
            className="swatch_item-input"
            value={size}
            onChange={handleSizeChange}
            checked={selectedSize === size}
          />
          {/* <span className="swatch_tooltip">This is option 1</span> */}
        </li>
      ))}
    </ul>
  );
}

export function ColorRadioGroup({ colorPallet }) {
  const [selectedColor, setSelectedColor] = useState("");

  function handleColorChange(e) {
    setSelectedColor(e.target.value);
  }
  return (
    <div className="swatch_list">
      {colorPallet.map((color, i) => (
        <label
          className="swatch_item--label"
          htmlFor={`color-${i + 1}`}
          style={{ "--radio-bg-color": color }}
          key={i}
        >
          <input
            type="radio"
            name="color"
            id={`color-${i + 1}`}
            className="swatch_item-input"
            value={color}
            onChange={handleColorChange}
            checked={selectedColor === color}
          />
        </label>
      ))}
    </div>
  );
}

export function Counter({ counter, setCounter }) {
  function handleDecCounter() {
    setCounter((c) => (c > 0 ? c - 1 : 0));
  }
  function handleIncCounter() {
    setCounter((c) => c + 1);
  }
  return (
    <div className="counter-container">
      <button onClick={handleDecCounter} type="button">
        -
      </button>
      <input
        type="text"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
      />
      <button onClick={handleIncCounter} type="button">
        +
      </button>
    </div>
  );
}

export function TabNavigation() {
  return (
    <Tabs.Root className="tabs" defaultValue="description">
      <Tabs.List className="tabs_list">
        <Tabs.Tab className="tab_item" value="description">
          Description
        </Tabs.Tab>
        <Tabs.Tab className="tab_item" value="additional">
          Additional information
        </Tabs.Tab>
        {/* <Tabs.Tab className="tab_item" value="overview">
          reviews
        </Tabs.Tab> */}
        <Tabs.Indicator className="tab_indicator" />
      </Tabs.List>
      <Tabs.Panel className="tab_panel" value="description">
        <ProductDescriptionTab className="tab_item-description" />
      </Tabs.Panel>
      <Tabs.Panel className="tab_panel" value="additional">
        <ProductAdditionalTab className="tab_item-additional" />
      </Tabs.Panel>
      {/* <Tabs.Panel className="tab_item-reviews" value="overview">
        <ProductReviewsTab className="tab_item-reviews" />
      </Tabs.Panel> */}
    </Tabs.Root>
  );
}

function ProductDescriptionTab() {
  return (
    <div className="tab_content-description">
      <div className="tab_content-top">
        <h4>Sed do eiusmod tempor incididunt ut labore</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
      <div className="tab_content-bottom">
        <div className="tab_content-bottom-left">
          <h4>Why choose product?</h4>
          <ul>
            <li>Creat by cotton fibric with soft and smooth</li>
            <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
            <li>Downloadable/Digital Products, Virtual Products</li>
          </ul>
          <div className="lining">
            <h4>lining</h4>
            <p>100% Polyester, Main: 100% Polyester.</p>
          </div>
        </div>
        <div className="tab_content-bottom-right">
          <h4>Sample Number List</h4>
          <ul>
            <li>Create Store-specific attributes on the fly</li>
            <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
            <li>Downloadable/Digital Products, Virtual Products</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductAdditionalTab() {
  return (
    <div className="tab_content-additional">
      <div className="additional_item">
        <label>weight</label>
        <span>1.25 kg</span>
      </div>
      <div className="additional_item">
        <label>Dimensions</label>
        <span>90 x 60 x 90 cm</span>
      </div>{" "}
      <div className="additional_item">
        <label>size</label>
        <span>XS, S, M, L, XL</span>
      </div>{" "}
      <div className="additional_item">
        <label>color</label>
        <span>Black, Orange, White</span>
      </div>{" "}
      <div className="additional_item">
        <label>storage</label>
        <span>Relaxed fit shirt-style dress with a rugged</span>
      </div>
    </div>
  );
}

// function ProductReviewsTab() {
//   return <div>Item three</div>;
// }
