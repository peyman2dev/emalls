import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../Utils/API/Requests/getProduct";
import ProductContext from "../../Utils/Contexts/ProductContext";
import Header from "../../Components/Reusable/Header/Header";
import Main from "../../Components/Pages/Product/Main/Main";
import Loading from "../../Components/Reusable/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProductInfoFromClient } from "../../Utils/Redux/Ducks/Ducks";

export default function Product() {
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.client);
  const { productName } = useParams();

  useEffect(() => {
    dispatch(getProductInfoFromClient({ productID: productName }));
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
