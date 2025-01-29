


import { createBrowserRouter, RouterProvider } from "react-router"
import { RootLayout } from "./component/RootLayout"
import { Home } from "./pages/Home"
import { AddForm } from "./pages/AddForm";
import { EditForm } from "./pages/EditForm";






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
                    element: <AddForm />
                },
            
                {
                    path: 'edit-form/:id',
                    element: <EditForm />
                },

                
                
                
            ]
        }
    ]);

    return <RouterProvider router={router} />
}