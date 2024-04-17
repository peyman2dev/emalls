import { MessageNotif } from "iconsax-react";
import React, { useContext } from "react";
import ProductContext from "../../../../Utils/Contexts/ProductContext";
import _ from "lodash";
import Comment from "../../../Reusable/Comment/Comment";

export default function Comments() {
  const { product } = useContext(ProductContext);

  return (
    <section className="bg-white p-5  rounded-2xl shadow-lg shadow-black/5">
      <header>
        <div className="ic gap-2">
          <span>
            <MessageNotif size={32} className="text-secondary" />
          </span>
          <span className="font-medium text-lg text-zinc-800">
            نظرات کاربران
          </span>
        </div>
        <div className="mt-4">
          <textarea
            name=""
            id=""
            className="w-full bg-gray-100/50 rounded-xl outline-none p-5"
            placeholder="نظر خود را درج کنید ..."
            resize={"off"}
            rows="2"
          ></textarea>
          <div className="flex-end">
            <button className="px-4 mt-2 shadow-lg shadow-secondary/30 hover:bg-opacity-90 duration-150 py-1.5 rounded-lg bg-secondary text-white text-sm">
              درج نظر
            </button>
          </div>
        </div>
      </header>
      <main className="mt-5 divide-y">
        {_.map(product.product.last_comments, (cm) => (
          <Comment {...cm} key={cm.id} />
        ))}
      </main>
    </section>
  );
}
