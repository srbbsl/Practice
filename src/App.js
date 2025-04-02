import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import { RootLayout } from "./features/ui/RootLayout"
import { Login } from "./features/auth/Login"


export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: < RootLayout />,
      children: [
        {
          index: true,
          element: <Login />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}