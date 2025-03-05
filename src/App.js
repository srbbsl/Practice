import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RootLayout } from './features/ui/RootLayout'
import { Login } from './features/auth/Login'
import { Register } from './features/auth/Register'
import { ProductList } from './features/product/ProductList'
import { AdminProduct } from './features/admin/AdminProduct'
import { AddProduct } from './features/admin/AddProduct'




export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <ProductList />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'admin-product',
                    element: <AdminProduct />
                },
                {
                    path: 'add-product',
                    element: <AddProduct />
                },
            ]
        }
    ])

  return < RouterProvider router={router} />  
    
  
}
