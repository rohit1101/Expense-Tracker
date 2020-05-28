import React from "react";

export function AmountInput({ eventHandler, placeholder, value }) {
  return (
    <input
      onChange={eventHandler}
      placeholder={placeholder}
      value={value}
      type="number"
    />
  );
}
