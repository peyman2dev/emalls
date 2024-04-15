import React, { useEffect, useState } from "react";
import ColorSpan from "./Colors/ColorSpan/ColorSpan";
import { Link } from "react-router-dom";
import Colors from "./Colors/Colors";
import Cover from "./Cover/Cover";
import Title from "./Title/Title";
import Footer from "./Footer/Footer";

export default function Production(props) {
  const img = props.images.main.url[0];
  const { price } = props.default_variant;
  const [hasOffer, setHasOffer] = useState(false);

  useEffect(() => {
    if (price && price.rrp_price) {
      setHasOffer(price.rrp_price !== price.selling_price);
    }
  }, [price]);

  return (
    <article className="p-2 bg-white child:relative min-w-[203px] min-h-[359px]">
      <header>
        <Link to={`/product/${props.id}`}>
          <Colors colors={props.colors} />
          <Cover img={img} alt={props.title_fa} />
        </Link>
      </header>
      <main className="p-3 my-2">
        <Link to={`/product/${props.id}`}>
          <Title title={props.title_fa} en={props.title_en} />
        </Link>
      </main>
      <Footer
        hasOffer={hasOffer}
        offerPercent={price && price.discount_percent ? price.discount_percent : 0}
        price={price && price.selling_price ? price.selling_price : 0}
        prevPrice={price && price.rrp_price ? price.rrp_price : 0}
      />
    </article>
  );
}
