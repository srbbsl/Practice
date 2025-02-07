import { createBrowserRouter, RouterProvider } from "react-router"
import { Rootlayout } from "./ui/RootLayout";



export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Rootlayout />,
            children: [
                
            
            ]
        }
    ]);

    return <RouterProvider router={router} />
}