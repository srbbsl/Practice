import React from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../Components/BlogCard';

export const Home = () => {
    const { blogs } = useSelector((state) => state.blogSlice);
    // console.log(blogs)

    
  return (
    <div className='p-4 grid grid-cols-4 gap-3'>
      {
        blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog.id}/>
         
        })
      }
    </div>
  )
}
