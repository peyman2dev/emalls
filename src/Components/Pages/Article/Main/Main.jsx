import { Shop } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Main({ data }) {
  console.log(data);
  return (
    <main className="my-20 container">
      <div className="ic gap-2">
        <div className="flex items-center gap-1">
          <Link to={"/"} className="flex items-center gap-1 text-secondary">
            <span>
              <Shop />
            </span>
            <span>ایمالز</span>
          </Link>
          <span>/</span>
          <Link to={"/articles"}>مقالات</Link>
          <span>/</span>
          <Link>{data && data.length ? data[0].title : ""}</Link>
        </div>
      </div>
      <section className="mt-6">
        <div className="my-4">
        <img src={data && data.length ? data[0].cover : ""} alt="" />
        <h5 className="font-bold mt-3">
        {data && data.length ? data[0].title : ""}
        </h5>
        </div>
        <p className="">
       {data && data.length ? data[0].content : ""}

        </p>
      </section>
    </main>
  );
}
