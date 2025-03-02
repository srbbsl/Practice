import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RootLayout } from './features/ui/RootLayout'
import { Login } from './features/auth/Login'
import { Register } from './features/auth/Register'

export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
            ]
        }
    ])

  return < RouterProvider router={router} />  
    
  
}
