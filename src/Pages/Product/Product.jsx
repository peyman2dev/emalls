import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../Utils/API/Requests/getProduct";
import ProductContext from "../../Utils/Contexts/ProductContext";
import Header from "../../Components/Reusable/Header/Header";
import Main from "../../Components/Pages/Product/Main/Main";
import Loading from "../../Components/Reusable/Loading/Loading";

export default function Product() {
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(1);
  const setMainColor = (color) => {};
  useEffect(() => {
    getProduct(productName).then((res) => {
      setProduct(res.data);

    });
  }, [productName, product]);

  return (
    <>
      <ProductContext.Provider
        value={{
          product,
          color: selectedColor,
          setColor: setSelectedColor,
        }}
      >
        <Header />
        {product && product.product ? <Main /> : <Loading />}
      </ProductContext.Provider>
    </>
  );
}
