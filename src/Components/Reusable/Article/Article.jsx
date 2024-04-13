import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
  return (
    <article className='rounded-lg pb-3 w-[90%] mx-auto lg:w-full overflow-hidden border group'>
        <Link  to={props.to}>
        <header className='h-[229px] overflow-hidden'><img src={props.cover} alt="" className='h-[229px] duration-150 hover:scale-105 object-cover'/></header>
        <main className='p-3'>
            <h5 className='text-lg h-[56px] text-zinc-800 font-medium'>
                {props.title}
            </h5>
        </main>
        <footer className='px-3 mt-2 text-gray-500 text-sm flex items-center justify-end'>
            <p>
                {props.date}
            </p>
        </footer>
        </Link>
    </article>
  )
}
