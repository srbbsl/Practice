import React from 'react'

export const Header = () => {
  return (
    <header className='border border-white h-12 shadow-lg p-2'>
      <div className='ml-8 flex justify-between items-center font-semibold'>
        <h1 className='text-xl'>React Redux</h1>
      
      <nav className='flex gap-4 mr-4 '>
        <a href='#' className='hover:text-blue-500'>Home</a>
        <a href='#' className='hover:text-blue-500'>About us</a>
        <a href='#' className='hover:text-blue-500'>Contact</a>
      </nav>
      </div>
    </header>
  )
}
