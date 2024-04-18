import _ from "lodash";
import React, { useContext, useEffect } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import { Check } from "iconsax-react";
import { FaCheck } from "react-icons/fa6";
export default function Colors({ colors }) {
  const { color, setColor } = useContext(ProductContext);

  return (
    <section className="my-3 ic gap-2">
      {_.map(colors, (_color, index) => (
          <div
            key={index}
            className={`relative select-none rounded-full w-8 h-8 flex-center ${
              color === _color.id ? "border-4 border-sky-500" : " border"
            }`}
            onClick={() => setColor(_color.id)}
          >
            <button
              className="w-[21px!important] h-[21px!important] border rounded-full"
              style={{ backgroundColor: _color.hex_code }}
            ></button>
            {_color.id === color && (
              <span className="absolute w-full cursor-pointer h-full flex-center text-white">
                <FaCheck />
              </span>
            )}
          </div>
      ))}
    </section>
  );
}
