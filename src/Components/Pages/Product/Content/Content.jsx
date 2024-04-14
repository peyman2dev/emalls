import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import _ from "lodash";

export default function Content() {
  const { product } = useContext(ProductContext);
  const [swiper, setSwiper] = useState([]);

  useEffect(() => {
    // console.log(product.product.images.list);
    // console.log(product.product.images)
  }, [product]);

  const slideTo = (index) => console.log(index);
  return (
    <section className="flex w-full child:bg-white child:p-5 gap-5 child:rounded-xl child:shadow-xl child:shadow-black/5">
      <section className="w-full flex gap-10 p-10">
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
          <div className="flex items-center gap-1 justify-center">1</div>
        </div>
        <div>
          <h3 className="text-lg w-4/5 tracking-tight  font-bold">
            {product && product.product && product.seo.title}
          </h3>
        </div>
      </section>
      <Sidebar />
    </section>
  );
}
