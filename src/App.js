import { createBrowserRouter, RouterProvider } from "react-router"
import { Rootlayout } from "./ui/RootLayout";
import { Login } from "./features/auth/Login";
import { ProductList } from "./features/product/ProductList";



export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Rootlayout />,
            children: [
                {
                    index: true,
                    element: <ProductList />
                },
                {
                    path: 'login',
                    element: <Login />
                }
            
            ]
        }
    ]);

    return <RouterProvider router={router} />
}