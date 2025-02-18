export function Counter({
  updateQuantity,
  selectedProduct,
  count,
  setCount,
  forTest,
  selectedColor,
  selectedSize,
}) {
  const increaseQuantity = () => {
    setCount((c) => c + 1);
    forTest(selectedProduct, count, selectedColor, selectedSize);
    // updateQuantity(productId, count);
  };
  const decreaseQuantity = () => {
    setCount((c) => (c > 2 ? c - 1 : 1));
    forTest(selectedProduct, count, selectedColor, selectedSize);
    // updateQuantity(productId, count);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || count;
    setCount(Number(value));
    forTest(selectedProduct, count, selectedColor, selectedSize);
    // updateQuantity(productId, value);
  };
  return (
    <div className="counter-container">
      <button onClick={decreaseQuantity} type="button">
        -
      </button>
      <input type="text" value={count} onChange={handleChange} />
      <button onClick={increaseQuantity} type="button">
        +
      </button>
    </div>
  );
}
