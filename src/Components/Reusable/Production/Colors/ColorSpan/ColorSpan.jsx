import React from "react";

export default function ColorSpan({ colorCode, title }) {
  return (
    <div
      className="w-4 h-4 rounded-full border"
      style={{ backgroundColor: colorCode }}
      title={title}
      
    ></div>
  );
}
