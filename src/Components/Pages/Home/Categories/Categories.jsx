import React from "react";
import  {Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Categories() {
  return (
    <section className="flex mt-10 container items-center gap-4">
      <Swiper
      >
        {/* Slide */}
        <SwiperSlide>
          <article>1</article>
        </SwiperSlide>
        {/* Slide */}
        <SwiperSlide>
          <article>1</article>
        </SwiperSlide>{" "}
        {/* Slide */}
        <SwiperSlide>
          <article>1</article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
