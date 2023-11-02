import { useState } from 'react';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import { Main } from './layouts';
import { Dashboard, HomePage, Login, Signup } from './pages';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const {user} = useAuthContext()

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main/>,
      children: [
        {
          index: true,
          element: user ? <Dashboard/> : <Navigate to={`/login`}/>
        },
        {
          path: `/home`,
          element: !user ? <HomePage/> : <Navigate to={`/`}/>
        },

        {
          path: `/signup`,
          element: !user ? <Signup/> : <Navigate to={`/`}/>
        },

        {
          path: `/login`,
          element: !user ? <Login/> : <Navigate to={`/`}/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
