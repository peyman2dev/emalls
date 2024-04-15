import React, { useEffect, useState } from "react";
import Header from "../../Components/Reusable/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFromClient } from "../../Utils/Redux/Ducks/Ducks";
import _ from "lodash";
import { ArrowRotateRight, SearchNormal } from "iconsax-react";
import Production from "../../Components/Reusable/Production/Production";
import RelatedSearchs from "../../Components/Pages/Search/RelatedSearchs/RelatedSearchs";
import Searchbar from "../../Components/Pages/Search/Searchbar/Searchbar";

export default function Search() {
  const { search } = useSelector((state) => state.client);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const { query } = useParams();
  const productLength = search && search.products ? search.products.length : "";

  useEffect(() => {
    dispatch(searchFromClient({ query }));
  }, [query]);

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
    const { keyCode } = e;
    if (keyCode == 13) {
      window.location.pathname = `/search/${searchQuery}`;
    }
  };

  return (
    <>
      <Header />
      <main className="my-20">
        <section className="flex lg:flex-row flex-col sm:gap-8 p-3 sm:px-10">
          <aside className="sm:min-w-[300px]">
            <Searchbar />
            <RelatedSearchs styles={"lg:visible lg:block hidden invisible"} searchs={search.related_search_words} />
          </aside>
          <section className="content">
            <ul id="search_products">
              {search && search.products
                ? _.map(search.products, (product) => (
                    <Production key={product.id} {...product} />
                  ))
                : ""}
            </ul>
            <RelatedSearchs searchs={search.related_search_words} styles={"my-3 lg:hidden lg:invisible"}/>
          </section>
        </section>
      </main>
    </>
  );
}
