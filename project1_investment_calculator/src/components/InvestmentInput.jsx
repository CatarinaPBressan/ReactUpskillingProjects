import { useState } from "react";

export default function InvestmentInput({
  inputId,
  label,
  defaultValue,
  decimal = false,
  onChange,
  ...inputProps
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <p>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="number"
        step={decimal ? "0.1" : "1"}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          onChange(inputId, value);
        }}
        {...inputProps}
      />
    </p>
  );
}
