import _ from "lodash";
import React, { useContext } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import { Check } from "iconsax-react";

export default function Colors({ colors }) {
  const { color, setColor } = useContext(ProductContext);

  return (
    <section className="my-3 ic gap-2">
      {_.map(colors, (_color, index) => (
        <div key={index} className="relative border rounded-full w-8 h-8 flex-center">
          <button
            className="w-[24px!important] h-[24px!important] border rounded-full"
            style={{ backgroundColor: _color.hex_code }}
          ></button>
          {_color.id === color &&
          <span className="absolute w-full h-full flex-center text-white">
            {/* <Check /> */}1
          </span>
          }
        </div>
      ))}
    </section>
  );
}
