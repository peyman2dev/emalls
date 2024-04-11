import { HambergerMenu, LogoutCurve } from "iconsax-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import _ from "lodash";

export default function Mobile() {
  const {menus} = useSelector(state => state.client)
  const [menuShow, setMenuShow] = useState(false);
  return (
    <>
      <nav className="lg:hidden lg:invisible p-4 flex items-center justify-between">
        <div>
          <button
            className="flex-center"
            onClick={() => setMenuShow(!menuShow)}
          >
            <HambergerMenu />
          </button>
        </div>
        <div>
          <Link>
            <img src="/public/docs/svgs/logo.svg" alt="لوگو" className="w-20" />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="/public/docs/svgs/user.svg"
              alt="ورود / عضویت"
              className="w-6"
            />
          </Link>
        </div>
      </nav>
      <section
        onClick={() => setMenuShow(!menuShow)}
        className={`w-full h-screen ${
          menuShow ? "" : "opacity-0 invisible"
        } duration-150 top-0 right-0 bg-black/40 fixed z-20`}
      ></section>
      <div
        className={`w-[290px] overflow-y-auto ${
          menuShow ? "" : "translate-x-[1600px]"
        } h-screen fixed right-0 top-0 z-20 bg-white duration-300 p-5`}
      >
        <header className="between">
          <Link>
            <img
              src="/public/docs/svgs/logo.svg"
              alt="لوگو - ایمالز"
              className="w-[100px]"
            />
          </Link>
          <div>
            <button
              onClick={() => setMenuShow(!menuShow)}
              className="text-zinc-400"
            >
              <LogoutCurve />
            </button>
          </div>
        </header>
        <main className="divide-y-2 mt-4 divide-black/10">
          {menus && menus.length ? 
          _.map(menus, (menu,index) => (
            <NavItem key={index}  {...menu}/>
          ))
          :
          ""
        }
        </main>
      </div>
    </>
  );
}
