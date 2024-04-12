import React from "react";
import Article from "../Article/Article";
import { Bookmark2, ArrowLeft2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function Articles() {
  const { articles } = useSelector((state) => state.client);
  return (
    <section className="my-20 container w-[90%] mx-auto">
      <header className="between mb-8 px-4">
        <h4 className="flex gap-2 items-center text-xl font-bold">
          <span className="text-secondary">
            <Bookmark2 />
          </span>
          مقالات
        </h4>
        <Link to={'/articles'} className="flex items-center gap-1 text-zinc-600">
          <span>مشاهده</span>
          <span>
            <ArrowLeft2 size={16} />
          </span>
        </Link>
      </header>
      <main className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 child:w-full mt-10 gap-10">
        {articles && articles.length
          ? _.slice(articles, 0, 4).map((article, index) => (
              <Article {...article} key={index} />
            ))
          : ""}
      </main>
    </section>
  );
}
