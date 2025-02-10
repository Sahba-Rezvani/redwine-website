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
