import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductCard } from "../components/ProductCard";

export default function WishList({ itemsPerPage, products }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="shop-container section-width">
      <div className="wishlist_title">
        <h1>WISH LIST</h1>
      </div>
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
  );
}
