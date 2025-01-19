import { useSelector } from "react-redux";



export const Home = () => {

    const { blogs } = useSelector((state) => state.blogSlice); //((state) => state) return ko shortcut
    // console.log(blogs);

    return(
        <div>
            
            {
                blogs.map((blog) =>{
                    return <div key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.detail}</p>
                        <p>{blog.location}</p>
                        <p>{blog.genres}</p>
                        <p>{blog.country}</p>
                    </div>
                })
            }

        </div>
    )
};