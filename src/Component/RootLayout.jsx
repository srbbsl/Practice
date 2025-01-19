import { Outlet } from "react-router";
import { Home } from "../pages/Home";
import { Header } from "./Header";


export const RootLayout = () => {
    return(
        <div>
            <Header />
            <Home />
            <Outlet />
        </div>
    )
};