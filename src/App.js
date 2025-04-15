import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import { RootLayout } from "./Components/RootLayout"
import { Practice } from "./Components/Header"



export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: < RootLayout />,
      children: [
        {
          
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}