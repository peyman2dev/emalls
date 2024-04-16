import React, { useContext, useEffect, useRef, useState } from "react";
import Content from "../Content/Content";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Comments from "../Comments/Comments";
import Details from "../Details/Details";

export default function Main() {
  const { product } = useContext(ProductContext);
  const [target, setTarget] = useState({});
  const [breads, setBreads] = useState([]);
  const [width, setWidth] = useState(0);
  const breadRef = useRef();

  useEffect(() => {
    if (product && product.product) {
      let basicBreads = _.find(product.product.breadcrumb, (bread) => {
        if (String(bread.url.uri).includes("/product/")) {
          setTarget(bread);
        } else {
          setBreads((prev) => [...prev, bread]);
        }
      });
    }

    if (breadRef.current) {
      setWidth(breadRef.current.offsetWidth - breadRef.current.scrollWidth);
    }
  }, [product, breadRef]);

  return (
    <main className="my-20  w-[94%] md:w-full space-y-5  container">
      {product && product.product && breads ? (
        <>
          <motion.section
            className="carousel"
            drag="x"
            ref={breadRef}
            dragConstraints={{ left: 0, right: -width }}
          >
            <motion.div className="inner-carousel">
              <div className="ic gap-4 px-3">
                {_.slice(breads, 1, 5).map((bread) => (
                  <span
                    className="bg-white px-3 h-8  ic relative before:absolute before:content-[' ']  
              before:w-0 before:h-0  before:right-full
             before:border-t-[16px] before:border-t-transparent
             before:border-r-[12px] before:border-r-white rounded-r-xl
             before:border-b-[16px] before:border-b-transparent
          text-sm font-medium tracking-tight min-w-max
          select-none
              "
                  >
                    {bread.title}
                  </span>
                ))}
                <Link
                  to={`/product/${product.product.id}`}
                  className="px-4 text-sm h-8 ic min-w-max rounded-lg bg-sky-600 text-white"
                >
                  {target.title}
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </>
      ) : (
        ""
      )}
      <Content />
      <Details />
      <Comments />
    </main>
  );
}
