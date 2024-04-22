import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../Utils/API/Requests/getProduct";
import ProductContext from "../../Utils/Contexts/ProductContext";
import Header from "../../Components/Reusable/Header/Header";
import Main from "../../Components/Pages/Product/Main/Main";
import Loading from "../../Components/Reusable/Loading/Loading";

export default function Product() {
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(productName)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      });
  }, [productName]);

  return (
    <>
      <ProductContext.Provider
        value={{
          product,
        }}
      >
        <Header />
        {isLoading ? <Loading /> : <Main />}
      </ProductContext.Provider>
    </>
  );
}
