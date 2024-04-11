import { ArrowDown2 } from "iconsax-react";
import _ from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-14">
      <div className="h-14 w-full between">
        <Link
          to={props.to}
          className={`${
            show ? "text-blue-900" : ""
          } text-zinc-700 hover:text-main duration-150 font-bold`}
        >
          {props.title}
        </Link>
        <button
          className="text-gray-500 w-1/3 h-full flex items-center justify-end hover:text-black duration-150"
          onClick={() => setShow(!show)}
        >
          <ArrowDown2 size={14} />
        </button>
      </div>
      <div
        className={`${
          show ? "max-h-[500px] mb-3 " : "max-h-0 invisible"
        } overflow-hidden divide-y child-ic transition-all duration-500`}
      >
        {_.map(props.submenus, (item, index) => (
          <div
            key={index}
            className="h-10 text-sm hover:text-secondary  duration-150 text-gray-600"
          >
            <Link to={item.to}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
