import React from "react";
import "./App.css";

export function History({ ui }) {
  const renderArray = [...ui];
  console.log(renderArray);

  return (
    <div>
      {renderArray.map((item) => {
        return (
          <div>
            <p className={item.amt >= 0 ? "inc" : "exp"}>
              ${Math.abs(item.amt)} - {item.history}
            </p>
          </div>
        );
      })}
    </div>
  );
}
