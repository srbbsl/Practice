import React from 'react'
import { createBrowserRouter } from 'react-router'
import { Login } from './features/auth/Login'
import { RouterProvider } from 'react-router-dom'
import { RootLayout } from './ui/RootLayout'
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
