import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductCard } from "../components/ProductCard";
import { Dropdown } from "primereact/dropdown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Shop({ itemsPerPage, products }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [isSortedBy, setIsSortedBy] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = React.useState([150, 445]);
  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const cities = [
    { name: "Default Sorting", code: "NY" },
    { name: "Best Selling", code: "NY" },
    { name: "Price, Low to High", code: "RM" },
    { name: "Price, High to Low", code: "LDN" },
    { name: "Most Liked", code: "IST" },
    { name: "Newest", code: "PRS" },
  ];

  const categories = [
    { name: "All" },
    { name: "Underwear" },
    { name: "Pants" },
    { name: "Crop top" },
    { name: "Socks" },
    { name: "Sportswear" },
  ];

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    console.log(priceRange);
  };

  function valuetext(priceRange) {
    return `$${priceRange}`;
  }

  return (
    <div className="shop-route section-width">
      <div className="shop-container ">
        <div className="shop-filter-container">
          <div className="shop-filter-box">
            <div className="shop-filter-category">
              {" "}
              <Dropdown
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.value)}
                options={categories}
                optionLabel="name"
                placeholder="Category"
                className="w-full md:w-14rem"
              />
            </div>
            <div className="shop-filter-seprator"></div>
            <div className="shop-filter-price">
              {" "}
              <Box
                sx={{ width: "300px", display: "flex", alignItems: "center" }}
              >
                <Slider
                  getAriaLabel={() => "price range"}
                  value={priceRange}
                  onChange={handleChange}
                  // valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  min={10}
                  max={1000}
                  step={5}
                  color="#222"
                />
              </Box>
              <div className="price-range-label">
                <label>Min Price: ${priceRange[0]}</label>
                <label>Max Price: ${priceRange[1]}</label>
              </div>
            </div>
          </div>
          <div className="shop-sort-box">
            <div className="card flex justify-content-center">
              <Dropdown
                value={isSortedBy}
                onChange={(e) => setIsSortedBy(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Sort by"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>
        <div className="shop-filter"></div>
        <div className="products">
          {currentProducts &&
            currentProducts.map((product) => <ProductCard product={product} />)}
        </div>
        <ReactPaginate
          className="pag-nums"
          pageClassName="pag-num"
          nextClassName="pag-next"
          previousClassName="pag-prev"
          activeClassName="active-page"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
