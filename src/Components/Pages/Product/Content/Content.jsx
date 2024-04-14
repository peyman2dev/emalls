import React, { useContext, useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar'
import ProductContext from "../../../../Utils/Contexts/ProductContext";
export default function Content() {
  const {product} = useContext(ProductContext)
  console.log(product)
  useEffect(() => {
    fetch('https://api.digikala.com/v1/search/?q=هدفون/')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])

  return (
    <section className="flex w-full child:bg-white child:p-5 gap-5 child:rounded-xl child:shadow-xl child:shadow-black/5">
      <section className="w-full flex gap-10 p-10">
        <div>
          <img src={ product && product.product && product.product.images.main.url[0]} alt={""} className="max-w-[440px]" />
        </div>
        <div>
          <h3 className="text-lg font-bold">
            {product && product.product && product.seo.title}
          </h3>
        </div>
      </section>
      <Sidebar />
    </section>
  );
}
