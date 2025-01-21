import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./component/RootLayout";
import { AddForm } from "./pages/AddForm";
import { Home } from "./pages/Home";






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

                {
                    path: 'add-form',
                    element: <AddForm/>
                },

                
                
                
            ]
        }
    ]);

    return <RouterProvider router={router} />
}