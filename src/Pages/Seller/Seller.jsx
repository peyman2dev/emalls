import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSellerInfoFromClient } from '../../Utils/Redux/Ducks/Ducks'
import Header from '../../Components/Reusable/Header/Header'
import ProductSection from '../../Components/Reusable/ProductSection/ProductSection'

export default function Seller() {
    const {seller} = useSelector(state => state.client)
    const {sellerID} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSellerInfoFromClient({sellerID}))
        console.log(seller)
        
    }, [sellerID])
  return (
    <>
    <Header />
    <main>
        {/* Products */}
        <ProductSection category="محصولات این فروشگاه" {...seller}/>
    </main>
    </>
  )
}
