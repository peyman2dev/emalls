import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../Utils/API/Requests/getProduct";
import ProductContext from "../../Utils/Contexts/ProductContext";
import Header from "../../Components/Reusable/Header/Header";
import Main from "../../Components/Pages/Product/Main/Main";

export default function Product() {
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(productName).then((res) => setProduct(res.data));
    console.log(product);
  }, [productName]);
  return (
    <>
      <ProductContext.Provider
        value={{
          product,
        }}
      >
        <Header />
        <Main />
      </ProductContext.Provider>
    </>
  );
}
