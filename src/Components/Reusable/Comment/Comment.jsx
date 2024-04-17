import { Add, Dislike, Flag2, LampSlash, Like1, Minus } from "iconsax-react";
import _ from "lodash";
import React, { useEffect, useState } from "react";

export default function Comment(props) {
  const [stars, setStars] = useState(5);
  const [rates, setRates] = useState(5);


  useEffect(() => {
    setRates(props ? props.rate : 5);
  }, [props]);

  return (
    <article className="p-4 my-5 w-full rounded-lg">
      <header className="">
        <div className="ic gap-2  flex-wrap min-w-max flex-w font-price text-xs text-zinc-400">
          <p>{props.user_name}</p>
          <p
            className={`px-3 py-0.5 rounded-2xl ${
              props.is_buyer
                ? "text-green-500 bg-green-500/10"
                : "bg-yellow-400/10 text-yellow-500"
            }`}
          >
            {props.is_buyer ? "خریدار" : "کاربر"}
          </p>
          <p className="w-1 rounded-full h-1 bg-zinc-300"></p>
          <p>{props.created_at}</p>
        </div>
        <div className="my-4"></div>
        <div className="mt-4 text-xs">
          <p
            className={`${
              props.recommendation_status === "recommended"
                ? "text-green-500"
                : props.recommendation_status === "no_idea"
                ? "text-gray-500"
                : "text-red-600"
            } ic gap-1`}
          >
            {props.recommendation_status === "recommended" ? (
              <>
                <span>
                  <Like1 size={14} />
                </span>
                <span>پیشنهاد می کنم</span>
              </>
            ) : props.recommendation_status === "no_idea" ? (
              <>
                <span>
                  <LampSlash />
                </span>
                <span>مطمئن نیستم</span>
              </>
            ) : (
              <>
                <span>
                  <Dislike size={14} />
                </span>
                <span>پیشنهاد نمی کنم</span>
              </>
            )}
          </p>
        </div>
      </header>
      <main className="my-4">
        <h5 className="text-sm font-bold">{props.title}</h5>
        <p className="mt-5  text-justify text-sm">{props.body}</p>

        <div className="mt-4 space-y-2 text-xs font-medium child-ic child:gap-2">
          {_.map(props.advantages, (advantage) => (
            <div>
              <span className="text-green-500">
                <Add size={16} />
              </span>
              <span>{advantage}</span>
            </div>
          ))}
          {_.map(props.disadvantages, (advantage) => (
            <div>
              <span className="text-red-500">
                <Minus size={16} />
              </span>
              <span>{advantage}</span>
            </div>
          ))}
        </div>
      </main>
      <footer className="between">
        <div></div>
        <div className="ic gap-3 text-sm font-price text-zinc-400">
          <button className="ic gap-1">
            <span>{props.reactions.dislikes}</span>
            <span>
              <Like1 size={16} />
            </span>
          </button>
          <button className="ic gap-1">
            <span>{props.reactions.dislikes}</span>
            <span>
              <Dislike size={16} />
            </span>
          </button>
        </div>
      </footer>
    </article>
  );
}
