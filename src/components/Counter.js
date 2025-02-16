export function Counter({ updateQuantity, productId, count, setCount }) {
  const increaseQuantity = () => {
    setCount((c) => c + 1);
    updateQuantity(productId, count);
  };
  const decreaseQuantity = () => {
    setCount((c) => (c > 1 ? c - 1 : 1));
    updateQuantity(productId, count);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setCount(value);
    updateQuantity(productId, value);
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
