import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h2>This is shop: {products.length}</h2>
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Shop;
