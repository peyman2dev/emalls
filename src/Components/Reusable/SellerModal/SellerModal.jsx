import React from "react";

export default function SellerModal({ menuShow, information, rates }) {
  return (
    <div
      className={`${
        menuShow ? "" : "opacity-0 invisible"
      } top-4 duration-300 absolute w-[400px] p-5 bg-white rounded-md shadow-sm shadow-black/5 left-[101%] border`}
    >
      <header>
        <div className="ic gap-1 font-semibold text-lg text-zinc-800">
          <span>فروشگاه</span>
          {/* <span>{information.seller.title}</span> */}
        </div>
        <div className="text-sm ic gap-1 text-zinc-500 mt-1.5">
          <span>عضو از</span>
          <span className="font-price">
            {/* {information.seller.registration_date} */}
          </span>
        </div>
      </header>
      <main className="my-6 border-b pb-5 ">
        <div className="flex-center gap-0.5 font-bold text-3xl font-price text-green-600">
          <span>%</span>
          {/* <p>{information.statistics.satisfied.rate}</p> */}
        </div>
        <div className="flex-center">
          <p className="font-medium text-sm mt-2 text-zinc-800">
            رضایت خریداران از کیفیت کالاها
          </p>
        </div>
        <div className="text-xs mt-3 flex-center gap-1 text-zinc-500">
          <span className="font-price">
            {/* {information.statistics.satisfied.rate_count} */}
          </span>
          <span>نفر امتیاز دادند</span>
        </div>
        <div>
          <div className="my-3 relative child:absolute child:h-full overflow-hidden h-4 rounded-2xl w-full bg-teal-300">
            <div
              style={{ width: information.rate + "%" }}
              className={`bg-green-600 border-l-2 border-white`}
            ></div>
            <div
              style={{ width: 100 - information.rate + "%" }}
              className={` bg-lime-500 left-0`}
            ></div>
          </div>
          <div className="mt-2 w-full text-xs font-medium text-zinc-500 between">
            <p className="text-green-600">کاملا راضی</p>
            <p className="text-lime-500">کاملا ناراضی</p>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex-center flex-col gap-2">
          <p
            className="text-3xl font-black"
            style={{ color: information.seller.grade.color }}
          >
            {information.seller.grade.label}
          </p>
          <p className="text-sm font-semibold text-zinc-800">
            عملکرد کلی فروشنده
          </p>
        </div>
        <section className="flex child:w-1/3 justify-evenly child-center mt-5">
          <div>
            <p className="text-xs font-price"></p>
          </div>
          <div>2</div>
          <div>2</div>
        </section>
      </footer>
    </div>
  );
}
