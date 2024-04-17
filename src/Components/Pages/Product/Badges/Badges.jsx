import _ from "lodash";
import React from "react";

export default function Badges({ badges }) {
  return (
    <section className="mt-1">
      <div className="ic gap-2">
        {_.map(badges, (badge, index) => (
          <div
            key={index}
            className="ic gap-1 text-sm rounded-2xl bg-secondary/10 text-secondary  font-bold mt-5 px-4 py-1.5"
          >
            <span>
              <img src={badge.icon.url} className="w-5" alt="" />
            </span>
            <p>{badge.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
