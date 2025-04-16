import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const { blogs } = useSelector((state) => state.blogSlice);
    console.log(blogs)

    
  return (
    <div>Home</div>
  )
}
