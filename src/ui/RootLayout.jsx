import { Outlet } from "react-router";
import { Header } from "./Header";



export const Rootlayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
};