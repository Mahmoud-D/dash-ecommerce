import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '@layouts/MainLayout/MainLayout'

import Home from '@pages/Home'
import AboutUs from '@pages/AboutUs'
import Login from '@pages/Login'
import Categories from '@pages/Categories'
import Register from '@pages/Register'
import Products from '@pages/Products'
import Error from '@pages/Error'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/login',
          element: <Login />
        },

        {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/products/:prefix',
          element: <Products />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default AppRouter
