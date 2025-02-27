import React from 'react'
import { createBrowserRouter } from 'react-router'
import { Login } from './features/auth/Login'
import { RouterProvider } from 'react-router-dom'
import { RootLayout } from './ui/RootLayout'

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
