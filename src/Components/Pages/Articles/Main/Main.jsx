import { Shop } from "iconsax-react";
import _ from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Article from "../../../Reusable/Article/Article";

export default function Main() {
  const { articles } = useSelector((state) => state.client);
  useEffect(() => {
    window.scrollBy(0,0)
  },[])
  return (
    <main className="mt-20 min-h-screen container">
      {/* Breadcrump */}
      <div className="flex items-center gap-2">
        <Link to={"/"} className="ic gap-1 text-lg text-secondary">
          <span>
            <Shop />
          </span>
          ایمالز
        </Link>
        <span className="text-xs text-zinc-400">/</span>
        <Link to={""}>مقالات</Link>
      </div>
      <section className="mt-5">
        {/* Title */}
        <div className="ic gap-2">
          <span className="text-6xl">-</span>
          <span className="text-2xl mb-2 font-bold tracking-tighter">
            مقالات
          </span>
        </div>
        <section className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1">
          {_.map(articles, (article, index) => (
            <Article {...article} key={index} />
          ))}
        </section>
      </section>
    </main>
  );
}
