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
          index: true,  //index route vaneko parent component render huda sangsangai aune kura
          element: (
            <>
              <Home />
              {/* <ListWithAvatar /> */}
            </>
          ), 
        },
    
        {
          path: 'Category-items/:label',
          element: <CategoryItems />,
        },

        {
          path: 'item-detail/:id',
          element: <ItemDetail />,
        },

        {
          path: 'form',
          element: <FormHandle />,
        },

        {
          path: 'about',
          element: <About />,
        },
      ]
    },

  ]);
 
  return <RouterProvider router={router} />
}

