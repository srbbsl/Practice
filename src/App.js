import { createBrowserRouter, RouterProvider } from "react-router"
import { RootLayout } from "./component/RootLayout"
import { Home } from "./pages/Home"





export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true, //index route parent component render huda sangai auxa
                    element: <Home />
                },
                
            

                
                
                
            ]
        }
    ]);

    return <RouterProvider router={router} />
}