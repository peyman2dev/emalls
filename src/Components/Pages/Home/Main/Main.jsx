import React from 'react'
import Hero from '../Hero/Hero'
import HeroSlider from '../HeroSlider/HeroSlider'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import PriceList from '../PriceList/PriceList'
import Articles from '../../../Reusable/Articles/Articles'
import Banner from '../../../Reusable/Banner/Banner'

export default function Main() {
  return (
    <main className='mt-14'>
        <Hero />
        <HeroSlider />
        <Categories />
        <Products />
        <Banner img={"/public/docs/images/banners/4.jpg"} alt={"محصولات آرایشی و بهداشتی کامان"}/>
        <PriceList />
        <Articles />
    </main>
  )
}
