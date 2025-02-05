import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductCard } from "../components/ProductCard";

export default function Shop({ itemsPerPage, products }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="shop-route section-width">
      <div className="shop-container ">
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
