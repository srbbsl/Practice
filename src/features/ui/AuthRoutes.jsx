import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const AuthRoutes = () => {

    const { user } = useSelector((state) => state.userSlice)
    return user ? <Outlet /> : <Navigate to = '/login' />

  return (
    <div>

    </div>
  )
}
