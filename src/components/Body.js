import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieContainer from './movies/MovieContainer'
import GPT from './comparegpt/GPT'

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
            path:'/browse/movies',
            element:<MovieContainer />,
            errorElement: <Login />
        },
        {
            path:'/browse/gpt',
            element:<GPT />,
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