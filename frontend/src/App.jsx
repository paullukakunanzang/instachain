import { useState } from 'react';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import { Main } from './layouts';
import { Dashboard, HomePage, Login, Signup, Verification } from './pages';
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
          element: !user ? <HomePage/>: <Navigate to={`/dashboard`}/>
        },
        {
          path: `/signup`,
          element: !user ? <Signup/> : <Navigate to={`/dashboard`}/>
        },

        {
          path: `/login`,
          element: !user ? <Login/> : <Navigate to={`/dashboard`}/>
        },

        {
          path: `/verification`,
          element: !user ? <Verification/> : <Navigate to={`/dashboard`}/>
        },
        {
          path: `/dashboard`,
          element: user ? <Dashboard/> : <Navigate to={`/login`}/>
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
