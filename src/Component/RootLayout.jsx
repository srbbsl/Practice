import { Outlet } from "react-router";
import { Header } from "./Header";


export const RootLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
};