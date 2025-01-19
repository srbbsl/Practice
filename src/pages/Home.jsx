import { useSelector } from "react-redux";



export const Home = () => {

    const { blogs } = useSelector((state) => state.blogSlice); //((state) => state) return ko shortcut
    console.log(blogs);

    return(
        <div>
            
        </div>
    )
};