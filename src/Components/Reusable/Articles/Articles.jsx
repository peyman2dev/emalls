import React from 'react'
import Article from '../Article/Article'
import { Bookmark2, ArrowLeft2 } from 'iconsax-react'
import { Link } from 'react-router-dom'

export default function Articles() {
  return (
    <section className='mt-20 container w-[95%] mx-auto'>
      <header className='between mb-8 px-4'>
        <h4 className='flex gap-2 items-center text-xl font-bold'>
          <span className='text-secondary'>
            <Bookmark2 />
          </span>
    مقالات
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
        <main>

        <Article />
        <Article />
        <Article />
        <Article />
        </main>
    </section>
  )
}
