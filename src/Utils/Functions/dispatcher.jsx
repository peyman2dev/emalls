import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getArticlesFromClient, getMenusFromClient, getPricesFromClient, getProductsFromApiClient } from '../Redux/Ducks/Ducks'

export default function dispatcher() {
    const dispatch = useDispatch()
    useEffect(() => {
        // Get Webstie Menus
        dispatch(getProductsFromApiClient())
        dispatch(getMenusFromClient())
        dispatch(getPricesFromClient())
        dispatch(getArticlesFromClient())
    },[])
}
