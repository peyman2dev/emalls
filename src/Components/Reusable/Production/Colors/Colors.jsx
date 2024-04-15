import React from "react";
import ColorSpan from "./ColorSpan/ColorSpan";
import _ from "lodash";

export default function Colors({ colors }) {
  return (
    <div className="absolute flex-col z-10 left-0  flex items-center gap-1  ">
      {colors
        ? _.slice(colors, 0, 3).map((color) => (
            <ColorSpan
              title={color.title}
              key={color.id}
              colorCode={color.hex_code}
            />
          ))
        : false}
    </div>
  );
}
