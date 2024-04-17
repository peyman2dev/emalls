import React, { useContext } from 'react'
import ProductContext from '../../../../Utils/Contexts/ProductContext'

export default function Sidebar() {
  const {product} = useContext(ProductContext)

  // console.log(product)
  return (
    <aside className='lg:min-w-[300px] child:shadow-lg child:shadow-black/5 mt-12 child:bg-white child:rounded-2xl space-y-5'>
      <section className='p-5'>
        <header className="between text-sm text-zinc-400">
          <p className=''>
            فروشنده
          </p>
          <div className="ic gap-1"></div>
        </header>
      </section>
    </aside>
  )
}
