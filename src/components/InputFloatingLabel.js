import { useState } from "react";

export default function FloatingInput({
  inputClassName,
  labelClassName,
  type,
  children,
  id,
  value,
  onChange,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-group">
      <input
        type={type || "text"}
        className={inputClassName}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        id={id}
        required
        value={value}
        onChange={onChange}
      />
      <label
        for={id}
        className={`login-label ${
          isFocused || value ? "login-input-active" : ""
        }`}
      >
        {children}
      </label>
    </div>
  );
}
