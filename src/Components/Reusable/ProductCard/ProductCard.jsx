import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  console.log(props)
  return (
    <article className='w-full border overflow-hidden p-3 rounded-sm group hover:shadow-lg duration-150 shadow-black/5'>
      <Link>
      <header className='flex items-center justify-center mb-2.5  max-h-[220px] h-[220px]'>
          <img src={props.cover} alt="" className='w-full h-full object-cover duration-150  group-hover:scale-110' />
      </header>
    <main className='pt-2'>
      <h4 className='font-normal h-[48px] tracking-tight text-center'>
        {props.title}
      </h4>
      <div className="mt-4 flex items-center justify-end">
        <div className="flex items-center gap-1">
          <span className='font-price font-bold text-xl'>
            {props.price.toLocaleString()}
          </span>
          <span>
            <img src="/public/docs/svgs/toman.svg" className='w-5' alt="" />
          </span>
        </div>

      </div>
    </main>
    <footer></footer>
      </Link>
    </article>
  )
}





// synthwave: 1. Hotel Pools - Limits