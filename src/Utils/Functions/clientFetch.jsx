import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMenusFromClient } from '../Redux/Ducks/Ducks'

export default function clientFetch() {
    const dispatch = useDispatch()
    useEffect(() => {
        // Get Webstie Menus
        dispatch(getMenusFromClient())
    },[])
}
