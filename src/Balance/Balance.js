import React from "react";

export function Balance({ bal }) {
  let sum = 0;
  bal.forEach((item) => {
    sum += item.amt;
  });
  return (
    <div>
      <h1>Balance:</h1>
      <p>{sum < 0 ? `-$${Math.abs(sum)}` : `$${sum}`}</p>
    </div>
  );
}
