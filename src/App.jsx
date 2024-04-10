import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './Utils/Routes/routes'
import clientFetch from './Utils/Functions/clientFetch'

export default function App() {
  const appRouter = useRoutes(routes)
    // Api Fetch All Data
    clientFetch()
  return (
    <>
    {appRouter}
    </>
  )
}
