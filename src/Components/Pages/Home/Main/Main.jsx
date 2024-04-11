import React from 'react'
import Hero from '../Hero/Hero'
import HeroSlider from '../HeroSlider/HeroSlider'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'

export default function Main() {
  return (
    <main className='mt-14'>
        <Hero />
        <HeroSlider />
        <Categories />
        <Products />
    </main>
  )
}
