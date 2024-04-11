import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function HeroSlider() {
  return (
    <section className="lg:container sm:mt-10 min-h-[141px] lg:h-[370px] w-full">
      <Swiper
      className="h-full "
      modules={[Autoplay, Pagination]}
      autoplay={{delay: 3000}}
      pagination
      >
        <SwiperSlide>
          <img src="/public/docs/images/banners/1.jpg" className="sm:rounded-2xl object-cover w-full  h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/docs/images/banners/2.jpg" className="sm:rounded-2xl object-cover w-full  h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/docs/images/banners/3.jpg" className="sm:rounded-2xl object-cover w-full  h-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
