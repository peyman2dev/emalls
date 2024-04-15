import React from 'react'

export default function Title({title, en}) {
  return (
    <h3 title={en} className='h-[48px] duration-150 hover:text-secondary line-clamp-2 mb-1'>
        {title}
    </h3>
  )
}
