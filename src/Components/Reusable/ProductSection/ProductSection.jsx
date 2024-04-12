import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import _ from 'lodash'
import { ArrowLeft2, Shop } from 'iconsax-react'
import { Link } from 'react-router-dom'

export default function ProductSection(props) {
    console.log(props)
  return (
    <section className='container my-20'>
      <header className='between'>
        <h4 className='mb-10 flex gap-2 items-center text-xl font-bold'>
          <span className='text-secondary'>
            <Shop />
          </span>

          {props.category}
        </h4>
        <Link className='flex items-center gap-1 text-zinc-600'>
          <span>
            مشاهده
          </span>
          <span>
            <ArrowLeft2 size={16}/>
          </span>

        </Link>
      </header>
      <section className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
    {
      props && props.products && props.products.length ? 
      _.map(props.products, (product, index) => (
      <ProductCard key={index} {...product}/>
      ))

      :
      ""
    }
      </section>
    </section>
  )
}
