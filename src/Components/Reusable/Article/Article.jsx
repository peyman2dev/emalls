import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
    console.log(props)
  return (
    <article className='rounded-lg pb-3 overflow-hidden border'>
        <Link  to={props.to}>
        <header><img src={props.cover} alt="" /></header>
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
