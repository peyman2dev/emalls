import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PriceList() {
  const { prices } = useSelector((state) => state.client);
  return (
    <section className="container flex-wrap child:duration-150 child-hover:scale-105 child-hover:shadow-lg flex items-center justify-center gap-4 child:px-3 child:py-1.5 child:border child:rounded-lg ">
      {prices && prices.length ? _.map(prices, (price, index) => (
        <Link key={index} to={price.url}>
        {price.title}
        </Link>
      )) : ""}
    </section>
  );
}
