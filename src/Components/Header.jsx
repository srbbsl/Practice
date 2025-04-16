import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='border border-white h-12 shadow-lg p-2'>
      <div className='ml-8 flex justify-between items-center font-semibold'>
        <NavLink to={'/home'} className='text-xl hover:text-green-600'>React Redux</NavLink>
      
      <nav className='flex gap-4 mr-4 '>
        <a href='About' className='hover:text-blue-500'>About</a>
        <NavLink to={'/add-form'} className='hover:text-blue-500'>Add Form</NavLink>
        <a href='Contact' className='hover:text-blue-500'>Contact</a>
      </nav>
      </div>
    </header>
  )
}
