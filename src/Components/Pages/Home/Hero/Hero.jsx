import { Box, SearchNormal } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="lg:h-[450px] max-h-max    bg-[#0c0150] md:p-12 p-5 py-10 sm:p-10 relative">
      <section className="container between lg:flex-row flex-col gap-4  h-full">
        <div className="relative z-10 lg:w-2/3 w-full flex-center flex-col gap-4 text-white">
          {/* Hero Text */}
          <div className="md:text-[40px] text-[21px] font-bold chlild:flex flex flex-col">
            <p>
              با ایمالز
              <span className="inline-block flex-center  px-1 relative">
                محصــــــــــــــــولات
                <span className="absolute font-bold text-xs md:px-4 px-2 py-1 rounded-lg select-none bg-green-600 -rotate-[6deg]">
                  20 میلیون
                </span>
              </span>
              همه
            </p>
            <p>
              <span className="relative flex-center ">
                فروشــــــــــــــــگاه‌
                <span className="absolute font-bold text-xs md:px-4 px-2 py-1 rounded-lg select-none rotate-[7deg] bg-red-500">
                  20هزارتا
                </span>
              </span>
              ها تو مشتته!
            </p>
          </div>

          {/* Search box */}
          <div className="lg:w-[600px] md:w-[520px] w-[100%] overflow-hidden mx-auto h-[60px] bg-white relative flex items-center rounded-2xl">
            <span className="absolute z-10 right-3 text-main">
              <Box />
            </span>
            <input type="text" className="outline-none w-full h-full px-12 placeholder:text-sm placeholder:text-gray-500 text-black" placeholder="جستجوی نام, مرد یا برند کالا ..." />
            <button className="absolute bg-secondary w-10 h-10 left-2 rounded-xl shadow-xl shadow-secondary/40 flex-center">
              <SearchNormal className="text-white" size={16} variant="TwoTone"/>
            </button>
          </div>
          {/* Quick Start Links */}
          <ul className="flex items-center gap-1 text-xs sm:text-sm  text-main font-medium mt-2">
            <li>
              <Link className="sm:px-4 px-2 py-2 rounded-md bg-white">
              پیکسل
              </Link>
            </li>
            <li>
              <Link className="sm:px-4 px-2 py-2 rounded-md bg-white">
                کوله پشتی
              </Link>
            </li>
            <li>
              <Link className="sm:px-4 px-2 py-2 rounded-md  bg-white">
                جا کلیدی و جاسوییچی
              </Link>
            </li>
            <li>
              <Link className="sm:px-4 px-2 py-2 rounded-md md:visible md:block hidden invisible bg-white">
                عینک آفتابی
              </Link>
            </li>
            <li>
              <Link className="sm:px-4 px-2 py-2 rounded-md md:visible md:block hidden invisible bg-white">
                ساعت مچی آنالوگ
              </Link>
            </li>
     
          </ul>
        </div>
        <div className="relative z-10 lg:w-1/3 lg:visible lg:flex lg:justify-center lg:items-center hidden invisible text-white  ">
          <img
            src="/public/docs/images/laptop.png"
            alt="Laptop"
            width={340}
            height={340}
          />
          <img
            src="/public/docs/images/emalls-tip.png"
            className="absolute"
            alt="Emalls Tip"
          />
        </div>

        {/* White UI */}
        <div className="w-[260px!important] h-[260px!important] rounded-bl-[42px]  bg-gradient-to-b  rounded-br-xl from-transparent to-white/5 absolute top-0 right-1"></div>
        <div className="w-[260px!important] h-[260px!important] rounded-tr-[42px]  rounded-l-xl bg-gradient-to-t from-transparent to-white/5 absolute left-1 bottom-0"></div>
      </section>
    </section>
  );
}
