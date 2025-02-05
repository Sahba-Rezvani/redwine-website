import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

export default function ProductDetails({ products }) {
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

  return (
    <>
      {selectedProduct ? (
        <div className="pc-detail-container section-width">
          <div className="pc-detail-overview">
            <div className="pc-details-img-box">
              <div className="pc-details-thumbnail">
                <div className="pc-details-img">
                  <img
                    src="../images/product-01-details/product_0-1.webp"
                    alt="pc-01"
                  />
                </div>
                <div className="pc-details-img">
                  <img
                    src="../images/product-01-details/product_0-2.webp"
                    alt="pc-01"
                  />
                </div>
                <div className="pc-details-img">
                  <img
                    src="../images/product-01-details/product_0-3.webp"
                    alt="pc-01"
                  />
                </div>
                <div className="pc-details-img">
                  <img
                    src="../images/product-01-details/product_0.webp"
                    alt="pc-01"
                  />
                </div>
              </div>
              <div className="pc-details-main-img">
                <img
                  src="../images/product-01-details/product_0.webp"
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
                  <Counter />
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
          <div className="pc-detail-tab-box"></div>
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
    <div className="swatch_list">
      {sizeRange.map((size, i) => (
        <div className="swatch_item" key={i}>
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
        </div>
      ))}
    </div>
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

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleDecCounter() {
    setCounter((c) => (c > 0 ? c - 1 : 0));
    console.log("Decrease");
  }
  function handleIncCounter() {
    setCounter((c) => c + 1);
    console.log("Increase");
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

// export function LabTabs() {
//   const [value, setValue] = useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
