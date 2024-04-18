import { Shop } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _, { isNull, isUndefined } from "lodash";
import Seller from "../../../Reusable/Seller/Seller";

export default function Sellers() {
  const { product } = useContext(ProductContext);
  const [totalShow, setTotalShow] = useState(4);
  const [maxReached, setMaxReached] = useState(false);
  const [totalSellers, setTotalSellers] = useState(1);

  const totalShowHandler = () => {
    setTotalShow((prev) => prev + 10);
    if (totalShow >= totalSellers) {
      setTotalShow(4);
    } else {
      setMaxReached(false);
    }
  };

  useEffect(() => {
    if (!isUndefined(product) && product.product && product.product.variants) {
      setTotalSellers(product.product.variants.length);
    }

    if (totalShow >= totalSellers) {
      setMaxReached(true);
    }
  }, [totalShow, product]);




  return (
    <section className="bg-white p-5 hidden invisible md:visible md:block  rounded-2xl shadow-lg shadow-black/5">
      <header>
        <div className="ic gap-2">
          <span>
            <Shop size={32} className="text-secondary" />
          </span>
          <h4 className="font-medium text-lg text-zinc-800">دیگر فروشندگان</h4>
        </div>
      </header>
      <main className="my-10">
        <div className="flex-end">
          <p className="text-sm text-zinc-500">
            <span className="font-price px-1 text-base text-green-600">
              {totalSellers}
            </span>
            <span>فروشنده</span>
          </p>
        </div>
        {_.slice(product.product.variants, 0, totalShow).map((variant) => (
          <Seller key={variant.id} {...variant} />
        ))}
      </main>
    </section>
  );
}
