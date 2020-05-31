import React from "react";

export function Balance({ bal }) {
  const reducerFn = (accumulator, { amt }) => {
    let [sum, inc, exp] = accumulator;

    sum = sum + amt;
    amt >= 0 && (inc += amt);
    amt < 0 && (exp += amt);

    return [sum, inc, exp];
  };

  const [sum, inc, exp] = bal.reduce(reducerFn, [0, 0, 0]);

  return (
    <div>
      <h1>Balance:</h1>
      <p>{sum < 0 ? `-$${Math.abs(sum)}` : `$${sum}`}</p>
      <h1>Income:</h1>
      <p>${inc}</p>
      <h1>Expense:</h1>
      <p>{exp !== 0 ? `-$${exp}` : "$0"}</p>
    </div>
  );
}
