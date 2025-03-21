import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './features/ui/RootLayout'
import { Login } from './features/auth/Login'
import { Register } from './features/auth/Register'
import { ProductList } from './features/product/ProductList'
import { AdminProduct } from './features/admin/AdminProduct'
import { AddProduct } from './features/admin/AddProduct'
import { ProductEdit } from './features/admin/ProductEdit'
import { ProductDetail } from './features/product/ProductDetail'
import { CartPage } from './features/cart/CartPage'
import { Profile } from './features/profile/Profile'
import { OrderDetail } from './features/order/OrderDetail'
import { AuthRoutes } from './features/ui/AuthRoutes'
import { AdminRoutes } from './features/ui/AdminRoutes'




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

                //logged user routes
                {
                    element: <AuthRoutes />,
                    children: [
                        {
                            path: 'user-profile',
                            element: <Profile />
                        },
                        {
                            path: 'cart-page',
                            element: <CartPage />
                        },
                    ]
                },

                {
                    path: 'product-detail/:id',
                    element: <ProductDetail />
                },
                
                //admin routes
                {
                    element: <AdminRoutes />,
                    children: [
                        {
                            path: 'admin-product',
                            element: <AdminProduct />
                        },
                        {
                            path: 'add-product',
                            element: <AddProduct />
                        },
                        {
                            path: 'edit-product/:id',
                            element: <ProductEdit />
                        },
                    ] 
                },
                
                
                
                // {
                //     path: 'cart-page',
                //     element: <CartPage />
                // },
                {
                    path: 'order/:id',
                    element: <OrderDetail />
                },
            ]
        }
    ])

  return < RouterProvider router={router} />  
    
  
}
