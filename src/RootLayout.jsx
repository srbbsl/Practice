import React from 'react'
import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}
