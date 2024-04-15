import React from "react";

export default function Cover({ img, alt }) {
  return (
    <div className="w-full h-full flex-center">
      <img
        src={img}
        className="w-[90%] mx-auto rounded-sm"
        alt={alt}
      />
    </div>
  );
}
