import React from "react";
import { useSelector } from "react-redux";
import "./ProductComponet.css";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    console.log(products);
    return (
      <div>
        <Link to={`/product/${id}`}>
          <div className="card" key={id}>
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta ">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="card-row">{renderList}</div>;
}
