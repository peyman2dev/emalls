import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";
import Review from "../../../Reusable/Review/Review";

export default function Reviews() {
  const [show, setShow] = useState(false);
  const [length, setLength] = useState(1);

  useEffect(() => {
    show
      ? setLength(product.product.expert_reviews.review_sections.length)
      : setLength(1);
  }, [show]);

  const { product } = useContext(ProductContext);
  return (
    <section className="p-5 bg-white shadow-lg  shadow-black/5 rounded-2xl">
      {
        // console.log(product.product.expert_reviews.review_sections.slice(0,3))
        _.slice(product.product.expert_reviews.review_sections, 0, length).map(
          (sect, index) => (
            <Review key={index} {...sect} />
          )
        )
      }
      <button onClick={() => setShow(!show)}>
        {show ? "کوتاه کردن" : "بیشتر بخوانید"}
      </button>
    </section>
  );
}
