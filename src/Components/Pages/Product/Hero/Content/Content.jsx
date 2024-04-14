import React, { useContext, useEffect } from 'react'
import ProductContext from '../../../../../Utils/Contexts/ProductContext'
import axios from 'axios'

export default function Content() {
  const {product} = useContext(ProductContext)
  useEffect(() => {
    // fetch('https://api.rawg.io/api/games?key=f10ad59362f9439181675da82da32e5f')
    fetch('https://api.digikala.com/v1/categories/apparel/')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])
  return (
    <section className='w-full  px-20 flex items-center gap-20'>
        <div className='w-[20%] '>
            <img src={product ? product.cover : ""} alt={product && product.title} className='w-full h-full' />
        </div>
        <div className='flex h-full flex-col py-8 justify-between'>
          <div>
            <h3 className='text-lg font-bold'>
              {product && product.title}
            </h3>
          </div>
          <div>
            <p className='text-zinc-400 font-light text-sm flex gap-1 items-center'>
              <span className='font-price'>32</span>
              <span>
                فروشگاه
              </span>
            </p>
          </div>

        </div>
    </section>
  )
}
