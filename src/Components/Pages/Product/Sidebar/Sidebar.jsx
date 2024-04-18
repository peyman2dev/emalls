import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import { Link } from "react-router-dom";
import { ShieldTick, Shop } from "iconsax-react";
import SellerModal from "../../../Reusable/SellerModal/SellerModal";
import AddToCart from "../../../Reusable/Buttons/AddToCart/AddToCart";
import priceFix from "../../../../Utils/Functions/priceFix";
import _ from "lodash";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Sidebar() {
  const { product } = useContext(ProductContext);
  const [menuShow, setMenuShow] = useState(false);
  const { seller } = product.product.default_variant;

  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <aside className="xxl:min-w-[340px]  max-w-[340px] hidden invisible xxl:visible xxl:block sticky top-20 h-[400px] child:shadow-lg child:shadow-black/5 mt-12 child:bg-gray-50 child:rounded-md border space-y-5">
      <section className="p-5 relative group">
        <header className="between text-sm text-zinc-400">
          <p className="font-bold text-zinc-900 text-lg">فروشنده</p>
          <div className="ic gap-1">
            <span className="font-price text-zinc-700">
              {product.product.variants.length}
            </span>
            <span>فروشنده دیگر</span>
          </div>
        </header>
        <main
          onMouseEnter={() => setMenuShow(true)}
          onMouseLeave={() => setMenuShow(false)}
          className="my-4 pb-6 border-b"
        >
          <div className="ic gap-1">
            <span className="relative">
              {seller.logo ? <img src={seller.logo} alt="" /> : <Shop />}
            </span>
            <Link
              className="duration-150 transition-all hover:text-zinc-900 font-bold"
              to={`/seller/${seller.code}`}
            >
              {seller.title}
            </Link>
          </div>
          <div className="text-sm mt-4 ic gap-2 text-zinc-500">
            <div className="ic gap-1">
              <span
                className="font-bold font-price"
                style={{
                  color:
                    product.product.rating.rate < 20
                      ? "red"
                      : product.product.rating.rate < 40
                      ? "yellow"
                      : product.product.rating.rate < 60
                      ? "greenyellow"
                      : product.product.rating.rate < 80
                      ? "teal"
                      : "green",
                }}
              >
                {product.product.rating.rate}%
              </span>
              <span>رضایت از کالا</span>
            </div>
            <div className="w-px h-4 bg-black/20"></div>
            <div className="ic gap-1">
              <span>عملکرد</span>
              <span className="font-bold" style={{ color: seller.grade.color }}>
                {seller.grade.label}
              </span>
            </div>
          </div>
        </main>
        <footer>
          <div className="flex-end my-4">
            <div className="ic gap-1">
              <span className="font-bold text-xl text-zinc-800 font-price">
                {priceFix(product.product.default_variant.price.selling_price)}
              </span>
              <span>
                <img
                  src="../../../../../../public/docs/svgs/toman.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <AddToCart />
          <div className="mt-5 pb-3 border-b">
            <div className="ic gap-1">
              <ShieldTick size={21} className="text-zinc-500" />
              <p className="text-sm font-medium">
                {product.product.default_variant.warranty.title_fa}
              </p>
            </div>
          </div>
          <div className="my-3">
            {
              _.map(product.product.default_variant.shipment_methods.providers, (ship, index) => (
                <div className="ic gap-1 my-3">
                  <span>
                  <CiDeliveryTruck className="text-xl" />
                  </span>
                  <span className="font-price text-sm pt-0.5">
                    {ship.title}
                  </span>
                </div>
              ))
            }
          </div>
        </footer>

        <SellerModal
          menuShow={menuShow}
          information={product.product.default_variant}
          rates={product.product.rating.count}
        />
      </section>
    </aside>
  );
}
