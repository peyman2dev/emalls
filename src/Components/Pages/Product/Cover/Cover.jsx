import React from "react";

export default function Cover({ cover }) {
  // product && product.product
  // ? product.product.images.main.url[0]
  // : ""
  return (
    <>
      <div className="flex min-w-[25%] flex-col gap-5">
        <div className="max-w-[300px]">
          <img src={cover} className="max-w-[320px] " alt="" />
        </div>
      </div>
      <div className="w-px h-full bg-black/5"></div>
    </>
  );
}
