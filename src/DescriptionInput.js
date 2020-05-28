import React from "react";

export function DescriptionInput({ eventHandler, placeholder, value }) {
  return (
    <input onChange={eventHandler} placeholder={placeholder} value={value} />
  );
}
