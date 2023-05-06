import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/action/productActions";
import "./ProductDetails.css";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchproductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(res.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchproductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const { title, image, price, category, description } = product;

  return (
    <div>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="card">
            <div className="card-header">
              <div className="card-image">
                <img src={image} alt={title} />
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1 className="card-title">{title}</h1>
                <h3 className="card-category">{category}</h3>
                <p className="card-description">{description}</p>
                <div className="card-footer">
                  <span className="card-price">${price}</span>
                  <button className="card-button">
                    <a className="cancel" href="/">
                      Back
                    </a>
                  </button>
                  <button className="card-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
