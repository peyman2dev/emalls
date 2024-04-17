import React from "react";

export default function Title({ EN, title }) {
  // console.log(title, title_en)

  return (
    <div>
      <h3 className="text-xl  tracking-tight ">{title}</h3>
      <h4 className="text-sm mt-2 text-zinc-300  tracking-tight ">{EN}</h4>
    </div>
  );
}
