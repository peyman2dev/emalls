import React from "react";

export default function Footer({ offerPercent, hasOffer, price, prevPrice }) {
  const _prevPrice = String(prevPrice);
  const priceStr = String(price);
  const TOMAN = priceStr.slice(0, priceStr.length - 1);
  const realPrice = _prevPrice.slice(0, _prevPrice.length - 1);
  return (
    <footer className="between px-3">
      <span
        className={
          hasOffer
            ? "px-3 py-1 pt-1.5 bg-red-500 select-none text-white rounded-full text-xs font-price"
            : ""
        }
      >
        {offerPercent ? "% " + offerPercent : ""}
      </span>
      <div>
        {hasOffer ? (
          <div className="font-price">
            <div className="ic gap-1">

            <p className="font-bold text-lg">
                {Number(TOMAN).toLocaleString()}
            </p>
            <span className="mb-1">
            <img
                src="/public/docs/svgs/toman.svg"
                alt="تومان"
                className="w-4 mb-1"
              />
            </span>
            </div>
            <p className="text-xs text-zinc-400 line-through">
              {Number(realPrice).toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="font-price ic gap-1">
            <span className="font-bold text-lg">
              {Number(TOMAN).toLocaleString()}
            </span>
            <span>
              <img
                src="/public/docs/svgs/toman.svg"
                alt="تومان"
                className="w-4 mb-1"
              />
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
