import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import { RootLayout } from "./RootLayout"
import { Practice } from "./Practice"



export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: < RootLayout />,
      children: [
        {
          index: true,
          element: <Practice />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}