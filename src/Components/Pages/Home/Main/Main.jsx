import React from 'react'
import Hero from '../Hero/Hero'
import HeroSlider from '../HeroSlider/HeroSlider'
import Categories from '../Categories/Categories'

export default function Main() {
  return (
    <main className='mt-14'>
        <Hero />
        <HeroSlider />
        <Categories />
    </main>
  )
}
