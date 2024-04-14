import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

export default function Hero() {
  return (
    <section className='w-[100%] gap-4 child:min-h-[358px] child:rounded-lg child:bg-white child:py-5 child:shadow-lg child:shadow-black/5 min-h-[358px] rounded-xl flex'>
      <Content />
        <Sidebar />
    </section>
  )
}
