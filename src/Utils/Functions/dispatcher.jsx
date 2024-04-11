import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMenusFromClient } from '../Redux/Ducks/Ducks'

export default function dispatcher() {
    const dispatch = useDispatch()
    useEffect(() => {
        // Get Webstie Menus
        dispatch(getMenusFromClient())
    },[])
}
