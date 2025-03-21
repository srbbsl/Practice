import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const AdminRoutes = () => {

    const { user } = useSelector((state) => state.userSlice)
    return !user ? <Navigate to = '/login' /> : user?.role === 'admin' ? <Outlet /> : <Navigate to = '/' />


}
