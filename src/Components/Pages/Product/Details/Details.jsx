import { Paperclip2 } from "iconsax-react";
import React, { useContext } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";

export default function Details() {
  const { product } = useContext(ProductContext);

  console.log(product)
  return (
    <section className="bg-white p-5  rounded-2xl shadow-lg shadow-black/5">
      <header>
        <div className="ic gap-2">
          <span>
            <Paperclip2 size={32} className="text-secondary" />
          </span>
          <h4 className="font-medium text-lg text-zinc-800">مشخصات</h4>
        </div>
      </header>
      <main className="w-[95%] flex lg:flex-row flex-col lg:gap-[100px] mx-auto mt-10">
        <div>مشخصات</div>
        <section className="divide-y lg:divide-y-0">
          {product && product.product && product.product.specifications
            ? _.map(product.product.specifications[0].attributes, (atr) => (
                <div className="py-6 flex min-h-10 flex-col space-y-2 lg:flex-row lg:gap-10">
                  <div className="min-w-[80px]">
                    <h6 className="text-sm text-zinc-500">{atr.title}:</h6>
                  </div>
                  <div>
                    {_.map(atr.values, (val) => (
                      <p className="text-sm">{val}</p>
                    ))}
                  </div>
                </div>
              ))
            : "Loading ..."}
        </section>
      </main>
    </section>
  );
}
