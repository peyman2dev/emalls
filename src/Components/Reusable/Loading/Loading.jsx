import { Refresh2 } from "iconsax-react";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-black/30 backdrop-blur-sm flex-center">
      <div className="w-[340px] p-8 rounded-2xl shadow-2xl bg-white flex flex-col justify-center items-center gap-3">
        <p className="text-xl text-zinc-500 font-price">منتظر بمانید</p>

        <div className="w-10 h-10 rounded-full  border-2 border-l-sky-600 animate-spin"></div>
      </div>
    </div>
  );
}
