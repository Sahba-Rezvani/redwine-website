export default function FloatingInput({
  inputClassName,
  labelClassName,
  type,
  children,
  id,
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <input
        type={type || "text"}
        className={inputClassName}
        id={id}
        required
        value={value}
        onChange={onChange} 
      />
      <label for={id} className={labelClassName}>
        {children}
      </label>
    </div>
  );
}
