import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props);
  return (
    <article className="product-card">
      {/* Product Header */}
      <header>
        <Link to={props.url.uri}>
          <img
            title={props.title_fa}
            src={props.images.main.url[0]}
            alt={props.title_fa}
          />
        </Link>
      </header>
      <section className="product-content">
        <main>
          <Link to={props.url.uri}>
            <h3
              title={props.title_en || props.title_fa}
              className="product-title"
            >
              {props.title_fa}
            </h3>
          </Link>
        </main>
        <footer className="between py-3">
          <span
            className={
              props.default_variant.price.discount_percent
                ? "price-discount"
                : ""
            }
          >
            {props.default_variant.price.discount_percent
              ? props.default_variant.price.discount_percent + "%"
              : ""}
          </span>
          <div>
            <span className="font-price"></span>
            <span>
              <img
                src="/public/docs/svgs/toman.svg"
                alt="price"
                className="w-4"
              />
            </span>
          </div>
        </footer>
      </section>
    </article>
  );
}

// synthwave: 1. Hotel Pools - Limits
