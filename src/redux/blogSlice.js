import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../app/localStorage";



export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: {
        blogs: getFromLocal(),
        searchQuery: '', // searchquery putted here
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
            setToLocal(state.blogs);
        },
        removeBlog: (state, action) => {
            state.blogs.splice(action.payload, 1);
            setToLocal(state.blogs);
        },
        editBlog: (state, action) => {
            state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
            setToLocal(state.blogs);
            {/*const posts = [
                  {
                    id: 1,
                    title: 'hello',
                  },
                  {
                    id: 2,
                    titile: 'namaste',
                  },
                ]
            
                const result = posts.map((post) => post.id === 1 ? {id: 1, title: 'tero'} : post)
                console.log(result)*/}
        },
        searchBlog: (state, action) => {
            const query = action.payload;
            if (!query) return state.blogs;
                const regex = new RegExp(query, 'i');
                return state.blogs.filter(blog => regex.test(blog.title));
        }
        
    }
});

export const { addBlog, removeBlog, editBlog, searchBlog } = blogSlice.actions;

// const loop = [1, 2, 3, 4];
// loop.splice(0, 1 )
// console.log(loop)