import _ from "lodash";
import React, { useEffect } from "react";
import Video from "../../../Reusable/Video/Video";

export default function Videos({ videos }) {

  return (
    <section className="overflow-hidden">
      <header>
        <h6>ویدیو ها</h6>
      </header>
      <main className="mt-5 overf flex items-center gap-3">
        {_.map(videos, (video, index) => (
          <Video video={video} key={index} />
        ))}
      </main>
    </section>
  );
}
