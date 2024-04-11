import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './Utils/Routes/routes'
import dispatcher from './Utils/Functions/dispatcher'

export default function App() {
  const appRouter = useRoutes(routes)
    // Api Fetch All Data
    dispatcher()
  return (
    <>
    {appRouter}
    </>
  )
}
