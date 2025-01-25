export default function FloatingInput({
  inputClassName,
  labelClassName,
  type,
  children,
  id,
}) {
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
