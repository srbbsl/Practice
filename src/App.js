import { createBrowserRouter, RouterProvider } from "react-router"
import { Rootlayout } from "./ui/RootLayout";
import { Login } from "./features/auth/Login";
import { ProductList } from "./features/product/ProductList";
import { AllProduct } from "./features/admin/AllProduct";



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
                    path: 'admin-products',
                    element: <AllProduct />
                },
                {
                    path: 'login',
                    element: <Login />
                },
            
            ]
        }
    ]);

    return <RouterProvider router={router} />
}