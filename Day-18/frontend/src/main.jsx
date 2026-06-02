import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes/Approutes.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Approutes />
  </Provider>
)
