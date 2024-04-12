import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Brush3,
  Car,
  Devices,
  EmojiHappy,
  GasStation,
  Mobile,
  PenTool,
  Smileys,
} from "iconsax-react";
import "swiper/css";

export default function Categories() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  return (
    <section className="w-full container mt-10">
      <motion.div
        ref={carousel}
        className="carousel w-full overflow-hidden  sm:p-8"
      >
        <motion.div
          className="inner-carousel child:max-h-[106px] child:min-w-[85px!important] flex gap-3 child:flex child:gap-2 child:items-center child:flex-col "
          drag="x"
          dragConstraints={{ left: 0, right: width }}
        >
          <div className="">
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#ffab5d23]">
              <svg
                viewBox="-2.4 -2.4 28.80 28.80"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffaa5d"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 22V21"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M18 22V21"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V10Z"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                  ></path>{" "}
                  <path
                    d="M3 9H21"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                  ></path>{" "}
                  <path
                    d="M6.5 5.5H9.5"
                    stroke="#ffaa5d"
                    strokeWidth="1.272"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M15.5 5.5C15.5 6.05228 15.0523 6.5 14.5 6.5C13.9477 6.5 13.5 6.05228 13.5 5.5C13.5 4.94772 13.9477 4.5 14.5 4.5C15.0523 4.5 15.5 4.94772 15.5 5.5Z"
                    fill="#ffaa5d"
                  ></path>{" "}
                  <path
                    d="M18.5 5.5C18.5 6.05228 18.0523 6.5 17.5 6.5C16.9477 6.5 16.5 6.05228 16.5 5.5C16.5 4.94772 16.9477 4.5 17.5 4.5C18.0523 4.5 18.5 4.94772 18.5 5.5Z"
                    fill="#ffaa5d"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              لوازم خانگی
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#47d3b238] text-[#47d3b2]">
              <svg
                className="w-8 h-8"
                viewBox="0 0 15 15"
                version="1.1"
                id="doctor"
                xmlns="http://www.w3.org/2000/svg"
                fill="#47d3b2"
                stroke="#47d3b2"
                strokeWidth="0.00015000000000000001"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.12"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.5,7C4.1193,7,3,5.8807,3,4.5l0,0v-2C3,2.2239,3.2239,2,3.5,2H4c0.2761,0,0.5-0.2239,0.5-0.5S4.2761,1,4,1H3.5
	C2.6716,1,2,1.6716,2,2.5v2c0.0013,1.1466,0.5658,2.2195,1.51,2.87l0,0C4.4131,8.1662,4.9514,9.297,5,10.5C5,12.433,6.567,14,8.5,14
	s3.5-1.567,3.5-3.5V9.93c1.0695-0.2761,1.7126-1.367,1.4365-2.4365C13.1603,6.424,12.0695,5.7809,11,6.057
	C9.9305,6.3332,9.2874,7.424,9.5635,8.4935C9.7454,9.198,10.2955,9.7481,11,9.93v0.57c0,1.3807-1.1193,2.5-2.5,2.5S6,11.8807,6,10.5
	c0.0511-1.2045,0.5932-2.3356,1.5-3.13l0,0C8.4404,6.7172,9.001,5.6448,9,4.5v-2C9,1.6716,8.3284,1,7.5,1H7
	C6.7239,1,6.5,1.2239,6.5,1.5S6.7239,2,7,2h0.5C7.7761,2,8,2.2239,8,2.5v2l0,0C8,5.8807,6.8807,7,5.5,7 M11.5,9
	c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.0523,9,11.5,9z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              پزشکی و سلامت
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#8000ff19]">
              <EmojiHappy size="32" color="#8000ff" />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              ورزش و سرگرمی
            </div>
          </div>
          <div>
            <div className="max-w-[55px] min-w-[55px] max-h-[55px] min-h-[55px] rounded-2xl flex-center bg-[#ff615620]">
              <Car color="#ff6056" variant="Linear" />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              لوازم خودرو و موتور سیکلت
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#4f79a925] text-[#4f79a9]">
              <GasStation />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              ابزار
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#327acc25] text-[#6798d1]">
              <Brush3 />
            </div>{" "}
            <div className="text-center font-medium text-xs text-zinc-800">
              دکوراسیون خانه
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#035bff28] text-[#035cff]">
              <Devices />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              لپ تاپ و کامپیوتر
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#860dff1b]">
              <svg
                fill="#860dff"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#860dff"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M10,10a1,1,0,1,0-1,1A1,1,0,0,0,10,10Zm4.5,4.06a1,1,0,0,0-1.37.36,1.3,1.3,0,0,1-2.26,0,1,1,0,0,0-1.37-.36,1,1,0,0,0-.37,1.36,3.31,3.31,0,0,0,5.74,0A1,1,0,0,0,14.5,14.06ZM15,9a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,9,4.57,3,3,0,0,0,9,5a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1,0-2,8,8,0,0,1,0,16Z"></path>
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              مادر و کودک
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#ff567521] text-[#ff5674]">
              <svg
                viewBox="0 0 48 48"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect fill="white" fillOpacity="0.01"></rect>{" "}
                  <path
                    d="M37 17V37M11 37V44H37V37M11 37H4V17C4 14 6 10.5 9 8C12 5.5 18 4 18 4H30C30 4 36 5.5 39 8C42 10.5 44 14 44 17V37H37M11 37V17"
                    stroke="#ff5674"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"
                    stroke="#ff5674"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              مد و پوشاک
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#ff9d412a]">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18.512 9.60361C16.5667 8.57956 14.3509 8 11.9998 8C9.64864 8 7.43288 8.57956 5.48755 9.60362M9.99977 11H10.0098M12.9998 14H13.0098M11.9998 21L3.56396 6.23735C6.04988 4.81376 8.92979 4 11.9998 4C15.0697 4 17.9497 4.81376 20.4356 6.23735L11.9998 21Z"
                    stroke="#ff9c41"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              خوراکی ها
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#0d62ff34]">
              <svg
                fill="#0d62ff"
                className="w-8 h-8"
                viewBox="-1.5 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M4.086 7.9a1.91 1.91 0 0 1-.763 2.52c-.81.285-1.782-.384-2.17-1.492a1.91 1.91 0 0 1 .762-2.521c.81-.285 1.782.384 2.171 1.492zm6.521 7.878a2.683 2.683 0 0 1-1.903-.788.996.996 0 0 0-1.408 0 2.692 2.692 0 0 1-3.807-3.807 6.377 6.377 0 0 1 9.022 0 2.692 2.692 0 0 1-1.904 4.595zM7.73 6.057c.127 1.337-.563 2.496-1.54 2.588-.977.092-1.872-.917-1.998-2.254-.127-1.336.563-2.495 1.54-2.587.977-.093 1.871.916 1.998 2.253zm.54 0c-.127 1.337.563 2.496 1.54 2.588.977.092 1.871-.917 1.998-2.254.127-1.336-.563-2.495-1.54-2.587-.977-.093-1.872.916-1.998 2.253zm3.644 1.842a1.91 1.91 0 0 0 .763 2.522c.81.284 1.782-.385 2.17-1.493a1.91 1.91 0 0 0-.762-2.521c-.81-.285-1.782.384-2.171 1.492z"></path>
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              پت شاپ
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#5fd8bc26]">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1 22H23"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.7803 22.0098V17.5498"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M19.7996 10.8901C18.5796 10.8901 17.5996 11.8701 17.5996 13.0901V15.3601C17.5996 16.5801 18.5796 17.5601 19.7996 17.5601C21.0196 17.5601 21.9996 16.5801 21.9996 15.3601V13.0901C21.9996 11.8701 21.0196 10.8901 19.7996 10.8901Z"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M2.09961 21.9998V6.02979C2.09961 4.01979 3.09966 3.00977 5.08966 3.00977H11.3196C13.3096 3.00977 14.2996 4.01979 14.2996 6.02979V21.9998"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M5.7998 8.25H10.7498"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M5.7998 12H10.7498"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M8.25 22V18.25"
                    stroke="#5fd8bc"
                    strokeWidth="1.500"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              ساختمان و فضای عمومی
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#5fd8bc36] flex items-center justify-center text-[#52bea4]">
              <Mobile className="flex-center" />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              گوشی موبایل و تبلت
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#0d62ff23] text-[#0D62FF]">
              <PenTool />
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              فرهنگ و هنر
            </div>
          </div>
          <div>
            <div className="max-w-[55px] w-[55px] max-h-[55px] h-[55px] rounded-2xl flex-center bg-[#0d62ff23] font-black text-[#0D62FF]">
              ...
            </div>
            <div className="text-center font-medium text-xs text-zinc-800">
              بیشتر
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
