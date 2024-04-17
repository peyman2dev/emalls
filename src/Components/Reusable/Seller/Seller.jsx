import { Shop, Verify } from "iconsax-react";
import _ from "lodash";
import React from "react";

export default function Seller(props) {
  const Grade = (
    <span
      className={`px-1`}
      style={{
        color:
          props && props.seller && props.seller.grade
            ? props.seller.grade.color
            : "",
      }}
    >
      {props.seller.grade.label}
    </span>
  );
  console.log(props);
  return (
    <article className="px-8 odd:bg-gray-100/50  child:flex child:items-center child:gap-14 between rounded-lg min-h-[120px]">
      <section>
        <span className="text-zinc-900 relative">
          <Shop size={24} className="text-zinc-600" />
          {props.seller.properties.is_trusted ? (
            <Verify
              className="absolute text-green-600 w-6 -bottom-3 -left-2"
              variant="Bold"
            />
          ) : (
            ""
          )}
        </span>
        <div className="space-y-4">
          <div className=" gap-3 lg:min-w-[120px]">
            <div className="ic gap-2">
              <p>{props.seller.title}</p>
            </div>
            <p className="text-xs mt-2 text-zinc-400 ">
              <span>عملکرد</span>
              {Grade}
            </p>
          </div>
        </div>
        <div>
          {props && props && props.shipment_methods
            ? _.map(props.shipment_methods.providers, (provider) => (<div>
                <p className="text-xs text-zinc-500 my-2">
                    {provider.title}
                </p>
            </div>))
            : "false"}
        </div>
      </section>
      <section>
        <div>3</div>
        <div>4</div>
      </section>
    </article>
  );
}
