import React from 'react'
import { AllOrder } from './AllOrder'
import { UserOrder } from './UserOrder'

export const OrderList = ({ user }) => {
  return (
    <div className='col-span-2'>
      {user.role === 'admin' ? <AllOrder user={user} /> : <UserOrder user={user} />}
    </div>
  )
}
