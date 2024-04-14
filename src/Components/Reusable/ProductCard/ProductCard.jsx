import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const price = parseFloat(props.default_variant.price.selling_price);
  const _price = price.toString().slice(0, (price.toString().length - 1))

  return (
    <article className="product-card">
      {/* Product Header */}
      <header>
        <Link to={`/product/${props.id}`}>
          <img
            title={props.title_fa}
            src={props.images.main.url[0]}
            alt={props.title_fa}
          />
        </Link>
      </header>
      <main>
        <Link to={`/product/${props.id}`}>
          <h3
            title={props.title_en || props.title_fa}
            className="product-title tracking-tight"
          >
            {props.title_fa}
          </h3>
        </Link>
      </main>
      <footer className={`between py-3 ${props.default_variant.price.is_incredible ? "" : "my-3"}`}>
        <span
          className={
            props.default_variant.price.discount_percent ? "price-discount" : ""
          }
        >
          {props.default_variant.price.discount_percent
            ? props.default_variant.price.discount_percent + "%"
            : ""}
        </span>
        <div>
          {props.default_variant.price.is_incredible ? (
            <div className="">
              <div className="ic gap-1">
                <span className="font-price text-lg font-bold ">
                  {Number(_price).toLocaleString()}
                </span>
                <span>
                  <img src="/public/docs/svgs/toman.svg" alt="price" />
                </span>
              </div>
              <div className="text-zinc-400 font-thin text-sm line-through">
                <span className="font-price">
                  {props.default_variant.price.rrp_price.toLocaleString()}
                </span>
              </div>
            </div>
          ) : (
            <div className="font-price ic font-bold text-lg gap-1">
              <span>{Number(_price).toLocaleString()}</span>
              <span>
                <img src="/public/docs/svgs/toman.svg" alt="price" />
              </span>
            </div>
          )}
        </div>
      </footer>
    </article>
  );
}

// synthwave: 1. Hotel Pools - Limits
