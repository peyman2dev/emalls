import React, { useEffect } from "react";
import Header from "../../Components/Reusable/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFromClient } from "../../Utils/Redux/Ducks/Ducks";
import _ from "lodash";
import ProductCard from "../../Components/Reusable/ProductCard/ProductCard";

export default function Search() {
  const { search } = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    dispatch(searchFromClient({ query }));
  }, [query]);

  return (
    <>
      <Header />
      <main className="my-[100px] container grid lg:grid-cols-4  gap-5">
        {search && search.products
          ? _.map(search.products, (product) => (
              <ProductCard {...product} key={product.id} />
            ))
          : "Loading ..."}
      </main>
    </>
  );
}
