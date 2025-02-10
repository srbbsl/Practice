import { createBrowserRouter, RouterProvider } from "react-router"
import { Rootlayout } from "./ui/RootLayout";
import { Login } from "./features/auth/Login";



export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Rootlayout />,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            
            ]
        }
    ]);

    return <RouterProvider router={router} />
}