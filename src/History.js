import React from "react";

export function History({ ui }) {
  const { inc, exp } = ui;
  const renderArray = [...inc, ...exp];
  console.log(renderArray);

  const dummy = [...renderArray];

  return (
    <div>
      {dummy.map((item) => {
        return (
          <p>
            {item.amt} - {item.history}
          </p>
        );
      })}
    </div>
  );
}
