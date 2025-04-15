import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './Header'
import { Home } from './Home'

export const RootLayout = () => {
  return (
    <div>
        <Header />
        <Home />
        <Outlet />
    </div>
  )
}
