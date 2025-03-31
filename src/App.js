import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import { RootLayout } from "./ui/RootLayout"


export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: < RootLayout />,
      children: [
        
      ]
    }
  ])
  return <RouterProvider router={router} />
}