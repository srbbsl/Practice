import React from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../Components/BlogCard';

export const Home = () => {
    const { blogs } = useSelector((state) => state.blogSlice);
    // console.log(blogs)

    // const blogged = blogs.map((blog) => blog.country)
    // console.log(blogged)

    
  return (
    <div className='p-4 grid grid-cols-4 gap-3'>
      {blogs.length === 0 && <h1>No Blog Found, Try to Add.</h1>}
      {
        blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={blog.id} index={index} />
         
        })
      }

      
    </div>
  )
}
