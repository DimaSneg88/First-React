import React from "react";
import Product from "./Product";

export default function Products({ products }) {
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((elem, index) => (
          <Product elem={elem} key={index} />
        ))}
      </div>
    </div>
  );
}
