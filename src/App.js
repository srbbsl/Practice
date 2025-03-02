import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RootLayout } from './ui/RootLayout'
import { Login } from './auth/Login'

export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            ]
        }
    ])

  return < RouterProvider router={router} />  
    
  
}
