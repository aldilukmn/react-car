import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Public } from '../Provider'
import { Home, Search } from '../../pages'

const routers = createBrowserRouter([
  {
    element: <Public/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/search',
        element: <Search/>
      }
    ]
  }
])

export default function Router (): JSX.Element {
  return <RouterProvider router={routers}/>
}
