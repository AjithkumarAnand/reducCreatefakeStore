import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { setProducts } from "../redux/action/productActions";
import ProductComponent from "./ProductComponent/ProductComponent";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    const res = await axios
      .get("https:fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  console.log("Products", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}
