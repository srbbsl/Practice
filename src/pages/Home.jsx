import { useSelector } from "react-redux";
import { BlogCard } from "../component/BlogCard";


export const Home = () => {

    const { blogs } = useSelector((state) => state.blogSlice);
    console.log(blogs);

    return (
        <div className="p-4 grid grid-cols-4 gap-4">
            {blogs.length === 0 && <h1 className="font-bold">No Blog Found</h1>}
            {
                blogs.map((blog, i) => {
                    return  <BlogCard blog={blog} key={blog.id} index={i} />
            })}
        </div>
    )
};