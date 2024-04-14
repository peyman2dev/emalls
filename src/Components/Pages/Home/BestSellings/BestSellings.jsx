import { Shop } from "iconsax-react";
import _ from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../Reusable/ProductCard/ProductCard";

export default function BestSellings() {
  const { bestSellings } = useSelector((state) => state.client);
  useEffect(() => {
    console.log(bestSellings.title ? true : false);
  }, [bestSellings]);

  return (
    <section className="container my-20">
      <header className="between">
        <div className="flex items-center gap-2">
          <span className="text-xl text-secondary">
            <Shop />
          </span>
          <span className="font-bold text-xl">{bestSellings.title}</span>
        </div>
      </header>
      <main className="my-10 grid lg:grid-cols-4 gap-5 md:grid-cols-3 justify-center items-center  sm:grid-cols-2 grid-cols-1">
        {bestSellings && bestSellings.title
          ? _.map(bestSellings.products.slice(0, 8), (product) => (
              <ProductCard key={product.id} {...product} />
            ))
          : "Loading data .."}
      </main>
    </section>
  );
}
