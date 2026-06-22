import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './features/routes/Approutes';
import { MainContextProvider } from './features/context/MainContext';


createRoot(document.getElementById('root')).render(

  <MainContextProvider>
    <Approutes />
  </MainContextProvider>

)
