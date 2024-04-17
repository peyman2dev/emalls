import _ from "lodash";
import React from "react";

export default function Attributes({ Attributes }) {
  return (
    <section className="grid lg:grid-cols-3 grid-flow-row w-[98%] items-center gap-5">
      {_.map(Attributes, (Atr) => (
        <div className="flex flex-col  items-start py-2 w-full text-start px-5 rounded-lg  bg-gray-100/30 ">
          <p className="text-xs font-normal text-zinc-400">{Atr.title} :</p>
          <div>
            {_.map(Atr.values, (opt) => (
              <span className="text-sm  whites">{opt}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
