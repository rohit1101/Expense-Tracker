import React from "react";

export function Income({ inc }) {
  let sum = 0;
  inc.forEach((item) => {
    if (item.amt >= 0) {
      sum += item.amt;
    }
  });

  return (
    <div>
      <h1>Income:</h1>
      <p>${sum}</p>
    </div>
  );
}
