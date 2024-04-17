import { Paperclip2 } from "iconsax-react";
import React, { useContext, useState } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";

export default function Details() {
  const [showMore, setShowMore] = useState(false);
  const { product } = useContext(ProductContext);
  const length =
    product && product.product && product.product.specifications
      ? product.product.specifications[0].attributes.length
      : 4;
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
          {/* {product && product.product && product.product.specifications
            ?
            (showMore ?
            )
              ))
            : "Loading ..."} */}
          {product && product.product && product.product.specifications ? (
            <>
              {length >= 4
                ? _.slice(
                    product.product.specifications[0].attributes,
                    0,
                    showMore ? length : 4
                  ).map((atr) => (
                    <div className="py-6 flex min-h-10 flex-col space-y-2 lg:flex-row lg:gap-10">
                      <div className="min-w-[160px]">
                        <h6 className="text-sm text-zinc-500">{atr.title}:</h6>
                      </div>
                      <div>
                        {_.map(atr.values, (val) => (
                          <p className="text-sm">{val}</p>
                        ))}
                      </div>
                    </div>
                  ))
                : _.map(product.product.specifications[0].attributes, (atr) => (
                    <div className="py-6 flex min-h-10 flex-col space-y-2 lg:flex-row lg:gap-10">
                      <div className="min-w-[160px]">
                        <h6 className="text-sm text-zinc-500">{atr.title}:</h6>
                      </div>
                      <div>
                        {_.map(atr.values, (val) => (
                          <p className="text-sm">{val}</p>
                        ))}
                      </div>
                    </div>
                  ))}
            </>
          ) : (
            "Loading ..."
          )}

          { length >= 5 &&
            <button
              className={`px-4 py-1.5 text-sm rounded-lg bg-sky-500 text-white`}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "کوتاه کردن" : "نمایش بیشتر"}
            </button>
          }
        </section>
      </main>
    </section>
  );
}

// _.map(product.product.specifications[0].attributes, (atr) => (
//   <div className="py-6 flex min-h-10 flex-col space-y-2 lg:flex-row lg:gap-10">
//     <div className="min-w-[160px]">
//       <h6 className="text-sm text-zinc-500">{atr.title}:</h6>
//     </div>
//     <div>
//       {_.map(atr.values, (val) => (
//         <p className="text-sm">{val}</p>
//       ))}
//     </div>
//   </div>
