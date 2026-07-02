import React from 'react'
import { RouterProvider } from 'react-router';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <RouterProvider router={AppRoutes} ></RouterProvider>
      <ToastContainer />
    </div>
  )
}

export default App
