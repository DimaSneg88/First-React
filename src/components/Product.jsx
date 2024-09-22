import React from "react";

export default function Product({ elem }) {
  return (
    <div className="product">
      <h3>{elem.name}</h3>
      <p>{elem.price}</p>
    </div>
  );
}
