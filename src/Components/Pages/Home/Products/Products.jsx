import React from 'react'
import { useSelector } from 'react-redux'
import ProductSection from '../../../Reusable/ProductSection/ProductSection'
import _ from 'lodash'

export default function Products() {
    const {products} = useSelector(state => state.client)
  return (
    <section >
      {
        products && products.length ?
        _.map(products, (category, index) => (
          <ProductSection {...category} />
        ))
        :
        ""
      }
    </section>
  )
}
