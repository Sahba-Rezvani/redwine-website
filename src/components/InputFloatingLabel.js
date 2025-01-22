export default function FloatingInput(
  inputClassName,
  labelClassName,
  type,
  placeholder,
  id,
  children
) {
  return (
    <div className="form-group">
      <input
        type={type || "text"}
        className={inputClassName}
        id={id}
        required
      />
      <label for={id} className={labelClassName}>
        {children}
      </label>
    </div>
  );
}
