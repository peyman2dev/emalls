import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedSearchs({searchs}) {
    const relateSearch = query => {
        window.location.pathname = `/search/${query}`
    }
  return (
<section className='flex my-4 items-center gap-3'>
    {_.map(searchs, search => (
            <div className='bg-white px-3 text-sm py-1.5 pb-2 rounded-lg tracking-tight font-medium shadow-md shadow-black/5 cursor-pointer select-none' onClick={() => relateSearch(search)}>
                {search}
            </div>
    ))}
</section>
  )
}
