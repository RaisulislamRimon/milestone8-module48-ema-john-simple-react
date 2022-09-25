import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, seller, price, ratings, stock } = props.product;
  // const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product.name)}
        className="btn-cart"
      >
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
