import React from "react";
import "./App.css";
import { Item } from "./HistoryItem";

export function History({ ui, del, edit }) {
  const renderArray = [...ui];
  console.log(renderArray);
  let i = 0;
  return (
    <div>
      {renderArray.map((item) => {
        return <Item key={i++} item={item} del={del} edit={edit} />;
      })}
    </div>
  );
}
