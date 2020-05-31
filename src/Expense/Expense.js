import React from "react";

export function Expense({ exp }) {
  let sum = 0;
  exp.forEach((item) => {
    if (item.amt < 0) {
      sum += Math.abs(item.amt);
    }
  });

  return (
    <div>
      <h1>Expense:</h1>
      <p>{sum !== 0 ? `-$${sum}` : "$0"}</p>
    </div>
  );
}
