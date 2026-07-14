
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/AppStore';
import UseProductsContextProvider from './context/productContext';

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <UseProductsContextProvider>
      <App />
    </UseProductsContextProvider>
  </Provider>
)
