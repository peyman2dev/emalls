import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import _ from "lodash";
import Attributes from "../Attributes/Attributes";
import Badges from "../Badges/Badges";

export default function Content() {
  const { product } = useContext(ProductContext);
  const [swiper, setSwiper] = useState([]);
  const { attributes } =
    product && product.product && product.product.review
      ? product.product.review
      : "";

  useEffect(() => {}, [product]);

  return (
    <section className="flex w-full child:bg-white child:p-5 gap-5 child:rounded-xl flex-col lg:flex-row child:shadow-xl child:shadow-black/5">
      <section className="w-full flex flex-col lg:flex-row gap-10 p-10">
        <div className="flex min-w-[25%] flex-col gap-5">
          <div className="max-w-[300px]">
            <img
              src={
                product && product.product
                  ? product.product.images.main.url[0]
                  : ""
              }
              className="max-w-[320px] "
              alt=""
            />
          </div>
        </div>
        <div className="w-px h-full bg-black/5"></div>
        <div className="flex flex-col justify-between">
          <section>
            <div>
              <h3 className="text-xl  tracking-tight ">
                {product && product.product && product.seo.title}
              </h3>
              <h4 className="text-sm mt-2 text-zinc-300  tracking-tight ">
                {product && product.product && product.product.title_en}
              </h4>
            </div>
            <div className="mt-1">
              <Badges  badges={product && product.product ? product.product.badges : null}/>
            </div>
          </section>
          <div className="between">
            <Attributes Attributes={attributes ? attributes : null} />
          </div>
        </div>
      </section>
    </section>
  );
}
