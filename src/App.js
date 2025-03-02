import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RootLayout } from './ui/RootLayout'

export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />
        }
    ])

  return < RouterProvider router={router} />  
    
  
}
