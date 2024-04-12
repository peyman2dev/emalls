import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner({img, to, alt}) {
  return (
    <div className='container lg:rounded-2xl h-[140px] lg:min-h-[225px] w-full'>
        <Link to={to} className='w-full h-full'>
            <img src={img} alt={alt} className='w-full h-full object-cover' />
        </Link>
    </div>
  )
}
