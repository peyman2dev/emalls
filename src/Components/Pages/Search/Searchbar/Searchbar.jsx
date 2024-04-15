import { SearchNormal1 } from "iconsax-react";
import React, { useEffect, useState } from "react";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchHandler = (e) => {
    const { keyCode } = e;
    if (keyCode == 13) {
      window.location.pathname = `/search/${e.target.value}`;
    }
  };
  return (
    <div className="w-full h-12 relative items-center flex bg-white mb-3 rounded-lg shadow-lg overflow-hidden shadow-black/5">
      <input
        type="text"
        onKeyUp={(event) => searchHandler(event)}
        className="w-full h-full px-4 outline-none placeholder:text-xs"
        placeholder="جستجو کنید ..."
      />
      <button className="absolute left-3">
        <SearchNormal1 size={21} className="text-zinc-400" />
      </button>
    </div>
  );
}
