import React from "react";

export function DescriptionInput({ eventHandler, placeholder, value }) {
  return (
    <input
      style={{
        background: "#a4def9",
        border: "none",
        padding: "0.5rem 0.5rem",
        fontSize: "1.8rem",
      }}
      onChange={eventHandler}
      placeholder={placeholder}
      value={value}
    />
  );
}
