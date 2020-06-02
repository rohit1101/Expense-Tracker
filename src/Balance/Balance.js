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
    <div className="content">
      <h1 className="item">Current Balance</h1>
      <p className="item-content">
        {sum < 0 ? `-$${Math.abs(sum)}` : `$${sum}`}
      </p>

      <div className="flexed">
        <div>
          <h1 className="item">INCOME</h1>
          <p
            className="item-content"
            style={{ color: "#7bc043", padding: "1rem 0" }}
          >
            ${inc}
          </p>
        </div>
        <div style={{ border: "2px solid", color: "black" }}></div>
        <div>
          <h1 className="item">EXPENSE</h1>
          <p
            className="item-content"
            style={{ color: "#fe4a49", padding: "1rem 0" }}
          >
            {exp !== 0 ? `-$${Math.abs(exp)}` : "$0"}
          </p>
        </div>
      </div>
    </div>
  );
}
