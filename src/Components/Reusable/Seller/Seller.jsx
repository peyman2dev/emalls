import { ShieldTick, Shop, Verify } from "iconsax-react";
import _ from "lodash";
import React, { useEffect } from "react";
import priceFix from "../../../Utils/Functions/priceFix";
import toman from '../../../../public/docs/svgs/toman.svg'
import { Link } from "react-router-dom";
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


  // console.log(props)
  
  return (
    <article className="px-8 odd:bg-gray-100/50  child:flex child:items-center child:gap-5 child:lg:gap-14 between rounded-lg min-h-[120px]">
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
              <Link to={`/seller/${props.seller.code}`}>{props.seller.title}</Link>
            </div>
            <p className="text-xs mt-2 text-zinc-400 ">
              <span>عملکرد</span>
              {Grade}
            </p>
          </div>
        </div>
        <div>
          {props && props && props.shipment_methods
            ? _.map(props.shipment_methods.providers, (provider, index) => (
                <div key={index}>
                  <p className="text-xs text-zinc-500 my-2">{provider.title}</p>
                </div>
              ))
            : "false"}
        </div>
      </section>
      <section>
        <div className="min-w-[200px]">
          <p className="text-xs flex items-center gap-1 text-zinc-500">
            <span>
              <ShieldTick />
            </span>
            <span>{props.warranty.title_fa}</span>
          </p>
        </div>
        <div>
          <p className="font-price ic gap-1">
            <span>
            {priceFix(props.price.selling_price).toLocaleString()}
            </span>
            <span>
              <img src={toman} className="w-6" alt="تومان" />
            </span>
          </p>
        </div>
        <div>5</div>
      </section>
    </article>
  );
}
