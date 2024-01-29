import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../../pages'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

export default function Router (): JSX.Element {
  return <RouterProvider router={routers}/>
}
