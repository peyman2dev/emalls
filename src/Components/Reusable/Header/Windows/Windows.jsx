import { ArrowLeft2, Shop } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

export default function Windows() {
  const { menus } = useSelector((state) => state.client);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState({});
  const [finalItems, setFinalitems] = useState({});
  const [curretTarget, setCurrectTarget] = useState({});
  // Filter The Current Item Menu
  const findTheTarget = (title) =>
    setTarget(
      _.filter(menus, (item) => {
        return item.title === title;
      })
    );
  useEffect(() => {
    if (!show) {
      setTarget({});
      setFinalitems({});
    }
  }, [show]);

  const filterTheLastTab = (item) => {
    setCurrectTarget(
      _.filter(target[0].submenus, (_item) => {
        return _item.title === item.title;
      })
    );
    setFinalitems(item.submenus)
  };

  return (
    <nav className="xl:visible  py-2 xl:flex xl:justify-between container xl:items-center hidden invisible">
      <div className="ic gap-10">
        <div>
          <Link>
            <img src="/public/docs/svgs/logo.svg" width={90} alt="" />
          </Link>
        </div>

        <ul className="ic   gap-4  lg:text-sm ">
          {/* Categories Button */}
          <li className="ic gap-3 relative">
            {/* Categories Button */}
            <button onClick={() => setShow(!show)} className="ic gap-3">
              <span>
                <img src="/public/docs/svgs/category.svg" width={18} alt="" />
              </span>
              <span>دسته بندی کالاها</span>
              <span>
                <img src="/public/docs/svgs/dropdown.svg" width={12} alt="" />
              </span>
            </button>

            {/* Menu Open */}
            <ul
              onClick={() => setShow(!show)}
              className={`w-screen top-[10%] ${
                show ? "" : "opacity-0 invisible"
              } duration-150 flex justify-center  pt-3  right-0 h-screen bg-black/30 z-20 fixed`}
            >
              <div className="absolute w-[80%] p-6 gap-10 bg-white rounded-xl shadow-2xl flex">
                <div className="h-full border-l w-[20%]">
                  {menus && menus.length
                    ? _.map(menus, (menu, index) => (
                        <div key={index}>
                          <Link
                            to={menu.to}
                            onMouseEnter={() => findTheTarget(menu.title)}
                            className={`flex ${
                              target &&
                              target[0] &&
                              target[0].title === menu.title
                                ? "text-red-500"
                                : ""
                            } py-1 my-3 first:mt-0 items-center gap-2`}
                          >
                            <span>{menu.title}</span>
                            <span>
                              <ArrowLeft2 size={12} />
                            </span>
                          </Link>
                        </div>
                      ))
                    : ""}
                </div>
                <div className="w-[20%]">
                  {target.length
                    ? _.map(target[0].submenus, (sub, index) => (
                        <div key={index} className="my-1 w-full">
                          <Link
                            onMouseEnter={() => filterTheLastTab(sub)}
                            className={`py-1 ${
                              curretTarget && curretTarget[0] &&
                              curretTarget[0].title === sub.title
                                ? "text-red-500"
                                : ""
                            } flex items-center gap-2 w-full`}
                            to={sub.to}
                          >
                            <span>{sub.title}</span>
                            <span>
                              <ArrowLeft2 size={10} />
                            </span>
                          </Link>
                        </div>
                      ))
                    : ""}
                </div>
                <div className="space-y-5">
                  {finalItems.length
                    ? _.map(finalItems, (item, index) => (
                        <div key={index}>
                          <Link
                            to={item.to}
                            className=" px-3 bg-slate-100/70 duration-150 hover:bg-slate-100 py-1.5 rounded-md"
                          >
                            {item.title}
                          </Link>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </ul>
          </li>
          
          {/* Articles */}
          <li>
            <Link className="flex items-center gap-1">
              <span>
                <img src="/public/docs/svgs/articles.svg" alt="" width={21} />
              </span>
              <span>
                مقالات
              </span>
            </Link>
          </li>

          {/* Shops */}
          <li>
            <Link className="flex items-center gap-1">
              <span>
                <img src="/public/docs/svgs/shop.svg" alt="" width={21} />
              </span>
              <span>
                فروشگاه ها
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1">
              <span>
                <img src="/public/docs/svgs/policies.svg" alt="" width={26} />
              </span>
              <span>
                شرایط و قوانین
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1">
              <span>
                <img src="/public/docs/svgs/policies.svg" alt="" width={26} />
              </span>
              <span>
                درباره ما
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ic gap-4 text-sm child:duration-300 child:rounded-lg">
        <div className="h-10  overflow-hidden border hover:bg-slate-100">
          <Link className="ic gap-2 h-full px-2">
            <span>
              <img src="/public/docs/svgs/user.svg" alt="" />
            </span>
            <span>
              ورود | عضویت
            </span>
          </Link>
        </div>
        <div className="bg-[#ff5f55] text-white    h-10 child:h-full drop-shadow-2xl shadow-secondary ">
                      <Link className="flex items-center gap-2 px-3">
                        <span>
                          <Shop size={18}/>
                        </span>
                        <span>
                          ثبت فروشگاه
                        </span>
                      </Link>
        </div>
      </div>
    </nav>
  );
}
