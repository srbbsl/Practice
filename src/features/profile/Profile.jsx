import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileForm } from './ProfileForm';

export const Profile = () => {

    const { user } = useSelector((state) => state.userSlice);

  return (
    <div className='p-6 grid grid-cols-3'>
        <ProfileForm user={user} />
        
    </div>
  )
}
