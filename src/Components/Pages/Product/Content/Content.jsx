import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";
import Attributes from "../Attributes/Attributes";
import Badges from "../Badges/Badges";
import Cover from "../Cover/Cover";
import Title from "../Title/Title";
import Colors from "../Colors/Colors";

export default function Content() {
  const { product } = useContext(ProductContext);
  const { attributes } = product.product.review;


  return (
    <section className="flex w-full child:bg-white child:p-5 gap-5 child:rounded-xl flex-col lg:flex-row child:shadow-xl child:shadow-black/5">
      <section className="w-full flex flex-col lg:flex-row gap-10 p-10">
        <Cover cover={product.product.images.main.url[0]} />
        <div className="flex flex-col justify-between">
          {/* Content */}
          <section>
            <Title title={product.seo.title} EN={product.product.title_en} />
            <Badges badges={product.product.badges} />
            <Colors colors={product.product.colors} />
          </section>

          {/* Attributes */}
          <Attributes Attributes={attributes ? attributes : null} />
        </div>
      </section>
    </section>
  );
}
