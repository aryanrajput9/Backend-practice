import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import { useHandleCurrentUserData } from '../features/auth/hook/auth.hook';


function Main() {

  const { userData } = useHandleCurrentUserData()

  useEffect(() => {
    userData()
  })

  return <RouterProvider router={AppRoutes} ></RouterProvider>
}

function App() {
  return (
    <div>
      <Main />
      <ToastContainer />
    </div>
  )
}

export default App
