import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import { RootLayout } from "./Component/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CategoryItems } from "./pages/CategoryItems";
import { ItemDetail } from "./pages/ItemDetail";
import { FormHandle } from "./pages/FormHandle";
// import { ListWithAvatar } from "./Component/ListWithAvatar";






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