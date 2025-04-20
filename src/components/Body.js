import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieContainer from './movies/MovieContainer'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login />
        },
        {
            path:'/browse',
            element:<Browse />,
            errorElement: <Login />
        },
        {
            path:'/movies',
            element:<MovieContainer />,
            errorElement: <Login />
        }

    ])

        
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body