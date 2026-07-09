import React from 'react'
import { RouterProvider } from 'react-router';
import AppRoute from './AppRoute';
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <div>

      <RouterProvider router={AppRoute}></RouterProvider>
      <ToastContainer />
    </div>
  )
}

export default App
