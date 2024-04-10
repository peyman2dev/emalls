import { ArrowLeft2 } from "iconsax-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Windows() {
  const {menus} = useSelector(state => state.client)
  const [show, setShow] = useState(false);


  return (
    <nav className="lg:visible between py-5 lg:block hidden invisible px-[108px]">
      <div className="ic gap-10">
        <div>
          <Link>
            <img src="/public/docs/svgs/logo.svg" width={90} alt="" />
          </Link>
        </div>
        <ul className="ic divide-x gap-4">
          <li className="ic gap-3 relative">
            <button onClick={() => setShow(!show)} className="ic gap-3">
              <span>
                <img src="/public/docs/svgs/category.svg" alt="" />
              </span>
              <span>دسته بندی کالاها</span>
              <span>
                <img src="/public/docs/svgs/dropdown.svg" alt="" />
              </span>
            </button>
            <ul onClick={() => setShow(!show)} className={`w-screen top-[10%] ${show ? "" : "opacity-0 invisible"} duration-150 flex justify-center  pt-3  right-0 h-screen bg-black/30 fixed`}>
              <div onClick={event => event.stopPropagation()} className="w-[80%] rounded-md min-h-[70vh] h-[70vh] p-5 bg-white shadow-2xl chlild:flex chlild:items-center chlild:gap-2">
                <Link>
                <span>title</span>
                <span>
                  <ArrowLeft2 size={12} />
                </span>
                </Link>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div>2</div>
    </nav>
  );
}
