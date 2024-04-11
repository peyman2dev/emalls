import React from 'react'
import { useSelector } from 'react-redux'

export default function Products() {
    const {products} = useSelector(state => state.client)
    console.log(products)
  return (
    <div>Products</div>
  )
}
