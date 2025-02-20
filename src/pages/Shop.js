import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductCard } from "../components/ProductCard";
import { Dropdown } from "primereact/dropdown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Shop({ itemsPerPage, products }) {
  let sortedProducts;
  let priceSortedProducts;
  let categoryFilteredProducts;
  const [itemOffset, setItemOffset] = useState(0);
  const [priceRange, setPriceRange] = useState([10, 190]);
  const [sortedBy, setSortedBy] = useState("Default Sorting");
  const [filteredBy, setFilteredBy] = useState("All");

  //filtering products based on categories
  if (filteredBy === "All") categoryFilteredProducts = products;
  if (filteredBy === "Socks")
    categoryFilteredProducts = products.filter((p) => p.category === "socks");
  if (filteredBy === "Sweaters & Jackets")
    categoryFilteredProducts = products.filter(
      (p) => p.category === "jacket" || p.category === "sweater"
    );
  if (filteredBy === "T-shirts")
    categoryFilteredProducts = products.filter((p) => p.category === "t-shirt");
  if (filteredBy === "Pants")
    categoryFilteredProducts = products.filter((p) => p.category === "pants");

  if (filteredBy === "Hoodies")
    categoryFilteredProducts = products.filter((p) => p.category === "hoodie");

  const endOffset = itemOffset + itemsPerPage;

  //filter price range
  priceSortedProducts = categoryFilteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  //sorting products
  if (sortedBy === "Default Sorting") sortedProducts = priceSortedProducts;
  if (sortedBy === "Price, Low to High")
    sortedProducts = priceSortedProducts
      .slice()
      .sort((a, b) => a.price - b.price);
  if (sortedBy === "Price, High to Low")
    sortedProducts = priceSortedProducts
      .slice()
      .sort((a, b) => b.price - a.price);
  if (sortedBy === "Most Liked")
    sortedProducts = priceSortedProducts
      .slice()
      .sort((a, b) => b.favoritesCount - a.favoritesCount);
  if (sortedBy === "Most Discount")
    sortedProducts = priceSortedProducts
      .slice()
      .sort((a, b) => b.isDiscount - a.isDiscount);

  const currentProducts = sortedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);
  console.log(sortedProducts);
  console.log(currentProducts);

  const sortOptions = [
    "Default Sorting",
    "Best Selling",
    "Price, Low to High",
    "Price, High to Low",
    "Most Liked",
    "Most Discount",
  ];

  const categoryOptions = [
    "All",
    "Socks",
    "Hoodies",
    "Sweaters & Jackets",
    "T-shirts",
    "Pants",
  ];

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function handleCategoryFilter(e) {
    setFilteredBy(e.value);
    console.log(e.value);
  }

  const handlePriceRange = (e, newValue) => {
    e.preventDefault();
    setPriceRange(newValue);
  };

  function handleSort(e) {
    setSortedBy(e.value);
  }

  return (
    <div className="shop-route section-width">
      <div className="shop-container ">
        <div className="shop-filter-container">
          <div className="shop-filter-box">
            <div className="shop-filter-category">
              {" "}
              <Dropdown
                value={filteredBy}
                onChange={handleCategoryFilter}
                options={categoryOptions}
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
                  onChange={handlePriceRange}
                  // valueLabelDisplay="on"
                  min={1}
                  max={200}
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
                value={sortedBy}
                onChange={handleSort}
                options={sortOptions}
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
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
