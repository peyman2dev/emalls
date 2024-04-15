import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { ArrowLeft2, SearchNormal } from "iconsax-react";
export default function RelatedSearchs({ searchs, styles }) {
  return (
    <section
      className={`rounded-lg shadow-black/5 shadow-lg min-h-max overflow-hidden bg-white ${styles}`}
    >
      <header className="p-3 border-b">
        <p className="text-xs tracking-tight font-medium">جستجو‌های مرتبط</p>
      </header>
      <main className="p-2 px-3 divide-y">
        {searchs && searchs.length ? (
          _.map(searchs, (search) => (
            <div className="text-sm duration-150 hover:bg-zinc-100/60 px-3 hover:rounded-lg tracking-tight">
              <Link to={`/search/${search}`} className="h-12 between">
                <div className="ic gap-4">
                  <span>
                    <SearchNormal size={16} className="text-zinc-500" />
                  </span>
                  <span>{search}</span>
                </div>
                <div>
                  <span>
                    <ArrowLeft2 size={16} className="text-zinc-400" />
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <span className="my-2 text-sm text-zinc-400 font-thin">
            چیزی یافت نشد..
          </span>
        )}
      </main>
    </section>
  );
}
