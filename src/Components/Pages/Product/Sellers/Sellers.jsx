import { Shop } from "iconsax-react";
import React, { useContext } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";
import Seller from "../../../Reusable/Seller/Seller";

export default function Sellers() {
  const { product } = useContext(ProductContext);
  return (
    <section className="bg-white p-5  rounded-2xl shadow-lg shadow-black/5">
      <header>
        <div className="ic gap-2">
          <span>
            <Shop size={32} className="text-secondary" />
          </span>
          <h4 className="font-medium text-lg text-zinc-800">دیگر فروشندگان</h4>
        </div>
      </header>
      <main className="my-10">
        {product && product.product && product.product.variants
          ? _.map(product.product.variants, (variant) => <Seller {...variant}/>)
          : ""}
      </main>
    </section>
  );
}
