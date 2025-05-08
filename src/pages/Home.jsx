import React from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../Components/BlogCard';
import { number } from 'yup';
import { SearchBlog } from '../Components/SearchBlog';

export const Home = () => {
    const { blogs } = useSelector((state) => state.blogSlice);
    // console.log(blogs)

    // const blogged = blogs.map((blog) => blog.country)
    // console.log(blogged)

    // const numbers = [10, 20, 30, 50, 50];
    // const sum = numbers.reduce((acc, number) => (acc > number ? acc : number) );
    // console.log(sum)

    // const words = ['I', 'like', 'Javascript'];
    // const result = words.reduce((a, b) => a + ' ' + b);
    // console.log(result)

    
  return (
    <div>
      <SearchBlog />
      
      <div className='p-4 grid grid-cols-4 gap-3'>
        {blogs.length === 0 && <h1>No Blog Found, Try to Add.</h1>}
        {
          blogs.map((blog, index) => {
            return <BlogCard blog={blog} key={blog.id} index={index} />
          
          })
        }

    </div>
    
      
    </div>
  )
}
