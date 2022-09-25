import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings, stock } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="product-name">{name}</p>
      <p>
        <small>by: {seller}</small>
      </p>
      <p>${price}</p>
      <p>
        <small>Only {stock} left in stock - order soon</small>
      </p>
    </div>
  );
};

export default Product;
