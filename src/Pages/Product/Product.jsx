import React, { useEffect, useState } from "react";
import Header from "../../Components/Reusable/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import _, { find } from "lodash";
import Main from "../../Components/Pages/Product/Main/Main";
import Footer from "../../Components/Reusable/Footer/Footer";
import ProductContext from "../../Utils/Contexts/ProductContext";

export default function Product() {
  const { products } = useSelector((state) => state.client);
  const { productName } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const _productName = productName.split("-").join(" ");
    const findProduct = _.find(products, (_product) =>
      _.find(_product.products, (theProduct) => {
        return theProduct.title === _productName;
      })
    );
    if (findProduct) {
      const getTargetProduct = _.filter(findProduct.products, (_product) => {
        return _product.title === _productName;
      });
      setProduct(getTargetProduct[0]);
    } else {
      setProduct(null);
    }
  }, [products, productName]);

  return (
    <>
      <ProductContext.Provider
        value={{
          product,
        }}
      >
        <Header />
        <Main />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}
