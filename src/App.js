import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import { RootLayout } from "./Components/RootLayout"
import { AddForm } from "./pages/AddForm"
import { Home } from "./pages/Home"



export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: < RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'add-form',
          element: <AddForm />
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}